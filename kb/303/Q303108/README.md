---
layout: page
title: "Q303108: MechWarrior 4: Err Msg: EXCEPTION Stack Overflow or File Not..."
permalink: /kb/303/Q303108/
---

## Q303108: MechWarrior 4: Err Msg: EXCEPTION Stack Overflow or File Not...

{% raw %}

	Article: Q303108
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Black Knight 
	- Microsoft MechWarrior 4: Inner Sphere 'Mech Pak 
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Microsoft MechWarrior 4, you may receive an error message
	similar to any of the following:
	
	  EXCEPTION : Stack Overflow in MW4! (+0xd4cf)----Address : 0x0040e4cf
	
	  -or-
	
	  EXCEPTION : Stack Overflow in MW4X! (+0xd4cf)----Address : 0x0040e4cf
	
	-or-
	
	  STOP: File not found 'Content\ShellScripts\Graphics\dialog_500x450.tga'
	
	-or-
	
	  File not found: Cdac14ba.dll
	
	CAUSE
	=====
	
	This behavior can occur if one or more files in the MechWarrior 4 folder are
	damaged or missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps.
	
	Step 1: Remove MechWarrior Vengeance, MechWarrior Black Knight and MechWarrior Mech Paks
	----------------------------------------------------------------------------------------
	
	To remove these programs:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click MechWarrior Vengeance and then click "Add/Remove" or "Change/Remove".
	
	4. Click Uninstall.
	
	5. Click to check the "Remove saved games files" check box.
	
	6. Follow the instructions on the screen to remove the game.
	
	7. Repeat steps 1-4 to remove Black Knight and Mech Paks.
	
	Step 2: Delete the MechWarrior Vengeance Folder
	-----------------------------------------------
	
	To delete the MechWarrior Vengeance folder:
	
	1. Click Start, and then click "Find or Search".
	
	  NOTE: If you are using Microsoft Windows 98, click "Files or Folders", and if
	  you are using Microsoft Windows XP, click "All files and folders".
	
	2. In the Named box or the "All or part of the file name" box, type "MechWarrior
	  Vengeance" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Make sure that the "Include subfolders" check box is selected.
	
	5. Click "Find Now" or "Search".
	
	6. Right-click the MechWarrior Vengeance folder, click Delete, and then click
	  Yes.
	
	7. Close all the windows.
	
	Step 3: Clean Boot the Computer
	-------------------------------
	
	To clean boot your computer, use the appropriate method for your version of
	Windows:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	  Q281770 How to Perform Clean-Boot Troubleshooting for Windows 2000
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	Step 4: Install MechWarrior 4
	-----------------------------
	
	1. Insert the MechWarrior compact disc into your computer's CD-ROM or DVD-ROM
	  drive, and then follow the Setup Wizard instructions on your screen. If the
	  Setup Wizard does not appear, complete steps 2 and 3. If the Setup Wizard
	  appears, skip to step 4.
	
	2. Click Start, and then click Run.
	
	3. Type "<drive>:setup" (without the quotation marks), where <drive>
	  is the drive letter of your computer's CD-ROM or DVD-ROM drive.
	
	4. Click Install, click Next, and then click Change.
	
	5. In the Path box, delete the existing path, and then type:
	
	  "<drive>:\Program Files\Microsoft Games\MechWarrior 4" (without the
	  quotation marks)
	
	  where <drive> is the drive letter of the hard disk on which you want to
	  install MechWarrior Vengeance.
	
	6. Click OK, and then click Yes when you receive a prompt to create the folder.
	
	7. Click OK, and then follow the instructions on the screen to reinstall
	  MechWarrior Vengeance.
	
	8. Repeat steps 1-7 to install Black Knight or Mech Paks if you have these
	  programs.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
