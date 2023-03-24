import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Empresa Acme" });
});

router.get("/Nosotros", (req, res) => {
  res.render("Nosotros", { title: "Nosotros" });
});

router.get('/Servicios', (req,res) => 
{res.render('Servicios',{titulo: 'Nuestros Servicios' })
});

router.get('/Catalogo', (req,res) => 
{res.render('Catalogo',{titulo: 'Catalogo de Clientes' })
});

router.get("/Contactenos", (req, res) => {
  res.render("Contactenos", { title: "Contactenos" });
});

export default router;
