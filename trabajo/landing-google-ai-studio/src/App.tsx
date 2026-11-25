import React, { useEffect, useRef, useState } from 'react';
import { MAX_ITEM_QUANTITY, type CartItem, type ProductItem, type ScreenType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { privacyPreview } from './components/PrivacyAuthorization';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { CreditModal } from './components/CreditModal';
import { HomeScreen } from './components/screens/HomeScreen';
import { ProductsScreen } from './components/screens/ProductsScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { ContactScreen } from './components/screens/ContactScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('inicio');
  const [catalogCategory, setCatalogCategory] = useState<ProductItem['category'] | 'all'>('all');
  const [catalogSearch, setCatalogSearch] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);
  const focusCatalogHeading = useRef(false);

  useEffect(() => {
    if (currentScreen === 'productos' && focusCatalogHeading.current) {
      focusCatalogHeading.current = false;
      document.getElementById('catalog-title')?.focus({ preventScroll: true });
    }
  }, [currentScreen]);

  const handleAddItemsToCart = (items: CartItem[]) => {
    setCart((prev) => {
      const updated = new Map(prev.map((item) => [item.product.id, item]));
      for (const item of items) {
        const existing = updated.get(item.product.id);
        const total = (existing?.quantity ?? 0) + item.quantity;
        if (Number.isSafeInteger(item.quantity) && item.quantity > 0 && total <= MAX_ITEM_QUANTITY) {
          updated.set(item.product.id, { ...(existing ?? item), quantity: total });
        }
      }
      return [...updated.values()];
    });
  };

  const handleAddToCart = (product: ProductItem, quantity: number) => {
    handleAddItemsToCart([{ product, quantity }]);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleNavigate = (screen: ScreenType, category: ProductItem['category'] | 'all' = 'all') => {
    if (screen === 'productos') {
      setCatalogCategory(category);
      setCatalogSearch('');
    }
    setCurrentScreen(screen);
    window.scrollTo({ top: 0 });
  };

  const handleSearchCatalog = (search: string) => {
    focusCatalogHeading.current = true;
    setCatalogCategory('all');
    setCatalogSearch(search);
    setCurrentScreen('productos');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#131c28]">
      {/* Top Bar Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenCreditModal={() => setIsCreditModalOpen(true)}
      />

      {/* Main Screen Content */}
      <main className="flex-1 pt-20">
        {privacyPreview && (
          <p className="bg-[#ffdcc6] px-4 py-2.5 text-center text-sm font-semibold text-[#001b4b]">
            Vista local de la política y los formularios. Los botones de los formularios simulan el envío.
          </p>
        )}
        {currentScreen === 'inicio' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSearchCatalog={handleSearchCatalog}
            onAddToCart={handleAddToCart}
            cart={cart}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenCreditModal={() => setIsCreditModalOpen(true)}
          />
        )}

        {currentScreen === 'productos' && (
          <ProductsScreen
            key={`${catalogCategory}:${catalogSearch}`}
            initialCategory={catalogCategory}
            initialSearch={catalogSearch}
            cart={cart}
            onAddToCart={handleAddToCart}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {currentScreen === 'nosotros' && (
          <AboutScreen
            onOpenCreditModal={() => setIsCreditModalOpen(true)}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {currentScreen === 'contacto' && (
          <ContactScreen onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCreditModal={() => setIsCreditModalOpen(true)}
      />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Cotizador WhatsApp Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onBrowseProducts={() => {
          if (currentScreen === 'productos') return;
          focusCatalogHeading.current = true;
          handleNavigate('productos');
        }}
        cart={cart}
        onAddItems={handleAddItemsToCart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Simulador y Solicitud de Crédito Modal */}
      <CreditModal
        isOpen={isCreditModalOpen}
        onClose={() => setIsCreditModalOpen(false)}
      />
    </div>
  );
}
