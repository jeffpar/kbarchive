---
layout: page
title: "Q89806: Cinemania 1992: Manual Installation Instructions"
permalink: /kb/089/Q89806/
---

## Q89806: Cinemania 1992: Manual Installation Instructions

	Article: Q89806
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1992 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows 1992 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following describes how to manually set up Cinemania 1992.
	
	MORE INFORMATION
	================
	
	Steps to Manually Install Cinemania
	-----------------------------------
	
	The following directions assume your hard disk is drive C and your CD-ROM drive
	is drive X.
	
	1. Create a directory called VIEWER on the hard disk (drive C).
	
	2. Copy all files from the X:\VIEWER directory on the CD-ROM to the C:\VIEWER
	  directory on the hard disk.
	
	3. Copy *.EXE from the X:\MISC directory on the CD-ROM to the C:\VIEWER
	  directory on the hard disk.
	
	4. Copy MOVIE.DLL, MUSCROLL.DLL, and REMOTE.DLL from the X:\MISC directory on
	  the CD-ROM to the C:\VIEWER directory on the hard disk.
	
	5. Copy CINMANIA.ICO from the X:\MISC directory on the CD-ROM to the C:\VIEWER
	  directory on the hard disk.
	
	6. Create a new program group called "Cinemania - 1992". In the Program Manager,
	  choose New from the File menu. Select New Program Group and choose the OK
	  button. Enter "Cinemania - 1992" in the Description line and choose OK.
	
	7. Add the following new program item to this group. In the Program Manager,
	  choose New from the File menu and choose OK to add a new program item. Enter
	  the following description and command line for the program item.
	
	  Description: Cinemania 1992
	  Command Line: c:\viewer\viewer.exe x:\content\cinmania.mvb
	  Working Directory : c:\viewer
	
	  a. Press the Change Icon button and type the path to the Cinemania icon:
	
	  "c:\viewer\cinmania.ico" (without the quotation marks)
	
	Additional query words: 1992 Cinemania install setup set up setting
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1992
	Version           : :1992 edition
	
	=============================================================================
	
