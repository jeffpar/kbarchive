---
layout: page
title: "Q71547: Known Problems with TIGA Driver"
permalink: /kb/071/Q71547/
---

## Q71547: Known Problems with TIGA Driver

	Article: Q71547
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses known problems with the Texas Instruments Graphics
	Adapter (TIGA) video driver version 2.0 release 1.2 for Microsoft Windows
	version 3.0. The date of this driver is 12/21/90. The information in this
	article can be found in the text file that comes on the disk with the TIGA
	driver.
	
	MORE INFORMATION
	================
	
	MS-DOS-Based Applications
	-------------------------
	
	When you run two full-screen MS-DOS-based applications in 386 enhanced mode and
	press ALT+TAB to cycle directly from one MS-DOS-based application to the other,
	the cycling title screen remains on the screen. The second MS-DOS-based
	application appears to have a corrupted screen.
	
	Switching to Windows and back to the MS-DOS-based application properly restores
	the screen of the MS-DOS-based application. The ALT+ESC key combination does not
	exhibit this problem.
	
	Running MS-DOS in a Window
	--------------------------
	
	When you run MS-DOS in a window, the MS-DOS cursor disappears when the cursor is
	at the bottom of the window. (The cursor is actually below the edge of the
	window.) Use the MS-DOS CLS command to clear the MS-DOS screen and move the
	cursor to the top of the window.
	
	Shelling to MS-DOS in Real Mode
	-------------------------------
	
	When you run Windows in real mode and the TIGA is set at 4 bits per pixel,
	exiting an MS-DOS shell sometimes causes the color palette to be reloaded
	incorrectly. Exit and restart Windows to reset the color palette.
	
	Using 256-Color Display
	-----------------------
	
	If the desktop wallpaper is a 256-color bitmap and an application uses a
	different color palette, when the application is minimized or terminated, the
	desktop wallpaper's colors may be changed. Exit and restart Windows to reset the
	color palette.
	
	Mouse Pointer Leaves a Trail
	----------------------------
	
	If you select custom colors using the Control Panel Colors icon, the cross hair
	(mouse pointer) leaves a trail of black pixels. At this time, no solution for
	this problem is available.
	
	Asymetrix ToolBook - Animation Primer
	-------------------------------------
	
	On the title screen, when the bouncing red ball moves behind the text boxes, bits
	of the black text pixels disappear. As the ball passes behind a section that has
	disappeared, the bits sometimes reappear. At this time, no solution for this
	problem is available.
	
	Micrografx Designer
	-------------------
	
	Micrografx Designer comes with a sample drawing of a highway scene, ART-WORK.DRW.
	The line in the middle-road dividing line should be distinctly dashed. Instead
	it looks like a dotted line. The road color is light gray instead of dark gray.
	
	Microsoft Windows Paintbrush
	----------------------------
	
	Flipping a selected bitmap region vertically or horizontally will often cause
	white pixels to be left at the edge of the selection box. Invert the image twice
	to restore the image.
	
	The spray pattern for the spray can is wrong. At this time, no solution for this
	problem is available.
	
	In 16 colors, green and cyan colors are not displayed correctly. The color green
	consists of green and yellow. The color cyan consists of cyan and white. This
	does not happen on the inside of shapes.
	
	Microsoft PowerPoint
	--------------------
	
	Text consists of vertical lines instead of solid characters. The solution is to
	use colored text at 8 bits per pixel only.
	
	Terminal
	--------
	
	NOTE: This Terminal information pertains to the 1024 x 768 (TIGA48.DRV) driver
	only.
	
	The text buffer window in Terminal does not display text properly with the System
	font. When scrolling back through the text in the buffer, the characters become
	distorted. All other fonts work correctly.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these product's performance
	or reliability.
	
	For more information, contact Texas Instruments.
	
	Additional query words: 3rdparty WIN30 3.00 3.00a monitor screen graphic
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
