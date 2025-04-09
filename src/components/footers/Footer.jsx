import React from "react";

const copyrightTime = new Date();

export default function Footer() {
    return (
      <footer>
          <p>Copyright JetSoft {copyrightTime.getFullYear()}</p>
      </footer>
    );
}