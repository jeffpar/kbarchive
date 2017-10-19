---
layout: page
title: "Q126056: UNCONF: Microsoft Setup: Stack Fault Error in USER.EXE"
permalink: /kb/126/Q126056/
---

## Q126056: UNCONF: Microsoft Setup: Stack Fault Error in USER.EXE

	Article: Q126056
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,3.1,3.11,4.0,4.2,6.0a; :1994 edition,1995 edition
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmm kbsetup kbtshoot kbimu
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Bookshelf for Windows versions 1994 edition, 1995 edition 
	- Microsoft Cinemania for Windows 1995 edition 
	- Microsoft Complete Baseball 
	- Microsoft Dangerous Creatures 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Office for Windows, version 4.2 
	- Microsoft PowerPoint for Windows, version 4.0 
	- Microsoft The Ultimate Frank Lloyd Wright, version 1994 edition 
	- Microsoft Word for Windows, version 6.0a 
	- Microsoft World of Flight for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	*****************************************************************
	**                          - WARNING -                        **
	**    THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN    **
	**    CONFIRMED, EDITED OR TESTED BY MICROSOFT.  USE ONLY      **
	**    WITH DISCRETION.                                         **
	*****************************************************************
	
	
	SYMPTOMS
	========
	
	When you try to run Setup you may receive the error message:
	
	  Acmsetup has caused a Stack Fault in User.Exe
	
	The error may also occur in Ms_setup.dll.
	
	RESOLUTION
	==========
	
	
	If you experience this error, one of the possible causes is the inability of the
	system to operate in 32-bit Disk Access mode. The problem may be due to a
	hardware failure, or the hard drive controller is not a WD1003 (Western Digital)
	compatible, or a virus is affecting the hard drive.
	
	To test for 32-bit Disk Access problems, enter Windows by typing the following
	command at the MS-DOS prompt:
	
	  "WIN /D:F" (without the quotation marks)
	
	Windows will start without 32-bit Disk Access. If you are now able to
	successfully run Setup, 32-bit Disk Access is the problem.
	
	If you are experiencing the error in Ms_setup.dll, For additional information,
	please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q112038 OFF: ACMSETUP.EXE Caused a General Protection Fault in MSSETUP.DLL
	
	
	MORE INFORMATION
	================
	
	To disable the 32-bit Disk Access:
	
	1. Select Control Panel. Control is located in the Main Group.
	
	2. Choose the 386 Enhanced icon.
	
	3. Select Virtual Memory and then select Change.
	
	4. Disable the 32-bit Disk Access by removing the X in the option:
	
	  Use 32-Bit Disk Access
	
	The 32-bit Disk Access can also be changed by modifying the System.ini:
	
	    [386Enh]
	    32BitDiskAccess=off
	
	
	The following error has been reported on a Compaq Presario with TabWorks running
	as the shell and Quicken Billminder on the Load= line:
	
	  ACMSETUP caused a stack fault in Shell.dll at 0002:0BEA
	
	Clean booting with Progman.exe for the shell and no load= allowed Setup to
	complete successfully.
	
	Additional query words: 1995 multi media multimedia multi-media mmtitles t-shoot acme
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmm kbsetup kbtshoot kbimu 
	Technology        : kbHWMAC kbOSMAC kbWordSearch kbOfficeSearch kbHomeProdSearch kbPowerPtSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbZNotKeyword2 kbBookshelfSearch kbBaseballSearch kbEncartaEncycSearch kbCineManiaSearch kbPowerPt400 kbOffice420 kbWord600a kbAncientLands kbCompleteBaseballSearch kbBookShelf1994 kbBookShelf1995 kbCinemania1995 kbDangerousCreatures kbUltimateFLW kbWorldofFlight kbEncartaEnCyc1996 kbEncartaEnCyc1995Mac
	Version           : WINDOWS:1.0,3.1,3.11,4.0,4.2,6.0a; :1994 edition,1995 edition
	Issue type        : kbprb
	
	=============================================================================
	
