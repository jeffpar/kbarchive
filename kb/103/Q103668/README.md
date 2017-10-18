---
layout: page
title: "Q103668: System Hangs When SCSI Driver Is Loaded After DBLSPACE.SYS"
permalink: kb/103/Q103668/
---

## Q103668: System Hangs When SCSI Driver Is Loaded After DBLSPACE.SYS

	Article: Q103668
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	SCSI device drivers loaded high or loaded after MS-DOS 6.2 DBLSPACE.SYS in the
	CONFIG.SYS file may cause the system to stop responding (hang).
	
	WORKAROUND
	==========
	
	To work around this problem, load your SCSI device driver before DBLSPACE.SYS in
	the CONFIG.SYS file. If your system still hangs, load the device driver low
	(that is, change "DEVICEHIGH=" to "DEVICE=" and remove the /L parameter). For
	example, change
	
	  devicehigh /L:1,1234 =c:\scsi.sys
	
	  to:
	
	  device=c:\scsi.sys
	
	
	Additional query words: 6.20 gateway scuzzy USPI14.SYS USPI
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
