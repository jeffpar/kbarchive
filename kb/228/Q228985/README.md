---
layout: page
title: "Q228985: Games Err Msg: Please Insert the Correct CD-ROM..."
permalink: kb/228/Q228985/
---

## Q228985: Games Err Msg: Please Insert the Correct CD-ROM...

	Article: Q228985
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Baseball 2001 
	- Microsoft Casino 
	- Microsoft Classic Board Games 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Crimson Skies 
	- Microsoft Dungeon Siege, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Golf 2001 Edition 
	- Microsoft Links LS 2000 
	- Microsoft Links 2001 
	- Microsoft MechCommander 2.0, version 1.0 
	- Microsoft MechWarrior 4: Inner Sphere 'Mech Pak 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Metal Gear Solid 
	- Microsoft Midtown Madness, version 1.0 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft NFL Fever 2000, version 1.0 
	- Microsoft Pandora's Box, version 1.0 
	- Microsoft StarLancer, version 1.0 
	- Microsoft Train Simulator, version 1.0 
	- Microsoft Zoo Tycoon 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install or start one of the games listed at the beginning of
	this article, you may receive one of the following error messages:
	
	   - Please insert the correct CD-ROM, select OK and restart application.
	
	   - Please insert correct CD-ROM, select OK and restart application. If correct
	  CD-ROM is already inserted, then your CD-ROM drive may not be compatable with
	  this product.Please check the Readme file for information.
	
	   - <program name> caused invalid page fault in module <program
	  name>.icd
	
	   - Media authentication failed.
	
	   - <program> caused an invalid page fault in module dplayerx.dll
	
	   - IRQL_NOT_LESS_OR_EQUAL, ADDRESS 8000741A has base at 80001000 - hal.dll
	
	Age of Empires II: Age of Kings:
	
	   - EMPIRES2 caused an invalid page fault in Empires2.exe
	
	Links 2001:
	
	   - Rukshuk caused an invalid page fault in module rukshuk.exe
	
	Dungeon Siege:
	
	   - Please insert Dungeon Siege Disc 1.
	
	Train Simulator:
	
	   - Failed to verify media. Installation cancelled.
	
	Baseball 2001:
	
	   - Microsoft Baseball 2001 has encountered a problem and needs to close. We are
	  sorry for the inconvenience.
	
	If you click Click Here, you receive a message that contains the following
	details:
	
	  Error Signature
	  AppName: baseball2001.exe AppVer: 3.0.0.306 ModName: baseball2001.exe
	  ModVer: 3.0.0.306 Offset: 0000986a
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- Your CD-ROM drive is not compatible with the program.
	- You are using a copy of the program CD.
	- You are not logged on to the computer as an Administrator.
	- A task, Armon32.exe, is interfering with the CD-ROM verification process.
	- You are running a Windows XP Home account that uses "fast user switching."
	
	NOTE: This issue occurs on computers running Windows XP Home and Windows XP
	Professional. When the issue occurs on Windows XP Professional, it does not
	occur as a result of "fast user switching." but the issue may occur due to one
	of the other conditions listed earlier in this article.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order they are
	presented.
	
	Method 1: Verify the Game CD Is Inserted in the CD-ROM Drive
	------------------------------------------------------------
	
	Verify that the game disc is inserted in the CD-ROM drive. Insert the original
	game disc into your CD-ROM drive, and then restart the program.
	
	- Combat Flight Simulator 2:
	
	  If you are trying to play Combat Flight Simulator 2, then please use CD-ROM
	  number 2.
	
	- MechWarrior 4: Inner Sphere 'Mech Pak:
	
	  If you are trying to play MechWarrior 4: Inner Sphere 'Mech Paks, please
	  insert MechWarrior Vengeance 4 (disk 1) or Black Knight before starting the
	  game.
	
	- Midtown Madness 1:
	
	  For Midtown Madness 1, you can now download the Midtown Madness update to fix
	  the issue with "please insert correct CD." To download the update, please
	  visit the following Microsoft Web site:
	
	  http://www.microsoft.com/games/midtown/downloads.htm
	
	  NOTE: If you are using a copied game, please use the original game CD to
	  install or start the game.
	
	If the issue continues to occur, proceed to the next method.
	
	Method 2: Quit Armon32.exe
	--------------------------
	
	If it is running, quit Armon32.exe before you start the game. To do so:
	
	1. Press CTRL+ALT+DELETE.
	
	2. In the Close Program dialog box, click Armon32, and then click End Task.
	
	3. If you receive a message that the program is busy or not responding, click
	  End Task again.
	
	If the issue continues to occur, proceed to the next method.
	
	Method 3: Clean Boot the Computer
	---------------------------------
	
	These articles describe how to disable common startup programs, settings, and
	drivers to troubleshoot issues. This procedure is known as "clean booting."
	Programs that run in the background in memory are called
	terminate-and-stay-resident programs (TSR's). For example, these programs may be
	virus protection software, utility programs, print manager programs, or screen
	savers.
	
	To clean boot your computer, use the appropriate method for your version of
	Windows:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	  Q281770 How to Perform Clean-Boot Troubleshooting for Windows 2000
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	If the issue continues to occur, proceed to the next method.
	
	Method 4: Log On as Administrator (Only for Microsoft Windows NT, Microsoft Windows 2000 and Microsoft Windows XP)
	------------------------------------------------------------------------------------------------------------------
	
	If you are using Windows NT, Windows 2000, or Windows XP, please log off the
	computer, and then log on to the computer as a user with Administrator rights.
	
	If the issue continues to occur, proceed to the next method.
	
	Method 5: Obtain the Windows XP Fix
	-----------------------------------
	
	If you are using Windows XP, and have fast user switching enabled, you may need
	to obtain a patch file. To do so, please visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/downloads/release.asp?releaseid=35831
	
	NOTE: To install this patch, you must log on to Windows using an account with
	administration rights. This file is not required for Windows 2000 or earlier.
	
	If the issue continues to occur, proceed to the next method.
	
	Method 6: Obtain Microvision Update
	-----------------------------------
	
	This update is designed for Windows NT, Windows 2000, and Windows XP. You may
	need to be logged on as an administrator to install it.
	
	If you continue to experience problems verifying the CD, a compatibility
	enhancement patch is available. To download it, please visit the following
	Macrovision Web site:
	
	  http://www.macrovision.com/solutions/software/fix.php3
	
	If the issue continues to occur, proceed to the next method.
	
	Method 7: Install and Then Start the Game from a Different CD-ROM Drive or DVD-ROM Drive
	----------------------------------------------------------------------------------------
	
	If this issue continues to occur, your CD-ROM drive may be unable to read the
	game CD.
	
	Try to install the game from a different CD-ROM or DVD drive on the same computer
	or a different computer. If the installation is successful and you are able to
	start the game in this test, the problem may be that the original CD-ROM or
	DVD-ROM drive is may be unable to read the game disc.
	
	MORE INFORMATION
	================
	
	Because these Microsoft games are copy-protected programs, you must insert the
	game CD-ROM into your CD-ROM drive to run the program.
	
	This is also true if you copy the contents of the game CD-ROM to a hard disk,
	server, or other storage device and then install the game from this storage
	device.
	
	For additional information about how to troubleshoot CD-ROM read errors in
	Windows 98, Windows 98 and Windows Millennium, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Issues
	
	Additional query words: 1.00 msgame midmad hangs freeze lock cdrom verifying hal.dll encryption safedisk safe disk disc verify verified trainsim
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu msgame kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbLinkGolfSearch kbGamesSearch kbFlightSimSearch kbGolf2001 kbGolfSearch kbNFLFever2000 kbNFLSearch kbMSNSearch _IK kbMetalGearSearch kbPandoraSearch kbMotocrossSearch kbStarlancerSearch kbCrimsonSkiesSearch kbBaseballSearch kbMidtownMadSearch kbAOESearch kbMechCommSearch kbMidtownMadness kbDungeonSiege kbStarlancer kbAOE2ExpConquerors kbAOE2Kings kbBaseBall2001 kbCombatFlightSim2 kbCombatFlightSimSearch kbFlightSim2000 kbClassicBoardGames kbMetalGearSolid kbMidtownMadness2 kbPandorasBox kbMotocrossM2 kbCasino kbCrimsonSkies kbLinks2001 kbLinksLS2000 kbNBAInsideDrive2000 kbTrainSim kbMechCommander200 kbZooTycoon kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
