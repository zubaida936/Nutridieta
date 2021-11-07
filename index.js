fetch('https://blooming-meadow-69578.herokuapp.com/')
  .then(response => response.json())
  .then(json => {

      var OriginalContent = `<div>
            <div class="member">
              <div class="member-img">
                <img src="Z" class="img-fluid  NourImg" alt="" >
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>X</h4>
                <span>Y</span>
              </div>
            </div>
          </div>`;

      var MyRow = document.getElementById('MyRow');      
      for (let i = 0; i < json.length; i++) {         
         var mydiv = document.createElement('div'); 
         mydiv.className = "col-lg-3 col-md-6 d-flex align-items-stretch"; 
         currentContent =  OriginalContent;             
         currentContent = currentContent.replace('X',json[i].name);
         currentContent = currentContent.replace('Y',json[i].position);
         currentContent = currentContent.replace('Z',json[i].url);
         mydiv.innerHTML = currentContent;
         MyRow.appendChild(mydiv);
      }

  })




