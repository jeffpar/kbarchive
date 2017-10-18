---
layout: page
title: "Q136596: Curves And Colors Screen Saver Takes Long Time to Clear Screen"
permalink: kb/136/Q136596/
---

## Q136596: Curves And Colors Screen Saver Takes Long Time to Clear Screen

	Article: Q136596
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
	
	If you clear the Clear Screen check box in the settings for the Curves And
	Colors screen saver, the screen saver may take a long time to clear the corners
	of the screen.
	
	CAUSE
	=====
	
	The Curves And Colors screen saver uses Bezier curves to draw the lines that
	clear the screen. Because of the way in which Bezier curves are generated, it
	may take a long time for these lines to reach the corners of the screen.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Configure the screen saver to clear the screen before it begins generating
	  the Bezier curve lines. To do so, follow these steps:
	  1. Use the right mouse button to click an empty area on the desktop, and then
	     click Properties on the menu that appears.
	
	  2. On the Screen Saver tab, make sure that the Curves And Colors screen saver
	     is selected, and then click the Settings button.
	
	  3. Click the Clear Screen check box to select it.
	
	  4. Click OK.
	
	- Use a different Windows 95 screen saver. The Curves And Colors screen saver
	  is the only screen saver included with Windows 95 that behaves in this
	  manner.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
