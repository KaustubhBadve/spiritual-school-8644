import React, { useState } from "react";
import {
  Box,
  Stack,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import HoverVideoPlayer from "react-hover-video-player";
import bespokePausedOverlay from "./BespokePausedOverlay";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const BespokeSampleTemplate = ({ imgp, video }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const HandleLoading = () => {
    navigate("/blogtoVideoConversion");
  };

  function over(e) {
    setIsVisible(true);
  }
  function out(e) {
    setIsVisible(false);
  }
  return (
    <Box
      onMouseOver={over}
      onMouseOut={out}
      width="330px"
      height="230px"
      borderRadius="5px"
      border="1px solid #dddde6"
    >
      <HoverVideoPlayer
        videoSrc={video}
        PausedOverlay={<bespokePausedOverlay imgp={imgp} />}
        LoadingOverlay={<bespokeLoadingOverlay />}
      />
      <Stack
        direction="row"
        display="flex"
        justifyContent="space-between"
        pr="20px"
        alignItems="center"
      ></Stack>

      <Modal
        motionPreset="slideInBottom"
        size="2xl"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Preview template</ModalHeader>
          <hr style={{ backgroundColor: "#dddde6" }} />
          <ModalCloseButton />
          <ModalBody>
            <video
              width="1000px"
              height="100%"
              src={video}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              controls
            ></video>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BespokeSampleTemplate;
