---
layout: page
title: "Q120727: Err Msg: DRVSPACE.SYS Is Not the Same Internal Revision as..."
permalink: /kb/120/Q120727/
---

## Q120727: Err Msg: DRVSPACE.SYS Is Not the Same Internal Revision as...

{% raw %}

	Article: Q120727
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message is displayed:
	
	  DRVSPACE.SYS is not the same internal revision as DRVSPACE.BIN
	
	CAUSE
	=====
	
	This error occurs when a DriveSpace system contains an older version of the
	DBLSPACE.BIN file from MS-DOS 6.0 in the root directory and the DRVSPACE.SYS
	file is being referenced from the CONFIG.SYS file. (The error should actually
	read "DRVSPACE.SYS is not the same internal revision as DBLSPACE.BIN.")
	
	The older version of DBLSPACE.BIN exists if the upgrade from MS-DOS 6.0 to 6.22
	didn't correctly update this file (or if the 6.0 version was somehow restored).
	
	RESOLUTION
	==========
	
	To correct this problem, replace the older DBLSPACE.BIN file with the
	DBLSPACE.BIN file from the MS-DOS 6.22 disks. (Expand DBLSPACE.BI# from Disk 1
	of the MS-DOS 6.22 disk set. The file date is 5-31-94.)
	
	MORE INFORMATION
	================
	
	If the DBLSPACE.BIN file from MS-DOS 6.0 is used to mount DoubleSpace compressed
	volume files (CVFs) on an MS-DOS 6.22 system, DBLSPACE.BIN does not generate an
	error. However, when the CONFIG.SYS file references DRVSPACE.SYS, the
	aforementioned error occurs at startup.
	
	
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
