import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  { img: portfolio1, title: "Impressão Offset", category: "Produção" },
  { img: portfolio2, title: "Cartões Premium", category: "Cartões de Visita" },
  { img: portfolio3, title: "Catálogos Corporativos", category: "Folders" },
  { img: portfolio4, title: "Banner Grande Formato", category: "Banners" },
  { img: portfolio5, title: "Embalagens Especiais", category: "Embalagens" },
  { img: portfolio6, title: "Adesivos Artesanais", category: "Adesivos" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
          Trabalhos Recentes
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Portfólio
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <p className="text-primary text-xs tracking-[0.2em] uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
