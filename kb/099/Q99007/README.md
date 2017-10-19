---
layout: page
title: "Q99007: Undelete for Windows Hangs When Checking Root Directory"
permalink: /kb/099/Q99007/
---

## Q99007: Undelete for Windows Hangs When Checking Root Directory

	Article: Q99007
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Undelete for Windows may appear to stop responding (hang) when
	checking the root directory for files that cannot be deleted.
	
	CAUSE
	=====
	
	This problem occurs when Undelete for Windows has difficulty reading a
	PCTRACK.DEL file created by an older version of PC Tools by Central Point
	Software.
	
	WORKAROUND
	==========
	
	To work around this problem, delete the old PCTRACKR.DEL file. To search for old
	PCTRACK.DEL files, do the following:
	
	1. Run Windows File Manager and choose By File Type from the View menu.
	
	2. Select Include Hidden/System Files and then choose OK.
	
	3. From the File menu, choose Search.
	
	4. Search for <drive>:\PCTRACK.DEL, where <drive> is the drive on
	  which Undelete for Windows is located.
	
	5. Delete all PCTRACK.DEL files.
	
	Additional query words: 6.22 6.00 WINUNDEL pc tool tools undeletable 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
