---
layout: page
title: "Q321083: Dungeon Siege: Err Msg: Decoding Error - Compressed Data"
permalink: /kb/321/Q321083/
---

## Q321083: Dungeon Siege: Err Msg: Decoding Error - Compressed Data

{% raw %}

	Article: Q321083
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 14-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dungeon Siege, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you play Dungeon Siege, you may receive an error message similar to the
	following:
	
	  Fatal Error has occurred and the application must be shut down.
	
	  Decoding error - compressed data is corrupt or unreadable.
	
	  -or-
	
	  Unable to open file '<file>'
	  Check your nodes_misc.gas file for a typo. Cannot continue, the program will
	  now exit.
	
	  -or-
	
	  Decoding error! Compressed data is either corrupt or unreadable, possibly due
	  to hardware failure. Try replacing or repairing the resource file
	  (reinstall?) to fix this problem.
	
	You may also experience the following behavior(s):
	
	- During installation a resource file (*.dsres) does not copy.
	
	- The game or computer stops responding (hangs).
	
	- There is no sound during game play.
	
	CAUSE
	=====
	
	This issue can occur if one or more of the following are true:
	
	- Dungeon Siege resource files that are currently being stored in memory are
	  becoming corrupted due to incorrect settings on the computer hardware.
	
	- Dungeon Siege interacts extensively with almost every system in the PC and as
	  a result, is very sensitive to the hardware configuration.
	
	- There is a corrupted resource file (.dsres).
	
	RESOLUTION
	==========
	
	Verify Files
	------------
	
	Verify that the resource files is corrupted by running a cyclical redundancy
	check (CRC) on the files. To do this, follow these steps.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Right-click the desktop, point to New, and then click Shortcut.
	
	2. Click Browse, click DungeonSiege.exe, and then click Open. By default, the
	  path is "C:\Program Files\Microsoft Games\Dungeon Siege\DungeonSiege.exe".
	
	3. In the "Command line" box, to the right of the quotation marks ("), type a
	  space, and then type " verifydata=true" (without the quotation marks).
	
	4. Click Next, and then click Finish.
	
	5. Double-click the new shortcut.
	
	  The CRC takes several minutes to complete.
	
	If any of the files do not pass the CRC test, the files are corrupted. To remove
	and reinstall the game, use one of the following methods:
	
	Method 1:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Dungeon Siege, and then click Add/Remove.
	
	4. Click Uninstall, and then click OK.
	
	  NOTE: Do not click to select the "Remove saved games" check box.
	
	5. After the removal is complete, verify the integrity of your hard disk to look
	  for lost clusters and errors. To do this, follow these steps:
	
	  a. Double-click My Computer on the desktop, and then click the hard disk
	     where you will install Dungeon Siege.
	
	  b. On the File menu, click Properties.
	
	  c. On the Tools tab, click Check Now under Error-checking.
	
	  d. Under "Check disk options", click to select the "Scan for and attempt
	     recovery of bad sectors" check box.
	
	  e. Click Start.
	
	6. Reinstall Dungeon Siege.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q321742 Dungeon Siege: How to Troubleshoot Setup Errors
	
	Method 2:
	
	1. Insert the Dungeon Siege disc 1, and hold down the SHIFT key to prevent the
	  autorun program from starting.
	
	2. Copy the resource file or files, as appropriate, from <CD-ROM
	  drive>\DSIEGE\RESOUR_1 to C:\Program Files\Microsoft Games\Dungeon
	  Siege\Resources:
	
	   - OBJECT_1.DSR
	
	   - VOICES_1.DSR
	
	NOTE: If you receive errors copying the files, there may be a problem with the
	disc or drive. For additional information about troubleshooting CD-ROM and
	DVD-ROM drives, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM or DVD-ROM Read Issues
	
	  Q321641 How to Troubleshoot Issues with Reading CD, CD-R, CD-RW, and DVD
	  Discs
	
	3. Insert the Dungeon Siege disc 2, and hold down the SHIFT key to prevent the
	  autorun program from starting.
	
	4. Copy the resource file or files, as appropriate, from <CD-ROM
	  drive>\DSIEGE\RESOUR_1 to C:\Program Files\Microsoft Games\Dungeon
	  Siege\Resources:
	
	   - LOGIC_1.DSR
	
	   - SOUND_1.DSR
	
	   - TERRAI_1.DSR
	
	NOTE: If you receive errors copying the files, there may be a problem with the
	disc or drive. For additional information about troubleshooting CD-ROM and
	DVD-ROM drives, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM or DVD-ROM Read Issues
	
	  Q321641 How to Troubleshoot Issues with Reading CD, CD-R, CD-RW, and DVD
	  Discs
	
	5. Right-click each of the damaged files, click Rename, and then change the file
	  name to end with .OLD.
	
	6. Right-click each of the new files, click Rename, and then change the file
	  name as follows:
	
	   - OBJECT_1.DSR is changed to OBJECTS.DSRES.
	
	   - VOICES_1.DSR is changed to VOICES.DSRES.
	
	   - LOGIC_1.DSR is changed to LOGIC.DSRES.
	
	   - SOUND_1.DSR is changed to SOUND.DSRES.
	
	   - TERRAI_1.DSR is changed to TERRAIN.DSRES.
	
	Install the Dungeon Siege Update
	--------------------------------
	
	Install the latest Dungeon Siege Update. For additional information about the
	Dungeon Siege Update, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q324477 Dungeon Siege 1.0: Availability of the Dungeon Siege Update and the
	  Fixes Included in the Update
	
	Set Hardware to Default Settings
	--------------------------------
	
	If you have a retail computer and have changed the configuration of the CPU clock
	rates and other BIOS settings such as memory, contact your computer manufacturer
	for help restoring the factory default settings.
	
	If you have a non-retail computer, such as a computer that you built yourself,
	and you have configured the CPU clock rates and other BIOS settings such as
	memory, contact your hardware manufacturer for help in configuring these
	settings.
	
	For information about how to contact , click the appropriate article number in
	the following list to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	For additional information about other causes of these behaviors, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q321084 Dungeon Siege: Game Stops During Startup at Black Screen
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbDungeonSiege
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
