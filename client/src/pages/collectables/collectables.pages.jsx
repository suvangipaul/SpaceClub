import React from "react";
import "./collectables.styles.css";

const Collectables = () => {
  return (
    <div className="c-main">
      <div className="collectables-image-bg"></div>
      <div className="collect-overlay"></div>

      <div className="c-content">
        <h1 className="c-heading">Meet the Space Club Collectibles</h1>
        <p className="c-para">
          A collections of over thousands unique Space themed NFTs — unique
          digital collectibles living on the Ethereum blockchain. Your Space
          theme doubles as your Space Club membership card, and grants access to
          members-only benefits, a collaborative graffiti board. Future areas
          and perks can be unlocked by the community through roadmap activation.
        </p>
      </div>
    </div>
  );
};

export default Collectables;
