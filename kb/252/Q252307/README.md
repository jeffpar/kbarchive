---
layout: page
title: "Q252307: Games: How to Troubleshoot CD Audio Playback"
permalink: /kb/252/Q252307/
---

## Q252307: Games: How to Troubleshoot CD Audio Playback

{% raw %}

	Article: Q252307
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kbsound kbimu msgame
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft International Soccer 2000, version 1.0 
	- Microsoft Midtown Madness, version 1.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft NFL Fever 2000, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play any of the Microsoft games listed at the beginning of this
	article, CD Audio may not be played in the game. As a result, you may not hear
	certain sounds, such as background music, in the game.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- The drive letter of your default CD-ROM drive for playing CD music has
	  changed.
	
	- The CD Audio Device (Media Control) is missing or damaged.
	- The CD Audio cable that runs from the CD-ROM Drive to the Sound Card is
	  missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Check the Drive Letter of the CD-ROM Drive for Playing CD Music
	---------------------------------------------------------------
	
	Make sure that the drive letter of your default CD-ROM drive for playing CD music
	has not changed:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the CD Music tab.
	
	4. Verify that the drive letter in the "Default CD-ROM drive for playing CD
	  music" box is the same as the drive letter of the CD-ROM drive from which you
	  installed and are playing the game.
	
	  If the drive letter has changed, click the drive letter of the CD-ROM drive
	  from which you installed and are playing the game in the "Default CD-ROM
	  drive for playing CD music" box, and then click OK.
	
	5. Close Control Panel.
	
	If the issue continues to occur, proceed to the next method.
	
	Verify the Installation of the CD Audio Device (Media Control)
	--------------------------------------------------------------
	
	To verify that the CD Audio Device (Media Control) is installed:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Advanced or Devices tab.
	
	4. Click the PLUS SIGN (+) next to Media Control Devices to expand the branch.
	
	5. Verify that CD Audio Device (Media Control) is listed in the Media Control
	  Devices branch.
	
	If the CD Audio Device (Media Control) is not listed in the Media Control Devices
	branch:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add New Hardware.
	
	3. Click Next. If you are using Microsoft Windows 98, click Next, and then click
	  Next again.
	
	4. Click "No, I want to select the hardware from a list", and then click Next.
	
	5. Click "Sound, video and game controllers", and then click Next.
	
	6. In the Manufacturers box, click Microsoft MCI.
	
	7. In the Models box, click CD Audio Device (Media Control), and then click
	  Next.
	
	8. Click Finish.
	
	9. When you are prompted to restart your computer, do so.
	
	If the CD Audio Device (Media Control) is listed in the Media Control Devices
	branch, the driver for this device may be damaged. To resolve this issue, remove
	and reinstall the CD Audio Device (Media Control) driver:
	
	Remove the CD Audio Device (Media Control):
	
	To remove the CD Audio Device (Media Control):
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Advanced or Devices tab.
	
	4. Click the PLUS SIGN (+) next to Media Control Devices to expand the branch.
	
	5. Click CD Audio Device (Media Control), and then click Properties.
	
	6. Click Remove.
	
	7. Click OK, and then OK again.
	
	8. Reinstall the CD Audio Device (Media Control).
	
	If the issue continues to occur, proceed to the next method.
	
	Delete the Mcicda.drv File
	--------------------------
	
	Delete the Mcicda.drv file, and then remove and reinstall the CD Audio Device
	(Media Control).
	
	NOTE: You may be prompted to insert your Microsoft Windows 95 or Microsoft
	Windows 98 CD-ROM when you reinstall the CD Audio Device (Media Control).
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "mcicda.drv" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Click Find Now.
	
	5. In the list of found files, right-click the Mcicda.drv file, and then click
	  Delete. Repeat this step until the list of found files is empty.
	
	6. Close the Find: Files Named Mcicda.drv window.
	
	7. Remove and reinstall the CD Audio Device (Media Control).
	
	If the issue continues to occur, disable Direct Memory Access (DMA) for the
	CD-ROM:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Click the PLUS SIGN (+) next to CDROM.
	
	5. Double-click your CD-ROM device listed in the branch below.
	
	6. Click the Settings tab.
	
	7. Make sure that the DMA check box is cleared.
	
	  If the DMA check box is selected, click to clear it.
	
	8. Click OK, and then click OK again.
	
	9. Close Control Panel, and then restart your computer.
	
	MORE INFORMATION
	================
	
	For additional information about how the control panels are laid out in Windows
	2000, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q264266 How to Manage Multimedia Settings and Driver Resources in Windows
	  2000
	
	Additional query words: 1.00 2.00 msgame aoe aok combatfs cfs mcm mtm2 basketball football ts tshoot
	
	======================================================================
	Keywords          : kbenv kbsound kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbAOE kbGamesSearch kbZNotKeyword kbNFLFever2000 kbNFLSearch kbMotocrossSearch kbMidtownMadSearch kbMonsterTMSearch kbAOESearch kbMidtownMadness kbMonsterTM2 kbAOEExpRome kbAOE2Kings kbMotocrossM kbNBAInsideDrive2000 kbIntlSoccer2000
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
