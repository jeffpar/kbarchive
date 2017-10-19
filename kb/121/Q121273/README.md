---
layout: page
title: "Q121273: Pressing ENTER After DRVSPACE /DELETE Doesn't Delete Files"
permalink: /kb/121/Q121273/
---

## Q121273: Pressing ENTER After DRVSPACE /DELETE Doesn't Delete Files

	Article: Q121273
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to delete a compressed DriveSpace or DoubleSpace floppy disk using
	MS-DOS 6.22 and the command DRVSPACE /DELETE A: or DBLSPACE /DELETE A:, the
	following message is displayed:
	
	  Deleting drive A will permanently erase it and all the files it contains. Are
	  you sure you want to delete drive A?
	
	When you press ENTER proceed with the deletion, an "X" is displayed and you are
	returned to the command prompt. The deletion is not processed.
	
	CAUSE
	=====
	
	The default for the DRVSPACE /DELETE and DBLSPACE /DELETE commands is "No," so
	when you press ENTER, no change occurs. The DRVSPACE /DELETE or DBLSPACE /DELETE
	command does not prompt you with the expected [Y/N] response.
	
	RESOLUTION
	==========
	
	Type Y (yes) to delete the compressed drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.22. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: msdos 6.22 compress
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
