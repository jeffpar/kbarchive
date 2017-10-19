---
layout: page
title: "Q141256: Bookshelf 1995: Add/Remove Bookshelf Does Not Update Shortcut"
permalink: /kb/141/Q141256/
---

## Q141256: Bookshelf 1995: Add/Remove Bookshelf Does Not Update Shortcut

	Article: Q141256
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf '95 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Bookshelf 1995 for Windows 95 Setup and choose the Add/Remove option
	and then uncheck the Bookshelf box, to remove Bookshelf, the shortcut created
	during installation is not removed from the Start menu in Windows.
	
	When you attempt to run the program by clicking on this shortcut, you receive the
	following error message:
	
	  The item BS9532.exe that this shortcut refers to has been changed or moved.
	  The nearest match, based on the size, date, and type is [drive
	  letter]:\<path>\filename. Do you want this shortcut to point to this
	  item? Yes/No
	
	Click the No option.
	
	CAUSE
	=====
	
	The Add/Remove feature of the Bookshelf '95 Setup program deletes the program
	from the hard disk, but it does not delete the shortcut or modify the shortcut
	to run from the CD-ROM drive.
	
	RESOLUTION
	==========
	
	To replace the Bookshelf program, use the following steps:
	
	1. Run Setup from the Bookshelf compact disc.
	
	2. Click the Add/Remove option.
	
	3. Click the Bookshelf box, to add Bookshelf.
	
	4. Click Continue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Bookshelf '95 for
	Windows 95.
	
	Additional query words: 1995 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1995
	Version           : WINDOWS:
	
	=============================================================================
	
