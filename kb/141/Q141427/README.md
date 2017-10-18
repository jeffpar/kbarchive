---
layout: page
title: "Q141427: Bookshelf: Custom Installation Option Missing with AutoRun"
permalink: kb/141/Q141427/
---

## Q141427: Bookshelf: Custom Installation Option Missing with AutoRun

	Article: Q141427
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Bookshelf '95 for Windows 95 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Bookshelf '96-'97
	-----------------
	
	If you start Bookshelf '96-'97 Setup using the Auto Insert Notification feature
	of Windows, the main dialog box shows two choices:
	
	- Minimal Installation
	
	- Typical Installation
	
	But if you start the Bookshelf '96-'97 Setup from the CD-ROM drive root folder,
	the main dialog displays three choices:
	
	- Typical
	
	- Custom
	
	- Minimum
	
	Bookshelf '95
	-------------
	
	If you start Bookshelf '95 Setup using the Auto Insert Notification feature of
	Windows, the main dialog box shows two choices:
	
	- Minimal Installation
	
	- Full Installation.
	
	If you start the Bookshelf Setup from the CD-ROM drive root folder, the main
	dialog displays three choices:
	
	- Full
	
	- Custom
	
	- Minimum
	
	CAUSE
	=====
	
	The Setup differences are caused by the Auto Insert Notification feature in
	Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the 32-bit version of Bookshelf
	1995 and Bookshelf '96-'97.
	
	MORE INFORMATION
	================
	
	The Auto Insert Notification feature starts Setup by running the Setstub.exe
	file. The Setstub.exe file is located on the compact disc in the Aamstp32
	folder. This file only provides the two Setup options.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm auto auto-run run autorun win95
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeMMsearch kbBookshelfSearch kbBookShelf1995 kbBookShelf1996 kbBookShelf1997
	Version           : :95
	
	=============================================================================
	
