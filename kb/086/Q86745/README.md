---
layout: page
title: "Q86745: Bookshelf Demonstration on the Multimedia Works Disc"
permalink: /kb/086/Q86745/
---

## Q86745: Bookshelf Demonstration on the Multimedia Works Disc

	Article: Q86745
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1992 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1992 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Bookshelf for Windows demonstration that ships with the Multimedia Works
	product is a scaled-down version of the Bookshelf product. It contains the same
	basic problems that the originally shipped version of Bookshelf for Windows had.
	
	MORE INFORMATION
	================
	
	This will be evident under Windows 3.1, where the SETUP.EXE program may fail
	with the "Error writing to System Setup file" error message. To manually set up
	the demonstration, do the following:
	
	1. Copy all the files in the D:\BOOKSHLF\VIEWER directory (where D is the CD-ROM
	  drive) to a newly created C:\VIEWER directory on the hard drive. Do the
	  following from the MS-DOS command prompt:
	  a. Type:
	
	  "md c:\viewer" (without the quotation marks)
	
	  b. Type
	
	  "copy d:\bookshlf\viewer\*.* c:\viewer" (without the quotation marks)
	
	     where d is the CD-ROM drive.
	
	2. Add the C:\VIEWER directory to the MS-DOS Path command. This is required by
	  VIEWER.EXE to locate its DLLs.
	
	3. Optionally, install the fonts using the Control Panel fonts utility.
	
	Note: The fonts for the demonstration are VGA resolution only.
	
	Additional query words: 1.00 demo viewer 1992
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1992
	Version           : :1992 edition
	
	=============================================================================
	
