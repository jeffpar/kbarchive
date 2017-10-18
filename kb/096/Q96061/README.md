---
layout: page
title: "Q96061: MS-DOS Err Msg: Could Not Copy COMMAND.COM to Target..."
permalink: kb/096/Q96061/
---

## Q96061: MS-DOS Err Msg: Could Not Copy COMMAND.COM to Target...

	Article: Q96061
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SYS command (SYS.COM) to transfer the MS-DOS startup file to
	another disk and COMMAND.COM is not in the root directory of your startup drive,
	you receive the following error message:
	
	  Could not copy COMMAND.COM onto target disk
	
	CAUSE
	=====
	
	Even if the COMSPEC environment variable and the SHELL= statement in the
	CONFIG.SYS file point to COMMAND.COM in a different directory, SYS.COM still
	looks for COMMAND.COM in the root directory of the startup drive.
	
	WORKAROUND
	==========
	
	To work around this problem, copy COMMAND.COM to the root directory of your
	startup drive (see your MS-DOS manual for information about copying files).
	Then, set the read-only attribute with the ATTRIB command. For example, type the
	following at the MS-DOS command prompt and press ENTER:
	
	  " attrib +r command.com " (without the quotation marks)
	
	Additional query words: 6.22 6.00 6.20 SYS COMMAND COMSPEC SHELL boot err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
