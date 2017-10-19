---
layout: page
title: "Q72460: INFO: Baseline Shifts in Cell When Character Italicized"
permalink: /kb/072/Q72460/
---

## Q72460: INFO: Baseline Shifts in Cell When Character Italicized

	Article: Q72460
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	NOTE: With TrueType fonts in Windows 3.1, this process described below is not necessary. An application should do a version check to determine if it is running under version 3.0 and perform this process only if the application is indeed running under Windows 3.0 or if the application is using non TrueType fonts in Windows 3.1.
	
	SUMMARY
	=======
	
	When a font is italicized under Windows version 3.0, the dimensions of the
	character cells change because the descender of the character may require more
	space at the left edge of the character cell.
	
	Because the character cell is larger, the relative position of the baseline of
	the character within the cell changes. The baseline itself is not affected, but
	when a character is drawn italic and nonitalic with the TextOut() function at
	the same x coordinate, the baseline of the italic font is shifted a few pixels
	to the right.
	
	To account for this shift, calculate the slope of the font -- ascent divided by
	overhang -- after italicization. Using this slope, the number of pixels by which
	the character cell was expanded left is equal to descent divided by slope, or
	(descent times overhang) divided by ascent. This value can be subtracted from
	the x coordinate in the TextOut() call to align the baselines.
	
	MORE INFORMATION
	================
	
	Consider the character "f". In a normal character cell, it would appear as:
	
	         ^ ........
	         | ........
	         | ...xx...
	         | ..x..x..
	   Ascent| ..x.....
	         | ..xx....
	         | ..x.....
	         | ..x.....
	         | ..x.....
	         v .xxx....<-baseline
	
	  Descent^ ........
	
	         v ........
	
	When italicized, the descent is shifted to the left and the ascent is shifted to
	the right, along a line of constant slope equal to the ascent divided by the
	overhang:
	
	         ^ ............
	         | ............
	         | .......xx...
	         | ......x..x..
	   Ascent| .....x......
	         | .....xx.....
	         | ....x.......
	         | ....x.......
	         | ...x........
	         v ..xxx.......<-baseline
	
	  Descent^ ............
	
	         v ............
	                    <->
	                     Overhang
	
	Because the descent of the character is shifted left according to the slope of
	the line, this particular character cell has been expanded one pixel left, which
	has the effect of shifting the baseline in the character cell one pixel right.
	
	Since the overhang represents the amount the ascent of the character is shifted
	right in the cell, the corresponding shift of the descent can be calculated and
	can be called the "underhang":
	
	               descent * overhang
	
	  underhang = --------------------
	
	                     ascent
	
	When calling the TextOut() function, use the normal x-coordinate where the text
	should be drawn, but subtract the underhang. This places the baseline of the
	character exactly where it would be if the character were not italic.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
