import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, DollarSign, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface PaypalProps {
  totalAmount: number; // The total amount due
  orderId: string;     // Unique identifier for the order
  onPaymentSuccess: () => void; // Callback function on successful payment
}

const Paypal: React.FC<PaypalProps> = ({ totalAmount, orderId, onPaymentSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  // This is the function called when the user clicks the PayPal button
  const handlePaypalRedirect = () => {
    setIsLoading(true);
    
    // 1. Simulate API call to create a PayPal order/payment intent
    toast.info('Creating PayPal transaction...', { duration: 1500 });

    setTimeout(() => {
        // 2. In a real application, you would receive a redirect URL from your backend 
        //    and redirect the user to it: window.location.href = redirectUrl;

        // Simulate the redirection and successful return to your site
        toast('Redirecting to PayPal...', {
            description: 'Please approve the payment in the new window.',
            duration: 3000
        });

        // Simulate the user successfully completing payment on PayPal
        setTimeout(() => {
            setIsLoading(false);
            onPaymentSuccess();
            toast.success('Payment successfully authorized via PayPal!', {
                description: `Order ${orderId} confirmed for $${totalAmount.toFixed(2)} USD (assuming currency conversion).`,
            });
        }, 5000); // Simulate the time it takes to complete the PayPal process
        
    }, 2000); // Simulate backend latency
  };

  return (
    <Card className="max-w-xl mx-auto my-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Pay with PayPal</CardTitle>
        <img 
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg" 
            alt="PayPal Logo" 
            className="h-8 w-auto"
        />
      </CardHeader>
      
      <CardContent className="space-y-6 pt-4">
        
        {/* Amount Display */}
        <div className="flex items-center justify-between p-4 border rounded-lg bg-yellow-50/50 dark:bg-yellow-900/10">
            <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-primary mr-3" />
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Order Total</p>
                    {/* Note: Typically PayPal processes in USD/local currency, so displaying both is useful */}
                    <p className="text-3xl font-extrabold text-primary">Ksh{totalAmount.toFixed(2)}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm font-medium text-muted-foreground">Order ID</p>
                <p className="text-lg font-semibold">{orderId}</p>
            </div>
        </div>
        
        {/* Security and Trust Message */}
        <div className="text-sm text-muted-foreground border-l-4 border-primary pl-3 py-1">
            <p>
                You will be securely redirected to the official PayPal website to complete your payment.
                Your financial details remain confidential.
            </p>
        </div>
        
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handlePaypalRedirect} 
          className="w-full h-12 text-lg bg-[#00457C] hover:bg-[#003058] text-white transition-colors flex items-center shadow-lg shadow-blue-200/50"
          disabled={isLoading || totalAmount <= 0}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Redirecting...
            </>
          ) : (
            <>
              <ExternalLink className="mr-2 h-5 w-5" />
              Pay Now with PayPal
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Paypal;