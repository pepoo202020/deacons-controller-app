"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect, useCallback } from "react";
import { HiSearch } from "react-icons/hi";
import { LuLoader } from "react-icons/lu";
import Image from "next/image";
import en from "@/locales/en.json";

// Search Result Item Interface
export interface SearchResultItem {
  id: string;
  name: string;
  email?: string;
  image?: string;
}

interface SearchProps {
  placeholder?: string;
  shortcutKey?: string;
  isLoading?: boolean;
  results?: SearchResultItem[];
  onSearch?: (query: string) => void;
  onSelectItem?: (item: SearchResultItem) => void;
  className?: string;
  showResults?: boolean;
  t: (key: keyof typeof en) => string;
}

// Search Result Item Component
interface SearchResultItemBoxProps {
  item: SearchResultItem;
  onSelect: (item: SearchResultItem) => void;
  isSelected?: boolean;
}

export const SearchResultItemBox = ({
  item,
  onSelect,
  isSelected = false,
}: SearchResultItemBoxProps) => {
  const handleClick = () => {
    onSelect(item);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(item);
    }
  };

  return (
    <div
      role="option"
      aria-selected={isSelected}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors",
        "hover:bg-accent focus:bg-accent focus:outline-none",
        "rounded-md",
        isSelected && "bg-accent",
      )}
    >
      {/* Image */}
      {item.image ? (
        <Image
          src={item.image}
          alt={item.name}
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
      ) : (
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
          {item.name.charAt(0).toUpperCase()}
        </div>
      )}

      {/* Name & Email */}
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-sm font-medium text-foreground truncate">
          {item.name}
        </span>
        {item.email && (
          <span className="text-xs text-muted-foreground truncate">
            {item.email}
          </span>
        )}
      </div>
    </div>
  );
};

// Main Search Component
export default function Search({
  placeholder = "Search...",
  shortcutKey = "K",
  isLoading = false,
  results = [],
  onSearch,
  onSelectItem,
  className,
  showResults = true,
  t,
}: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);
    onSearch?.(value);
    setIsOpen(value.length > 0);
  };

  // Handle item selection
  const handleSelectItem = useCallback(
    (item: SearchResultItem) => {
      onSelectItem?.(item);
      setQuery("");
      setIsOpen(false);
      setSelectedIndex(-1);
    },
    [onSelectItem],
  );

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelectItem(results[selectedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Global keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === shortcutKey.toLowerCase()
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [shortcutKey]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full max-w-md", className)}
    >
      {/* Search Input */}
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {isLoading ? (
            <LuLoader className="h-4 w-4 animate-spin" />
          ) : (
            <HiSearch className="h-4 w-4" />
          )}
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder={t("search.placeholder")}
          aria-label={t("search.placeholder")}
          aria-controls="search-results"
          className={cn(
            "w-full h-9 px-10 rounded-md border border-input bg-background",
            "text-sm placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
            "transition-shadow",
          )}
        />

        {/* Keyboard Shortcut Badge */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 pointer-events-none">
          <kbd className="h-5 px-1.5 inline-flex items-center justify-center rounded border border-border bg-muted text-[10px] font-medium text-muted-foreground">
            {t("search.keyboardShortcut")}
          </kbd>
        </div>
      </div>

      {/* Results Dropdown */}
      {showResults && isOpen && (
        <div
          id="search-results"
          role="listbox"
          className={cn(
            "absolute top-full left-0 right-0 mt-1 z-50",
            "max-h-72 overflow-y-auto",
            "rounded-md border border-border bg-popover shadow-lg",
            "animate-in fade-in-0 zoom-in-95",
          )}
        >
          {isLoading ? (
            <div className="flex items-center justify-center py-6">
              <LuLoader className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : results.length > 0 ? (
            <div className="p-1">
              {results.map((item, index) => (
                <SearchResultItemBox
                  key={item.id}
                  item={item}
                  onSelect={handleSelectItem}
                  isSelected={index === selectedIndex}
                />
              ))}
            </div>
          ) : (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
