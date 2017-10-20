---
layout: page
title: "Q115378: PC Tools 9.0 Cannot Recognize DriveSpace Format; Use ScanDisk"
permalink: /kb/115/Q115378/
---

## Q115378: PC Tools 9.0 Cannot Recognize DriveSpace Format; Use ScanDisk

{% raw %}

	Article: Q115378
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PC Tools version 9.0 Optimizer generates the following error message when used
	with DriveSpace:
	
	  Optimizer Execution Error
	
	  The DBLSPACE drive internal structure is damaged. Optimizer cannot continue.
	
	Running PC Tools DiskFix as detailed the PC Tools "User's Guide" to correct this
	error results in corruption to the DriveSpace compressed volume file (CVF).
	
	PC Tools 9.0 does not recognize the new DriveSpace format; therefore, to avoid
	possible data corruption, run MS-DOS 6.22 ScanDisk rather than PC Tools 9.0.
	
	MORE INFORMATION
	================
	
	PC Tools is manufactured by Central Point Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: drvspace cps pctools 9.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
