---
layout: page
title: "Q103549: DoubleSpace Err Msg: The Drive Letter &lt;X&gt; Is Not Available..."
permalink: /kb/103/Q103549/
---

## Q103549: DoubleSpace Err Msg: The Drive Letter &lt;X&gt; Is Not Available...

	Article: Q103549
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	When you use the DBLSPACE /HOST command to change your DoubleSpace host drive
	letter, you may receive the following message
	
	  The drive letter <X> is not available for DoubleSpace's use.
	
	where <X> is the drive letter you specified.
	
	CAUSE
	=====
	
	You receive the previous message when:
	
	- The letter you specify for the new host drive is in use by an existing
	  physical drive or DoubleSpace drive.
	
	-or-
	
	- The drive letter you specified is greater than the LastDrive= entry in the
	  DBLSPACE.INI file.
	
	RESOLUTION
	==========
	
	To determine which drives are currently in use on your system, type "dblspace
	/list" (without the quotation marks) at the MS-DOS command prompt, and then
	press ENTER.
	
	To specify a drive letter greater than the LastDrive= entry in the DBLSPACE.INI
	file:
	
	1. Use the DBLSPACE /LASTDRIVE command to increase LastDrive= entry in the
	  DBLSPACE.INI file. For example, type "dblspace /lastdrive=j" (without the
	  quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	2. Restart your computer.
	
	3. Use the DBLSPACE /HOST command to change your DoubleSpace host drive letter.
	  For example, if your DoubleSpace-compressed drive is drive C and you want to
	  change your host drive to drive I, type the following at the MS-DOS command
	  prompt and then press ENTER:
	
	  " dblspace c: /host=i: " (without the quotation marks)
	
	4. Restart your computer.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
