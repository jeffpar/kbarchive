---
layout: page
title: "Q98295: DoubleSpace Err Msg: ...Crosslink Between Files C: and C:"
permalink: /kb/098/Q98295/
---

## Q98295: DoubleSpace Err Msg: ...Crosslink Between Files C: and C:

{% raw %}

	Article: Q98295
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	DoubleSpace displays the following error message:
	
	  DoubleSpace found Crosslink between files C: and C:
	
	CAUSE
	=====
	
	This error occurs when your system has cross-linked files.
	
	The reason drive letters are displayed rather than filenames and the two "files"
	shown are the same is because there are cross-linked entries in the MDFAT.
	Because these entries (or clusters) are marked as allocated in the MDFAT but
	free in the FAT, they are not considered to be parts of any file or files.
	
	WORKAROUND
	==========
	
	To correct the cross-linked entries in the MDFAT, run CHKDSK /F. If CHKDSK does
	not correct the problem, either obtain MS-DOS 6.22 or later and run MS- DOS
	ScanDisk on the DoubleSpace-compressed drive, or obtain a third- party
	DoubleSpace-aware surface scan program.
	
	For more information about MDFAT, query on the following words in the Microsoft
	Knowledge Base:
	
	  "mdfat" (without the quotation marks) and "doublespace" (without the
	  quotation marks)
	
	Additional query words: 6.00 6.20 double space dblspace crosslinked
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
