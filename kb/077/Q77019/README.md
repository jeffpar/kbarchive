---
layout: page
title: "Q77019: Bookshelf 1991: OK Button Dimmed at Install Path in Setup"
permalink: /kb/077/Q77019/
---

## Q77019: Bookshelf 1991: OK Button Dimmed at Install Path in Setup

	Article: Q77019
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
	
	The OK button in the dialog box where you are prompted for an installation path
	in the Setup program for Bookshelf for Windows can be unavailable (dimmed) for
	the following reasons:
	
	1. An invalid character has been included in the path string. The program checks
	  each character to see if it violates path string rules as you type. Such
	  violations include:
	  a. No backslashes to separate drives or directories. (A path of D:VIEWER or
	     C:\WINDOWSVIEWER makes the button unavailable.)
	
	  b. No colon to specify a drive.
	
	  c. A directory name in the path longer than the maximum number of characters
	     allowed in a normal DOS directory name.
	
	2. The path is more than 32 characters. 32 is the limit by design.
	
	Additional query words: Viewer 1.0 Usage wbk 1991
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1991
	Version           : :1991 edition
	
	=============================================================================
	
