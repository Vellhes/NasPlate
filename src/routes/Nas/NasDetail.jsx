import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Modal from 'react-modal';

// import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function NasDetail(props) {
    // const [ idNas, setIdNas ] = useSearchParams();

    const [start, setStart] = useState(false);
    const [count, setCount] = useState(0);
    const [time, setTime] = useState("00:00:00");
    const [timeSetting, setTimeSetting] = useState({ m: 0, s: 0 });

    var initTime = new Date();

    const showTimer = (ms) => {
        const milliseconds = Math.floor((ms % 1000) / 10)
          .toString()
          .padStart(2, "0");
        const second = Math.floor((ms / 1000) % 60)
          .toString()
          .padStart(2, "0");
        const minute = Math.floor((ms / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0");
        // const hour = Math.floor(ms / 1000 / 60 / 60).toString();
        setTime(
          // hour.padStart(2, "0") +
          // ":" +
          minute + ":" + second 
        );
    };

    useEffect(() => {
        if (!start) {
            
            var left = count + (new Date() - initTime);
            console.log(left);
            if(left > 1000){
                openModal();
            }
            return;
        }
        var id = setInterval(() => {
            var left = count + (new Date() - initTime);
            setCount(left);
            showTimer(left);
            if (left <= 0) {
            setTime("00:00:00:00");
            clearInterval(id);
            }
        }, 1);
        return () => clearInterval(id);
    }, 
    [start]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Navbar></Navbar>
                <div className="timer">
                    {time}
                </div>
                {start ? (
          <button
            className="button"
            style={{ backgroundColor: "#820000", color: "red" }}
            onClick={() => setStart(false)}
          >
            Stop
          </button>
        ) : (
          <button className="button" onClick={() => setStart(true)}>
            Start
          </button>
        )}
        
            <Footer></Footer>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="body-backOffice">
                    <div className="cellDefault">
                        <p>Fin de l'intervention mon coco, temps : {time}</p>
                        <input></input>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}