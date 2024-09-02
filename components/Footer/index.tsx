import Link from "next/link";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4">
        <div className="bg-green py-10 px-12 rounded-[22px]">
          <div className="grid grid-cols-4 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:mt-3 [&_h4]:mb-4">
            <div>
              <Logo variant="black" />
            </div>
            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <Link href="#">Need Help? Telegrams Us.</Link>
                </li>
                <li>
                  <Link href="#">support@mortaComply</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms & condition</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
