---
layout: page
title: "Q121132: MSACM 2.0: Compressed Audio Will Not Play"
permalink: /kb/121/Q121132/
---

## Q121132: MSACM 2.0: Compressed Audio Will Not Play

	Article: Q121132
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a,1996 edition,2.0,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	WINDOWS
	kbusage kberrmsg kbmm kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Complete Baseball for Windows 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 96 World Atlas for Windows 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Music Central for Windows 1996 edition 
	- Microsoft Oceans for Windows, version 1.0 
	- Microsoft Windows Sound System, version 2.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a, 2.0 
	- Microsoft World of Flight for Windows, version 1.0 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compressed audio does not play, or you may receive one of the following error
	messages:
	
	  No wave device that can play files in the current format is installed. Use
	  the Drivers option to install the wave device.
	
	  Multimedia device Sound failed.
	
	NOTE: This article does not apply to Microsoft Windows 95. If you are using
	Windows 95, please see the following article in the Microsoft Knowledge Base:
	
	  Q133365 Windows 95: Troubleshooting Problems with Compressed Audio
	
	NOTE: This article applies to those applications that use MSACM version 2.0 only.
	For information about applications that use MSACM version 1.0, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q100546 MSACM 1.0: Compressed Audio Will Not Play
	
	RESOLUTION
	==========
	
	These symptoms can occur if the Microsoft Audio Compression Manager (MSACM) is
	not correctly installed. MSACM is used for playing compressed Sound (.wav) files
	.
	
	To verify that MSACM is installed correctly, do the following:
	
	NOTE: The following steps involve searching for, copying, and modifying files and
	folders. For more information about how to accomplish these tasks, see your
	Windows printed documentation or online help.
	
	1. From MS-DOS, copy the following files from the appropriate folder on the
	  compact disc to the Windows System folder on the hard drive:
	
	  Acmcmprs.dll
	  Imaadpcm.acm (used only by some programs)
	  Msgsm610.acm (used only by some programs)
	  Msacm.dll
	  Msacm.drv
	  Msadpcm.acm
	
	  If you are prompted, replace any currently installed versions of those files.
	  This also verifies that only compatible versions of MSACM files are
	  installed.
	
	  NOTE: Check your Windows folder and Windows System folder to ensure that there
	  are not multiple copies of the MSACM files.
	
	  NOTE: In Encarta 1995, it is not possible to manually copy these files from
	  the compact disc. If the MSACM files are corrupt, you must rename or delete
	  them from your hard drive, then remove Encarta 1995 by running the Setup
	  program. After removing, run Setup again to reinstall Encarta. Setup then
	  installs the MSACM files.
	
	2. Use a text editor, such as Microsoft Notepad, to create or modify the
	  following lines in the System.ini file, which is located in the Windows
	  folder:
	
	  [Drivers]
	  WaveMapper=MSACM.DRV
	  MSACM.msadpcm=MSADPCM.ACM
	  MSACM.imaadpcm=IMAADPCM.ACM
	  MSACM.msgsm610=MSGSM610.ACM
	
	  NOTE: Only certain drivers are needed to play certain types of compressed
	  audio.
	
	3. Verify that the Msacm.ini file has the correct settings. This file is located
	  in the Windows folder. Below is an example of the Msacm.ini:
	
	  [Priority]
	  Priority1=1, MS-PCM, Microsoft PCM Converter
	  Priority2=1, MS-ADPCM, Microsoft ADPCM CODEC
	  Priority3=1, Microsoft IMA ADPCM, Microsoft IMA ADPCM Codec
	  Priority4=1, Microsoft GSM 6.10, Microsoft GSM 6.10 Audio CODEC
	
	  A driver with a priority set to 0 won't play sound or causes the "No wave
	  device that can play files in the current format...." error message to be
	  displayed. To correct the problem, set each line to = 1.
	
	Pronunciations and Foreign Language Sounds
	------------------------------------------
	
	Some programs use the GSM 6.10 CODEC driver for playing pronunciations or foreign
	language samples. If normal sounds play correctly, but pronunciations fail,
	follow the steps above to verify correct installation of MSACM. If the steps
	above do not correct the problem, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q112554 No Pronunciations or Foreign Language Sounds
	
	MORE INFORMATION
	================
	
	If MSACM is not installed properly, simply reinstalling a program that uses it
	does not fix the problem. If the Setup application for the Microsoft program
	finds MSACM files present on the system, it determines that MSACM is already
	installed, and does not reinstall MSACM.
	
	Additional query words: ensonic multi-media mmtitles
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbWin3xSearch kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbKidsSearch kbBookshelfSearch kbBaseballSearch kbEncartaEncycSearch kbZNotKeyword3 kbWinSoundSysSearch kbWin300 kbWin300a kbWin310 kbWin311 kbWinSoundSys200 kbAncientLands kbCompleteBaseballSearch kbMMStrauss kbMMSchubert kbBookShelf1996 kbBookShelf1997 kbDangerousCreatures kbDogs100 kbMusicCentral kbWine100 kbWine100a kbWine200 kbWorldofFlight kbEncartaEnCyc1996 kbEncartaWorldAtlas1996 kbMusicCentral1996 kbOceans
	Version           : :1.0,1.0a,1996 edition,2.0,3.0,3.0a,3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	
