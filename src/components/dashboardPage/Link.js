import { useState } from "react";
import Show from "./Show";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { setLoading,setData} from '../../redux/actions/dashboardActions'; 
import { useDispatch, useSelector } from 'react-redux';  

const Link = () => {
  
  const [open, setOpen] = useState(0);
  const [link, setLink] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const sendLink = (e) => {
    setLoading(true);
    axios
      .post(
        "/api1/api/transcribe_files/",
        {
          media_urls: [link],
        },
        {
          headers: {
            Authorization: `Token a85d08400c622b50b18b61e239b9903645297196`,
          },
        }
      )
      .then(function (response) {
        setData(response.data);
        setOpen(1);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: error.message,
        });
        setLoading(false);
      });
  };
  return (
    <>
      {open === 0 && !loading && (
        <div className="content">
          <div className="link" style={{ marginRight: "2rem" }} dir="ltr">
            <button
              style={{
                width: "30px",
                height: "30px",
                border: "none",
                background: "#FF1654",
                borderRadius: "50%",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
              }}
              onClick={(e) => sendLink(e)}
            >
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginBottom: "0.3rem" }}
              >
                <path
                  d="M6.91027 3.40673L8.63166 1.68534C9.72018 0.723395 11.3403 0.824653 12.3023 1.88786C13.1883 2.84981 13.1883 4.34336 12.3023 5.33063L10.5556 7.05201L11.0872 7.58361L12.8339 5.83691C14.1249 4.54588 14.0743 2.41946 12.7579 1.12843C11.4669 -0.111982 9.4164 -0.111982 8.12537 1.12843L6.37867 2.84981C5.08763 4.16616 5.08763 6.26726 6.37867 7.58361L6.91027 7.05201C5.92301 6.03943 5.92301 4.41931 6.91027 3.40673Z"
                  fill="white"
                />
                <path
                  d="M6.6065 14.95L8.35319 13.2286C9.64423 11.9123 9.64423 9.81118 8.35319 8.52014L7.82159 9.05174C8.83417 10.0643 8.83417 11.6844 7.82159 12.697L6.07489 14.4184C5.06231 15.431 3.44219 15.431 2.42961 14.4184C1.41703 13.4058 1.41703 11.7857 2.42961 10.7731L4.17631 9.05174L3.6447 8.52014L1.92332 10.2415C0.581654 11.5072 0.505712 13.6083 1.77143 14.95C3.03716 16.2917 5.13826 16.3676 6.47992 15.1019C6.53055 15.026 6.58118 15.0006 6.6065 14.95Z"
                  fill="white"
                />
                <path
                  d="M9.75684 6.23243L9.21985 5.69543L5.03128 9.884L5.56828 10.421L9.75684 6.23243Z"
                  fill="white"
                />
              </svg>
            </button>
            <input
              className="input"
              placeholder="example.com/sample.mp3"
              onChange={(e) => setLink(e.target.value)}
            ></input>
          </div>
          <p
            style={{
              color: "#626262",
              fontWeight: "300",
              marginTop: "1rem",
              width: "415px",
              height: "56px",
              textAlign: "center",
              marginRight: "-1rem",
            }}
          >
            نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد و دکمه را فشار
            دهید
          </p>
        </div>
      )}
      {open === 1 && <Show data={data} setOpen={setOpen} />}
      {loading && (
        <Spinner style={{color:'#FF1654',marginTop:'5rem',marginRight:'45%'}} animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default Link;
