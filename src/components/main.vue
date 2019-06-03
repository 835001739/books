<template >
  <div id="app">
      <!-- ============================================== TOP MENU ============================================== -->
    <!-- Content -->
    <div class="cd-hero">
      <!-- Navigation -->
      <div class="cd-slider-nav">
        <nav class="navbar">
          <div class="tm-navbar-bg">

            <a class="navbar-brand text-uppercase" href="#"><i class="fa fa-picture-o tm-brand-icon"></i>Fluid Gallery</a>

            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
              &#9776;
            </button>
            <div class="collapse navbar-toggleable-md text-xs-center text-uppercase tm-navbar" id="tmNavbar">
              <ul class="nav navbar-nav">
                <li class="nav-item active selected">
                  <a class="nav-link" href="#0" data-no="1" @click="nbar">1st fluid <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0" data-no="2" @click="nbar">2nd fluid</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0" data-no="3" @click="nbar">3rd fluid</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0" data-no="4">Columns</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0" data-no="5">Message</a>
                </li>
              </ul>
            </div>
          </div>

        </nav>
      </div>
  </div>
    <ul class="cd-hero-slider">

      <!-- Page 1 Gallery One -->
      <li class="selected">
        <div class="cd-full-width">
          <div class="container-fluid js-tm-page-content" data-page-no="1" v-bind:data-page-type="gallery">
            <div class="tm-img-gallery-container" ref="gallery1">
              <div class="tm-img-gallery gallery-one">
                <!-- Gallery One pop up connected with JS code below -->
                <div class="grid-item" v-for="imageData in imageDatas">
                  <figure class="effect-sadie">
                    <img src=""class="img-fluid tm-img">
                    <figcaption>
                      <h2 class="tm-figure-title"> <span><strong>One</strong></span></h2>
                      <p class="tm-figure-description"></p>
                      <a href="../assets/img/tm-img-01.jpg">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div class="grid-item">
                  <figure class="effect-sadie">
                    <img src="../assets/img/tm-img-02-tn.jpg"class="img-fluid tm-img">
                    <figcaption>
                      <h2 class="tm-figure-title">Image <span><strong>One</strong></span></h2>
                      <p class="tm-figure-description">Set true or false in HTML script tag for this page black and white.</p>
                      <a href="../assets/img/tm-img-02.jpg">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div class="grid-item">
                  <figure class="effect-sadie">
                    <img src="../assets/img/tm-img-02-tn.jpg"class="img-fluid tm-img">
                    <figcaption>
                      <h2 class="tm-figure-title">Image <span><strong>One</strong></span></h2>
                      <p class="tm-figure-description">Set true or false in HTML script tag for this page black and white.</p>
                      <a href="../assets/img/tm-img-02.jpg">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div class="grid-item">
                  <figure class="effect-sadie">
                    <img src="../assets/img/tm-img-02-tn.jpg"class="img-fluid tm-img">
                    <figcaption>
                      <h2 class="tm-figure-title">Image <span><strong>One</strong></span></h2>
                      <p class="tm-figure-description">Set true or false in HTML script tag for this page black and white.</p>
                      <a href="../assets/img/tm-img-02.jpg">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div class="grid-item">
                  <figure class="effect-sadie">
                    <img src="../assets/img/tm-img-02-tn.jpg"class="img-fluid tm-img">
                    <figcaption>
                      <h2 class="tm-figure-title">Image <span><strong>One</strong></span></h2>
                      <p class="tm-figure-description">Set true or false in HTML script tag for this page black and white.</p>
                      <a href="../assets/img/tm-img-02.jpg">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div class="grid-item">
                  <figure class="effect-sadie">
                    <img src="../assets/img/tm-img-02-tn.jpg"class="img-fluid tm-img">
                    <figcaption>
                      <h2 class="tm-figure-title">Image <span><strong>One</strong></span></h2>
                      <p class="tm-figure-description">Set true or false in HTML script tag for this page black and white.</p>
                      <a href="../assets/img/tm-img-02.jpg">View more</a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="selected">
        <div class="cd-full-width">
          <div class="container-fluid js-tm-page-content" data-page-no="2" data-page-type="gallery">
            <div class="tm-img-gallery-container">
              <div class="tm-img-gallery gallery-one">
                <!-- Gallery One pop up connected with JS code below -->
                <div class="grid-item">
                  <figure class="effect-sadie">
                    <img src="../assets/img/tm-img-02-tn.jpg"class="img-fluid tm-img">
                    <figcaption>
                      <h2 class="tm-figure-title">Image <span><strong>One</strong></span></h2>
                      <p class="tm-figure-description">Set true or false in HTML script tag for this page black and white.</p>
                      <a href="../assets/img/tm-img-02.jpg">View more</a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="selected">
        <div class="cd-full-width">
          <div class="container-fluid js-tm-page-content" data-page-no="3" data-page-type="gallery" ref="gallery2">
            <div class="tm-img-gallery-container">
              <div class="tm-img-gallery gallery-one">
                <!-- Gallery One pop up connected with JS code below -->
                <div class="grid-item">
                  <figure class="effect-sadie">
                    <img src="../assets/img/tm-img-03-tn.jpg"class="img-fluid tm-img">
                    <figcaption>
                      <h2 class="tm-figure-title">Image <span><strong>One</strong></span></h2>
                      <p class="tm-figure-description">Set true or false in HTML script tag for this page black and white.</p>
                      <a href="../assets/img/tm-img-03.jpg">View more</a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
    export default {
        data () {
            return {
                title: 'Welcome',
                message:'click',
                gallery:'gallery',
                imageDatas: [
                    {
                        title:'tm',
                        content:'tm-img-01',
                        path:'../assets/img/tm-img-01.jpg',
                    },
                    {
                        title:'tm',
                        content:'tm-img-01',
                        path:'../assets/img/tm-img-02.jpg',
                    },
                    {
                        title:'tm',
                        content:'tm-img-01',
                        path:'../assets/img/tm-img-03.jpg',
                    },
                    {
                        title:'tm',
                        content:'tm-img-01',
                        path:'../assets/img/tm-img-04.jpg',
                    },
                    {
                        title:'tm',
                        content:'tm-img-01',
                        path:'../assets/img/tm-img-05.jpg',
                    }
                ]
            }
        },
        created:function(){
            var self = this;
            self.adjustHeightOfPage(3);
            $( window ).resize(function() {
                var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
                console.log(currentPageNo);
                // wait 3 seconds
                setTimeout(function() {
                    adjustHeightOfPage( currentPageNo );
                }, 1000);

            });
        },
        methods:{
            nbar:function(){
                document.getElementById('tmNavbar').collapse('hide');
                console.log('dd');
                adjustHeightOfPage($(this).data("no")); // Adjust page height
            },
            getMessage:function() {
                var self = this;
                self.message = 'jianjunhu'+self.message;
            },
            adjustHeightOfPage: function (pageNo) {
                var self = this;
                console.log('pageNo:'+pageNo);
                var pageContentHeight = 0;
                console.log('pageNo:'+$('div[data-page-no="' + pageNo + '"]'));
                var pageType = self.gallery;
                console.log(pageType);
                if (pageType != undefined && pageType == "gallery") {
                     pageContentHeight = 7775;
                }
                else {
                     pageContentHeight = self.$refs.gallery2.offsetHeight + 20;
                }
                console.log('pageContentHeight:'+pageContentHeight);
                // Get the page height
                var totalPageHeight = $('.cd-slider-nav').height()
                    + pageContentHeight
                    + $('.tm-footer').outerHeight();

                // Adjust layout based on page height and window height
                if (totalPageHeight > $(window).height()) {
                    $('.cd-hero-slider').addClass('small-screen');
                    $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", totalPageHeight + "px");
                }
                else {
                    $('.cd-hero-slider').removeClass('small-screen');
                    $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", "100%");
                }
            },
        }
    }
</script>