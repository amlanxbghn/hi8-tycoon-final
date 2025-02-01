"use client";

import React, { useState } from 'react';
import { Plus, Asterisk } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  question: string;
  answer: string;
  isFirst: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isFirst }) => {
  const [isOpen, setIsOpen] = useState(isFirst);

  return (
    <motion.div
      className="mb-8 bg-white rounded-xl overflow-hidden"
      initial={false}
      animate={{ height: isOpen ? "auto" : "auto" }}
      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => !isFirst && setIsOpen(!isOpen)}
      >
        <span className="md:text-xl text-start text-gray-900 font-semibold flex-grow pr-4">
          {question}
        </span>
        <div className="flex-shrink-0">
          {isFirst ? (
            <Asterisk size={24} className="text-[#F90200]" />
          ) : (
            <Plus
              size={24}
              className={`text-[#F90200] transition-transform duration-300 ${
                isOpen ? 'transform rotate-45' : ''
              }`}
            />
          )}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {(isOpen || isFirst) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-4 pb-4 text-start text-zinc-500">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface AccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

const Accordion = ({ items }: AccordionProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
};

export default Accordion;