---
layout: page
title: "Q280438: MechWarrior 4: Blue Screen Error When You Remove CD-ROM"
permalink: kb/280/Q280438/
---

## Q280438: MechWarrior 4: Blue Screen Error When You Remove CD-ROM

	Article: Q280438
	Product(s): Microsoft Home Games
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you eject the Microsoft MechWarrior 4: Vengeance Disc 2 CD- ROM while you
	are playing the game, you may experience one of the following symptoms:
	
	In Microsoft Windows 98 or Microsoft Windows Millennium Edition (Me)
	
	--------------------------------------------------------------------
	
	- A blue screen is displayed stating that you need to insert the Disc 2 CD-ROM
	  into the CD-ROM drive.
	
	After you reinsert the MechWarrior 4 Disc 2 CD-ROM, you may experience the
	following symptom:
	
	- A black screen with a windows pointer is displayed.
	
	  If you press ALT+TAB, you may receive a fatal exception error.
	
	In Microsoft Windows 2000
	-------------------------
	
	The game quits unexpectedly and you receive the following error message:
	
	  STOP: Only 256 color palletized, 24 or 32 bit TGA files supported
	
	CAUSE
	=====
	
	This behavior can occur if you install the minimal installation of MechWarrior 4
	and if a custom decal was added.
	
	The "STOP: Only 256 color palletized, 24 or 32 bit TGA files supported" error
	message also occurs if, when installing the program, you click Ignore when you
	receive one or more messages that files cannot be copied and then attempt to
	play the game after Setup has completed.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, follow these steps:
	
	1. Do not eject the MechWarrior 4 Disc 2 CD-ROM during game play.
	
	2. Reinstall MechWarrior 4 using the full installation option.
	
	If you had problems installing the game, try removing the game and then reinstall
	it into a new folder. To do this, follow these steps:
	
	Uninstall MechWarrior 4
	-----------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft MechWarrior 4: Vengeance, click Add/Remove or Change/Remove,
	  and then click Uninstall.
	
	4. Click "Remove saved games files", and then click OK.
	
	5. Follow the instructions on the screen to uninstall MechWarrior 4.
	
	Delete the MechWarrior Vengeance Folder
	---------------------------------------
	
	1. Click Start, point to Find, and then click Files or Folders.
	
	2. In the Named box, type "MechWarrior Vengeance" (without the quotation marks).
	
	3. In the Look in box, click My Computer.
	
	4. Verify that Include subfolders option is selected, and then click Find Now.
	
	5. Right-click the MechWarrior Vengeance folder, click Delete, and then click
	  Yes.
	
	6. Close the Find: Files Named MechWarrior Vengeance window.
	
	Clean Boot the Computer
	-----------------------
	
	Microsoft Windows Millennium Edition
	
	1. Click Start, click Run, in the Open box, type "msconfig" (without the
	  quotation marks), and then click OK.
	
	2. On the General tab, click Selective Startup.
	
	3. Click to clear all of the check boxes under Selective Startup.
	
	4. On the Startup tab, click to select the *StateMgr check box.
	
	
	5. Click OK. When you see the prompt to restart your computer, click Yes. After
	  the computer restarts, click Start, click Run, in the Open box, type
	  "msconfig" (without the quotation marks), and then click OK.
	
	IMPORTANT: Ensure that the check boxes you cleared in the General tab are still
	cleared. Proceed to step 6 if all of the check boxes are cleared. If you see a
	disabled or gray check box, your computer is not clean-booted and you may need
	assistance from the manufacturer of the program that places a check mark back
	into Msconfig.
	
	6. After you verify that your computer is clean-booted in step 5, you can
	  isolate the issue. If the original issue does not reoccur after the clean
	  boot, select one item at a time under Selective startup, and then restart the
	  computer to see if the additional entry reproduces the original issue.
	
	Microsoft Windows 98
	
	1. Click Start, and then click Run.
	
	2. in the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	
	   - Process Autoexec.bat File
	
	   - Process Winstart.bat File (if available)
	
	   - Process Win.ini File
	
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	For additional information about how to clean boot Windows 98, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in System Configuration Utility. Microsoft Windows 95
	
	1. Restart the computer. When you see the Starting Windows 95 message, press the
	  F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete.
	
	3. Disable any anti-virus or disk tool programs installed on the computer.
	
	  For information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	4. Quit all running programs except Explorer and Systray. To do this, press
	  CTRL+ALT+DELETE, click the program that you want to quit, and then click End
	  Task. If you receive a message that the program is busy or not responding,
	  click End Task again. Repeat this step to quit all programs except Explorer
	  and Systray.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	Reinstall MechWarrior 4: Vengeance
	----------------------------------
	
	Install MechWarrior 4 into a New Folder
	---------------------------------------
	
	1. Insert the MechWarrior compact disc into your computer's CD-ROM or DVD-ROM
	  drive, and then follow the Setup Wizard instructions on your screen. If the
	  Setup Wizard does not appear, complete steps 2 and 3 below. Otherwise, skip
	  to step 4.
	
	2. Click Start, and then click Run.
	
	3. Type "<drive>:setup" (without the quotation marks), where <drive>
	  is the drive letter of your computer's CD-ROM or DVD-ROM drive.
	
	4. Click Install, click Next, and then click Change.
	
	5. In the Path box, delete the existing path, and then type the following line:
	
	  "<drive>:\Program Files\Microsoft Games\MechWarrior 4" (without the
	  quotation marks)
	
	  where <drive> is the drive letter of the hard disk on which you want to
	  install MechWarrior Vegeance.
	
	6. Click OK. When you are prompted to create the folder, click Yes.
	
	7. Click OK, and then follow the instructions on the screen to reinstall
	  MechWarrior Vengeance.
	
	Additional query words: msgame remove disc2 winme win98 win2k win 2000 mechwarrior4 black screen blue stop
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch kbMechWarrior4
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
