---
layout: page
title: "Q97107: Compressed SCSI Drive Does Not Mount at Startup"
permalink: kb/097/Q97107/
---

## Q97107: Compressed SCSI Drive Does Not Mount at Startup

	Article: Q97107
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	DoubleSpace may not be able to mount compressed volume files (CVFs) on your SCSI
	drive when you start your computer if you load SSTOR.SYS into upper memory after
	DBLSPACE.SYS.
	
	WORKAROUND
	==========
	
	To work around this problem, load SSTOR.SYS into upper memory before
	DBLSPACE.SYS. For example:
	
	     devicehigh=c:\sstor.sys
	     devicehigh=c:\dos\dblspace.sys /move
	
	Additional query words: 6.00 6.20 scuzzy dblspace double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
