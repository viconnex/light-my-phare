const replaceImage = src => console.log(src);

const style = 'color: red; font-size: 50px';

const code = `
  const imagePhare = document.querySelector('img');
  if(imagePhare){
    imagePhare.insertAdjacentHTML('beforebegin', '<div id="phare" style="${style}">Bijour le phare</div>')
  }
  imagePhare.getAttribute('src')
`;

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  console.log(changeInfo);
  chrome.tabs.executeScript(
    tabId,
    {
      code
    },
    replaceImage
  );
});
