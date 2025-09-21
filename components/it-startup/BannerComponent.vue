<template>
  <!-- Start Main Banner -->
  <div class="main-banner">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-lg-5">
              <div class="hero-content">
                <h1>IT+ Code Lab</h1>
                <h3>
                  Avec nos cours et nos formations, l'informatique n'a jamais
                  eté aussi accessible
                </h3>
                <p>
                  Prenez part à de nombreuse formations pratiques en
                  programmation et en réseaux informatiques. Peu importe votre
                  niveau, que vous soyez debutant ou aguérit, les parcours et
                  les modules d'apprentissages que nous vous proposons
                  combleront toutes vos attentes. Que vous soyez étudiants ou
                  professionels, avec IT+ l'informatique n'aura jamais eté aussi
                  accessible.
                </p>
                <div class="d-flex">
                  <a
                    class="read-more-btn syllabus"
                    target="_blank"
                    href="/SYLLABUS.pdf"
                    download="/SYLLABUS.pdf"
                  >
                    Télecharger le syllabus
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-6 offset-lg-1">
              <div class="banner-image">
                <!-- Animations (WOW) → img classique -->
                <NuxtImg src="/img/banner-image/man.png"        class="wow fadeInDown"  alt="man"        loading="lazy" />
                <NuxtImg src="/img/banner-image/code.png"       class="wow fadeInUp"    alt="code"       loading="lazy" />
                <NuxtImg src="/img/banner-image/carpet.png"     class="wow fadeInLeft"  alt="carpet"     loading="lazy" />
                <NuxtImg src="/img/banner-image/bin.png"        class="wow zoomIn"      alt="bin"        loading="lazy" />
                <NuxtImg src="/img/banner-image/book.png"       class="wow bounceIn"    alt="book"       loading="lazy" />
                <NuxtImg src="/img/banner-image/dekstop.png"    class="wow fadeInDown"  alt="desktop"    loading="lazy" />
                <NuxtImg src="/img/banner-image/dot.png"        class="wow zoomIn"      alt="dot"        loading="lazy" />
                <NuxtImg src="/img/banner-image/flower-top-big.png" class="wow fadeInUp" alt="flower-top-big" loading="lazy" />
                <NuxtImg src="/img/banner-image/flower-top.png" class="wow rotateIn"    alt="flower-top" loading="lazy" />
                <NuxtImg src="/img/banner-image/keyboard.png"   class="wow fadeInUp"    alt="keyboard"   loading="lazy" />
                <NuxtImg src="/img/banner-image/pen.png"        class="wow zoomIn"      alt="pen"        loading="lazy" />
                <NuxtImg src="/img/banner-image/table.png"      class="wow zoomIn"      alt="table"      loading="lazy" />
                <NuxtImg src="/img/banner-image/tea-cup.png"    class="wow fadeInLeft"  alt="tea-cup"    loading="lazy" />
                <NuxtImg src="/img/banner-image/headphone.png"  class="wow rollIn"      alt="headphone"  loading="lazy" />

                <!-- Image principale (LCP) → optimisée avec NuxtImg -->
                <NuxtImg
                  src="/img/banner-image/main-pic.png"
                  alt="main-pic"
                  format="webp,avif"
                  width="600"
                  height="600"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Decorative shapes (optimisées, lazy) -->
        <div class="shape1">
          <NuxtImg src="/img/shape1.png" alt="shape1" format="webp,avif" loading="lazy" />
        </div>
        <div class="shape2 rotateme">
          <NuxtImg src="/img/shape2.svg" alt="shape2" loading="lazy" />
        </div>
        <div class="shape3">
          <NuxtImg src="/img/shape3.svg" alt="shape3" loading="lazy" />
        </div>
        <div class="shape4">
          <NuxtImg src="/img/shape4.svg" alt="shape4" loading="lazy" />
        </div>
        <div class="shape5">
          <NuxtImg src="/img/shape5.png" alt="shape5" format="webp,avif" loading="lazy" />
        </div>
        <div class="shape6 rotateme">
          <NuxtImg src="/img/shape4.svg" alt="shape6" loading="lazy" />
        </div>
        <div class="shape7">
          <NuxtImg src="/img/shape4.svg" alt="shape7" loading="lazy" />
        </div>
        <div class="shape8 rotateme">
          <NuxtImg src="/img/shape2.svg" alt="shape8" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
  <!-- End Main Banner -->
</template>

<style>
.syllabus {
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px;
}
</style>
