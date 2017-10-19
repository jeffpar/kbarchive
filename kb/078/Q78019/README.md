---
layout: page
title: "Q78019: Bookshelf Setup: Fatal Error Copying FONTFILE.EXT"
permalink: /kb/078/Q78019/
---

## Q78019: Bookshelf Setup: Fatal Error Copying FONTFILE.EXT

	Article: Q78019
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1991 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1991 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Setup program for Microsoft Bookshelf for Windows 1991 will terminate with a
	"fatal error copying FONTFILE.FON", or similar error message (where FONTFILE.FON
	is the actual name of one of the Bookshelf fonts) if there is not enough disk
	space for these fonts on the drive where Windows is located.
	
	For example, if Bookshelf is going to be set up in the C:\VIEWER> directory,
	Windows is located in the D:\MWINDOWS> directory, AND the drive D doesn't
	have at least 593664 bytes available, Setup will terminate with the above error
	message. To ensure that Setup doesn't terminate prematurely, make sure that
	there is at least 1 MB of disk space available on the drive that contains
	Windows.
	
	Additional query words: Viewer 1.0 1.00 Usage err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1991
	Version           : :1991 edition
	
	=============================================================================
	
