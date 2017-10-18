---
layout: page
title: "Q302489: MechWarrior: Error 0036: Old File Not Found"
permalink: kb/302/Q302489/
---

## Q302489: MechWarrior: Error 0036: Old File Not Found

	Article: Q302489
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Inner Sphere 'Mech Pak 
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install an update (patch) to Microsoft MechWarrior 4, the
	installation program may unexpectedly quit with the following (or similar) error
	message:
	
	  Error 0036: Old file not found
	
	A file with that name exists, but the update is not completed.
	
	CAUSE
	=====
	
	This behavior can occur if the original file has become corrupted or infected
	with a virus.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	NOTE: The following steps are lengthy, so you may wish to print them before you
	begin.
	
	Replace Files from MechWarrior Vengeance Disk 1
	-----------------------------------------------
	
	NOTE: To see the name of the corrupted file in the MechWarrior 4 Vengeance
	Patching Utility dialog box, drag the error message off the screen.
	
	1. Click Start, point to Run, and then type:
	
	  "<drive>:\Program Files\Microsoft Games\MechWarrior Vengeance\resource"
	  (without the quotation marks)
	
	  where <drive> is the letter of the hard disk on which MechWarrior
	  Vengeance is installed.
	
	2. Right-click the Props.mw4 file, and then click Delete.
	
	3. Close all the windows.
	
	4. Insert MechWarrior Vengeance disk 1 into the CD-ROM drive. Press and hold the
	  SHIFT key as you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	5. Click Start, point to Run, and then type:
	
	  "<CD-ROM drive>:\resource" (without the quotation marks)
	
	6. Click OK.
	
	7. Right-click the Props.mw4 file, and then click Copy.
	
	8. Close all the windows.
	
	9. Click Start, and then click Run.
	
	10. In the Open box, type the following line, and then click OK:
	
	  "<drive>:\Program Files\Microsoft Games\MechWarrior Vengeance\resource"
	  (without the quotation marks)
	
	11. On the Edit menu, click Paste, and then run the MechWarrior update again.
	
	12. If the problem continues to occur, repeat steps 1-11, but replace the
	  Core.mw4 and Textures.mw4 files.
	
	If the issue continues to occur, proceed to the next step.
	
	NOTE: The following steps are lengthy, so you may wish to print them out before
	you begin.
	
	Uninstall MechWarrior Vengeance, Black Knight and Mech Paks
	-----------------------------------------------------------
	
	To uninstall MechWarrior Vengeance, Black Knight and Mech Paks:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click MechWarrior Vengeance, and then click "Add/Remove" or "Change/Remove".
	
	4. Click Uninstall.
	
	5. Click to check the "Remove saved games files" check box.
	
	6. Follow the instructions on the screen to uninstall the game.
	
	7. Repeat steps 1-4 to uninstall Black Knight and Mech Paks if you have these
	  products installed.
	
	Delete the MechWarrior Vengeance Folder
	---------------------------------------
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	To delete the MechWarrior Vengeance folder:
	
	1. Click Start, and then click "Find or Search".
	
	  If you are using Microsoft Windows 98, click "Files or Folders"; and if you
	  are using Microsoft Windows XP, click "All files and folders".
	
	2. In the Named box or the "All or part of the file name" box, type:
	
	  "MechWarrior" (without the quotation marks)
	
	3. In the "Look in" box, click My Computer.
	
	4. Make sure that the "Include subfolders" check box is selected.
	
	5. Click Find Now.
	
	6. Right-click the MechWarrior Vengeance folder, click Delete, and then click
	  Yes.
	
	7. Close all the windows.
	
	Clean Start the Computer
	------------------------
	
	To perform a clean start of the computer, use the appropriate method for your
	version of Microsoft Windows.
	
	Microsoft Windows Millennium Edition:
	
	For additional information about how to perform a clean start, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Microsoft Windows 98:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	
	   - Process Autoexec.bat File
	
	   - Process Winstart.bat File (if available)
	
	   - Process Win.ini File
	
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	For additional information about how to perform a clean start in Windows 98,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in System Configuration Utility.
	
	Microsoft Windows 95:
	
	1. Restart the computer. When you see the Starting Windows 95 message, press the
	  F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete.
	
	3. Disable any anti-virus or disk tool programs installed on the computer.
	
	  For information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	4. Quit all running programs except Windows Explorer and Systray. To do this,
	  press CTRL+ALT+DELETE, click the program that you want to quit, and then
	  click End Task. If you receive a message that the program is busy or not
	  responding, click End Task again. Repeat this step until all programs except
	  Windows Explorer and Systray have been stopped.
	
	For additional information about how to clean start Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	Empty TEMP Folder in Windows
	----------------------------
	
	1. Double-click My Computer.
	
	2. Open the TEMP folder found in the following path:
	
	  <drive>:\Windows
	
	Note: Windows 2000 and XP users TEMP folder located at:
	
	  <drive>:\Documents and Settings\<user name>\Local Settings\Temp
	
	3. On the Edit menu, click Select All.
	
	4. Click File, click Delete, and then click Yes.
	
	Scan Your Hard Disk for Viruses
	-------------------------------
	
	For additional information about third-party virus detection programs, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q49500 List of Antivirus Software Vendors
	
	Reinstall MechWarrior 4
	-----------------------
	
	Install MechWarrior 4 by using the directions included with MechWarrior 4.
	
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
