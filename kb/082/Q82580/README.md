---
layout: page
title: "Q82580: Hollywood Version 1.0 Quits During Show Sample Template"
permalink: kb/082/Q82580/
---

## Q82580: Hollywood Version 1.0 Quits During Show Sample Template

	Article: Q82580
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Claris Corporation's Hollywood, version 1.0, does not complete its Show Sample
	Template function under Windows version 3.1.
	
	CAUSE
	=====
	
	Hollywood is passing an uninitialized stack variable. Uninitialized stack
	variables were benign in Windows 3.0, but cause problems in Windows 3.1.
	
	To correct this problem, contact Claris support and request an upgrade.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
