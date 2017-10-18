---
layout: page
title: "Q104890: MS-DOS 6.2 Setup Install Second Microsoft Tools Group"
permalink: kb/104/Q104890/
---

## Q104890: MS-DOS 6.2 Setup Install Second Microsoft Tools Group

	Article: Q104890
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS Setup may create a second Microsoft Tools groups in Microsoft Windows.
	
	CAUSE
	=====
	
	This situation occurs when the Microsoft Tools group location or filename
	changes. For example, the default name and typical MS-DOS directory lead to the
	following filename and path:
	
	  C:\DOS\WNTOOLS.GRP
	
	If you change the filename or directory location after you install MS-DOS 6.0,
	two Microsoft Tools groups exist after you install a later version of MS-DOS.
	
	To prevent Setup from destroying your customized group entries, the setup logic
	is cautious when replacing groups. If your WNTOOLS.GRP file is still in the DOS
	directory, MS-DOS 6.2 replaces the old WNTOOLS.GRP file with a new one.
	
	RESOLUTION
	==========
	
	To work around this situation, delete one of the groups.
	
	Additional query words: 6.22 6.20 stepup step-up upgrade
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
