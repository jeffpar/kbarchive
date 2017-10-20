---
layout: page
title: "Q90819: Paintbrush and Write Use Different Font Size Measurements"
permalink: /kb/090/Q90819/
---

## Q90819: Paintbrush and Write Use Different Font Size Measurements

{% raw %}

	Article: Q90819
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Font sizes in Microsoft Windows Paintbrush and Microsoft Windows Write do not
	match. When you select the same font and size for each application, the results
	are different.
	
	CAUSE
	=====
	
	Paintbrush and Write measure font sizes differently. Write measures in point
	size; Paintbrush measures in pixel lines.
	
	Text in Paintbrush is represented in graphical format, not ASCII, and behaves
	much differently than text in Write. Text can be entered at any point on the
	application workspace. Changing font and text style in Paintbrush affects the
	entire block of text that has been entered since the last insertion. Likewise,
	just one backspace deletes an entire block of text, and no new text can be
	entered until the text pointer has been reinserted.
	
	MORE INFORMATION
	================
	
	Paintbrush creates device-independent bitmaps. When you type text in Paintbrush,
	it displays and prints the text using bitmaps (even if the font you have
	selected is a soft font).
	
	Paintbrush uses screen fonts, and it does not check to see what printer fonts
	your printer has. Therefore, you cannot use a font for which you do not have a
	screen font. Also, the quality of the text in Paintbrush is lower on laser
	printers (even if you have soft fonts) because Paintbrush is using screen fonts
	rather than printer fonts on the screen and on printouts.
	
	Additional query words: 3.00 3.00a 3.10 winfont
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
