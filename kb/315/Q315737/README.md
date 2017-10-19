---
layout: page
title: "Q315737: Zoo Tycoon: Black Screen or Blue Screen When You Start Game"
permalink: /kb/315/Q315737/
---

## Q315737: Zoo Tycoon: Black Screen or Blue Screen When You Start Game

	Article: Q315737
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zoo Tycoon 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Zoo Tycoon, the screen may be black. You may receive an
	error message similar to the following:
	
	  Microsoft Zoo Tycoon has encountered a problem and needs to close. We are
	  sorry for the inconvenience.
	
	If you click Click Here, a dialog box that contains the following information
	about the error opens:
	
	  Error Signature
	  AppName: Zoo.exe AppVer: 10.10.0.6 ModName: Zoo.exe
	  ModVer: 10.10.0.6 Offset: 0004360a
	
	Or, when you start the game, you may see a blue screen, the program quits, and
	then the desktop is displayed again.
	
	CAUSE
	=====
	
	This behavior can occur if the program is corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps in the order in which they are
	presented.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Uninstall Zoo Tycoon
	--------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click "Zoo Tycoon", and then click
	  Add/Remove.
	
	4. When you are prompted to uninstall the program, click Yes.
	
	5. When the uninstall process is completed, click Start, point to Find, and then
	  click "Files or Folders".
	
	6. In the Named box, type "Zoo Tycoon" including the quotation marks.
	
	  NOTE: If you did not install Zoo Tycoon in the default folder, type the name
	  of the folder in which you installed the game.
	
	7. In the "Look in" box, click the hard disk on which Zoo Tycoon was installed,
	  and then click Find Now.
	
	8. In the list of found files and folders, right-click the "Zoo Tycoon" folder,
	  and then click Delete.
	
	  If you are prompted to confirm the deletion, click Yes or "Yes to all".
	
	Empty the Temp Folder
	---------------------
	
	To empty the Temp folder, follow the appropriate steps for your version of
	Microsoft Windows.
	
	Microsoft Windows 95:
	
	1. Click Start, and then click Shut Down.
	
	2. Click "Restart the Computer in MS-DOS mode", and then click OK.
	
	3. Type the following lines and press ENTER after you type each line:
	
	  cd temp
	  del *.tmp
	  exit
	
	Microsoft Windows 98, Microsoft Windows Millennium Edition (Me), or Microsoft Windows 2000:
	
	To empty the Temp folder and the Temporary Internet Files folder, use the Disk
	Cleanup tool. To do this, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Disk Cleanup.
	
	2. Click C: (the drive on which Windows is installed), and then click OK.
	
	3. Click to select the "Temporary files" check box.
	
	4. Click OK, and then click Yes to confirm the deletion.
	
	Restart Your Computer with a Clean-Boot Procedure
	-------------------------------------------------
	
	Follow the appropriate steps for your version of Microsoft Windows.
	
	Windows Me:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Selective startup".
	
	3. Click to clear all of the check boxes under Selective startup.
	
	4. On the Startup tab, click to select the *StateMgr check box.
	
	
	5. Click OK. When you see the prompt to restart your computer, click Yes. After
	  the computer restarts, click Start, click Run, type "msconfig" (without the
	  quotation marks) in the Open box, and then click OK.
	
	  IMPORTANT: Look closely at the General tab to ensure that the check boxes that
	  you cleared are still cleared. If none of the check boxes are selected,
	  proceed to the next method. If you see a selected, unavailable check box (it
	  appears dimmed and has a check mark in it), your computer is not truly
	  "clean-booted" and you may need assistance from the manufacturer of the
	  program that is listed next to the selected, unavailable check box.
	
	Windows 98:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click System Information.
	
	2. On the Tools menu, click System Configuration Utility.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys file
	   - Process Autoexec.bat file
	   - Process Winstart.bat file (if available)
	   - Process Win.ini file
	   - Load Startup group items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in the System Configuration Utility tool.
	
	Windows 95:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select "Step By Step Confirmation" on the Startup menu.
	
	2. Press Y at each prompt except the following two prompts. At the following two
	  prompts, press N:
	
	   - Process your startup device driver (CONFIG.SYS) [Enter=Y, Esc=N]?
	   - Process your startup command file (AUTOEXEC.BAT) [Enter=Y,Esc=N]?
	
	3. Disable any antivirus or disk tool programs that are installed on the
	  computer. For information about how to disable these programs, see the
	  printed or online documentation for the program.
	
	4. Quit all running programs except Windows Explorer and Systray. To do this:
	
	  a. Press CTRL+ALT+DELETE.
	
	  b. Click the program you want to quit, and then click End Task.
	
	  c. If you receive a message stating that the program is busy or not
	     responding, click End Task again.
	
	  Repeat this step until you have quit all programs except Windows Explorer and
	  Systray.
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	Reinstall Zoo Tycoon
	--------------------
	
	To reinstall Zoo Tycoon, follow these steps:
	
	1. Insert the Zoo Tycoon CD-ROM into the CD-ROM drive or DVD-ROM drive.
	
	  If Zoo Tycoon Setup does not start automatically, follow these steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following line
	
	  <cd-rom>:\setup.exe
	
	     where <cd-rom> is the drive letter of the CD-ROM or DVD-ROM drive.
	
	  c. Click OK.
	
	2. Follow the instructions on the screen to install Zoo Tycoon.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbZooTycoon
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
