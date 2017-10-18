---
layout: page
title: "Q75470: Incorrect Recommendation for BIOS Upgrade for Always SCSI"
permalink: kb/075/Q75470/
---

## Q75470: Incorrect Recommendation for BIOS Upgrade for Always SCSI

	Article: Q75470
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an Always Technologies SCSI controller card and are installing the
	Microsoft MS-DOS 5 Upgrade, a warning message similar to the following may be
	displayed during installation:
	
	  If you are using a Western Digital WD 7000 FASST or AT/XT SCSI controller
	  with hard-disk ROM version 3.35 or earlier, contact your vendor for an
	  upgrade before installing MS-DOS 5.0.
	
	This warning can also be found in section 2.14 of the README.TXT file shipped
	with the Microsoft MS-DOS 5 Upgrade package.
	
	CAUSE
	=====
	
	The current ROM BIOS revision of Always Technologies SCSI controllers is 3.33.
	The Setup program will display the above warning, suggesting that you obtain an
	upgrade. This warning is only intended for systems with Western Digital SCSI
	controllers; if your system doesn't have one, the error message should be
	ignored.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these product's performance
	or reliability.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
