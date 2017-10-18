---
layout: page
title: "Q124945: Vidio Clip Error Msg: Cannot Find Decompressor"
permalink: kb/124/Q124945/
---

## Q124945: Vidio Clip Error Msg: Cannot Find Decompressor

	Article: Q124945
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a,1994-1995 edition,1995 edition,2.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	WINDOWS
	kbmm kbinterop kberrmsg kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Cinemania for Windows 1995 edition 
	- Microsoft Complete NBA Basketball for Windows 1994-1995 edition 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a, 2.0 
	- Microsoft World of Flight for Windows, version 1.0 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play a video clip, one of the following error messages
	appears
	
	  There is no driver installed on your system.
	  Video not available, cannot find <vids:iv32> decompressor.
	
	where <vids:iv32> is the name of the decompressor. This name may vary.
	
	This article applies to Windows 3.1. If you get this error message in Windows 95,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q138261 Error Message: Video Not Available, Cannot Find Decompressor
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Open the System.ini file in a text editor (such as Notepad).
	
	2. Go to the System.ini [Drivers] section and note the file names that are
	  pointed to in the lines beginning with VIDC (for example,
	  VIDC.CVID=Iccvid.dll).
	
	3. In MS-DOS, delete the files you noted in step 2. For example, if System.ini
	  includes the line VIDC.CVID=Iccvid.dll, delete the file Iccvid.dll.
	
	4. Delete all lines in the [Drivers] section that start with VIDC.
	
	5. Run Setup again from the compact disc to reinstall the application. If Setup
	  has a Remove option, choose it, and run Setup a second time to completely
	  reinstall the application.
	
	For information on how to use a text editor to modify the SYSTEM.INI file, see
	your Windows printed documentation or online Help. For information on how to run
	Setup, refer to the compact disc jewel case notes.
	
	MORE INFORMATION
	================
	
	The Microsoft Video for Windows clips used by these applications are in a
	compressed format. The decompressors necessary to play the videos are contained
	on the compact disc, and Setup usually installs them correctly.
	
	However, if Video for Windows was incorrectly installed at some time in the past,
	Setup may be unable to update the necessary lines in the SYSTEM.INI file.
	Following the above steps should solve the problem.
	
	Because there are different versions of Video for Windows, it is best to
	reinstall the most recently released application. For example, if you have
	Bookshelf 1994 and Encarta 1995, reinstall Encarta rather than Bookshelf to
	install the most up-to-date version of the video playback files.
	
	
	Additional query words: multimedia mmtitles vfw 1.1 vids:msvc vids:cvid vids:mrle schoolbus magicbus scholastic's
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHomeProdSearch kbWin3xSearch kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbBookshelfSearch kbEncartaEncycSearch kbWFWSearch kbZNotKeyword3 kbCineManiaSearch kbWin310 kbWin311 kbAncientLands kbCompleteBasketballSearch kbCompleteNBABasketball kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCinemania1995 kbDangerousCreatures kbWine100 kbWine100a kbWine200 kbWorldofFlight kbCompleteNBABasketball1994 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1994
	Version           : :1.0,1.0a,1994-1995 edition,1995 edition,2.0,3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	
