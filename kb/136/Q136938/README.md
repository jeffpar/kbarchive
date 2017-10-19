---
layout: page
title: "Q136938: Missing Third-Party Compression Driver in MS-DOS Mode"
permalink: /kb/136/Q136938/
---

## Q136938: Missing Third-Party Compression Driver in MS-DOS Mode

	Article: Q136938
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
	
	When you create a shortcut that is configured to restart your computer in MS-DOS
	mode, and you choose to specify a new MS-DOS configuration, the MS-DOS-based
	program that the shortcut is configured to start may not be able to run if you
	are using third-party disk compression software.
	
	CAUSE
	=====
	
	This problem can occur if the Config.sys file that you specified for the
	shortcut does not contain a line that loads the third-party disk compression
	software.
	
	RESOLUTION
	==========
	
	Modify the Config.sys file for the shortcut so that it contains a line to load
	the third-party disk compression software. To do so, follow these steps:
	
	1. Use the right mouse button to click the shortcut, and then click Properties
	  on the menu that appears.
	
	2. On the Program tab, click the Advanced button.
	
	3. Add a line to load the third-party disk compression software in the
	  "Config.sys for MS-DOS mode" box. For information about the correct
	  parameters for this line, please consult the third-party disk compression
	  software's manual or manufacturer.
	
	4. Click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
