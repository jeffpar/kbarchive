---
layout: page
title: "Q132537: Optimizing Autoexec.bat and Config.sys for CD-ROM Performance"
permalink: /kb/132/Q132537/
---

## Q132537: Optimizing Autoexec.bat and Config.sys for CD-ROM Performance

	Article: Q132537
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a,2.0,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 500 Nations, version 1.0 
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Complete Baseball Guide for Windows, 1995 edition 
	- Microsoft Complete NBA Basketball for Windows, 1994-1995, 1995-1996 editions 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Dogs for Windows, versions 1.0, 1.0a 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Isaac Asimov's The Ultimate Robot for Windows 
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	- Microsoft Multimedia Beethoven for Windows, version 1.0 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft Oceans for Windows, version 1.0 
	- Microsoft SoundBits, Hanna-Barbera, version 2.0 
	- Microsoft SoundBits, MGM Movies, version 1.0 
	- Microsoft SoundBits, Musical Instruments, version 1.0 
	- Microsoft Scenes (all collections), versions 1.0, 2.0 
	- Microsoft Windows Sound System 
	- Microsoft The Ultimate Frank Lloyd Wright for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a, 2.0 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	- Microsoft World of Flight for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Once your computer is configured to run your latest CD-ROM software, you should
	optimize your system files to make efficient use of your system resources.
	
	This article provides techniques to help you minimize many memory problems and
	error messages. For detailed instructions about using these techniques, see your
	Windows or MS-DOS printed documetation or online help.
	
	MORE INFORMATION
	================
	
	The information below contains suggested guidelines for optimization of MS- DOS
	Autoexec.bat and Config.sys system files in a Windows 3.x operating system
	environment.
	
	Autoexec.bat
	------------
	
	MS-DOS Environment Variables and Terminate-And-Stay-Resident Programs:
	
	- Arrange the Autoexec.bat so the MS-DOS environment variables load after any
	  terminate-and-stay-resident (TSR) programs, unless the TSR requires the
	  environment variable for initialization or tracking purposes.
	
	  Examples of environment variables include the following:
	
	     Set Temp
	     Path
	     Prompt
	     Set Blaster
	     Set Mouse
	
	  NOTE: It is not necessary to use the set command with the Path or Prompt
	  commands. MS-DOS automatically adds their new values to the environment if
	  they are changed.
	
	  When environment variables are listed before a TSR, and if the TSR does not
	  require the environment variable, excess conventional memory is used.
	
	  NOTE: If you plan to use a terminate-and-stay-resident (TSR) program with
	  Windows, please read the Setup.txt online document first. It contains
	  important information about running TSR programs with Windows and Windows
	  Setup.
	
	Sound Card and CD-ROM Software:
	
	- After you install the sound card software, entries are put in the
	  Autoexec.bat file that set environment variables and programs to initialize
	  the sound card.
	
	  Verify that the entry for Mscdex.exe is present in the Autoexec.bat file. For
	  example, the following is a valid Mscdex.exe entry
	
	     c:\dos\mscdex.exe /d:mscd001 /m:12
	
	  where c is the letter of your hard drive.
	
	  Insert the line for Smartdrv.exe after the Mscdex.exe. For example:
	
	     c:\dos\smartdrv.exe
	
	  Loading Mscdex before Smartdrv.exe caches the CD-ROM drive. If you do not want
	  to cache the CD-ROM drive, add the "/U" switch (without the quotation marks)
	  to the end of the Smartdrv.exe line.
	
	  For more information about Smartdrv.exe, see your MS-DOS "User's Guide and
	  Reference" for detailed descriptions and usage information. On systems with
	  Microsoft MS-DOS version 6.x, type the following at the MS- DOS command
	  prompt and press ENTER:
	
	     help smartdrv.exe
	
	  If you want Microsoft Windows to launch automatically when the computer is
	  started, add the entry "Win" (without the quotes) as the last line of the
	  Autoexec.bat file.
	
	Config.sys Memory Management and Device Driver Loading
	------------------------------------------------------
	
	These guidelines help optimize system performance by doing the following:
	
	- Makes environments variables initialize before programs only if the programs
	  require the settings.
	
	- Initializes sound cards before CD-ROM drives, especially if the CD-ROM drive
	  is connected to the sound card.
	
	- Uses Smartdrv.exe to cache D-ROM drives.
	
	To optimize your memory management and device loading, do the following:
	
	1. Install Extended Memory Specification (XMS).
	
	  To install XMS, add the line:
	
	     Device=C:\Dos\Himem.sys
	
	  NOTE: Windows may appear in the device driver statement instead of MS- DOS if
	  the version of Himem.sys, located in the Windows subdirectory, is newer than
	  the version supplied with Microsoft MS-DOS.
	
	2. Provide Upper Memory Blocks.
	
	  To provide Upper Memory Blocks, install the Microsoft MS-DOS Expanded Memory
	  Manager by adding the line:
	
	     Device=C:\Dos\Emm386.exe noems
	
	  NOTE: Some programs may require Expanded Memory and require the ram switch
	  instead of the noems switch. For more information on Emm386.exe refer to your
	  Microsoft MS-DOS "User's Guide and Reference" for detailed descriptions and
	  usage information. On systems with Microsoft MS-DOS version 6.x, type the
	  following at the MS-DOS command prompt and press ENTER:
	
	     help emm386.exe
	
	3. Enable Upper Memory Blocks.
	
	  To enable the Upper Memory Blocks, add the line:
	
	     dos=high,umb
	
	  Then, add the following lines:
	
	     files=40
	     buffers=10
	
	4. Confirm sound card installation settings.
	
	  The installation program for the sound card should add the necessary sound
	  card lines (if needed). For example:
	
	     Device=C:\Pastudio\Mvsound.sys d:7 q:10 s:1,220,1,5 m:0 j:0 v:45
	
	5. Confirm CD-ROM drive installation information.
	
	  The installation program for the CD-ROM drive should add the necessary entry
	  to enable the CD-ROM drive. For example:
	
	      device=c:\pastudio\tslcdr.sys /d:mscd001 /p:3
	
	Checking for Conflicts in Windows 3.1x
	--------------------------------------
	
	It is essential to determine whether program conflicts are caused by a conflict
	between Windows and your hardware, or a conflict between Windows and other
	software.
	
	To do this, eliminate possible software conflicts before testing your hardware
	using the following steps.
	
	1. Make sure the Start Up program group is empty. Check if the file Winstart.bat
	  file exists. If a Winstart.bat file exists in the \windows subdirectory,
	  rename the file to Winstart.bak.
	
	2. Make sure screen savers, including built-in Windows screen savers, are turned
	  off.
	
	3. Make sure Windows is not running from a menu program, such as MS-DOS shell or
	  a third-party menu program.
	
	
	Additional query words: kbhowto multi media multimedia multi-media mmtitles tshoot troubles optimimal speed improve dial-in hangs hanging hanged crashed crash crashes freeze frozen locked locked-up lock hang bombed bomb down
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbHomeProdSearch kbWin3xSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbKidsSearch kbBookshelfSearch kbSoundBitsSearch kbBaseballSearch kbEncartaEncycSearch kbScenesSearch kbWFWSearch kbZNotKeyword3 kbCineManiaSearch kbWinSoundSysSearch kbWin310 kbWin311 kbAncientLands kbCompleteBaseballSearch kbCompleteBasketballSearch kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMBeethoven100 kb500Nations100 kbAsimovSearch kbBookShelf1996 kbBookShelf1997 kbCompleteBaseball1994 kbCompleteBaseball1995 kbDangerousCreatures kbDinosaurs100 kbDogs100 kbDogs100a kbAsimovUltimateRobot kbJuliaChild kbMusicalInst kbSoundBits kbUltimateFLW kbWine100 kbWine100a kbWine200 kbWorldofFlight kbArtGallery kbCompleteNBABasketball1994 kbEncarta1995 kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1994 kbOceans kbScenes100 kbScenes200
	Version           : :1.0,1.0a,2.0,3.1,3.11
	
	=============================================================================
	
