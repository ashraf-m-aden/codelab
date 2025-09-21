<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>Node.js</h2>
					</div>
				</div>
			</div>

			<div class="shape1"><NuxtImg src="/img/shape1.png" alt="Codelab IT+ formation cours informatique djibouti" /></div>
			<div class="shape2 rotateme"><NuxtImg src="/img/shape2.svg" alt="Codelab IT+ formation cours informatique djibouti" /></div>
			<div class="shape3"><NuxtImg src="/img/shape3.svg" alt="Codelab IT+ formation cours informatique djibouti" /></div>
			<div class="shape4"><NuxtImg src="/img/shape4.svg" alt="Codelab IT+ formation cours informatique djibouti" /></div>
			<div class="shape5"><NuxtImg src="/img/shape5.png" alt="Codelab IT+ formation cours informatique djibouti" /></div>
			<div class="shape6 rotateme"><NuxtImg src="/img/shape4.svg" alt="Codelab IT+ formation cours informatique djibouti" /></div>
			<div class="shape7"><NuxtImg src="/img/shape4.svg" alt="Codelab IT+ formation cours informatique djibouti" /></div>
			<div class="shape8 rotateme"><NuxtImg src="/img/shape2.svg" alt="Codelab IT+ formation cours informatique djibouti" /></div>
		</div>
		<!-- End Page Title -->

		<!-- Start Services Details Area -->
		<section class="services-details-area ptb-80">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<h3>Le backend avec Javascript</h3>
							<p>JavaScript est devenu ces dernieres années plus qu'un language de frontend. Avec Node,
								Express et MongoDB, vous utiliserez vos competences en javascript pour le backend !

								À partir de Node et d'Express, vous découvrirez comment les applications web
								fonctionnent sur le back-end. Vous créerez diverses routes pour les différentes
								fonctions à mettre à la disposition de votre API. Ensuite, vous ajouterez MongoDB, une
								base de données NoSQL, pour rendre votre API entièrement dynamique et vos données
								pleinement persistantes.
								Votre application front-end est presumé deja créee et de cette façon, vous pourrez vous
								concentrer sur la création de votre API et la regarder évoluer, en affinant vos
								compétences back-end et en choisissant librement votre propre parcours.

								Vous créerez une API pour Créer, Lire, Mettre à jour et Supprimer (CRUD pour l’anglais
								Create, Read, Update and Delete) des éléments en vente. Vous ajouterez
								l'authentification à votre API pour la protéger, et vous intégrerez également la gestion
								des fichiers utilisateur pour autoriser les utilisateurs à télécharger des images. </p>



						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<NuxtImg src="/img/courses/nodejs.png" class="wow fadeInUp" alt="IT+ Code Lab"/>
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<NuxtImg src="/img/courses/mean.jpg" class="wow fadeInUp" alt="IT+ Code Lab"/>
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :</p>
							<ul>
								<li> créer un serveur web simple avec Express ;
								</li>
								<li>créer une API REST avec Node, Express et MongoDB ;
								</li>
								<li>mettre en place un système d'authentification sur une application Express ;
								</li>
								<li>gérer des utilisateur sur une application Express ;
								</li>
								<li>Recuprer des données de mongoDB grâce à Mongoose ;</li>
								<li>utiliser les tokens JWT ;</li>
							</ul>

							<!--
							<div class="services-details-accordion">
								<VueFaqAccordion :items="myItems" />
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
</template>


<script setup>
useHead({
  title: "NODE ",
  meta: [
    { name: "description", content: "Plongez dans le monde des backends et créez vos premières applications backends | Code Lab | Cours et Formations en informatique à Djibouti" },
    { name: "keywords", content: "formation,nodejs,backend,programmation,cours,Djibouti" }
  ],
});</script>
