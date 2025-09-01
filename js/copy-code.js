document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.highlight').forEach(function (block) {
    // Create button
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.type = 'button';
    button.innerText = 'Copy';

    // Insert button
    block.style.position = 'relative';
    button.style.position = 'absolute';
    button.style.top = '3px';
    button.style.right = '3px';
    block.appendChild(button);

    // Copy logic
    button.addEventListener('click', function () {
      // Find the code element
      const code = block.querySelector('pre');
      if (code) {
        navigator.clipboard.writeText(code.innerText).then(() => {
          button.innerText = 'Copied!';
          setTimeout(() => (button.innerText = 'Copy'), 1200);
        });
      }
    });
  });
});