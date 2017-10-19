---
layout: page
title: "Q65074: MSDOS.EXE Loads Full Screen Instead of as an Icon in Windows"
permalink: /kb/065/Q65074/
---

## Q65074: MSDOS.EXE Loads Full Screen Instead of as an Icon in Windows

	Article: Q65074
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	When you specify the MSDOS.EXE file in the LOAD= line within the
	WIN.INI file, MS-DOS Executive loads full screen instead of as an
	icon. This contradicts information given in the WININI.TXT file
	stating that a Windows application loads as an icon if you specify
	its filename in the LOAD= line.
	
	This is by design for the MSDOS.EXE file. The MS-DOS Executive was
	the original shell for Windows versions 2.x and was made to load
	full screen when you access Windows.
	
	Additional query words: 3.00 3.0 3.0a 3.00a docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
