"use client";

import { Award, BookOpen, ChefHat, HelpCircle, Mail, Star } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';

const assetMap = [
  { id: "hero-pizza", url: "https://images.pexels.com/photos/5953495/pexels-photo-5953495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Delicious wood-fired pizza fresh from the oven" },
  { id: "margherita", url: "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Fresh Margherita pizza with basil and mozzarella" },
  { id: "pepperoni", url: "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Pepperoni pizza with melted cheese" },
  { id: "quattro-stagioni", url: "https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Four seasons pizza with multiple toppings" },
  { id: "vegetarian", url: "https://images.pexels.com/photos/56014/pizza-pizza-service-italian-eat-56014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Vegetarian pizza with colorful vegetables" }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Pizza"
          button={{
            text: "Order Now",
            href: "https://order.bellapizza.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Italian Pizzeria"
          description="Experience the true taste of Italy with our handcrafted wood-fired pizzas, made from the finest ingredients and traditional recipes passed down through generations of Italian pizza masters."
          tag="Est. 1985"
          tagIcon={Award}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Order Now", href: "https://order.bellapizza.com" }
          ]}
          imageSrc="https://images.pexels.com/photos/5953495/pexels-photo-5953495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Delicious wood-fired pizza fresh from the oven"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardTwo
          title="Our Signature Pizzas"
          description="Each pizza is handcrafted with passion using authentic Italian ingredients and baked to perfection in our traditional wood-fired oven"
          tag="Menu"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              brand: "Bella Pizza",
              name: "Margherita Classica",
              price: "$18.99",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh Margherita pizza with basil and mozzarella"
            },
            {
              id: "2",
              brand: "Bella Pizza",
              name: "Pepperoni Supreme",
              price: "$21.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pepperoni pizza with melted cheese"
            },
            {
              id: "3",
              brand: "Bella Pizza",
              name: "Quattro Stagioni",
              price: "$24.99",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Four seasons pizza with multiple toppings"
            },
            {
              id: "4",
              brand: "Bella Pizza",
              name: "Vegetarian Garden",
              price: "$20.99",
              rating: 4,
              reviewCount: "980",
              imageSrc: "https://images.pexels.com/photos/56014/pizza-pizza-service-italian-eat-56014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Vegetarian pizza with colorful vegetables"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="For over 35 years, we've been crafting authentic Italian pizzas with unwavering passion, using only the finest ingredients imported directly from Italy and traditional recipes that have been perfected through generations of master pizza makers."
          buttons={[
            { text: "Discover Our Story", href: "about" },
            { text: "Visit Our Location", href: "contact" }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Authentic reviews from real customers who have experienced the true taste of Italy at our pizzeria"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Food Blogger",
              testimonial: "Absolutely incredible! The wood-fired oven gives the pizza such an authentic flavor that transports you straight to Italy. The dough is perfectly crispy on the outside and beautifully chewy inside. Best pizza I've had outside of Naples!",
              imageSrc: "https://images.pexels.com/photos/3811663/pexels-photo-3811663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Happy customer Maria Rodriguez"
            },
            {
              id: "2",
              name: "James Thompson",
              role: "Local Resident",
              testimonial: "Been coming here for 10 years and the quality never disappoints. The Margherita is absolute perfection - fresh basil, authentic buffalo mozzarella, and that distinctive smoky flavor from the wood oven. A true culinary gem!",
              imageSrc: "https://images.pexels.com/photos/6969962/pexels-photo-6969962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Satisfied customer James Thompson"
            },
            {
              id: "3",
              name: "Sofia Chen",
              role: "Pizza Enthusiast",
              testimonial: "The atmosphere is cozy and inviting, and the staff treats you like family. The Quattro Stagioni is my favorite - each section has distinct, vibrant flavors that blend together in perfect harmony. Highly recommend to everyone!",
              imageSrc: "https://images.pexels.com/photos/6969962/pexels-photo-6969962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Happy customer Sofia Chen"
            },
            {
              id: "4",
              name: "Antonio Rossi",
              role: "Italian Tourist",
              testimonial: "As someone from Naples, I'm extremely particular about pizza. This place gets everything right! The ingredients are remarkably fresh, the technique is authentic, and it truly tastes like home. Bravissimo!",
              imageSrc: "https://images.pexels.com/photos/16774290/pexels-photo-16774290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Satisfied customer Antonio Rossi"
            },
            {
              id: "5",
              name: "Emily Johnson",
              role: "Regular Customer",
              testimonial: "Perfect romantic date night spot! The ambiance is wonderfully intimate, the wine selection is exceptional, and sharing a pizza here feels truly special. Even the vegetarian options are surprisingly delicious and creative!",
              imageSrc: "https://images.pexels.com/photos/5779751/pexels-photo-5779751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Happy couple Emily Johnson"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Featured On"
          description="Recognized by leading food critics and trusted by thousands of satisfied customers"
          tag="Recognition"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18610082/pexels-photo-18610082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6867964/pexels-photo-6867964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7363202/pexels-photo-7363202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Pizza Stories"
          description="Behind-the-scenes stories, traditional recipes, and the artistry of authentic Italian pizza making"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Recipes",
              title: "The Secret to Perfect Pizza Dough",
              excerpt: "Discover the traditional techniques and premium ingredients that make our pizza dough extraordinary, featuring time-honored methods passed down through generations of Italian bakers.",
              imageSrc: "https://images.pexels.com/photos/5907869/pexels-photo-5907869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chef making pizza dough in kitchen",
              authorName: "Chef Marco",
              authorAvatar: "https://images.pexels.com/photos/6605418/pexels-photo-6605418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Ingredients",
              title: "Sourcing Authentic Italian Ingredients",
              excerpt: "Explore how we carefully import the finest San Marzano tomatoes, authentic buffalo mozzarella, and premium extra virgin olive oil directly from Italy to ensure authentic, exceptional flavors.",
              imageSrc: "https://images.pexels.com/photos/10048321/pexels-photo-10048321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh Italian ingredients for pizza",
              authorName: "Chef Marco",
              authorAvatar: "https://images.pexels.com/photos/6605418/pexels-photo-6605418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "8 Jan 2025"
            },
            {
              id: "3",
              category: "Tradition",
              title: "The Art of Wood-Fired Cooking",
              excerpt: "Understanding why our traditional wood-fired oven makes all the difference in creating the perfect crispy crust and distinctive smoky flavor that defines truly authentic Italian pizza.",
              imageSrc: "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional wood-fired pizza oven",
              authorName: "Chef Marco",
              authorAvatar: "https://images.pexels.com/photos/6605418/pexels-photo-6605418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "2 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about our authentic pizzeria, premium ingredients, and convenient ordering process"
          tag="FAQ"
          tagIcon={HelpCircle}
          imageSrc="https://images.pexels.com/photos/3343622/pexels-photo-3343622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Traditional wood-fired pizza oven"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "Do you offer gluten-free pizza options?",
              content: "Absolutely! We offer delicious gluten-free pizza crusts made with premium rice flour and certified gluten-free ingredients. Please inform us of any allergies when ordering so we can take extra precautions during preparation."
            },
            {
              id: "2",
              title: "How long does it take to prepare a pizza?",
              content: "Our authentic wood-fired pizzas typically take 12-15 minutes to cook perfectly in our 900°F oven. During busy periods, please allow 20-30 minutes total including careful preparation time."
            },
            {
              id: "3",
              title: "Do you deliver or offer takeout?",
              content: "Yes! We offer convenient delivery through DoorDash and Uber Eats, as well as takeout orders. You can call us directly or order online through our website for quick pickup."
            },
            {
              id: "4",
              title: "Can you accommodate large groups or parties?",
              content: "Absolutely! We warmly welcome large groups and can comfortably accommodate parties of up to 40 people. Please call us at least 24 hours in advance to make reservations for groups of 8 or more."
            },
            {
              id: "5",
              title: "What makes your pizza authentic Italian?",
              content: "We use traditional techniques including hand-stretched dough, premium San Marzano tomatoes, authentic buffalo mozzarella, and cook in a wood-fired oven at high heat. Our recipes have been carefully passed down through generations of Italian pizza masters."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contact"
          title="Ready to taste authentic Italy?"
          description="Subscribe to our newsletter for exclusive offers, seasonal menu items, and special events. Be the first to discover our latest culinary creations and seasonal specials!"
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails. You can unsubscribe at any time."
        />
      </div>
    </ThemeProvider>
  );
}