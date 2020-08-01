class HomeScreen{
    constructor(){
        this.read=createButton("Read Book");
        this.write=createButton("Write Book");
        this.donate=createButton("Donate Book");
    }
    hide(){
         this.read.hide();
         this.write.hide();
         this.donate.hide();
    }
    display(){
        this.read.position(displayWidth/2-50,100);
        this.write.position(displayWidth/2-50,300);
        this.donate.position(displayWidth/2-50,500);
        this.read.mousePressed(()=>{
            homescreen.hide();
             read=new ReadBooks();
            read.displayList();
        })
        this.write.mousePressed(()=>{
            homescreen.hide();
             write=new WriteBooks();
            write.displayList();
        })
        this.donate.mousePressed(()=>{
            homescreen.hide();
             donate=new DonateBooks();
            donate.displayList();
        })
    }
}
