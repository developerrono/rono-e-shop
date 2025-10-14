import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from 'sonner';

// Type for the deferred install prompt event
type BeforeInstallPromptEvent = Event & {
  prompt: () => void;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

const PwaInstallPrompt: React.FC = () => {
  // State to hold the deferred prompt event
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  // State to hide the button after installation or dismissal
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // 1. Event listener to capture the browser's deferred prompt
    const handler = (e: Event) => {
      e.preventDefault();
      // Store the event so we can call prompt() later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show the install button if the app is not already installed
      if (!window.matchMedia('(display-mode: standalone)').matches) {
        setShowInstallButton(true);
      }
    };

    // Listen for the event that indicates PWA installation is possible
    window.addEventListener('beforeinstallprompt', handler);

    // Cleanup function
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  // 2. Function to trigger the native browser install prompt
  const handleInstallClick = () => {
    if (!deferredPrompt) {
      toast.error("Installation prompt is not ready.");
      return;
    }

    // Show the native prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        toast.success('Installation accepted! The app will open shortly.', {
          duration: 3000,
        });
      } else {
        toast('Installation dismissed.', {
          description: 'You can install it later via your browser menu.',
          duration: 3000,
        });
      }
      // Hide the button after the user has made a choice
      setDeferredPrompt(null);
      setShowInstallButton(false);
    });
  };

  // Only render the button if the prompt is available and we've decided to show it
  if (!deferredPrompt || !showInstallButton) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <Button
        onClick={handleInstallClick}
        className="text-white shadow-lg bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-[1.02] flex items-center gap-2 px-6 py-3 rounded-full"
      >
        <Download className="h-4 w-4" />
        Install App (Add to Home Screen)
      </Button>
    </div>
  );
};

export default PwaInstallPrompt;