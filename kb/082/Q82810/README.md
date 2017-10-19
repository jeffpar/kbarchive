---
layout: page
title: "Q82810: Where Windows Searches for REG.DAT"
permalink: /kb/082/Q82810/
---

## Q82810: Where Windows Searches for REG.DAT

	Article: Q82810
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows searches for the REG.DAT file ONLY in the Windows program
	directory (by default, this is WINDOWS). If the file is not found, it will be
	created whenever an application, the shell (for example, Program Manager), or
	the Registration Editor (REGEDIT.EXE) creates a new OLE registration entry.
	
	Any other occurrences of the REG.DAT file on the hard disk will be ignored (for
	example, in the root directory, on the path, in the SYSTEM directory, and so
	on).
	
	MORE INFORMATION
	================
	
	Since the shell mirrors the OLE server information registered in REG.DAT in the
	WIN.INI file's [embedding] section, the system may be able to correct itself
	should the REG.DAT file be accidentally deleted, which should allow you to
	continue editing your OLE objects.
	
	Note: Recreating the REG.DAT file from the WIN.INI file entry is done to maintain
	compatibility with pre-version 1.0 OLE clients (Microsoft Excel for Windows
	version 3.0, Microsoft PowerPoint for Windows version 2.0, Lotus Notes version
	2.0).
	
	If the REG.DAT file is deleted, any data registered for opening and printing
	files in the File Manager or Program Manager could be lost.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
