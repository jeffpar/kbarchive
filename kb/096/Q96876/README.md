---
layout: page
title: "Q96876: Font Assistant Err Msg: Enable TrueType Fonts. TrueType..."
permalink: kb/096/Q96876/
---

## Q96876: Font Assistant Err Msg: Enable TrueType Fonts. TrueType...

	Article: Q96876
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you run Microsoft TrueType Font
	Assistant:
	
	  Enable TrueType Fonts. TrueType is not enabled.
	  You must enable TrueType fonts to use Font Assistant.
	
	This error occurs if the SETUP.INF file is not in the Windows SYSTEM
	subdirectory.
	
	To correct this problem, copy the SETUP.INF file from the first disk of your
	original Windows disks. For example, if you insert Windows Disk 1 in drive A,
	type the following command at the MS-DOS command prompt:
	
	  copy a:\setup.inf c:\windows\system
	
	Additional query words: 3.10 3.11 tt ttf true type
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
