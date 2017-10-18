---
layout: page
title: "Q58388: Line Spacing in Windows 3.0 Write"
permalink: kb/058/Q58388/
---

## Q58388: Line Spacing in Windows 3.0 Write

	Article: Q58388
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you enter small point-size text into Microsoft Windows Write using
	single-spaced lines, line-spacing problems may occur.
	
	When the word wrap occurs and the cursor returns the next line down, it appears
	to be 1.5 lines below the text instead of one line. As each line word wraps, the
	previous line jumps up 0.5 line space. This continues as long as you continue to
	type a paragraph.
	
	If you save the file, then open it, the last line is still 1-1.5 spaces down.
	
	However, if you set the spacing (through the Paragraph menu) again for single
	spacing, the bottom line is spaced properly and the problem doesn't appear again
	in the work session.
	
	This happens with any small text (Helv 6 or 8, Courier 10, or less) and only when
	the end-of-document mark is on the same line.
	
	MORE INFORMATION
	================
	
	You may notice similar behavior if you get close enough to the end of the line,
	causing the next character you type to produce a wrap. Before typing another
	character, use the Character Fonts dialog box to double the font size. When you
	actually type the character, the rest of the line adjusts because of the size of
	that one character.
	
	It seems to work if you change the paragraph formatting because a paragraph mark
	(carriage return) is automatically placed at the end of the paragraph so that
	the end mark is on the next line.
	
	Word for Windows does not have this problem because it was designed to have the
	end mark always occur on the line AFTER the last line of text.
	
	NOTE: Even when this extra space on the current line for the caret/end mark
	appears on the screen, everything prints correctly.
	
	Additional query words: 3.0 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
