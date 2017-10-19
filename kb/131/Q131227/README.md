---
layout: page
title: "Q131227: Why HyperTerminal Connectoid File Sizes May Vary"
permalink: /kb/131/Q131227/
---

## Q131227: Why HyperTerminal Connectoid File Sizes May Vary

	Article: Q131227
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	HyperTerminal connectoid (.HT) files may vary in size.
	
	MORE INFORMATION
	================
	
	HyperTerminal connectoids are files that store settings for individual
	HyperTerminal connections. Connectoids contain the backscroll buffer from the
	last time the connection was used. Because the size of the backscroll buffer can
	vary, the size of the connectoids can vary. The default size of the backscroll
	buffer is 500 lines. To change the size of the backscroll buffer for a
	connectoid, follow these steps:
	
	1. Use the right mouse button to click the connectoid you want to change, then
	  click Properties on the menu that appears.
	
	2. Click the Settings tab.
	
	3. In the Backscroll Buffer Lines box, enter the number of lines you want for
	  the backscroll buffer.
	
	4. Click OK.
	
	When you open a HyperTerminal connectoid, you can display the contents of the
	backscroll buffer by moving the scroll box. The information in the backscroll
	buffer includes information from all the previous sessions that fits in the
	defined buffer size.
	
	REFERENCES
	==========
	
	Microsoft Windows 95 "Resource Kit," page 798
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
