---
layout: page
title: "Q126016: Multimedia: Wave Error Messages Under Windows NT 3.5"
permalink: /kb/126/Q126016/
---

## Q126016: Multimedia: Wave Error Messages Under Windows NT 3.5

	Article: Q126016
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0; :1994 edition,1994-1995 edition,1995 edition; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Bookshelf for Windows versions 1994 edition, 1995 edition 
	- Microsoft Cinemania for Windows 1995 edition 
	- Microsoft Complete Baseball for Windows, version 1994 edition 
	- Microsoft Complete Basketball for Windows 1994-1995 edition 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are playing sounds in the Windows NT version 3.5 environment, you may
	encounter the following symptoms:
	
	- No sound in Encarta, or Bookshelf, or Dangerous Creatures.
	
	- Only title sounds in Ancient Lands, Cinemania, and Dinosaurs. No sound in the
	  tours.
	
	- Only button-click sounds in Complete Baseball and Complete Basketball.
	
	NOTE: For descriptions of additional problems, see the More Information section
	at the bottom of this article.
	
	RESOLUTION
	==========
	
	Ensure that the following drivers are in the SYSTEM32 directory:
	
	  Filename      Size      Date
	  ------------------------------
	
	  MSACM.DLL     56,704    9/4/94
	  MSACM32.DLL   82,384    9/4/94
	  MSACM32.DRV   28,960    9/4/94
	  IMAADP32.ACM  18,000    9/4/94
	  MSADP32.ACM   17,488    9/4/94
	  MSGSM32.ACM   24,768    9/4/94
	  TSSOFT32.ACM   9,760    9/4/94
	
	Also, ensure that the following lines are in the
	HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\WINDOWS NT\DRIVERS32 section of the
	registry:
	
	      msacm.imaadpcm:REG_SZ:imaadp32.acm
	      msacm.msadpcm:REG_SZ:msadp32.acm
	      msacm.msgsm610:REG_SZ:msgsm32.acm
	      wavemapper:REG_SZ:msacm32.drv
	
	To check the registry, do the following:
	
	1. From the File menu in Program Manager, choose Run.
	
	2. Type the following and choose OK:
	
	  "c:\winnt35\system32\regedt32.exe" (without the quotation marks)
	
	3. Make the HKEY_LOCAL_MACHINE window active by clicking it.
	
	4. Change to the SOFTWARE\MICROSOFT\WINDOWSNT\CURRENTVERSON\DRIVERS32 directory
	  by double-clicking each respective directory.
	
	MORE INFORMATION
	================
	
	You may receive the following error message when running Encarta 1995 with
	Windows NT 3.5
	
	  Unknown problem while loading the specified device driver file
	
	  <drive>:\encyc95\AUDIO.M12!<xxxxxxxx.WAV>
	
	where <drive> is your CD-ROM drive and <xxxxxxxx.WAV> is a name such
	as T048604A.WAV. (This applies to Encarta 1995 only, NOT to Encarta 1994.)
	
	After you receive this error message, Encarta plays no sound. To correct this
	problem, do the following:
	
	1. Make sure the following entry is in HKEY_CURRENT_USER\CONTROL PANEL\IOPROCS
	  registry:
	
	  M12:REG_SZ:mvfs1232.dll
	
	2. Make sure MVFS1232.DLL is in the WINNT35\SYSTEM32 directory.
	
	Additional query words: kbhowto multi media multimedia multi-media mmtitles windowsnt winnt '94 '95 viewer MCI
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbBookshelfSearch kbBaseballSearch kbEncartaEncycSearch kbCineManiaSearch kbAncientLands kbCompleteBaseballSearch kbCompleteBasketballSearch kbBookShelf1994 kbBookShelf1995 kbCinemania1995 kbCompleteBaseball1994 kbCompleteBasketball1994 kbCompleteBasketball1995 kbDangerousCreatures kbDinosaurs100 kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac
	Version           : WINDOWS:1.0; :1994 edition,1994-1995 edition,1995 edition; winnt:3.5
	
	=============================================================================
	
