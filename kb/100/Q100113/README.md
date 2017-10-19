---
layout: page
title: "Q100113: DoubleSpace Err Msg with CompatiCard: Your Computer Might..."
permalink: /kb/100/Q100113/
---

## Q100113: DoubleSpace Err Msg with CompatiCard: Your Computer Might...

	Article: Q100113
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you try to install DoubleSpace on a machine that uses a Micro Solutions
	CompatiCard IV floppy disk controller, you may receive the following message:
	
	  Your computer might be running software that is incompatible with DoubleSpace
	
	CAUSE
	=====
	
	This message is caused by the CompatiCard IV CC4DRV.SYS device driver.
	
	WORKAROUND
	==========
	
	To work around this problem, call MicroSolutions for instructions to change the
	floppy disk controller card settings, or remove the command for the CC4DRV.SYS
	device drive from your CONFIG.SYS file.
	
	Additional query words: 6.00 double space dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
