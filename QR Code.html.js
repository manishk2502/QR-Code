<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR code</title>
    <link rel="stylesheet" href="qrcode.css">
</head>
<body>
  
      <div class="container">
        <div class="box">
            <input type="text" placeholder="Enter URL or Text" id="qrText">

            <div id="imgbox" class="manish">
                <img src="" id="qrImage">
            </div>
            <button onclick="generateQR()"> Generate QR Code</button>

        </div>
      </div>


        <script>
            let imgbox=document.getElementById("imgbox");
            let qrImage=document.getElementById("qrImage");
            let qrText=document.getElementById("qrText")
            function generateQR()
            {
              if(qrText.value.length>0)
              {
                qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;

imgbox.classList.add("show-img");
              }
             
            }
        </script>
    
</body>
</html>
