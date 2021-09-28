import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Gifs from "./Gifs/Gifs";

export default function SearchGifModal({ modal, toggle, addGifs }) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Modal className="modal-xl" isOpen={modal} toggle={toggle}>
        <ModalHeader>
          <input
            className="gif-search"
            value={search}
            placeholder="Search Gifs here"
            onChange={(e) => setSearch(e.target.value)}
          />
        </ModalHeader>
        <ModalBody>
          <Gifs
            setPostList
            toggle={toggle}
            searchTerm={search}
            addGifs={addGifs}
            isLoading
            setIsLoading
          />
        </ModalBody>
      </Modal>
    </div>
  );
}
