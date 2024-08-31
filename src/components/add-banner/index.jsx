
import './main.scss'
import { Button } from "@/components/ui/button";

const AddBanner = () => {
    return (
        <>
            <div className=" bg-slate-500 bg-opacity-70 mt-[-111px] relative">
                <div className="container py-4 flex items-center justify-between">
                    <div className="text-center">
                        <h3 className="text-white">
                            Call us for a{" "}
                            <span className="text-[#ffba1a]">cost estimate</span> over the
                            phone
                        </h3>
                        <a
                            href="tel:+998971460211"
                            className="text-[50px] leading-[55px] text-white"
                        >
                            +998971460211
                        </a>
                    </div>
                    <Button
                        variant="outline"
                        className="text-[25px] px-10 py-8 uppercase bg-black text-white"
                        size="lg"
                    >
                        Order Service{" "}
                        <span className="inline-block pl-2 text-[#ffba1a]">Now</span>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AddBanner