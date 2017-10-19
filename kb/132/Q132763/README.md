---
layout: page
title: "Q132763: DISPLAY Command in Login Script Displays Incorrect Characters"
permalink: /kb/132/Q132763/
---

## Q132763: DISPLAY Command in Login Script Displays Incorrect Characters

	Article: Q132763
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
	
	If your Novell NetWare login script contains a DISPLAY command with a very long
	path, or uses an environment variable containing a very long path, some
	information may not be displayed correctly.
	
	CAUSE
	=====
	
	An internal buffer is too small to hold the path name.
	
	RESOLUTION
	==========
	
	Use a shorter path in the DISPLAY command or environment variable in your login
	script.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
