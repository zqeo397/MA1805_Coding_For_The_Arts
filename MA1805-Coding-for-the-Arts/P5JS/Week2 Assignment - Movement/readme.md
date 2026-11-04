Creative portfolio prompt: 02.Movement

For 02.Movement we was tasked with creating Generative art.
for my idea I decided to create a snake themed minigame, where the ball follows your mouse at all times.
Based of distance the brightness of the ball changes + the speed it travels at. 

This was pretty fun to create. 

The challenge I faced initially is that I was simply doing
++BallX / --BallY
Depending on if the mouse was to the left / below.

The issue this had is it would cause the ball to move strictly within 8 axis, 

To fix this I calculated the sqrt (Square Root ) of the X and Y distance, as diagonal distances are longer than just Horizontal or Vertical. This allows me to have an accurate constant distance for the speed towards cursor calculation rather than relying purely on distance of just X and Y limiting to a specific axis.