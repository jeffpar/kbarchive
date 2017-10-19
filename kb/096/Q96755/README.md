---
layout: page
title: "Q96755: Compaq LTE Hibernation Mode Incompatible with DoubleSpace"
permalink: /kb/096/Q96755/
---

## Q96755: Compaq LTE Hibernation Mode Incompatible with DoubleSpace

	Article: Q96755
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
	
	Compaq LTE machines have an option called "hibernation mode." This option writes
	all information in memory to drive C and then turns the power off to conserve
	battery power. When you turn on the computer on again, it automatically loads
	the information back into memory, rather than restarting MS-DOS.
	
	If you have compressed drive C with DoubleSpace, the hibernation mode information
	is inaccessible when you restart the computer.
	
	CAUSE
	=====
	
	This occurs because the DoubleSpace drivers are not loaded when the computer
	tries to read in the information from the hibernation file.
	
	WORKAROUND
	==========
	
	To work around to this problem, disable the Compaq hibernation mode if your
	drive C is compressed. For information on disabling this feature, refer to your
	Compaq documentation.
	
	
	Additional query words: 6.00 dblspace double space 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
