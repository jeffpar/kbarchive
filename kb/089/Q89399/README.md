---
layout: page
title: "Q89399: Double-Clicking Multimedia Icon Does Not Start Program"
permalink: kb/089/Q89399/
---

## Q89399: Double-Clicking Multimedia Icon Does Not Start Program

	Article: Q89399
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.0,1991 edition,1992 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer, version 1.0 
	- Microsoft Bookshelf for Windows versions 1991 edition, 1992 edition 
	- Microsoft Cinemania for Windows 1992 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you double-click an icon for a multimedia application that uses Viewer 1.0
	while WinFax Pro version 2.0 from Delrina Technology, Inc. is running, the
	application will not start. Bookshelf or Cinemania should start if you disable
	WinFax. If Bookshelf or Cinemania still does not start, remove any reference to
	WinFax from the WIN.INI LOAD= line or the Startup group in the Windows Program
	Manager.
	
	Workarounds
	-----------
	
	WinFax Pro contains a .DLL named VIEWER.DLL. Bookshelf for Windows and Cinemania
	also contain a file named VIEWER.EXE. There are three possible workarounds for
	this problem.
	
	- Upgrade to WinFax Pro version 3.0, which corrects this problem.
	
	  -or-
	
	- Shutdown WinFax Pro before running the multimedia applications.
	
	  -or-
	
	- Rename VIEWER.EXE to VIEW.EXE (or any legal MS-DOS filename). This allows
	  both programs to run simultaneously. However, renaming VIEWER.EXE to VIEW.EXE
	  (or any legal MS-DOS filename) causes QuickKeys to fail because QuickKeys is
	  hard coded to look for VIEWER.EXE. (Note: This workaround is not applicable
	  to the Word for Windows & Bookshelf, Multimedia Edition. Word for Windows
	  is hard coded to look for VIEWER.EXE.
	
	NOTE: Another possible workaround is to upgrade to Bookshelf 1993. Bookshelf 1993
	uses MVIEWER2.EXE instead of VIEWER.EXE.
	
	For technical assistance with WinFax Pro, contact Delrina Technology technical
	support at (416) 441-1026.
	
	Additional query words: 91 92 Word for Windows Multimedia multi media multi-media 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbBookshelfSearch kbCineManiaSearch kbBookShelf1991 kbBookShelf1992 kbCinemania1992 kbMMViewer100
	Version           : :1.0,1991 edition,1992 edition
	
	=============================================================================
	
