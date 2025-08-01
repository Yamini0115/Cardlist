SETUP INSTRUCTIONS:
 1. Clone the Repository:
      * git clone https://github.com/Yamini0115/Cardlist
      * cd /.cardlist./
   
  2.Run the App:
       npm run dev

  3.Run Unit Tests:
       npm test

SUMMARY:
  Dynamically generated 1000 product cards with images from picsum.photos and rotating text descriptions.
  Implemented a responsive grid layout using react-window's FixedSizeGrid, rendering only visible items to optimize performance.
  Added a "Scroll to Top" button that appears after scrolling 300px.
  Used useRef and addEventListener to track scrolling and trigger button visibility.
  Designed the UI with CSS hover effects and made it mobile-responsive using media queries.

VIRTUAL SCROLLING & TESTING IMPLEMENTATION:
1.Virtual Scolling:
   Used FixedSizeGrid from react-window with:
      columnCount: 4,
      columnWidth: 340,
      rowHeight: 250,
      height: 600.
  Dynamically calculated rowCount and used cell indexing to render card data efficiently.
  Only cards within the current scroll viewport are rendered, reducing memory and DOM load.

2.Unit Testing (React Testing Library):
    Tests included:
     Heading and grid render check.
     Scroll-to-top button visibility and behavior.
     Virtualization test: ensuring non-visible cards (like Product 999) are not in DOM.
     Image rendering test: checks for image src and alt attributes.

  STYLINGS AND RESPONSIVESS:
     Custom CSS styles used for layout, hover animations, and card formatting.
     Responsive design using media queries for screen widths below 992px and 576px.
     Smooth hover zoom effects and fixed position scroll button enhance UX.


     

     

     


       
  
