<template>
    <h1>Contact</h1>
    <div id="contact">
      <h2>N'hésitez pas à me contacter par les moyens suivants :</h2>
      <ul class="list-unstyled" data-aos="fade-left">
        <li><a href="tel:+33651324783" target="_blank"><img src="@/assets/icons/phone.svg" alt="phone icon">06 51 32 47 83</a></li>
        <li><a href="mailto:nicolas.delhaye62220@gmail.com" target="_blank"><img src="@/assets/icons/envelope-at.svg" alt="email icon">nicolas.delhaye62220@gmail.com</a></li>
      </ul>
      <h2>Mes réseaux :</h2>
      <ul class="list-unstyled" data-aos="fade-right">
        <li><a href="https://www.linkedin.com/in/nicolas-delhaye-carvin-informatique-iut-lens/" target="_blank"><img src="@/assets/icons/linkedin.svg" alt="linkedin icon">LinkedIn</a></li>
        <li><a href="https://github.com/nicodelh27" target="_blank"><img src="@/assets/icons/github.svg" alt="github icon">GitHub</a></li>
      </ul>
    </div>
</template>

<style scoped>

h1 {
  margin-top: 50px;
  margin-bottom: 40px;
}

h2 {
  font-size: 30px;
}

#contact {
  width: 50%;
  margin-bottom: 50px;
}

@media (max-width: 768px) {
  #contact {
    width: 80%;
  }
}

@media (max-width: 576px) {
  h2 {
    font-size: 20px;
  }
  a {
    font-size: 15px !important;
  }
}

li {
  background-color: var(--white-color);
  padding: 20px 30px;
  margin: 10px 0;
  border-radius: 20px;
}

li a {
  color: var(--darker-blue-color);
  font-size: 20px;
  text-decoration: none;
  word-break: break-all;
}

a:hover {
  color: var(--light-blue-color);
}

img {
  width: 30px;
  margin-right: 15px;
}
</style>