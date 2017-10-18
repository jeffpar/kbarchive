---
layout: page
title: "Q134509: Incorrect Colors in MS-DOS-Based Graphics Programs in a Window"
permalink: kb/134/Q134509/
---

## Q134509: Incorrect Colors in MS-DOS-Based Graphics Programs in a Window

	Article: Q134509
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an MS-DOS-based graphics program in a Windows 95 window, its colors
	may not be displayed correctly.
	
	CAUSE
	=====
	
	MS-DOS-based graphics programs that change their color tables are known to
	exhibit this behavior in Windows 95.
	
	
	RESOLUTION
	==========
	
	To work around this problem, press ALT+ENTER to run the MS-DOS-based graphics
	program full-screen instead of in a window. If it is necessary to place the
	program in a window (for example, in order to select an image for placement on
	the Windows Clipboard), minimize the window, and then restore it. This may cause
	the colors to be redrawn correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	MORE INFORMATION
	================
	
	The following are examples of programs that exhibit this behavior:
	
	- B-Wing by LucasArts
	
	- Dragon Lore by MindScape
	
	- Sierra Online Game Pak by Sierra
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
