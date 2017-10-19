---
layout: page
title: "Q322614: Age of Empires: &quot;Game Could Not Be Saved&quot; Err Msg Saving Game"
permalink: /kb/322/Q322614/
---

## Q322614: Age of Empires: &quot;Game Could Not Be Saved&quot; Err Msg Saving Game

	Article: Q322614
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires, Gold Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to save an Age of Empires game, or you try to open and play a
	previously saved game, you may experience one or more of the following
	behaviors:
	
	- You may receive the following error message:
	
	  The game could not be saved. Free some disk space, and then try again.
	
	NOTE: You may receive this error message even though the drive on which Age of
	Empires is installed has enough available hard disk space to save the game.
	
	- When you try to open or play a previously saved Age of Empires game, the game
	  may quit (crash) unexpectedly.
	
	CAUSE
	=====
	
	This behavior may occur if one or more Age of Empires files are corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one or more of the following methods.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Method 1: Delete the Content in the Temp Folder
	-----------------------------------------------
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Disk Cleanup.
	
	2. In the Drives dialog box, select the drive on which Microsoft Windows is
	  installed, and then click OK.
	
	3. Under "Files to delete", click to select the "Temporary files" check box, and
	  then click OK.
	
	4. When prompted to confirm the deletion, click Yes.
	
	  The Disk Cleanup process automatically starts, and it may take several minutes
	  to complete.
	
	If Method 1 does not resolve this issue, proceed to Method 2.
	
	Method 2: Rename the SaveGame Folder
	------------------------------------
	
	1. Click Start, point to Search, and then click "For Files or Folders".
	
	2. In the Named box, type "SaveGame" (without the quotation marks), and then
	  click Search.
	
	3. When the search process is complete, right-click SaveGame, and then click
	  Rename.
	
	  NOTE: If there is more than one folder named "SaveGame," locate the folder
	  that is associated with Age of Empires.
	
	4. In the box that appears, type "SaveNewGame" (without the quotation marks),
	  and then press ENTER.
	
	If Method 2 does not resolve the issue, proceed to Method 3.
	
	Method 3: Remove and then Reinstall Age of Empires
	--------------------------------------------------
	
	Remove Age of Empires:
	
	NOTE: First remove Age of Conquerors if you have it installed and then Age of
	Kings.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	  NOTE: on Microsoft Windows 98 or Microsoft Windows Millennium, click the
	  Install/Uninstall tab.
	
	3. Click the Install/Uninstall tab.
	
	4. In the list of installed programs, double-click "Microsoft Age of Empires",
	  and then click Uninstall.
	
	5. Follow the on-screen instructions to complete the removal process.
	
	The computer may stop responding (hang).
	
	Delete the Age of Empires Folder:
	
	1. Start Windows Explorer, and then locate C:\Program Files\Microsoft Games.
	
	  NOTE: This is the default path; this path may vary on your computer, depending
	  on your configuration.
	
	2. In the Microsoft Games folder, right-click "Age of Empires", and then click
	  Delete.
	
	3. When prompted to confirm the deletion, click Yes.
	
	4. Close the Microsoft Games folder.
	
	Clean Boot the Computer:
	
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
	
	Reinstall the Program:
	
	1. Insert the Age of Empires CD-ROM into your computer's CD-ROM or DVD-ROM
	  drive.
	
	  NOTE: If Setup does not start automatically, follow these steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following line, where <cd-rom> is the
	     drive letter of the CD-ROM or DVD-ROM drive:
	
	      - Age of Kings:
	
	  "<cd-rom>:\aoesetup.exe" (without the quotation marks)
	
	      - Age of Conquerors:
	
	  "<cd-rom>:\aocsetup.exe" (without the quotation marks)
	
	  c. Click OK.
	
	2. Click Install, and then click Continue.
	
	3. Click the Browse button.
	
	4. In the Path box, delete the existing path, and then type the following line:
	
	  "<drive>:\Program Files\Microsoft Games\AOK" (without the quotation
	  marks)
	
	  where <drive> is the drive letter of the hard disk on which you want to
	  install Age of Kings.
	
	5. Click OK. When you recieve a prompt to create the folder, click Yes.
	
	6. Click Continue.
	
	7. Follow the on-screen instructions to complete the installation process.
	
	8. Install Age of Conquerors if you have a retail version of the product.
	
	If the problem continues to occur, your computer might be infected with the
	virus. For additional information about how to proceed, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q285327 Games: W95.Hybris Virus Alert
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHomeProdSearch kbGamesSearch kbAOESearch kbAOE2Kings
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
