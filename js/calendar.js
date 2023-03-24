document.addEventListener('DOMContentLoaded', () => {
    let login = document.querySelector(".login");
    let signOu = document.querySelector(".signOut");
    
    const Client_Id = "67432885076-8teua21398sq7elvdn0cmkgr4a6e018l.apps.googleusercontent.com";
    const Client_Secret = "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";
    
    
    
    function gisLoaded() {
        //   client = google.accounts.oauth2.initCodeClient({
        //   client_id: '400815097743-tipf59porq18b6d9ebe63jhvje60o3gl.apps.googleusercontent.com',
        //   scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events',
        //   ux_mode: 'redirect',
        //   redirect_uri: 'http://localhost/frequentun-theme/login.html',
        //   callback: (response) => {
        //     console.log(response);
        //   }
        // });
    
        tokenClient = google.accounts.oauth2.initCodeClient({
          client_id: Client_Id,
          scope:
            "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
          ux_mode: "popup",
          callback: "",
        });
      }
    
      function getAuthCode() {
        tokenClient.requestCode();
      }
    
      let resultado_Token = "";
      function ResponseCallback() {
        tokenClient.callback = (res) => {
          let code = res.code;
          fetch(`https://oauth2.googleapis.com/token?code=${code}&client_id=${Client_Id}&client_secret=${Client_Secret}&redirect_uri=http://localhost&grant_type=authorization_code`,{
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })
            .then((response) => response.json())
            .then((response) => {
              resultado_Token = response;
              localStorage.setItem("tokenInicio",resultado_Token.access_token);
              localStorage.setItem("refreshToken",resultado_Token.refresh_token);  
              new_refres_token_access();
            })
            .catch((err) => console.error(err));
        };
      }
    
    
       // variable para el setInterval
       let siclo;
    
       function new_refres_token_access(){
         siclo = setInterval(function(){
         refresh_token = localStorage.getItem("refreshToken");
         fetch(`https://oauth2.googleapis.com/token?client_secret=${Client_Secret}&grant_type=refresh_token&refresh_token=${refresh_token}&client_id=${Client_Id}`,{
               method: "POST",
               headers: {"Content-Type": "application/x-www-form-urlencoded" },
               })
             .then((respuesta) => respuesta.json())
             .then((data) => {
               console.log(data);
               localStorage.setItem("newTokenAccess",data.access_token);
            //    nuevo_Token = data;
             })
             .catch((error) => console.log(error));
         },3480000);
       }
    
       function signOut() {
        let token1 = localStorage.getItem("tokenInicio");
        let token2 = localStorage.getItem("newTokenAccess");
        console.log(token2);
        if (token2 === null || token2 === "undefined") {
            fetch(`https://oauth2.googleapis.com/revoke?token=${token1}`,{
              method: "POST"
            })
            .then((respuesta) => respuesta.json())
            .then((data) => {
              localStorage.clear();
              clearInterval(siclo);
            })
            .catch((error) => console.log(error));
        }else{
          fetch(`https://oauth2.googleapis.com/revoke?token=${token2}`,{
            method: "POST"
          })
            .then((respuesta) => respuesta.json())
            .then((data) => {
              localStorage.clear();
              clearInterval(siclo);
            })
            .catch((error) => console.log(error));
        }
      }
    
    
        signOu.addEventListener("click",()=>{
            signOut();
        })
      
    
        login.addEventListener("click",()=>{
            gisLoaded();
            getAuthCode();
            ResponseCallback();
            // enviar();
        })
        // function enviar(){
        //     gisLoaded()
        //     getAuthCode();
        //     ResponseCallback();
        // }
    
    
        
    })
    
     
    
    
    