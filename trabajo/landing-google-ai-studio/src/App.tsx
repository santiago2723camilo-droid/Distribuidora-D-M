import React, { useState } from 'react';
import { CartItem, ProductItem, ScreenType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { CreditModal } from './components/CreditModal';
import { HomeScreen } from './components/screens/HomeScreen';
import { ProductsScreen } from './components/screens/ProductsScreen';
import { PartnersScreen } from './components/screens/PartnersScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { PRODUCTS_CATALOG } from './data/mockData';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('inicio');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);

  const handleAddToCart = (product: ProductItem, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, unit: product.unit }];
    });
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

  const handleOpenQuoteModal = (categoryFilter?: string) => {
    if (categoryFilter && cart.length === 0) {
      // If opened from a specific category on home, pre-add a featured item from that category
      const featured = PRODUCTS_CATALOG.find(
        (p) => p.category === categoryFilter && p.featured
      );
      if (featured) {
        handleAddToCart(featured, 1);
      }
    }
    setIsQuoteModalOpen(true);
  };

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        {currentScreen === 'inicio' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenCreditModal={() => setIsCreditModalOpen(true)}
          />
        )}

        {currentScreen === 'productos' && (
          <ProductsScreen
            cart={cart}
            onAddToCart={handleAddToCart}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {currentScreen === 'aliados' && (
          <PartnersScreen onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
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
      <FloatingWhatsApp
        onQuickQuoteClick={() => setIsQuoteModalOpen(true)}
      />

      {/* Cotizador WhatsApp Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddToCart={handleAddToCart}
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
