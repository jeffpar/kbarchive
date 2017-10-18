---
layout: page
title: "Q44922: Adjusting the Alignment of PostScript Output"
permalink: kb/044/Q44922/
---

## Q44922: Adjusting the Alignment of PostScript Output

	Article: Q44922
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most PostScript printers have their printable regions factory aligned to a
	tolerance of 1/8 inch. This means that if you print a page from an application
	such as Aldus PageMaker, with a line exactly 1 inch from the physical edge of
	the page, it may be off by as much as 1/8 inch in one direction or the other.
	This applies to both vertical and horizontal alignment.
	
	This is not a problem with the Windows PostScript driver. The Windows PostScript
	driver does not set the position of the printable region; it uses the factory
	set position. If the factory set position is off, the Windows PostScript output
	will be off.
	
	You can permanently adjust the position of the printable region on the page in
	increments of 1/300 inch.
	
	MORE INFORMATION
	================
	
	Use the following PostScript code to adjust the position on the page of the
	printable region:
	
	     serverdict begin 0 exitserver
	     statusdict begin
	     yyy xxx setmargins
	     start
	     ^D
	     ^C
	
	The "yyy" above represents the number of 1/300-inch units that you want to adjust
	the vertical position of the printable region. Positive numbers move the
	printable region downward, and negative numbers move the region upward.
	
	The "xxx" represents the number of 1/300-inch units that you want to adjust the
	horizontal position. Positive moves the region to the right, and negative moves
	to the left.
	
	To adjust the position, follow these steps:
	
	1. Create a test page in your application:
	
	  a. Place a vertical line exactly 1 inch from the left edge of the page.
	
	  b. Place and a horizontal line exactly 1 inch from the top edge of the page.
	
	  c. Set both vertical and horizontal margins to 0.
	
	2. Print the page, and measure the amount by which the lines vary from their
	  ideal 1-inch positions.
	
	3. Convert this measurement to 1/300-inch units. For example, 1/16 inch would be
	  approximately 19 units.
	
	4. Use an ASCII text editor (such as Notepad) to create a text file of the above
	  PostScript code. Note that you create the ^D and ^C lines by using the caret
	  character on the keyboard, not by typing CTRL+D or CTRL+C. Substitute your
	  measurements for the the "yyy" and "xxx".
	
	5. Copy the file to your printer. Most PostScript printers reprint their startup
	  pages at this point. If you receive a PostScript error printout, your printer
	  does not support this type of operation.
	
	Your printable region alignment is now corrected. Reprint your test page to
	verify this. If you overcorrected, simply repeat this process using new
	measurements.
	
	The new alignment is written to your printer's nonvolatile memory and the
	adjustment is permanent.
	
	
	Additional query words: 3rdparty printing 3.00 3.00a 3.10 3.11 windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
