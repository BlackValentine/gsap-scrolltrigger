'use client'

import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const menuRef = useRef(null)
  const menuFooterRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.logo div', {
      opacity: 0,
      delay: 1,
      x: 20
    })
    gsap.from(menuRef.current.children, {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      x: 0,
      y: -20,
      stagger: {
        amount: 1
      }
    })

    gsap.utils.toArray('.star').forEach(star => {
      gsap.fromTo(star, {
        rotation: 450,
        opacity: 0,
        y: 100
      }, {
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: star
      })
    })

    gsap.utils.toArray('.title').forEach(title => {
      gsap.fromTo(title, {
        letterSpacing: '10px',
        opacity: 0,
        x: 300,
        skewX: 65
      }, {
        letterSpacing: '0',
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: .5,
        scrollTrigger: title
      })
    })

    gsap.utils.toArray('p').forEach(p => {
      gsap.fromTo(p, {
        opacity: 0,
        x: 150,
        skewX: 30
      }, {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: .5,
        scrollTrigger: p
      })
    })

    gsap.utils.toArray('button').forEach(button => {
      gsap.fromTo(button, {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: button
      })
    })

    gsap.from('.pyramid', {
      opacity: 0,
      scale: .5,
      duration: 1,
      delay: .5
    })

    gsap.fromTo('.hand', {
      scale: .2,
      opacity: 0,
      skewY: 30
    }, {
      scale: 1,
      opacity: 1,
      skewY: 0,
      duration: 1,
      delay: .5,
      scrollTrigger: '.hand'
    })

    gsap.utils.toArray('.line').forEach(line => {
      gsap.fromTo(line, {
        opacity: 0,
        width: '0%'
      }, {
        opacity: 1,
        width: '100%',
        duration: 1,
        delay: 1,
        scrollTrigger: line
      })
    })

    gsap.utils.toArray('.rotation').forEach(rotate => {
      gsap.fromTo(rotate, {
        opacity: 0,
        rotation: 350,
        scale: .2
      }, {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: rotate
      })
    })

    gsap.fromTo('.card', {
      opacity: 0,
      scale: .1,
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: .5,
      stagger: {
        amount: 1
      },
      scrollTrigger: '.card'
    })

    gsap.from(menuFooterRef.current.children, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: .5,
      stagger: {
        amount: 1
      },
      scrollTrigger: {
        trigger: menuFooterRef.current.children
      }
    })
  }, [])

  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <img className="star" src="/static/img/star.png" alt="" />
            <div>Frost Inv.</div>
          </div>
          <ul className="menu-items" ref={menuRef}>
            <li><a href="#about">about</a></li>
            <li><a href="#services">services</a></li>
            <li><a href="#">news</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
      </header>

      <section id='about' className="section-one">
        <div className="container">
          <div className="left-side">
            <div className="title">
              <h1>get gold &
                <img src="/static/img/star.png" alt="" className="star" />
                <br /> silver deliverd <br /> to your door</h1>
            </div>

            <p className="p">
              Gold and silver have intrinsic value and adds
              diversification to your portfolio.
              We help investors narrow thier decision
              down to either buying dold or silver bullion bars or coins
            </p>

            <button>know more</button>

          </div>
          <div className="right-side pyramid">
            <img src="/static/img/gold.png" alt="" className="gold glow image" />
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="left-side hand">
            <img className="gold image" src="/static/img/gold2.png" alt="" />
          </div>
          <div className="right-side">
            <img src="/static/img/star.png" className="star star-s2" alt="" />
            <div className="title">
              <h1>Investing for <br /> the long term</h1>
              <h2>Reasons for investing</h2>
            </div>

            <p className="p">
              People often choose gold bullion as an long term investment.
              Silver generally follows gold in terms of relative values, and in the past decade,
              gold hasdemonstrated a steady overall annual profit.
            </p>

            <div className="line"></div>

            <p className="p">
              They can be traded in the short and medium term, gold &
              silver prices move in the markets.
            </p>
            <button>see directions</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="left-side">
            <div className="title">
              <h1>Timing og gold & <br /> silver prices</h1>
              <h2>An unstoppable duo</h2>
            </div>
            <div className="type g-type">
              <p>Gold</p>
              <p>Gold is seen as a hedge against inflation and a store of value through
                thick and through thin.</p>
            </div>

            <div className="line line-blue"></div>

            <div className="type s-type">
              <p>Silver</p>
              <p>
                Silver prices are much more `volatile` than those of gold
                in the short term.
              </p>
            </div>
            <div className="line"></div>
          </div>
          <div className="right-side rotation">
            <img className="gold3 image" src="/static/img/gold3.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="left-side">
            <img src="/static/img/star.png" className="star-s4 star" alt="" />
            <div className="title">
              <h1>3 direction</h1>
              <h2>Choose your gold</h2>
            </div>
          </div>
          <div className="right-side">
            <p>
              The fineness of gold depends on the amount of ligature - additional metals.
              For example, yellow gold 585* is a metal with the addition
              of 28% silver and 113.5% copper.
            </p>

            <div className="line"></div>
          </div>
        </div>
        <div className="card-container">
          <div className="card card-1">
            <div className="rotation">
              <img src="/static/img/card-1.png" alt="" className="img-card image" />
            </div>
            <div className="color">yellow</div>
            <span>585 standard gold</span>
          </div>
          <div className="card card-2">
            <div className="rotation">
              <img src="/static/img/card-2.png" alt="" className="img-card image" />
            </div>
            <div className="color">white</div>
            <span>585 standard gold</span>
          </div>
          <div className="card card-3">
            <div className="rotation">
              <img src="/static/img/card-3.png" alt="" className="img-card image" />
            </div>
            <div className="color">pink</div>
            <span>750 standard gold</span>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <div className="container" style={{ paddingBottom: '5rem' }}>
          <img src="/static/img/star.png" alt="" className="star star-s5" />
          <div className="left-side">
            <div className="title">
              <h1>stay up-to date</h1>
              <h2>With everything precious metals</h2>
            </div>
          </div>
          <div className="right-side">
            <p className="txt">
              Replenish <span>your portfolio</span>
              with gold and silver <span>to diversity</span>
              your investment portfolio.
            </p>
          </div>
        </div>

        <div className="line"></div>

        <div className="container sides">
          <div className="left-side">
            <div className="logo">
              <img src="/static/img/star.png" className="star" alt="" />
              <div>Frost Inv.</div>
            </div>

            <p className="p">
              We are based in Los Angeles, USA.<br />
              our motto is -investing in knowledge <br />
              pays the best dividends.
            </p>
          </div>
          <div className="right-side">
            <ul className="menu" ref={menuFooterRef}>
              <li><a href="#">Resources</a></li>
              <li><a href="#">company</a></li>
              <li><a href="#">help</a></li>
              <li><a href="#">client</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">support</a></li>
              <li><a href="#">blog</a></li>
              <li><a href="#">services</a></li>
              <li><a href="#">jobs</a></li>
              <li><a href="#">docs</a></li>
              <li><a href="#">news</a></li>
              <li><a href="#">privacy policy</a></li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="left-side">
            <p> &copy; copyright 2022 . All rights reserved</p>
          </div>
          <div className="right-side center">
            <p>Term and Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
