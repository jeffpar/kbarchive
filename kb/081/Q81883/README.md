---
layout: page
title: "Q81883: Addressing the L1084 and L1085 Errors"
permalink: kb/081/Q81883/
---

## Q81883: Addressing the L1084 and L1085 Errors

	Article: Q81883
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1x,5.2,5.3x,5.5; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.2, 5.3x, 5.5 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link a large program fails and Microsoft LINK generates one of the
	following messages:
	
	  L1084: cannot create temporary file
	  L1085: cannot open temporary file
	
	CAUSE
	=====
	
	The four most likely causes of these errors are as follows:
	
	1. TMP environment variable not set or set incorrectly
	
	2. Not enough space on drive/directory to which TMP variable is set
	
	3. Insufficient file handles available
	
	4. Terminate-and-stay-resident (TSR) programs or device drivers
	
	RESOLUTION
	==========
	
	The four corresponding resolutions for these causes are as follows:
	
	1. Perform the following four steps to verify the TMP environment variable.
	
	  a. Use the MS-DOS SET command to determine the setting of the TMP environment
	     variable.
	
	  b. Verify that the TMP variable is set to a valid drive and directory.
	
	  c. In the AUTOEXEC.BAT file, verify that no white space appears before or
	     after the equal sign (=).
	
	  d. In the AUTOEXEC.BAT file, verify that no function or white space follows
	     the driver and directory
	
	2. Use the CHKDSK command to determine how much free space is available on the
	  drive and directory to which the TMP environment variable points. (Note that
	  if the TMP environment variable points to the root directory of a hard disk,
	  the root directory can contain only 512 files.)
	
	3. Edit the CONFIG.SYS file and verify that it contains the FILES=<n>
	  statement. The value of <n> should be at least 20. Verify that no white
	  space appears before or after the equal sign.
	
	4. Make a backup copy of the AUTOEXEC.BAT and CONFIG.SYS files. Edit the files
	  to remove any TSR programs and/or device drivers. Shut down the system and
	  reboot. If this step corrects this problem, one of the TSR programs or device
	  drivers conflicts with LINK. Load one TSR or device driver at a time to
	  determine which one causes the conflict.
	
	If removing Novell network software corrects this problem, then the problem may
	be caused by a conflict between LINK and Novell. The "Network Patches for
	Utilities" application note (SC0381) provides LINK version 5.13 to replace LINK
	version 5.1. This file has been removed from the Software Library but can be
	requested by calling Microsoft Product Support Services.
	
	
	Additional query words: kbinf 3.0 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.6 3.60 3.61 3.64 3.65 3.69 4.06 4.07 4.1 4.10 5.01.2 5.01.20 5.01.21 5.02 5.03 5.05 5.1 5.10 5.11 5.13 5.15 5.2 5.20 5.3 5.30 5.31.009 5.5 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK550DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1x,5.2,5.3x,5.5; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
