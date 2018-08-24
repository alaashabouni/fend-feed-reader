/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    //test suite of RSS feed definitions
    describe('RSS Feeds', function() {
        //ensures allFeeds variable is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //ensures each feed in allFeeds has url and is longer than zero
         it('url defined', function() {
           for(let feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           }
         });


        //ensures each feed in allFeeds has name and is longer than zero
         it('name defined', function() {
           for(let feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           }
         });

    });


    //Menu test suite
describe('The Menu', function() {


        //Ensure menu is initially hidden
         it('is hidden', function(){
           const body = document.querySelector('body');
           expect(body.classList.contains('menu-hidden')).toBe(true);
         });

         //ensure menu changes when clicked
          it('toggles on and off', function(){
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menu.click(2);
            expect(body.classList.contains('menu-hidden')).toBe(true);
          });
});
    //Initial Entries test suite
  describe('Initial Entries', function(){

        //ensure at least a single entry in the feed element
      beforeEach(function(done){
        loadFeed(0, done);
      });

      it('completes work', function(){
        const feed = document.querySelector('.feed');
        expect(feed.children.length > 0).toBe(true);
      });
});

    //New feed selection test suite
    describe('New Feed Selection', function(){
      let feedOne;
      let feedTwo;

        beforeEach(function(done){
            loadFeed(0, function(){
                feedOne = document.querySelector(".entry").innerText;
                  

                loadFeed(1, function(){
                    feedTwo = document.querySelector(".entry").innerText;

                    done();
                });
            });
        });

        it("content changes", function(){
            expect(feedOne === feedTwo).not.toBe(true);
        });
});

}());
