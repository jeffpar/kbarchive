---
layout: page
title: "Q89962: Toshiba T3300SL Date and Time Do Not Change on Resume"
permalink: /kb/089/Q89962/
---

## Q89962: Toshiba T3300SL Date and Time Do Not Change on Resume

	Article: Q89962
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When you use the Auto Resume feature of the Toshiba 386SL laptop with Microsoft
	Windows 3.1, the time and date may not be updated correctly when the machine
	resumes operation.
	
	RESOLUTION
	==========
	
	WRESUME.386, a driver available from Toshiba, allows the system clock to update
	correctly.
	
	You can obtain the driver from CompuServe or you can call Toshiba technical
	support (ask forthe Diagnostic Supplemental Disk.)
	
	MORE INFORMATION
	================
	
	To install WRESUME.386:
	
	1. Copy WRESUME.386 to the Windows SYSTEM subdirectory.
	
	2. Add the following entry to the [386Enh] section of the SYSTEM.INI file:
	
	  device=WRESUME.386
	
	The product included here is manufactured by Toshiba, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 lap top lap-top
	
	======================================================================
	Keywords          : win31 
	
	=============================================================================
	
