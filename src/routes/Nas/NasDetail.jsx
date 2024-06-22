import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Modal from 'react-modal';
import { ReactTerminal } from "react-terminal";


// import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function NasDetail(props) {
    // const [ idNas, setIdNas ] = useSearchParams();

    const [start, setStart] = useState(false);
    const [count, setCount] = useState(0);
    const [time, setTime] = useState("00:00:00");

    var initTime = new Date();

    const showTimer = (ms) => {
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

    const commands = {
      ip_a: (
        <span>
          1: lo: &ltLOOPBACK,UP,LOWER_UP&gt mtu 65536 qdisc noqueue state UNKNOWN<br/>
            link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00<br/>
            inet 127.0.0.1/8 scope host lo<br/>
              valid_lft forever preferred_lft forever<br/>
            inet6 ::1/128 scope host<br/>
              valid_lft forever preferred_lft forever<br/>
            2: eth0: &ltBROADCAST,MULTICAST,UP,LOWER_UP&gt mtu 1500 qdisc mq state UP qlen 1024<br/>
            link/ether 00:11:32:70:96:7c brd ff:ff:ff:ff:ff:ff<br/>
            inet 10.10.250.52/16 brd 10.10.255.255 scope global eth0<br/>
              valid_lft forever preferred_lft forever<br/>
            3: sit0: &ltNOARP&gt mtu 1480 qdisc noop state DOWN<br/>
            link/sit 0.0.0.0 brd 0.0.0.0<br/>
        </span>
      ),

      df:(
        <span>
        Filesystem         1K-blocks    Used  Available Use% Mounted on<br/>
        /dev/md0             2385528 1111488    1155256  50% /<br/>
        devtmpfs              254548       0     254548   0% /dev<br/>
        tmpfs                 256284      16     256268   1% /dev/shm<br/>
        tmpfs                 256284   12460     243824   5% /run<br/>
        tmpfs                 256284       0     256284   0% /sys/fs/cgroup<br/>
        tmpfs                 256284    1192     255092   1% /tmp<br/>
        /dev/vg1/volume_1 1910443588  671748 1909653056   1% /volume1<br/>
        </span>
      ),

      ifconfig :(
        <span>
          eth0      Link encap:Ethernet  HWaddr 00:11:32:70:96:7C<br/>
          inet addr:10.10.250.52  Bcast:10.10.255.255  Mask:255.255.0.0<br/>
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1<br/>
          RX packets:7322795 errors:0 dropped:0 overruns:0 frame:0<br/>
          TX packets:800979 errors:0 dropped:0 overruns:0 carrier:0<br/>
          collisions:0 txqueuelen:1024<br/>
          RX bytes:1041777824 (993.5 MiB)  TX bytes:223253568 (212.9 MiB)<br/>
          Interrupt:193<br/>
          <br/>
lo        Link encap:Local Loopback<br/>
          inet addr:127.0.0.1  Mask:255.0.0.0<br/>
          inet6 addr: ::1/128 Scope:Host<br/>
          UP LOOPBACK RUNNING  MTU:65536  Metric:1<br/>
          RX packets:12545 errors:0 dropped:0 overruns:0 frame:0<br/>
          TX packets:12545 errors:0 dropped:0 overruns:0 carrier:0<br/>
          collisions:0 txqueuelen:0<br/>
          RX bytes:1672038 (1.5 MiB)  TX bytes:1672038 (1.5 MiB)<br/>
        </span>
      )
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
                    Fin de l'intervention
                  </button>
                ) : (
                  <button className="button" onClick={() => setStart(true)}>
                    Début de l'intervention
                  </button>
                )}
                <div className="height-800">
                  <ReactTerminal
                    commands={commands}
                    themes={{
                      "my-custom-theme": {
                        themeBGColor: "#272B36",
                        themeToolbarColor: "#DBDBDB",
                        themeColor: "#FFFEFC",
                        themePromptColor: "#a917a8"
                      }
                    }}
                    theme="my-custom-theme"
                  />
                </div>
        
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
                        <p>Intervention terminée, temps : {time}</p><br/><br/>
                        <label for="tarif">Votre tarif à la minute</label><br/><br/>
                        <input name="tarif"></input>
                        <button>Valider</button>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}