---
layout: page
title: "Q103550: MS-DOS 6.2 Upgrade Setup Replaces MEMMAKER.INF File"
permalink: kb/103/Q103550/
---

## Q103550: MS-DOS 6.2 Upgrade Setup Replaces MEMMAKER.INF File

	Article: Q103550
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	MS-DOS 6.2 Upgrade Setup replaces the MEMMAKER.INF file in the directory that
	contains your MS-DOS files (typically C:\DOS).
	
	If you have customized your MEMMAKER.INF file, your changes are lost when you run
	MS-DOS 6.2 Upgrade Setup.
	
	MORE INFORMATION
	================
	
	To work around this problem, do one of the following:
	
	- Copy your old MEMMAKER.INF file from the OLD_DOS.1 directory. For example,
	  type "copy c:\old_dos.1\memmaker.inf c:\dos" (without the quotation marks) at
	  the MS-DOS command prompt and then press ENTER.
	
	-or-
	
	- Modify the new MEMMAKER.INF file.
	
	NOTE: The new MEMMAKER.INF file contains entries that were not included in MS-DOS
	6. For more information, read the comments in the new MEMMAKER.INF file. To do
	this, type "edit c:\dos\memmaker.inf" (without the quotation marks) at the
	MS-DOS command prompt and then press ENTER.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
