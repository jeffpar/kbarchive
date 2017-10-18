---
layout: page
title: "Q98466: Bookshelf: WordBASIC Err=5: Illegal Function Call on Launch"
permalink: kb/098/Q98466/
---

## Q98466: Bookshelf: WordBASIC Err=5: Illegal Function Call on Launch

	Article: Q98466
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1993 edition,2.0; WINDOWS:2.0a,2.0b,2.0c,6.0,6.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1993 edition 
	- Microsoft Multimedia Viewer, versions 1.0, 2.0 
	- Microsoft Word for Windows, versions 2.0a, 2.0b, 2.0c, 6.0, 6.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access Bookshelf 1993 from Word for Windows, the following error
	message may appear:
	
	  WordBASIC Err=5: Illegal Function Call
	
	NOTE: This problem does not exist with Windows 95.
	
	CAUSE
	=====
	
	The WordBASIC Err=5 error occurs because the macro that runs Microsoft Bookshelf
	and its components from Word either cannot find the BOOKSHLF.DLL file or it
	finds an outdated version of BOOKSHLF.DLL.
	
	WORKAROUND
	==========
	
	NOTE: The following steps assume that your CD-ROM drive is drive D and Windows
	is installed in the C:\WINDOWS directory.
	
	To work around this problem, do the following:
	
	1. Make sure C:\WINDOWS is in the path in your AUTOEXEC.BAT file.
	
	2. Search for earlier versions of the BOOKSHLF.DLL file. (BOOKSHLF.DLL is
	  located in the VIEWER\BS93WORD subdirectory by default.) Compare the file
	  dates and file size of the version(s) found with BOOKSHLF.DLL on the CD-ROM.
	  Remove earlier BOOKSHLF.DLL files.
	
	3. Copy BOOKSHLF.DLL from the CD-ROM to C:\WINDOWS\SYSTEM.
	
	4. Remove multiple or outdated copies of BOOKSHLF.DLL. There should be one copy
	  in the C:\WINDOWS\SYSTEM directory only.
	
	Additional query words: kbmm viewer basic multimedia multi media multi-media error launch start books integration quote of the day view tools 1.00 2.00a 2.00b 2.00c ms office w_winword usage 6.00a winmm word6 94 word
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword2 kbBookshelfSearch kbWord600 kbWord600a kbWord200a kbWord200b kbWord200c kbBookShelf1993 kbMMViewer100 kbMMViewer200
	Version           : :1.0,1993 edition,2.0; WINDOWS:2.0a,2.0b,2.0c,6.0,6.0a
	
	=============================================================================
	
