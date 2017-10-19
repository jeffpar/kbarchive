---
layout: page
title: "Q82327: Saving File in Ventura 4.0 Causes Sharing Violation"
permalink: /kb/082/Q82327/
---

## Q82327: Saving File in Ventura 4.0 Causes Sharing Violation

	Article: Q82327
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you save a file in Ventura Publisher version 4.0 with a filename that
	includes an extended character greater than ANSI 127, the following error
	message is displayed in Microsoft Windows:
	
	  Sharing Violation on Drive C:
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Do not load SHARE.EXE.
	
	  -or-
	
	- Do not use extended characters in filenames.
	
	MORE INFORMATION
	================
	
	This problem does not occur with Ventura Publisher version 3.0.
	
	Ventura Publisher is manufactured by Ventura Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.11 3.10 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	
	=============================================================================
	
