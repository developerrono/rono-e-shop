import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { History, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Transaction {
    id: string;
    date: string;
    status: 'Completed' | 'Processing' | 'Cancelled';
    total: number;
    itemsCount: number;
}

const DUMMY_TRANSACTIONS: Transaction[] = [
    { id: "ORD-G08H3", date: "2025-09-20", status: "Completed", total: 450.00, itemsCount: 3 },
    { id: "ORD-P7F9K", date: "2025-09-01", status: "Completed", total: 129.99, itemsCount: 1 },
    { id: "ORD-X2Z4L", date: "2025-08-15", status: "Processing", total: 78.50, itemsCount: 2 },
    { id: "ORD-M3A6B", date: "2025-07-28", status: "Cancelled", total: 999.00, itemsCount: 1 },
];

const getStatusVariant = (status: Transaction['status']) => {
    switch (status) {
        case 'Completed':
            return 'default'; // Uses primary color
        case 'Processing':
            return 'secondary';
        case 'Cancelled':
            return 'destructive';
        default:
            return 'secondary';
    }
};

const Transactions = () => {
    // In a real application, you would fetch this data from Firestore
    const transactions = DUMMY_TRANSACTIONS;

    return (
        <div className="min-h-screen bg-background">
            <Navbar cartItemsCount={0} /> 
            
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-extrabold mb-8 text-foreground flex items-center">
                    <History className="w-8 h-8 mr-3 text-primary" /> Order History
                </h1>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            Recent Orders
                            <Link to="/" className="text-sm font-semibold text-primary hover:text-primary-glow flex items-center">
                                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Shop
                            </Link>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {transactions.length === 0 ? (
                            <div className="text-center py-10 text-muted-foreground">
                                <ShoppingBag className="w-12 h-12 mx-auto mb-4" />
                                <p>You have no past transactions yet.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Order ID</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="text-right">Items</TableHead>
                                            <TableHead className="text-right">Total</TableHead>
                                            <TableHead className="text-right">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {transactions.map((tx) => (
                                            <TableRow key={tx.id} className="hover:bg-muted/50">
                                                <TableCell className="font-medium text-primary">{tx.id}</TableCell>
                                                <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                                                <TableCell>
                                                    <Badge variant={getStatusVariant(tx.status)}>
                                                        {tx.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right">{tx.itemsCount}</TableCell>
                                                <TableCell className="text-right font-bold">Ksh{tx.total.toFixed(2)}</TableCell>
                                                <TableCell className="text-right">
                                                    <Link to={`/order/${tx.id}`} className="text-sm text-primary hover:underline">
                                                        View Details
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Transactions;