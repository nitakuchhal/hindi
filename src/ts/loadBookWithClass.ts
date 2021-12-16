// import { TextReader } from "../ts/TextReader";
import { allStoryInformation as bookCoverString } from "./Data/BookCoverInfo";
import * as images from "../images/bookCover/*.jpg";

var previousHighlightElement: HTMLElement | null;
//var currentIndex = 0;
var timeStampArray: number[];
let addedTimevalues = [0]; //This is an array to add all the time values
var previousTime: number; // time taken by previous word
var audio: HTMLAudioElement;
var imgIndex: number;
let indexOfClickedWord: number;
let valueTimeoutID: number;
let readStartTime: number;
let clearHandle = -1;

class StoryBook {
  loadStoryPage(arg: MouseEvent) {
    const img = arg.target as HTMLImageElement;
    imgIndex = parseInt(img.getAttribute("data-BookIndex")!);
    readStartTime = Date.now();
    this.loadClickedStory();
    // addAllTimeTakenByWordsAndMakeArray();

    var displayCont = document.getElementById("displaySelectedBook")!;
    displayCont.style.setProperty("display", "block");
    audioFilePath = "./sounds/story/" + bookCoverString[imgIndex].audioFile;
    audio = new Audio(audioFilePath);
    audio.load();
  }

  loadClickedStory() {
    const container = document.getElementById("clickSelectedBookText")!;
    const textArray = bookCoverString[imgIndex].text;
    let span =
      " <br>You can click on any word to listen audio from there. <br><br>";
    let index = 0;
    const paragraphArray = [];
    for (let i = 0; i < textArray.length; i++) {
      span += "<p>";
      paragraphArray[i] = textArray[i].trim().split(" ");
      for (let j = 0; j < paragraphArray[i].length; j++) {
        if (paragraphArray[i][j].charCodeAt(0) === 2404) {
          span += `<span>${textArray[i]} </span>`;
        } else {
          span += `<span id="text_${index++}">${paragraphArray[i][j]} </span>`;
        }
      }
      span += "</p>";
    }
    container.innerHTML += span;
    this.attachImageToStory();
  }

  attachImageToStory() {
    const storyImg = document.createElement("img");
    storyImg.src = images[bookCoverString[imgIndex].name];
    storyImg.style.setProperty("margin-left", "auto");
    storyImg.style.setProperty("margin-right", "auto");
    storyImg.style.setProperty("display", "block");
    storyImg.style.setProperty("max-width", "100%");
    document.getElementById("clickSelectedBookText")!.appendChild(storyImg);
  }

  createAllStoryPage() {
    for (let i = 0; i < bookCoverString.length; i++) {
      const link = document.createElement("a");
      link.id = "link" + i;
      link.href = bookCoverString[i].link;

      const img = document.createElement("img");

      img.id = "img" + i;
      img.setAttribute("data-BookIndex", i.toString());
      img.onclick = this.loadStoryPage;

      img.width = 200;
      img.height = 290;
      img.src = images[bookCoverString[i].image];

      link.appendChild(img);
      document.getElementById("displayBookCover")!.appendChild(link);
    }
  }

  // highlightText(index: number)
  // {
  //     if (previousHighlightElement)
  //     {
  //         previousHighlightElement.style.setProperty("background-color", "");
  //     }

  //     const el = document.getElementById("text_" + index)!;
  //     el.style.setProperty("background-color", "yellow");
  //     previousHighlightElement = el;
  // }

  closeStoryPage() {
    audio.pause();
    clearInterval(clearHandle);
    clearTimeout(valueTimeoutID);
    document
      .getElementById("displaySelectedBook")!
      .style.setProperty("display", "none");
    document.getElementById("clickSelectedBookText")!.innerHTML = "";
  }
}

var audioFilePath: string;
let allStoryBooks = new StoryBook();
allStoryBooks.createAllStoryPage();
