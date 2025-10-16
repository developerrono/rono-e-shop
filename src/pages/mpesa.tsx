import { useState } from 'react';
import { Button } from '@/components/UI/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/UI/card';
import { Input } from '@/components/UI/input';
import { Label } from '@/components/UI/label';
import { Phone, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface MpesaProps {
  totalAmount: number; // Prop to pass the total amount from the Cart/Checkout page
  onPaymentSuccess: () => void; // Callback function on successful payment
}

const Mpesa: React.FC<MpesaProps> = ({ totalAmount, onPaymentSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  // M-Pesa business details (Replace with your actual details)
  const businessDetails = {
    paybillNumber: '123456', // e.g., Your Paybill or Till Number
    accountNumber: 'ORDER-XYZ789', // Use a unique order ID
  };

  const handleStkPush = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 9) {
      toast.error('Please enter a valid M-Pesa phone number.');
      return;
    }

    // 1. Initiate STK Push
    setIsLoading(true);
    toast.info('Sending STK Push to your phone...');
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you'd listen for a confirmation webhook here.
      // For the UI, we just simulate the success flow after a delay.

      // 2. Instruct user to complete payment
      toast.info('Please enter your M-Pesa PIN on your phone to complete the transaction.', {
        duration: 10000, // Show for 10 seconds
      });

      // Simulate successful payment after a short period
      setTimeout(() => {
        setIsPaid(true);
        onPaymentSuccess();
        toast.success('Payment confirmed! Thank you.', {
            description: `Ksh${totalAmount.toFixed(2)} received.`,
        });
      }, 7000); 

    }, 3000); // 3-second simulation delay for STK push
  };

  if (isPaid) {
    return (
      <Card className="max-w-md mx-auto my-8 border-green-500 shadow-lg shadow-green-200">
        <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold text-green-700">Payment Successful!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">Your order has been placed and payment confirmed.</p>
            <p className="text-3xl font-extrabold text-primary">Ksh{totalAmount.toFixed(2)}</p>
            <p className="text-sm mt-2">Confirmation will be sent via SMS shortly.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
            {/* You would link to the Order Confirmation page here */}
            <Button>View Order Details</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="max-w-xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">Lipa na M-Pesa</CardTitle>
      </CardHeader>
      
      <form onSubmit={handleStkPush}>
        <CardContent className="space-y-6">
          
          {/* Stepper/Instruction Guide */}
          <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="font-semibold mb-2">Payment Steps:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Enter your M-Pesa number and click **"Pay Now"**.</li>
              <li>You will receive a **STK Push** prompt on your phone.</li>
              <li>Enter your **M-Pesa PIN** to authorize the payment.</li>
              <li>Wait for our confirmation message.</li>
            </ol>
          </div>

          {/* Amount and Business Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-muted-foreground">Amount Due</Label>
              <p className="text-3xl font-bold text-primary">Ksh{totalAmount.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <Label className="text-muted-foreground">Paybill / Till Number</Label>
              <p className="text-xl font-semibold">{businessDetails.paybillNumber}</p>
              <Label className="text-muted-foreground block mt-1">Account Number</Label>
              <p className="font-semibold">{businessDetails.accountNumber}</p>
            </div>
          </div>
          
          {/* Phone Number Input */}
          <div className="space-y-2">
            <Label htmlFor="phone">M-Pesa Phone Number (for STK Push)</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                placeholder="e.g., 07XXXXXXXX"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="pl-10 text-lg"
                required
                disabled={isLoading}
              />
            </div>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full h-12 text-lg bg-green-600 hover:bg-green-700 transition-colors"
            disabled={isLoading || isPaid || totalAmount <= 0}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Awaiting PIN Entry...
              </>
            ) : (
              `Pay Ksh${totalAmount.toFixed(2)} Now`
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Mpesa;