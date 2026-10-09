import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MobileMenu() {
  const nav = [
    ["/", "Home"], 
    ["/story", "Our story"], 
    ["/system", "The system"], 
    ["/team", "The team"]
  ];

  return (
    <motion.nav 
      className="menu-overlay" 
      aria-label="Mobile navigation" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <div className="menu-stain" />
      <div className="menu-links">
        {nav.map(([to, label], i) => (
          <motion.div 
            key={to} 
            initial={{ opacity: 0, x: -28 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ type: "spring", stiffness: 110, damping: 18, delay: i * .06 }}
          >
            <NavLink to={to} end={to === "/"}>
              <small>0{i + 1}</small>
              {label}
              <ArrowRight />
            </NavLink>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
