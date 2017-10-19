---
layout: page
title: "Q132835: Brief 3.0 Behaves Erratically with Long PATH Variable"
permalink: /kb/132/Q132835/
---

## Q132835: Brief 3.0 Behaves Erratically with Long PATH Variable

	Article: Q132835
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
	
	If your PATH environment variable is longer than 128 characters, the Brief 3.0
	text editor may behave erratically or stop responding (hang).
	
	CAUSE
	=====
	
	Windows 95 allows you to set a PATH variable that is longer than the Brief
	editor can handle. Brief overwrites internal program variables when it
	encounters a PATH variable that is longer than 128 characters.
	
	RESOLUTION
	==========
	
	Edit the Config.sys and Autoexec.bat files to modify the PATH variable so that
	it is no longer than 128 characters.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
