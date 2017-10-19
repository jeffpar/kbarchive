---
layout: page
title: "Q99332: Missing Font Selections in a Windowed MS-DOS-Based Application"
permalink: /kb/099/Q99332/
---

## Q99332: Missing Font Selections in a Windowed MS-DOS-Based Application

	Article: Q99332
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an MS-DOS command prompt session or any MS-DOS-based application in
	a window, you may have a limited selection of fonts. This problem usually occurs
	if the DOSAPP.FON file has become corrupted or is missing from the
	WINDOWS\SYSTEM subdirectory.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Delete or rename the DOSAPP.FON file (if it exists) in the WINDOWS\SYSTEM
	  subdirectory.
	
	2. Expand the DOSAPP.FO_ file from the Windows 3.1 disks to the WINDOWS\SYSTEM
	  subdirectory using the following syntax. (This file is found on Disk 3 in the
	  5.25-inch disk set and on Disk 2 in the 3.5-inch disk set).
	
	  expand a:\dosapp.fo_ c:\windows\system\dosapp.fon
	
	3. Restart Windows and open an MS-DOS command prompt in a window. Choose the
	  Control-menu box and select Fonts to see if additional fonts are now
	  available.
	
	Additional query words: 3.00 3.10 app
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
