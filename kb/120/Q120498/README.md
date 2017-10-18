---
layout: page
title: "Q120498: 6.22 Setup Err Msg with SCSI Device: Hard Disk Write Error"
permalink: kb/120/Q120498/
---

## Q120498: 6.22 Setup Err Msg with SCSI Device: Hard Disk Write Error

	Article: Q120498
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install MS-DOS version 6.22 and Setup is 99 percent complete, the
	following error message is displayed:
	
	  UNRECOVERABLE ERROR
	  Hard disk write Error
	  Press Enter to restart system.
	
	After you restart the system, the following error is generated:
	
	  The MS-DOS 6.22 Setup was not completed.
	  Insert the uninstall #1 diskette in drive A
	  Press the ENTER key to continue
	
	CAUSE
	=====
	
	This problem can occur on systems with non-bootable SCSI devices (such as a
	floptical drive or a CD-ROM drive) configured for SCSI ID 1 or 0 (zero). Device
	IDs 0 and 1 are reserved for bootable/writeable "hard disk type" media;
	therefore, Setup treats a device mounted as SCSI ID 1 or 0 as a hard disk
	device. If the device does not respond appropriately, the above errors are
	generated.
	
	WORKAROUND
	==========
	
	To work around this problem, reconfigure the device to ID 2 or higher.
	
	Additional query words: 6.22 stepup step up scuzzy err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
