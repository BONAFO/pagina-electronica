import Footer from "@/src/components/Footer";
import ProductContainer from "@/src/containers/ProductContainer";
import { NavigationProvider } from "@/src/context/NavigationContext";
import { ScreenProvider } from "@/src/context/ScreenContext";

export default async function ProductPage({ searchParams }) {
    return (
        <NavigationProvider>
            <ScreenProvider>
                <ProductContainer searchParams={searchParams} />
                <Footer />
            </ScreenProvider>
        </NavigationProvider>
    );
}
