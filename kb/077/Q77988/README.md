---
layout: page
title: "Q77988: Setup Disables OK Button If Directory Name Has Extension"
permalink: kb/077/Q77988/
---

## Q77988: Setup Disables OK Button If Directory Name Has Extension

	Article: Q77988
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
	
	The Setup program for Bookshelf for Windows will disable the OK button four
	characters after the backslash following a directory name containing an
	extension. The following install path will cause this problem:
	
	  c:\mswork.dir\subdir
	
	Once four more characters are typed after ".dir\" (without the quotation marks)
	in this example, the OK button will be unavailable (dimmed). The only solution
	to this problem is to enter a path, which does not exceed four characters, after
	a directory name with an extension, or to enter a path that does not contain
	directory names with extensions.
	
	Additional query words: Viewer 1.0 grayed greyed Usage
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1991
	Version           : :1991 edition
	
	=============================================================================
	
