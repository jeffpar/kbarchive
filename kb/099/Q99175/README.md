---
layout: page
title: "Q99175: Bookshelf: Message Asks for Encarta CD"
permalink: kb/099/Q99175/
---

## Q99175: Bookshelf: Message Asks for Encarta CD

	Article: Q99175
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Encarta 92 Multimedia Encyclopedia 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may receive the following incorrect message when running Bookshelf:
	
	  Please install the Encarta CD.
	
	This message appears when both of the following conditions exist:
	
	- You installed Encarta after you installed Bookshelf.
	
	-and-
	
	- Viewer files are damaged or missing.
	
	This problem can occur with any Viewer application.
	
	MORE INFORMATION
	================
	
	This problem occurs because there is a single VIEWER.INI file that contains
	error messages to be generated if Viewer files are damaged or missing. The error
	message entries in this file are overwritten whenever you install a new
	application. If Encarta is installed last, error messages that refer
	specifically to Encarta overwrite previous versions of the error messages. Then,
	if Viewer files are found to be damaged or missing, you will receive
	Encarta-specific error messages regardless of which Viewer application you are
	currently running.
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: msn_bookshelf multimedia multi media multi- media bad corrupted usage
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbCineManiaSearch kbEncarta1992
	
	=============================================================================
	
