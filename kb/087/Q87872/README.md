---
layout: page
title: "Q87872: NORMAL.DOT Grows Each Time Bookshelf Setup Is Run"
permalink: /kb/087/Q87872/
---

## Q87872: NORMAL.DOT Grows Each Time Bookshelf Setup Is Run

	Article: Q87872
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1992 edition,1993 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows versions 1992 edition, 1993 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Bookshelf for Windows (1992 or 1993 Edition) SETUP.EXE is run multiple times
	AND the Allow Fast Save option is selected in Microsoft Word for Windows, Word's
	default template (NORMAL.DOT) will increase in size each time the Bookshelf
	SETUP.EXE is run.
	
	MORE INFORMATION
	================
	
	Allow Fast Save allows you to choose how much you want saved when saving
	NORMAL.DOT. It can be turned off by clearing the Allow Fast Save check box in
	the Save section of the Options dialog box (which is accessed by choosing
	Options from the Tools menu in Word).
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the Tools menu, select Options.
	
	2. Click the Save icon and make sure that the Allow Fast Save check box is
	  selected.
	
	3. Delete NORMAL.DOT.
	
	4. Run Bookshelf Setup (result: NORMAL.DOT equals 30609 bytes, this may be
	  different on different systems).
	
	5. Run Bookshelf Setup (result: NORMAL.DOT equals 57492 bytes, this may be
	  different on different systems).
	
	6. Run Bookshelf Setup (result: NORMAL.DOT equals 84375 bytes, this may be
	  different on different systems).
	
	Additional query words: 1.00 winword kbmm viewer 1.0 2.0
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1992 kbBookShelf1993
	Version           : :1992 edition,1993 edition
	
	=============================================================================
	
