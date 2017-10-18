---
layout: page
title: "Q175916: Bookshelf 98: Integration Fails with Word 95"
permalink: kb/175/Q175916/
---

## Q175916: Bookshelf 98: Integration Fails with Word 95

	Article: Q175916
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbui kbimukbfaq
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Define right-click menu or the Look Up Reference menu may not appear in
	Microsoft Word.
	
	  -or-
	
	When you use the Define right-click menu or the Look Up Reference menu, you may
	receive the following error message:
	
	  Word cannot find or run the application.
	
	CAUSE
	=====
	
	This behavior can occur because Bookshelf 98 does not automatically integrate
	with the stand-alone edition of Word 95 (version 7.0).
	
	According to Bookshelf Help, Office Integration occurs with Office 95 or later.
	This is correct for Office 95 Professional and Office Standard version 7.0a,
	however, integration fails with the following programs:
	
	- Office Standard version 7.0
	- Office 95 installed from floppy disk (any version)
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Exit Word and/or Bookshelf, if either is running.
	
	2. Rename any files named Bsh32.wll that are found on your hard drive, use these
	  steps:
	
	  a. Click Start, point to Find, and click Files.
	
	  b. In the Named box, type the following line, and then click Find Now:
	
	  Bsh32.wll
	
	  c. In the list of found files, click Bsh32.wll.
	
	  d. On the File menu, click Rename.
	
	  e. Type a new name, such as Bsh32.old, and then press ENTER. Repeat this step
	     for each file in the list of found files.
	
	  f. Close the Find window.
	
	3. Copy the file Bsh32.wll from the Bookshelf CD-ROM to your Word Startup
	  folder. To do this, follow these steps:
	
	  a. Click Start, point to Programs, and click MS-DOS Prompt.
	
	  b. At the command prompt, type the following line, and then press ENTER
	
	  copy D:\office C:\msoffice\winword\startup
	
	     where C is the letter of the hard disk where you installed Office and D is
	     drive letter of your CD-ROM drive.
	
	  c. Type "exit" (without the quotation marks), and then press ENTER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Bookshelf 98 for
	Windows.
	
	MORE INFORMATION
	================
	
	The file Bsh32.wll is used to provide integration between Word 7.0 and Bookshelf
	98. This must be in the Word Startup folder for integration to occur.
	
	
	Additional query words: 98 multi-media
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbui kbimu kbfaq
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1998
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
