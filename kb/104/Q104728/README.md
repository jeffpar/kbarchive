---
layout: page
title: "Q104728: DoubleGuard Message Includes &quot;Press Any Key to Continue&quot;"
permalink: kb/104/Q104728/
---

## Q104728: DoubleGuard Message Includes &quot;Press Any Key to Continue&quot;

	Article: Q104728
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you are running Windows when DoubleSpace DoubleGuard detects a data integrity
	problem, the following message is displayed
	
	  DoubleGuard Alarm #<nn>
	
	  A program has corrupted memory belonging to DoubleSpace. Further disk activity
	  could result in the loss of some or all of the data on your drive. Therefore,
	  DoubleGuard has halted your computer. For more information, see the
	  README.TXT file.
	
	  Press any key to continue.
	
	where nn is 13, 14, 15, or 16. Pressing any key has no effect.
	
	CAUSE
	=====
	
	The "Press any key to continue" message is placed on the screen by Windows and
	cannot be controlled by MS-DOS. Windows displays this message by default since
	it does not expect the MS-DOS-based application (in this case, DoubleSpace) to
	cause your system to stop responding (hang).
	
	For more information on DoubleSpace and DoubleGuard, type "help doubleguard"
	(without the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	Additional query words: 6.20 dblspace dblguard
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
