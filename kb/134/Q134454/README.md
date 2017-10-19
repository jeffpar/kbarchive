---
layout: page
title: "Q134454: No Pointer After Exiting MS-DOS Window Using 928 Movie Card"
permalink: /kb/134/Q134454/
---

## Q134454: No Pointer After Exiting MS-DOS Window Using 928 Movie Card

	Article: Q134454
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you exit a full-screen MS-DOS session, the mouse pointer may not appear on
	the screen.
	
	CAUSE
	=====
	
	This problem can occur when you are using a Video Logic 928 Movie (S3) video
	adapter in 256-color mode. This video adapter does not support full graphics
	acceleration.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Reduce the graphics acceleration. To do so, follow these steps:
	
	  1. Click the Start button, point to Settings, and then click Control Panel.
	
	  2. Double-click the System icon.
	
	  3. On the Performance tab, click Graphics.
	
	  4. Move the Hardware Acceleration slider one notch to the left.
	
	  5. Click OK.
	
	  6. Click Close. When you are prompted to restart your computer, do so.
	
	- Reduce the color palette to 16 colors. To do so, follow these steps:
	
	  1. Use the right mouse button to click an open area of the desktop, and then
	     click Properties on the menu that appears.
	
	  2. Click the Settings tab.
	
	  3. In the Color Palette box, click 16 Color.
	
	  4. Click OK. When you are prompted to restart the computer, do so.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For more
	information about resolving this issue, contact the hardware manufacturer.
	
	MORE INFORMATION
	================
	
	This behavior is exclusive to the Video Logic 928 Movie card and has not been
	demonstrated on any other S3-type chip set.
	
	
	Additional query words: diamond card
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
