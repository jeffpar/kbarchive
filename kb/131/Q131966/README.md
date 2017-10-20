---
layout: page
title: "Q131966: Bookshelf 1995: Copy to Word Command Causes WinWord Error 537"
permalink: /kb/131/Q131966/
---

## Q131966: Bookshelf 1995: Copy to Word Command Causes WinWord Error 537

{% raw %}

	Article: Q131966
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995 edition; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1995 edition 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Copy To Word function of Microsoft Word versions 6.0a or
	6.0c for Windows with the Bookshelf products listed at the top of this article,
	you receive the following error message:
	
	  Copy to Word
	  WinWord Error 537
	
	CAUSE
	=====
	
	The Bookshelf integration file bsh.wll may be damaged. This file should be in
	the \Winword\Startup folder (subdirectory) of your hard drive and have the
	following properties:
	
	  Filename     File Size     File Date
	  --------     ---------     ---------
	
	  Bsh.wll      27232 bytes   3/24/95     (Bookshelf 1995)
	  Bsh.wll      27168 bytes   2/21/96     (Bookshelf 1996-97)
	
	RESOLUTION
	==========
	
	To restore integrated Bookshelf and Word functionality, replace the bsh.wll file
	on your hard drive.
	
	NOTE: The following instructions assume your hard drive is drive C and your
	CD-ROM drive is drive D.
	
	1. Copy the file Bsh.wll from the D:\Word folder located on the Bookshelf CD-ROM
	  to the C:\Winword\Startup folder on the hard drive. To copy the file, type
	  the following at the MS-DOS command prompt then press ENTER:
	
	  "copy d:\word\bsh.wll c:\winword\startup\bsh.wll" (without the quotation
	  marks)
	
	  NOTE: For Bookshelf '95 for Windows 95 and Bookshelf '96-'97 for Windows, the
	  Bsh.wll file is in the D:\Office folder. To copy the file, type the following
	  at the MS-DOS command prompt then press ENTER:
	
	  "copy d:\office\bsh.wll c:\winword\startup\bsh.wll" (without the quotation
	  marks)
	
	  NOTE: When running under Windows 95, Microsoft Bookshelf '95 for Windows 95
	  and Microsoft Bookshelf '96-'97 for Windows install as 32-bit applications
	  that integrate only with Microsoft Word for Windows 95.
	
	2. Use MS-DOS File Compare (Fc.exe) to compare the files.
	
	  To ensure the most accurate test, use the /B (binary) switch. For example,
	  type the following at the MS-DOS command prompt and press ENTER:
	
	  "fc /b d:\word\bsh.wll c:\winword\startup\bsh.wll" (without the quotation
	  marks)
	
	  If error messages appear, the CD-ROM may be damaged or the CD-ROM drive may
	  have problems transferring data from the CD-ROM to the hard drive.
	
	  MS-DOS File Compare can be used to determine if the CD-ROM subsystem is
	  functioning properly at the device driver or hardware level(s). It is a
	  useful method for testing problems related to general protection (GP) faults
	  or other critical errors that may occur while running a CD-ROM application
	  with Windows, such as read errors or out of memory messages.
	
	  For more information about comparing files in MS-DOS and Windows, see your
	  printed documentation or online help.
	
	
	
	Additional query words: 1995 1996 mmtitles errors gpf general protection g-p 1997 97 96-97
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1995 kbBookShelf1996 kbBookShelf1997
	Version           : :1995 edition; WINDOWS:
	
	=============================================================================
	

{% endraw %}
