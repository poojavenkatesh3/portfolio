import React, { useState, useEffect, useContext, useCallback, useRef } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectsSwiper = ({ useHomeLive = false }) => {   // ✅ Added prop
  const { projects } = useContext(ProjectsContext);
  const [items, setItems] = useState(projects);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef(0);
  const lastMoveX = useRef(0);
  const lastMoveTime = useRef(0);
  const velocity = useRef(0);
  const isDragging = useRef(false);

  // ✅ Smooth Transition Helper
  const smoothTransition = useCallback((callback) => {
    requestAnimationFrame(() => callback());
  }, []);

  const rotateRight = useCallback(() => {
    smoothTransition(() => {
      setItems((prev) => {
        const arr = [...prev];
        arr.push(arr.shift());
        return arr;
      });
      setDragOffset(0);
    });
  }, [smoothTransition]);

  const rotateLeft = useCallback(() => {
    smoothTransition(() => {
      setItems((prev) => {
        const arr = [...prev];
        arr.unshift(arr.pop());
        return arr;
      });
      setDragOffset(0);
    });
  }, [smoothTransition]);

  useEffect(() => {
    if (isPaused || isDragging.current) return;
    const timer = setInterval(rotateRight, 1200);
    return () => clearInterval(timer);
  }, [isPaused, rotateRight]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    lastMoveX.current = e.clientX;
    lastMoveTime.current = Date.now();
    setIsPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.clientX;
    const diff = currentX - dragStartX.current;
    const now = Date.now();
    const deltaT = now - lastMoveTime.current;
    velocity.current = (currentX - lastMoveX.current) / deltaT;
    setDragOffset(diff);
    lastMoveX.current = currentX;
    lastMoveTime.current = now;
  };

  const applyInertia = () => {
    let momentum = velocity.current * 500;
    if (momentum > 100) rotateLeft();
    else if (momentum < -100) rotateRight();
    else setDragOffset(0);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    applyInertia();
    setIsPaused(false);
  };

  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    lastMoveX.current = dragStartX.current;
    lastMoveTime.current = Date.now();
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = currentX - dragStartX.current;
    const now = Date.now();
    const deltaT = now - lastMoveTime.current;
    velocity.current = (currentX - lastMoveX.current) / deltaT;
    setDragOffset(diff);
    lastMoveX.current = currentX;
    lastMoveTime.current = now;
  };

  const handleTouchEnd = () => applyInertia();

  return (
    <div
      className="relative w-full max-w-6xl mx-auto h-[600px] flex items-center justify-center overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (isDragging.current) handleMouseUp();
        else setIsPaused(false);
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative flex justify-center items-center">
        {items.map((project, i) => {
          if (i >= 5) return null;

          const offset = i - 2;
          const baseX = offset * 260 + dragOffset / (i === 2 ? 1 : 3);
          const rotateY = offset * -15;
          const scale = i === 2 ? 1 : i === 1 || i === 3 ? 0.85 : 0.7;
          const blur = i === 2 ? "blur(0)" : "blur(4px)";
          const opacity = i === 2 ? 1 : 0.5;

          return (
            <div
              key={i}
              onClick={() => {
                // ✅ Use homeLive only when useHomeLive is true
                const url = useHomeLive && project.homeLive ? project.homeLive : project.live;
                if (url) window.open(url, "_blank");
              }}
              className="absolute transition-all duration-[500ms] ease-[cubic-bezier(0.77,0,0.175,1)] cursor-pointer"
              style={{
                transform: `translateX(${baseX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                filter: blur,
                opacity,
                zIndex: i === 2 ? 10 : 5,
                width: "280px",
                height: "280px",
              }}
            >
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-lg transform transition-transform duration-300 hover:scale-105"
                style={{
                  boxShadow:
                    i === 2
                      ? "0 0 25px rgba(255,20,147,0.5), 0 15px 40px rgba(255,105,180,0.4)"
                      : "0 5px 15px rgba(0,0,0,0.2)",
                }}
              >
                {i === 2 && (
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(120deg, rgba(255,105,180,0.15), rgba(255,20,147,0.05))",
                      boxShadow: "0 0 50px rgba(255,20,147,0.3)",
                    }}
                  ></div>
                )}
                <img
                  src={project.image || "/images/placeholder.png"}
                  alt={project.title}
                  className="w-full h-[60%] object-cover rounded-t-3xl"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{project.category}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSwiper;
