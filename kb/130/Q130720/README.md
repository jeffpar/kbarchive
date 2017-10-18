---
layout: page
title: "Q130720: MS-DOS-Based Programs Do Not Use Entire Screen"
permalink: kb/130/Q130720/
---

## Q130720: MS-DOS-Based Programs Do Not Use Entire Screen

	Article: Q130720
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
	
	When you run an MS-DOS-based program in Windows 95, the program may use only the
	upper two-thirds of the screen.
	
	CAUSE
	=====
	
	This problem can occur if you are using a Cirrus Logic 6440 display adapter and
	the number of lines on the screen has been changed to more than 25.
	
	RESOLUTION
	==========
	
	Please contact Cirrus Logic for information about resolving this problem.
	
	STATUS
	======
	
	Cirrus Logic has confirmed this to be a problem in the Cirrus Logic 6440 display
	adapter BIOS.
	
	MORE INFORMATION
	================
	
	If you increase the number of lines on the screen to more than 25 (for example,
	by using the MODE CON:LINES=43 command), the Cirrus Logic 6440 display adapter
	uses only the upper two-thirds of the screen for MS-DOS- based programs.
	Changing the number of lines on the screen back to 25 does not correct the
	problem.
	
	
	Additional query words: TI view
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
