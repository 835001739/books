<template>
  <div id="app">
      <!-- ============================================== TOP MENU ============================================== -->
    <header class="header-style-1">
    <div class="top-bar animate-dropdown">
        <div class="container">
          <div class="header-top-inner">
            <div class="cnt-account">
              <ul class="list-unstyled">
                <li class="myaccount"><a href="#"><span>My Account</span></a></li>
                <li class="wishlist"><a href="#"><span>Wishlist</span></a></li>
                <li class="header_cart hidden-xs"><a href="#"><span>My Cart</span></a></li>
                <li class="check"><a href="#"><span>Checkout</span></a></li>
                <li class="login"><a href="#"><span>Login</span></a></li>
              </ul>
            </div>
            <!-- /.cnt-account -->

            <div class="cnt-block">
              <ul class="list-unstyled list-inline">
                <li class="dropdown dropdown-small"> <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span class="value">USD </span><b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">USD</a></li>
                    <li><a href="#">INR</a></li>
                    <li><a href="#">GBP</a></li>
                  </ul>
                </li>
                <li class="dropdown dropdown-small lang"> <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span class="value">English </span><b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">English</a></li>
                    <li><a href="#">French</a></li>
                    <li><a href="#">German</a></li>
                  </ul>
                </li>
              </ul>
              <!-- /.list-unstyled -->
            </div>
            <!-- /.cnt-cart -->
            <div class="clearfix"></div>
          </div>
          <!-- /.header-top-inner -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.header-top -->
      <!-- ============================================== TOP MENU : END ============================================== -->
      <div class="main-header">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-3 logo-holder">
              <!-- ============================================================= LOGO ============================================================= -->
              <div class="logo"> <a href=""> <img src="" alt="logo"> </a> </div>
              <!-- /.logo -->
              <!-- ============================================================= LOGO : END ============================================================= --> </div>
            <!-- /.logo-holder -->

            <div class="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
              <!-- /.contact-row -->
              <!-- ============================================================= SEARCH AREA ============================================================= -->
              <div class="search-area">
                <form>
                  <div class="control-group">
                    <ul class="categories-filter animate-dropdown">
                      <li class="dropdown"> <a class="dropdown-toggle"  data-toggle="dropdown" href="">Categories <b class="caret"></b></a>
                        <ul class="dropdown-menu" role="menu" >
                          <li class="menu-header">Computer</li>
                          <li role="presentation"><a role="menuitem" tabindex="-1" href="">- Clothing</a></li>
                          <li role="presentation"><a role="menuitem" tabindex="-1" href="">- Electronics</a></li>
                          <li role="presentation"><a role="menuitem" tabindex="-1" href="">- Shoes</a></li>
                          <li role="presentation"><a role="menuitem" tabindex="-1" href="">- Watches</a></li>
                        </ul>
                      </li>
                    </ul>
                    <input class="search-field" placeholder="Search here..." />
                    <a class="search-button" href="#" ></a> </div>
                </form>
              </div>
              <!-- /.search-area -->
              <!-- ============================================================= SEARCH AREA : END ============================================================= --> </div>
            <!-- /.top-search-holder -->

            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
              <!-- ============================================================= SHOPPING CART DROPDOWN ============================================================= -->

              <div class="dropdown dropdown-cart"> <a href="#" class="dropdown-toggle lnk-cart" data-toggle="dropdown">
                <div class="items-cart-inner">
                  <div class="basket">
                    <div class="basket-item-count"><span class="count">2</span></div>
                    <div class="total-price-basket"> <span class="lbl">Shopping Cart</span> <span class="value">$4580</span> </div>
                  </div>
                </div>
              </a>
                <ul class="dropdown-menu">
                  <li>
                    <div class="cart-item product-summary">
                      <div class="row">
                        <div class="col-xs-4">
                          <div class="image"> <a href=""><img src="" alt=""></a> </div>
                        </div>
                        <div class="col-xs-7">
                          <h3 class="name"><a href="">Simple Product</a></h3>
                          <div class="price">$600.00</div>
                        </div>
                        <div class="col-xs-1 action"> <a href="#"><i class="fa fa-trash"></i></a> </div>
                      </div>
                    </div>
                    <!-- /.cart-item -->
                    <div class="clearfix"></div>
                    <hr>
                    <div class="clearfix cart-total">
                      <div class="pull-right"> <span class="text">Sub Total :</span><span class='price'>$600.00</span> </div>
                      <div class="clearfix"></div>
                      <a href="#" class="btn btn-upper btn-primary btn-block m-t-20">Checkout</a> </div>
                    <!-- /.cart-total-->

                  </li>
                </ul>
                <!-- /.dropdown-menu-->
              </div>
              <!-- /.dropdown-cart -->

              <!-- ============================================================= SHOPPING CART DROPDOWN : END============================================================= --> </div>
            <!-- /.top-cart-row -->
          </div>
          <!-- /.row -->

        </div>
        <!-- /.container -->

      </div>
      <!-- /.main-header -->
    </header>
    <div class="body-content outer-top-vs" id="top-banner-and-menu">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-3 sidebar">

            <!-- ================================== TOP NAVIGATION ================================== -->
            <div class="side-menu animate-dropdown outer-bottom-xs">
              <div class="head"><i class="icon fa fa-align-justify fa-fw"></i> Categories</div>
              <nav class="yamm megamenu-horizontal">
                <ul class="nav">
                  <li class="dropdown menu-item"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-shopping-bag" aria-hidden="true"></i>Clothing</a>
                    <ul class="dropdown-menu mega-menu">
                      <li class="yamm-content">
                        <div class="row">
                          <div class="col-sm-12 col-md-3">
                            <ul class="links list-unstyled">
                              <li><a href="#">Dresses</a></li>
                              <li><a href="#">Shoes </a></li>
                              <li><a href="#">Jackets</a></li>
                              <li><a href="#">Sunglasses</a></li>
                              <li><a href="#">Sport Wear</a></li>
                              <li><a href="#">Blazers</a></li>
                              <li><a href="#">Shirts</a></li>
                              <li><a href="#">Shorts</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->
                        </div>
                        <!-- /.row -->
                      </li>
                      <!-- /.yamm-content -->
                    </ul>
                    <!-- /.dropdown-menu --> </li>
                  <!-- /.menu-item -->

                </ul>
                <!-- /.nav -->
              </nav>
            </div>

            <!-- ============================================== HOT DEALS ============================================== -->
            <div class="sidebar-widget hot-deals outer-bottom-xs">
              <h3 class="section-title">Hot deals</h3>
              <div class="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
                <div class="item">
                  <div class="products">
                    <div class="hot-deal-wrapper">
                      <div class="image">
                        <a href="#">
                          <img src="../assets/images/hot-deals/p13.jpg" alt="">
                          <img src="../assets/images/hot-deals/p13_hover.jpg" alt="" class="hover-image">
                        </a>
                      </div>
                      <div class="sale-offer-tag"><span>49%<br>
                    off</span></div>
                      <div class="timing-wrapper">
                        <div class="box-wrapper">
                          <div class="date box"> <span class="key">120</span> <span class="value">DAYS</span> </div>
                        </div>
                        <div class="box-wrapper">
                          <div class="hour box"> <span class="key">20</span> <span class="value">HRS</span> </div>
                        </div>
                        <div class="box-wrapper">
                          <div class="minutes box"> <span class="key">36</span> <span class="value">MINS</span> </div>
                        </div>
                        <div class="box-wrapper">
                          <div class="seconds box"> <span class="key">60</span> <span class="value">SEC</span> </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.hot-deal-wrapper -->

                    <div class="product-info text-left m-t-20">
                      <h3 class="name"><a href="#">Floral Print Buttoned</a></h3>
                      <div class="rating rateit-small"></div>
                      <div class="product-price"> <span class="price"> $600.00 </span> <span class="price-before-discount">$800.00</span> </div>
                      <!-- /.product-price -->

                    </div>
                    <!-- /.product-info -->

                    <div class="cart clearfix animate-effect">
                      <div class="action">
                        <div class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </div>
                      </div>
                      <!-- /.action -->
                    </div>
                    <!-- /.cart -->
                  </div>
                </div>
              </div>
            </div>

            <!-- ============================================== SPECIAL OFFER ============================================== -->

            <div class="sidebar-widget outer-bottom-small">
              <h3 class="section-title">Special Offer</h3>
              <div class="sidebar-widget-body outer-top-xs">
                <div class="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
                  <div class="item">
                    <div class="products special-product">
                      <div class="product">
                        <div class="product-micro">
                          <div class="row product-micro-row">
                            <div class="col col-xs-5">
                              <div class="product-image">
                                <div class="image"> <a href="#"> <img src="../assets/images/products/p5.jpg" alt=""> </a> </div>
                                <!-- /.image -->

                              </div>
                              <!-- /.product-image -->
                            </div>
                            <!-- /.col -->
                            <div class="col col-xs-7">
                              <div class="product-info">
                                <h3 class="name"><a href="#">Floral Print Shirt</a></h3>
                                <div class="rating rateit-small"></div>
                                <div class="product-price"> <span class="price"> $450.99 </span> </div>
                                <!-- /.product-price -->

                              </div>
                            </div>
                            <!-- /.col -->
                          </div>
                          <!-- /.product-micro-row -->
                        </div>
                        <!-- /.product-micro -->

                      </div>
                      <div class="product">
                        <div class="product-micro">
                          <div class="row product-micro-row">
                            <div class="col col-xs-5">
                              <div class="product-image">
                                <div class="image"> <a href="#"> <img src="../assets/images/products/p9.jpg" alt=""> </a> </div>
                                <!-- /.image -->

                              </div>
                              <!-- /.product-image -->
                            </div>
                            <!-- /.col -->
                            <div class="col col-xs-7">
                              <div class="product-info">
                                <h3 class="name"><a href="#">Floral Print Shirt</a></h3>
                                <div class="rating rateit-small"></div>
                                <div class="product-price"> <span class="price"> $450.99 </span> </div>
                                <!-- /.product-price -->

                              </div>
                            </div>
                            <!-- /.col -->
                          </div>
                          <!-- /.product-micro-row -->
                        </div>
                        <!-- /.product-micro -->

                      </div>
                      <div class="product">
                        <div class="product-micro">
                          <div class="row product-micro-row">
                            <div class="col col-xs-5">
                              <div class="product-image">
                                <div class="image"> <a href="#"> <img src="../assets/images/products/p11.jpg" alt=""> </a> </div>
                                <!-- /.image -->

                              </div>
                              <!-- /.product-image -->
                            </div>
                            <!-- /.col -->
                            <div class="col col-xs-7">
                              <div class="product-info">
                                <h3 class="name"><a href="#">Floral Print Shirt</a></h3>
                                <div class="rating rateit-small"></div>
                                <div class="product-price"> <span class="price"> $450.99 </span> </div>
                                <!-- /.product-price -->

                              </div>
                            </div>
                            <!-- /.col -->
                          </div>
                          <!-- /.product-micro-row -->
                        </div>
                        <!-- /.product-micro -->

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ============================================== NEWSLETTER ============================================== -->
            <div class="sidebar-widget newsletter outer-bottom-small">
              <h3 class="section-title">Newsletters</h3>
              <div class="sidebar-widget-body outer-top-xs">
                <p>Sign Up for Our Newsletter!</p>
                <form>
                  <div class="form-group">
                    <label class="sr-only" for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Subscribe to our newsletter">
                  </div>
                  <button class="btn btn-primary">Subscribe</button>
                </form>
              </div>
              <!-- /.sidebar-widget-body -->
            </div>
            <!-- /.sidebar-widget -->


            <!-- ============================================== Testimonials============================================== -->
            <div class="sidebar-widget outer-top-vs ">
              <div id="advertisement" class="advertisement">
                <div class="item">
                  <div class="avatar"><img src="../assets/images/testimonials/member1.png" alt="Image"></div>
                  <div class="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
                  <div class="clients_author">John Doe <span>Abc Company</span> </div>
                  <!-- /.container-fluid -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
            <!-- ========================================== SECTION – HERO ========================================= -->

            <div id="hero">
              <div id="owl-main" class="owl-carousel owl-inner-nav owl-ui-sm">
                <div class="item" style="background-image: url(../assets/images/sliders/01.jpg);">
                  <div class="container-fluid">
                    <div class="caption bg-color vertical-center text-left">
                      <div class="slider-header fadeInDown-1">Top Brands</div>
                      <div class="big-text fadeInDown-1"> {{title}} </div>
                      <div class="excerpt fadeInDown-2 hidden-xs"> <span>{{message}}</span> </div>
                      <div class="button-holder fadeInDown-3"> <a @click="getMessage()" class="btn-lg btn btn-uppercase btn-primary shop-now-button">{{message}}</a> </div>
                    </div>
                    <!-- /.caption -->
                  </div>
                  <!-- /.container-fluid -->
                </div>
              </div>
            </div>

            <!-- ============================================== SCROLL TABS ============================================== -->
            <div id="product-tabs-slider" class="scroll-tabs outer-top-vs">
              <div class="more-info-tab clearfix ">
                <h3 class="new-product-title pull-left">New Products</h3>
                <ul class="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
                  <li class="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
                  <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
                  <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
                  <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab">Shoes</a></li>
                </ul>
                <!-- /.nav-tabs -->
              </div>
              <div class="tab-content outer-top-xs">
                <div class="tab-pane in active" id="all">
                  <div class="product-slider">
                    <div class="owl-carousel home-owl-carousel custom-carousel owl-theme">
                      <div class="item item-carousel">
                        <div class="products">
                          <div class="product">
                            <div class="product-image">
                              <div class="image">
                                <a href="#">
                                  <img src="../assets/images/products/p1.jpg" alt="">
                                  <img src="../assets/images/products/p1_hover.jpg" alt="" class="hover-image">
                                </a>
                              </div>
                              <!-- /.image -->

                              <div class="tag new"><span>new</span></div>
                            </div>
                            <!-- /.product-image -->

                            <div class="product-info text-left">
                              <h3 class="name"><a href="#">Floral Print Buttoned</a></h3>
                              <div class="rating rateit-small"></div>
                              <div class="description"></div>
                              <div class="product-price"> <span class="price"> $450.99 </span> <span class="price-before-discount">$ 800</span> </div>
                              <!-- /.product-price -->

                            </div>
                            <!-- /.product-info -->
                            <div class="cart clearfix animate-effect">
                              <div class="action">
                                <ul class="list-unstyled">
                                  <li class="add-cart-button btn-group">
                                    <button data-toggle="tooltip" class="btn btn-primary icon" type="button" title="Add Cart"> <i class="fa fa-shopping-cart"></i> </button>
                                    <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                                  </li>
                                  <li class="lnk wishlist"> <a data-toggle="tooltip" class="add-to-cart" href="#" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                                  <li class="lnk"> <a data-toggle="tooltip" class="add-to-cart" href="#" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>
                                </ul>
                              </div>
                              <!-- /.action -->
                            </div>
                            <!-- /.cart -->
                          </div>
                          <!-- /.product -->

                        </div>
                        <!-- /.products -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ============================================== WIDE PRODUCTS ============================================== -->
            <div class="wide-banners outer-bottom-xs">
              <div class="row">
                <div class="col-md-4 col-sm-4">
                  <div class="wide-banner cnt-strip">
                    <div class="image"> <img class="img-responsive" src="../assets/images/banners/home-banner1.jpg" alt=""> </div>
                  </div>
                  <!-- /.wide-banner -->
                </div>
              </div>
            </div>

            <!-- ============================================== FEATURED PRODUCTS ============================================== -->
            <section class="section featured-product">
              <div class="row">
                <div class="col-lg-3">
                  <h3 class="section-title">Electronics & Digital</h3>
                  <ul class="sub-cat">
                    <li><a href="#">Computers</a></li>
                    <li><a href="#">Air Condtion</a></li>
                    <li><a href="#">Mobile Phones</a></li>
                    <li><a href="#">Camera</a></li>
                    <li><a href="#">Television</a></li>
                    <li><a href="#">Sound & Speakers</a></li>
                    <li><a href="#">Games & Audio Music</a></li>
                    <li><a href="#">Digital Watches</a></li>
                    <li><a href="#">Washing Machines</a></li>
                    <li><a href="#">Office Electronics</a></li>
                  </ul>
                </div>
                <div class="col-lg-9">
                  <div class="owl-carousel homepage-owl-carousel custom-carousel owl-theme outer-top-xs">
                    <div class="item item-carousel">
                      <div class="products">
                        <div class="product">
                          <div class="product-image">
                            <div class="image">
                              <a href="#">
                                <!--<img src="../assets/images/products/p13.jpg" alt="">-->
                                <!--<img src="../assets/images/products/p13_hover.jpg" alt="" class="hover-image">-->
                              </a>

                            </div>
                            <!-- /.image -->

                            <div class="tag hot"><span>hot</span></div>
                          </div>
                          <!-- /.product-image -->

                          <div class="product-info text-left">
                            <h3 class="name"><a href="#">Floral Print Buttoned</a></h3>
                            <div class="rating rateit-small"></div>
                            <div class="description"></div>
                            <div class="product-price"> <span class="price"> $450.99 </span> <span class="price-before-discount">$ 800</span> </div>
                            <!-- /.product-price -->

                          </div>
                          <!-- /.product-info -->
                          <div class="cart clearfix animate-effect">
                            <div class="action">
                              <ul class="list-unstyled">
                                <li class="add-cart-button btn-group">
                                  <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                                  <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li class="lnk wishlist"> <a class="add-to-cart" href="#" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                                <li class="lnk"> <a class="add-to-cart" href="#" title="Compare"> <i class="fa fa-signal"></i> </a> </li>
                              </ul>
                            </div>
                            <!-- /.action -->
                          </div>
                          <!-- /.cart -->
                        </div>
                        <!-- /.product -->

                      </div>
                      <!-- /.products -->
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="wide-banners outer-bottom-xs">
              <div class="row">
                <div class="col-md-8">
                  <div class="wide-banner1 cnt-strip">
                    <div class="image"> <img class="img-responsive" src="../assets/images/banners/home-banner.jpg" alt=""> </div>
                    <div class="strip strip-text">
                      <div class="strip-inner">
                        <h2 class="text-right">Amazing Sunglasses<br>
                          <span class="shopping-needs">Get 40% off on selected items</span></h2>
                      </div>
                    </div>
                    <div class="new-label">
                      <div class="text">NEW</div>
                    </div>
                    <!-- /.new-label -->
                  </div>
                  <!-- /.wide-banner -->
                </div>
                <!-- /.col -->
                <div class="col-md-4">
                  <div class="wide-banner cnt-strip">
                    <div class="image"> <img class="img-responsive" src="../assets/images/banners/home-banner4.jpg" alt=""> </div>


                    <!-- /.new-label -->
                  </div>
                  <!-- /.wide-banner -->
                </div>

              </div>
              <!-- /.row -->
            </div>

            <!-- ============================================== BLOG SLIDER ============================================== -->
            <section class="section latest-blog outer-bottom-vs">
              <h3 class="section-title">Latest form Blog</h3>
              <div class="blog-slider-container outer-top-xs">
                <div class="owl-carousel blog-slider custom-carousel">
                  <div class="item">
                    <div class="blog-post">
                      <div class="blog-post-image">
                        <div class="image"> <img src="../assets/images/blog-post/blog_big_01.jpg" alt=""></div>
                      </div>
                      <!-- /.blog-post-image -->

                      <div class="blog-post-info text-left">
                        <h3 class="name"><a href="#">Voluptatem accusantium doloremque laudantium</a></h3>
                        <span class="info">By Jone Doe &nbsp;|&nbsp; 21 March 2016 </span>
                        <p class="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      </div>
                      <!-- /.blog-post-info -->

                    </div>
                    <!-- /.blog-post -->
                  </div>
                </div>
              </div>
            </section>

            <!-- ============================================== FEATURED PRODUCTS ============================================== -->
            <section class="section new-arriavls">
              <h3 class="section-title">Featured Products</h3>
              <div class="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
                <div class="item item-carousel">
                  <div class="products">
                    <div class="product">
                      <div class="product-image">
                        <div class="image">
                          <a href="#">
                            <img src="../assets/images/products/p10.jpg" alt="">
                            <img src="../assets/images/products/p10_hover.jpg" alt="" class="hover-image">
                          </a>

                        </div>
                        <!-- /.image -->

                        <div class="tag new"><span>new</span></div>
                      </div>
                      <!-- /.product-image -->

                      <div class="product-info text-left">
                        <h3 class="name"><a href="#">Floral Print Buttoned</a></h3>
                        <div class="rating rateit-small"></div>
                        <div class="description"></div>
                        <div class="product-price"> <span class="price"> $450.99 </span> <span class="price-before-discount">$ 800</span> </div>
                        <!-- /.product-price -->

                      </div>
                      <!-- /.product-info -->
                      <div class="cart clearfix animate-effect">
                        <div class="action">
                          <ul class="list-unstyled">
                            <li class="add-cart-button btn-group">
                              <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                              <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                            </li>
                            <li class="lnk wishlist"> <a class="add-to-cart" href="#" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                            <li class="lnk"> <a class="add-to-cart" href="#" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>
                          </ul>
                        </div>
                        <!-- /.action -->
                      </div>
                      <!-- /.cart -->
                    </div>
                    <!-- /.product -->

                  </div>
                  <!-- /.products -->
                </div>
                <!-- /.item -->
              </div>
            </section>
          </div>
        </div>
        <!-- /.row -->
        <!-- ============================================== BRANDS CAROUSEL ============================================== -->
        <div id="brands-carousel" class="logo-slider">
          <div class="logo-slider-inner">
            <div id="brand-slider" class="owl-carousel brand-slider custom-carousel owl-theme">
              <div class="item m-t-15"> <a href="#" class="image"> <img data-echo="../assets/images/brands/brand1.png" src="../assets/images/blank.gif" alt=""> </a> </div>
              <!--/.item-->

              <div class="item m-t-10"> <a href="#" class="image"> <img data-echo="../assets/images/brands/brand2.png" src="../assets/images/blank.gif" alt=""> </a> </div>
              <!--/.item-->

              <div class="item"> <a href="#" class="image"> <img data-echo="../assets/images/brands/brand3.png" src="../assets/images/blank.gif" alt=""> </a> </div>
              <!--/.item-->

              <div class="item"> <a href="#" class="image"> <img data-echo="../assets/images/brands/brand4.png" src="../assets/images/blank.gif" alt=""> </a> </div>
              <!--/.item-->

              <div class="item"> <a href="#" class="image"> <img data-echo="../assets/images/brands/brand5.png" src="../assets/images/blank.gif" alt=""> </a> </div>
              <!--/.item-->

              <div class="item"> <a href="#" class="image"> <img data-echo="../assets/images/brands/brand6.png" src="../assets/images/blank.gif" alt=""> </a> </div>
              <!--/.item-->

              <div class="item"> <a href="#" class="image"> <img data-echo="../assets/images/brands/brand2.png" src="../assets/images/blank.gif" alt=""> </a> </div>
              <!--/.item-->

              <div class="item"> <a href="#" class="image"> <img data-echo="../assets/images/brands/brand4.png" src="../assets/images/blank.gif" alt=""> </a> </div>
              <!--/.item-->

              <div class="item"> <a href="#" class="image"> <img data-echo="../assets/images/brands/brand1.png" src="../assets/images/blank.gif" alt=""> </a> </div>
              <!--/.item-->

              <div class="item"> <a href="#" class="image"> <img data-echo="../assets/images/brands/brand5.png" src="../assets/images/blank.gif" alt=""> </a> </div>
              <!--/.item-->
            </div>
            <!-- /.owl-carousel #logo-slider -->
          </div>
          <!-- /.logo-slider-inner -->

        </div>
        <!-- /.logo-slider -->
        <!-- ============================================== BRANDS CAROUSEL : END ============================================== -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /#top-banner-and-menu -->

    <!-- ============================================== INFO BOXES ============================================== -->
    <div class="row our-features-box">
      <div class="container">
        <ul>
          <li>
            <div class="feature-box">
              <div class="icon-truck"></div>
              <div class="content-blocks">We ship worldwide</div>
            </div>
          </li>
          <li>
            <div class="feature-box">
              <div class="icon-support"></div>
              <div class="content-blocks">call
                +1 800 789 0000</div>
            </div>
          </li>
          <li>
            <div class="feature-box">
              <div class="icon-money"></div>
              <div class="content-blocks">Money Back Guarantee</div>
            </div>
          </li>
          <li>
            <div class="feature-box">
              <div class="icon-return"></div>
              <div class="content">30 days return</div>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <!-- /.info-boxes -->
    <!-- ============================================== INFO BOXES : END ============================================== -->

    <!-- ============================================================= FOOTER ============================================================= -->
    <footer id="footer" class="footer color-bg">
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="address-block">

                <!-- /.module-heading -->

                <div class="module-body">
                  <ul class="toggle-footer" style="">
                    <li class="media">
                      <div class="pull-left"> <span class="icon fa-stack fa-lg"> <i class="fa fa-map-marker fa-stack-1x fa-inverse"></i> </span> </div>
                      <div class="media-body">
                        <p>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
                      </div>
                    </li>
                    <li class="media">
                      <div class="pull-left"> <span class="icon fa-stack fa-lg"> <i class="fa fa-mobile fa-stack-1x fa-inverse"></i> </span> </div>
                      <div class="media-body">
                        <p> + (888) 123-4567 / + (888) 456-7890</p>
                      </div>
                    </li>
                    <li class="media">
                      <div class="pull-left"> <span class="icon fa-stack fa-lg"> <i class="fa fa-envelope fa-stack-1x fa-inverse"></i> </span> </div>
                      <div class="media-body"> <span><a href="#">marazzo@themesground.com</a></span> </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- /.module-body -->
            </div>
            <!-- /.col -->

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="module-heading">
                <h4 class="module-title">Customer Service</h4>
              </div>
              <!-- /.module-heading -->

              <div class="module-body">
                <ul class='list-unstyled'>
                  <li class="first"><a href="#" title="Contact us">My Account</a></li>
                  <li><a href="#" title="About us">Order History</a></li>
                  <li><a href="#" title="faq">FAQ</a></li>
                  <li><a href="#" title="Popular Searches">Specials</a></li>
                  <li class="last"><a href="#" title="Where is my order?">Help Center</a></li>
                </ul>
              </div>
              <!-- /.module-body -->
            </div>
            <!-- /.col -->

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="module-heading">
                <h4 class="module-title">Corporation</h4>
              </div>
              <!-- /.module-heading -->

              <div class="module-body">
                <ul class='list-unstyled'>
                  <li class="first"><a title="Your Account" href="#">About us</a></li>
                  <li><a title="Information" href="#">Customer Service</a></li>
                  <li><a title="Addresses" href="#">Company</a></li>
                  <li><a title="Addresses" href="#">Investor Relations</a></li>
                  <li class="last"><a title="Orders History" href="#">Advanced Search</a></li>
                </ul>
              </div>
              <!-- /.module-body -->
            </div>
            <!-- /.col -->

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="module-heading">
                <h4 class="module-title">Why Choose Us</h4>
              </div>
              <!-- /.module-heading -->

              <div class="module-body">
                <ul class='list-unstyled'>
                  <li class="first"><a href="#" title="About us">Shopping Guide</a></li>
                  <li><a href="#" title="Blog">Blog</a></li>
                  <li><a href="#" title="Company">Company</a></li>
                  <li><a href="#" title="Investor Relations">Investor Relations</a></li>
                  <li class=" last"><a href="" title="Suppliers">Contact Us</a></li>
                </ul>
              </div>
              <!-- /.module-body -->
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-bar">
        <div class="container">
          <div class="col-xs-12 col-sm-4 no-padding social">
            <ul class="link">
              <li class="fb pull-left"><a target="_blank" rel="nofollow" href="#" title="Facebook"></a></li>
              <li class="tw pull-left"><a target="_blank" rel="nofollow" href="#" title="Twitter"></a></li>
              <li class="googleplus pull-left"><a target="_blank" rel="nofollow" href="#" title="GooglePlus"></a></li>
              <li class="rss pull-left"><a target="_blank" rel="nofollow" href="#" title="RSS"></a></li>
              <li class="pintrest pull-left"><a target="_blank" rel="nofollow" href="#" title="PInterest"></a></li>
              <li class="linkedin pull-left"><a target="_blank" rel="nofollow" href="#" title="Linkedin"></a></li>
              <li class="youtube pull-left"><a target="_blank" rel="nofollow" href="#" title="Youtube"></a></li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-4 no-padding copyright">Copyright &copy; 2019.Company name All rights reserved.<a target="_blank" href="http://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></div>
          <div class="col-xs-12 col-sm-4 no-padding">
            <div class="clearfix payment-methods">
              <ul>
                <li><img src="../assets/images/payments/1.png" alt=""></li>
                <li><img src="../assets/images/payments/2.png" alt=""></li>
                <li><img src="../assets/images/payments/3.png" alt=""></li>
                <li><img src="../assets/images/payments/4.png" alt=""></li>
                <li><img src="../assets/images/payments/5.png" alt=""></li>
              </ul>
            </div>
            <!-- /.payment-methods -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                title: 'Welcome',
                message:'click',
            }
        },
        methods:{
            getMessage:function() {
                var self = this;
                self.message = 'jianjunhu'+self.message;
            }
        }
    }
</script>