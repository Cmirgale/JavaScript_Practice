

function Book(title,author,pages,read)
{
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function()
    {
        return `${title} by ${author},${pages},${read} finished reading the book.`;
    }
}

const gameOfThrones=new Book('Game Of Thrones','George R R Martin','10000','not');
console.log(gameOfThrones.info());


