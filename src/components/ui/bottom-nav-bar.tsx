import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Code2,
  PenTool,
  User,
} from "lucide-react";
import { cn } from "../../lib/utils";

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Projects", icon: Briefcase, path: "/projects" },
  { label: "Skills", icon: Code2, path: "/#skills" },
  { label: "Writing", icon: PenTool, path: "/blog" },
  { label: "Contact", icon: User, path: "/#contact" },
];

const MOBILE_LABEL_WIDTH = 72;

type BottomNavBarProps = {
  className?: string;
  stickyBottom?: boolean;
};

export function BottomNavBar({
  className,
  stickyBottom = true,
}: BottomNavBarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine active index based on route
  const getActiveIndex = () => {
    const path = location.pathname;
    if (path === "/" && location.hash === "") return 0;
    if (path.startsWith("/projects")) return 1;
    if (path === "/" && location.hash === "#skills") return 2;
    if (path.startsWith("/blog")) return 3;
    if (path === "/" && location.hash === "#contact") return 4;
    return 0;
  };

  const [activeIndex, setActiveIndex] = useState(getActiveIndex());

  // Sync active state with route changes
  useEffect(() => {
    setActiveIndex(getActiveIndex());
  }, [location]);

  const handleNav = (idx: number, path: string) => {
    setActiveIndex(idx);
    if (path.startsWith("/#")) {
      if (location.pathname !== "/") {
        navigate(path);
      } else {
        // Smooth scroll if already on home
        const element = document.querySelector(path.replace("/", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(path);
    }
  };

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 26, delay: 0.5 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "bg-white/80 backdrop-blur-md border border-gray-200 rounded-full flex items-center p-2 shadow-2xl space-x-1 min-w-[320px] max-w-[95vw] h-[60px]",
        stickyBottom && "fixed inset-x-0 bottom-6 mx-auto z-50 w-fit",
        className,
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "flex items-center gap-0 px-3 py-2 rounded-full transition-colors duration-200 relative h-11 min-w-[48px] min-h-[44px] max-h-[48px]",
              isActive
                ? "bg-gray-900 text-white gap-2 shadow-sm"
                : "bg-transparent text-gray-500 hover:bg-gray-100",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400",
            )}
            onClick={() => handleNav(idx, item.path)}
            aria-label={item.label}
            type="button"
          >
            <Icon
              size={20}
              strokeWidth={isActive ? 2.5 : 2}
              aria-hidden
              className="transition-colors duration-200"
            />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "6px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.19 },
                marginLeft: { duration: 0.19 },
              }}
              className={cn("overflow-hidden flex items-center max-w-[72px]")}
            >
              <span
                className={cn(
                  "font-semibold text-xs whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis",
                  isActive ? "text-white" : "opacity-0",
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;
