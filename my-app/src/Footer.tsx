import React from "react";
import Logo from "./assets/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full overflow-hidden bg-gray-800  text-white px-4 mt-auto mb-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 text-center md:text-left py-1">
        {/* First Column: Logo */}
        <div className="flex justify-center md:justify-start">
          <a href="https://thob.studio/">
            <img src={Logo} alt="Logo" className="h-20 w-50 mt-4"/>
          </a>
        </div>

        {/* Second Column: Contact Us */}
        <div className="mr-20 ">
          <h3 className="text-lg font-semibold md:text-center text-slate-400 mb-2 mr-12">Contact Us</h3>
          <p className="text-lg  text-slate-500">Email: support@thob.studio</p>
          <p className="text-lg  text-slate-500">Enquire at: +91-9765513394</p>
        </div>

        {/* Third Column: Address */}
        <div>
          <h3 className="text-lg font-semibold md:text-center text-slate-400 mb-2 justify-center items-center">Address</h3>
          <p className="text-lg text-slate-500 ">
            Office no.701, Olympia Business House, Mohan Nagar Co-op Society,
            Baner, Pune, Maharashtra 411021.
          </p>
        </div>

        {/* Fourth Column: Find us at */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-right md:text-center text-slate-400 ml-40">Find us at</h3>
          <div className="flex justify-center md:justify-end space-x-6 p-4">
            <a href="https://www.facebook.com/thehouseofbespoke/" className="text-blue-600 hover:text-blue-800">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://x.com/thobdotstudio/" className="text-blue-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/thob.studio/" className="text-pink-600 hover:text-pink-800">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/company/thob3dstudio/" className="text-blue-700 hover:text-blue-900">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Line: Centered at the Bottom */}
      <div className="w-full text-center py-2 border-t border-gray-700">
        <p className="text-xs text-gray-400">
          © Thob 3D Studios Private Limited 2024 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;