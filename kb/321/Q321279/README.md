---
layout: page
title: "Q321279: Dungeon Siege: &quot;Needs to Close&quot; Err Msg When You Start the Game"
permalink: /kb/321/Q321279/
---

## Q321279: Dungeon Siege: &quot;Needs to Close&quot; Err Msg When You Start the Game

	Article: Q321279
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dungeon Siege, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Dungeon Siege, you may receive an error message similar to
	the following:
	
	  Microsoft Dungeon Siege has encountered a problem and needs to close. We are
	  sorry for the inconvenience.
	
	If you click Click Here, you receive a message that contains the following
	details:
	
	  Error Signature
	  AppName: dungeonsiege.exe AppVer: 0.2.3.801 ModName: dungeonsiege.exe
	  ModVer: 0.2.3.801 Offset: 0026adff
	
	CAUSE
	=====
	
	This behavior occurs if the Objects.dsres file is corrupted or missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods.
	
	Method 1: Install the Dungeon Siege Update
	------------------------------------------
	
	Install the latest Dungeon Siege Update. For additional information about the
	Dungeon Siege Update, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q324477 Dungeon Siege 1.0: Availability of the Dungeon Siege Update and the
	  Fixes Included in the Update
	
	Method 2: Replace the Objects.dsres File
	----------------------------------------
	
	1. Double-click My Computer, and then locate the following folder
	
	  <drive>:\Program Files\Microsoft Games\Dungeon Siege\Resources
	
	  where <drive> is the drive on which the game is installed.
	
	2. Do one of the following:
	
	   - If the Objects.dsres file is not in the location described in step 1, go
	     to step 3.
	
	     -or-
	
	   - If the Objects.dsres file is in the location described in step 1,
	     right-click the file, and then click Delete.
	
	     If you are prompted to confirm that you want to delete the file, click Yes.
	
	3. Insert Dungeon Siege Disc 1 into your CD-ROM drive or DVD-ROM drive, and then
	  hold down the SHIFT key to prevent the program from starting.
	
	4. Locate the following folder
	
	  <drive>:\Dsiege\Resour_1
	
	  where <drive> is the CD-ROM drive or DVD-ROM drive.
	
	5. Copy the Object_1.dsr file from the Dsiege\Resour_1 folder on the Dungeon
	  Siege CD-ROM to the Program Files\Microsoft Games\Dungeon Siege\Resources
	  folder on your hard disk.
	
	6. Right-click Object_1.dsr on your hard disk, click Rename, type
	  "Objects.dsres" (without the quotation marks), and then press ENTER.
	
	  If you are prompted to confirm that you want to rename the file, click Yes.
	
	7. Right-click Objects.dsres again, click Properties, click to clear the
	  Read-only check box, and then click OK.
	
	Method 3: Remove and Reinstall Dungeon Siege
	--------------------------------------------
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the Install/Uninstall tab, click Dungeon Siege, and then click
	  Add/Remove.
	
	4. Click Uninstall, and then click OK.
	
	  NOTE: Do not click to select the "Remove saved games" check box.
	
	5. Reinstall Dungeon Siege.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbDungeonSiege
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
