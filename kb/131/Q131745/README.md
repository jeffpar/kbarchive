---
layout: page
title: "Q131745: VidEdit &amp; VidCap Version 1.1 Are Incompatible with Windows 95"
permalink: kb/131/Q131745/
---

## Q131745: VidEdit &amp; VidCap Version 1.1 Are Incompatible with Windows 95

	Article: Q131745
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
	
	When you try to create a palette in VidEdit or VidCap version 1.1, you may
	receive one of the following error messages:
	
	  Program Error: Integer divide by 0
	
	  An error has occurred in your application. To keep working anyway, click
	  Ignore and save your work in a new file. To quit this program, click Close.
	  You will lose information that was created since the last save.
	
	If you click Ignore, nothing happens. If you click Close, you receive the
	following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	CAUSE
	=====
	
	Microsoft Video version 1.1 for Windows was not designed to run in Windows 95.
	
	RESOLUTION
	==========
	
	When you create a palette, do not specify more than 236 colors. If you receive
	either of the error messages listed above, restart Windows 95 before you try
	again to create the palette.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
