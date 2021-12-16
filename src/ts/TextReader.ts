// export class TextReader {
//     static loadAudioWithItsPath()  //load audio from beginning
//     {
//         window.clearTimeout(valueTimeoutID);
//         clearInterval(clearHandle);
//         audio.pause();
//         bookAudioPlay(0);
//     }

//     static bookAudioPlay(_currIndex: number)  //load audio from _currIndex
//         {
//             let timeDifference = 0;
//             let intialTimeOffSet = addedTimevalues[_currIndex];
//             audio.currentTime = addedTimevalues[_currIndex] / 1000;
//             let startTime = Date.now();
//             audio.play();
//             clearHandle = setInterval(_startPlay, 10);
//             function _startPlay()
//             {
//                 if (_currIndex < (bookCoverString[imgIndex].timeStamp).length)
//                 {
//                     highlightText(_currIndex);
//                     let timenow = Date.now();
//                     timeDifference = timenow - startTime + intialTimeOffSet;;
//                     while (addedTimevalues[_currIndex + 1] < timeDifference)
//                     {
//                         _currIndex += 1;
//                     }
//                 }
//                 else
//                 {
//                     clearInterval(clearHandle);
//                 }
//             }
//         }

//         static calculateTimeTakenByStory()  // It calculate time taken by story
//         {
//             let timeTakenByStory = 0;
//             for (let i = 0; i < bookCoverString[2].timeStamp.length; i++)
//                 timeTakenByStory += bookCoverString[2].timeStamp[i];
//         }

//         addAllTimeTakenByWordsAndMakeArray()   // it calculate total time taken by till the clicked word
//         {
//             for (let i = 1; i < (bookCoverString[imgIndex].timeStamp).length; i++)
//             {
//                 addedTimevalues[i] = addedTimevalues[i - 1] + bookCoverString[imgIndex].timeStamp[i];
//             }
//         }

//         static startAudioFromHere(event: Event)  // read audio from the clicked word
//         {

//             let idOfClickedWord = (event.srcElement as HTMLElement)!.id;
//             indexOfClickedWord = parseInt(idOfClickedWord.replace('text_', ''));
//             audio.pause();
//             clearInterval(clearHandle);
//             bookAudioPlay(indexOfClickedWord);
//         }

//         static pauseStory() // tp pause the story
//         {
//             audio.pause();
//             clearInterval(clearHandle);
//         }

// }
