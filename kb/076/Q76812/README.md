---
layout: page
title: "Q76812: Fastback Versions 2.11 and Earlier Give Divide Overflow Error"
permalink: /kb/076/Q76812/
---

## Q76812: Fastback Versions 2.11 and Earlier Give Divide Overflow Error

	Article: Q76812
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Fifth Generation Systems has confirmed that attempting to back up a file smaller
	than 8 bytes with FastBack version 2.11 or earlier will produce the following
	error message:
	
	  Divide Overflow
	
	To avoid this error, bypass the FastBack Estimate option.
	
	MORE INFORMATION
	================
	
	The Estimate feature estimates how much space and/or time the backup will
	require. It is for your information only and has no bearing on the backup
	itself.
	
	To bypass the Estimate option:
	
	1. In FastBack, choose Start Backup.
	
	2. Press ENTER to start the backup.
	
	The Estimate feature causes the "Divide Overflow" error while attempting to
	divide by a very small number. Skipping the Estimate option does not affect the
	integrity of the data. Fifth Generation Systems technical support has confirmed
	that this feature has been corrected in FastBack versions 3.0 and later.
	
	For more information, call Fifth Generation Systems technical support at (504)
	291-7283.
	
	The product included here, FastBack, is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
