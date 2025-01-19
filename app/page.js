import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Hello, I'm Yassine Mouadden</h1>
        <h2 className="text-xl mt-2">Étudiant ingénieur à l'ENSEM Nancy</h2>
        <h2 className="text-lg mt-1">Futur ingénieur logiciel</h2>
      </div>
      <div className="flex justify-center mt-6">
        <Image
          src="/avatar2.png"
          alt="Yassine Mouadden"
          width={250}
          height={250}
          className="rounded-full border border-gray-300"
        />
      </div>
      <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/yassine-mouadden-008a68254/"
            target="_blank"
            className="px-4 py-2 bg-white text-black rounded-xl hover:bg-blue-700"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/YassineM0"
            target="_blank"
            className="px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-900"
          >
            GitHub
          </a>
        </div>
      <div className="w-4/5 md:w-3/5 mt-8">
        <section className="mb-6">
          <h3 className="text-2xl font-semibold">Éducation</h3>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>ENSEM Nancy</strong> (Sept 2024 - Aujourd’hui): systèmes numériques, Nancy, France</li>
            <li><strong>ENSMR Rabat</strong> (Sept 2022 - Sept 2024): ingénierie génie informatique, Rabat, Maroc</li>
            <li><strong>CPGE Ibn Taymiya</strong> (Sept 2020 - Sept 2022): MPSI-MP, Marrakech, Maroc</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold">Expérience</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>Stagiaire - CNESTEN</strong> (Juil. 2024 - Sept 2024): Développement d’un système informatique pour la surveillance et le contrôle d’une serre intelligente.
              <ul className="list-disc ml-6 mt-1">
                <li>Développement de logiciels</li>
                <li>Infrastructure informatique</li>
                <li>Conception de logiciels</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold">Projets</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>C-multithreading-traffic-simulation </strong>: Simulation de trafic multithreadée en C, permettant de modéliser et de gérer des flux de véhicules dans un environnement simulé, avec une gestion optimisée des threads pour un traitement parallèle et fluide.
              <ul className="list-disc ml-6 mt-1">
                <li>Compétences : C, Git</li>
              </ul>
            </li>
            <li>
              <strong>Projet Labyrinthe</strong>: Jeu solo avec génération de labyrinthes, comportements de monstres, et fonctionnalités avancées (pièges, téléporteurs).
              <ul className="list-disc ml-6 mt-1">
                <li>Compétences : Java, Maven, Scrum, Git</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold">Compétences Techniques</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Systèmes d’exploitation: Windows, Linux</li>
            <li>Langages: C/C++, Java, JavaScript</li>
            <li>Outils: Git, LATEX, Office</li>
            <li>Langues: Français (courant), Anglais (courant)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold">Activités Extrascolaires</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Responsable de la programmation compétitive au Mines IT Club (Mai 2023)</li>
            <li>4e place au Contest Final des Coders Union (Mai 2023)</li>
            <li>Top 30 au 100 days Codeland de l’IEEESB ENSIAS (Mai 2023)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold">Contacts</h3>
          <ul className="list-disc ml-6 mt-2">
           
            <li>Email: <a href="mailto:yassinemoa482@gmail.com" className="text-blue-500">yassinemoa482@gmail.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
