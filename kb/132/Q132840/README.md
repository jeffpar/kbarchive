---
layout: page
title: "Q132840: Insufficient Memory Errors in Tony Larussa Baseball 3 Game"
permalink: /kb/132/Q132840/
---

## Q132840: Insufficient Memory Errors in Tony Larussa Baseball 3 Game

{% raw %}

	Article: Q132840
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
	
	When you try to run the game Tony Larussa Baseball 3, you may receive the
	following error message:
	
	  ** SYSTEM ERROR **
	  Not Enough Memory Available
	
	CAUSE
	=====
	
	This program was not designed to run in a virtual memory environment.
	
	RESOLUTION
	==========
	
	To configure this game to run in Windows 95, follow these steps:
	
	1. Use the right mouse button to click the Tony3.bat file in Windows Explorer or
	  My Computer, and then click Properties on the menu that appears.
	
	2. Click the Memory tab.
	
	3. In the MS-DOS Protected-Mode (DPMI) Memory area, enter the following value in
	  the Total box:
	
	  12288
	
	4. Click OK.
	
	You must run the program by double-clicking the Tony3.bat file in Windows
	Explorer or My Computer, or by typing "tony3.bat" (without the quotation marks)
	in the Run dialog box. Typing the program name at an MS-DOS prompt does not use
	the new configuration.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
