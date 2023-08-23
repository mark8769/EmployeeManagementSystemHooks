## package.json

- Contains dependencies along with version numbers.

- Contains react scripts that you can use (command line scripts)

## public/

- index.html
    -   Only one html file because react is for single place applications (SPA's)
    -   In index.html, there is a div element with id="root". All components will be dynamically 
    rendered in this location.
    -   Typically you never change this file, only adding scripts/libraries to header tag.