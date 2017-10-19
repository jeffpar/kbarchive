---
layout: page
title: "Q49847: Using TREE and XCOPY on Subdirectories in MS-DOS"
permalink: /kb/049/Q49847/
---

## Q49847: Using TREE and XCOPY on Subdirectories in MS-DOS

	Article: Q49847
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TREE and XCOPY utilities cannot detect subdirectories that have any of the
	following attributes: read-only, system, hidden, or archive.
	
	In order for a subdirectory to be recognized by TREE or XCOPY, all of it's
	attributes must be removed. The MS-DOS Attribute command (ATTRIB) can apply and
	remove any of the four attributes for files and subdirectories.
	
	MORE INFORMATION
	================
	
	With some subdirectories, it is more desirable to have them ignored by the TREE
	and XCOPY commands. One example of this is the \DELETED subdirectory created by
	the Microsoft MEP Editor to hold archived versions of edited files.
	
	Please note that this limitation applies only to subdirectories that TREE or
	XCOPY must search for, not subdirectories that are specified on the command
	line.
	
	Additional query words: 6.22 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
