import { loadStripe } from "@stripe/stripe-js";
import HelmetTitle from "../../../components/Helmet/HelmetTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = () => {
  return (
    <div>
      <HelmetTitle title="Payment"></HelmetTitle>
      <SectionTitle heading="Please Pay" subHeading=""></SectionTitle>
      <div className="w-[60%] bg-blue-200 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
