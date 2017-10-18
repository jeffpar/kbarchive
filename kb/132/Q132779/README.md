---
layout: page
title: "Q132779: Horizontal Strip Running Across the Screen"
permalink: kb/132/Q132779/
---

## Q132779: Horizontal Strip Running Across the Screen

	Article: Q132779
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
	
	When you are using a computer with a Western Digital 90C24A controller, you may
	see a horizontal strip running across the screen if you open a full- screen
	MS-DOS session and then press CTRL+ESC to switch back to the Windows 95 graphic
	user interface (GUI). When this occurs, moving the mouse may move the strip on
	the screen. The strip may contain garbled characters.
	
	CAUSE
	=====
	
	This problem may occur because of a timing issue related to the Western Digital
	90C24A controller.
	
	RESOLUTION
	==========
	
	To correct this problem, use either of the following methods:
	
	Method 1
	--------
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider one notch to the left.
	
	5. Click OK.
	
	Method 2
	--------
	
	1. Click the Start button, then click Run.
	
	2. In the Open box, type "system.ini" (without the quotation marks) and then
	  click OK.
	
	3. Add the following line to the [Display] section of the file:
	
	  SWCursor=1
	
	4. On the File menu, click Save.
	
	5. On the File menu, click Exit.
	
	6. Restart your computer.
	
	MORE INFORMATION
	================
	
	This problem has been observed on the following computers:
	
	- IBM ThinkPad with Western Digital chip sets (755xxx, 750, 360)
	
	- Toshiba T4800, T4850, T4700
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
