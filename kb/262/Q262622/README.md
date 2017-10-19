---
layout: page
title: "Q262622: Games: Blank Error Message When You Install the Game"
permalink: /kb/262/Q262622/
---

## Q262622: Games: Blank Error Message When You Install the Game

	Article: Q262622
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Allegiance, version 1.0 
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Asheron's Call: Dark Majesty, version 1.0 
	- Microsoft Baseball 2001 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Crimson Skies 
	- Microsoft Golf 2001 Edition 
	- Microsoft Links 2001 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Metal Gear Solid 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft Pandora's Box, version 1.0 
	- Microsoft StarLancer, version 1.0 
	- Microsoft Train Simulator, version 1.0 
	- Microsoft Zoo Tycoon 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the Microsoft games listed at the beginning
	of this article, you may experience any of the following symptoms:
	
	- You may receive an error message that contains only an exclamation point
	  (!).
	
	  When you click OK, Setup quits.
	
	- You receive an error message that contains an exclamation point and the word,
	  "Start".
	
	- A dialog box for a different Microsoft game is displayed rather than the one
	  for the game that you are attempting to install.
	
	- You may receive any of the following error messages:
	
	   - There is not enough memory for Microsoft Puzzle Collection Trial to start,
	  quit any open applications and restart Microsoft Puzzle Collection.
	
	   - Setup was unable to find (or could not read) the language specific setup
	  resource dll, unable to continue. Please reboot and try again.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions is true:
	
	- The Windows\Temp folder is damaged.
	
	- There is more than one file on your hard disk that uses the Setupenu.dll file
	  name.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods.
	
	Delete the Temp Folder
	----------------------
	
	To delete the Temp folder on the computer, use the appropriate method for your
	version of Microsoft Windows.
	
	Microsoft Windows 95:
	
	1. Click Start, and then click Shut Down.
	
	2. Click "Restart in MS-DOS mode", and then click OK.
	
	3. At the command prompt, type the following lines, pressing ENTER after you
	  type each line:
	
	  deltree c:\windows\temp
	  y
	  exit
	
	4. Clean boot the computer, and then install the game.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	Microsoft Windows 98, Microsoft Windows 2000, and Microsoft Windows Millennium Edition (Me):
	
	Use the Disk Cleanup tool to remove temporary files:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Disk Cleanup.
	
	2. In the Drives box, click the hard disk on which Windows is installed, and
	  then click OK.
	
	3. Under "Files to delete", click to select the "Temporary files" check box, and
	  then click OK.
	
	4. Click Yes.
	
	5. When the Disk Cleanup tool is finished, restart the computer, and then
	  install the game.
	
	  NOTE: If the issue continues to occur, clean boot the computer, and then
	  install the game.
	
	For additional information about how to clean boot your version of Windows, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Windows XP:
	
	NOTE: The Windows XP TEMP directory that the game setup in is trying to use
	located in a specific user folder. For example:
	
	  <your drive>:\Documents and Settings\<user name>\Local
	  Settings\Temp
	
	1. Click Start, click Run, enter "%TEMP%" (without the quotation marks), and
	  then click OK.
	
	2. Click Edit, and then select Select All.
	
	3. Click File, and then select Delete.
	
	4. Click Yes to delete temp files.
	
	Rename the Setupenu.dll Files
	-----------------------------
	
	To rename the Setupenu.dll files:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the "File name" box, type "setupenu.dll" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer or "Local hard drives", and then
	  click Find Now.
	
	4. In the list of found files, right-click a copy of the Setupenu.dll file, and
	  then click Rename.
	
	5. Type "oldsetupenu.dll" (without the quotation marks), and then press ENTER.
	
	6. Repeat steps 4 and 5 to rename each copy of the Setupenu.dll file in the list
	  of found files.
	
	7. Insert the CD-ROM for the game that you want to install into the CD-ROM or
	  DVD-ROM drive.
	
	  If Setup does not start automatically:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following line, and then click OK:
	
	  <cd-rom>:\setup.exe
	
	     where <cd-rom> is the drive letter of your CD-ROM or DVD-ROM drive.
	
	  c. Follow the instructions on the screen to install the game.
	
	8. Click Start, point to Find, and then click "Files or Folders".
	
	9. In the "File name" box, type "oldsetupenu.dll" (without the quotation marks).
	
	10. In the "Look in" box, click My Computer or Local Harddrives, and then click
	  Find Now.
	
	11. In the list of found files, right-click a copy of the Oldsetupenu.dll file,
	  and then click Rename.
	
	12. Type "setupenu.dll" (without the quotation marks), and then press ENTER.
	
	13. Repeat steps 11 and 12 to rename each copy of the Oldsetupenu.dll file in
	  the list of found files.
	
	Additional query words: 1.00 2.00 msgame bang yellow triangle blank empty crash exits setup install window
	
	======================================================================
	Keywords          : kbenv kbsetup kbimu msgame kbfaq
	Technology        : kbHomeProdSearch kbLinkGolfSearch _IK kbAllegianceSearch kbMetalGearSearch kbStarlancerSearch kbCrimsonSkiesSearch kbAsheronSearch kbBaseballSearch kbMidtownMadSearch kbAOESearch kbGolf2001 kbGolfSearch kbMSNSearch kbPandoraSearch kbMotocrossSearch kbSimSearch kbAllegiance kbAsheron100 kbStarlancer kbAsheronDarkMaj kbAOE2ExpConquerors kbPandorasBox kbAOE2Kings kbBaseBall2001 kbCombatFlightSim2 kbCombatFlightSimSearch kbMetalGearSolid kbMidtownMadness2 kbMotocrossM2 kbCrimsonSkies kbLinks2001 _IKkbbogus kbGamesSearch kbTrainSim kbZooTycoon
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
