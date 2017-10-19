---
layout: page
title: "Q325999: MechWarrior 4: The New Mechs Are Not Available"
permalink: /kb/325/Q325999/
---

## Q325999: MechWarrior 4: The New Mechs Are Not Available

	Article: Q325999
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 14-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Black Knight 
	- Microsoft MechWarrior 4: Clan 'Mech Pak 
	- Microsoft MechWarrior 4: Inner Sphere 'Mech Pak 
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Inner Sphere 'Mech Pak, you may notice that none of the new
	mechs are available when you play MechWarrior 4: Black Knight.
	
	CAUSE
	=====
	
	This behavior may occur if either of the following conditions is true:
	
	- You try to use Inner Sphere or Clan mechs in the campaign game.
	
	- You install Black Knight after you install Inner Sphere or Clan 'Mech Pak.
	
	The new mechs are not for the campaign games, and you can use them only in
	Multiplayer and Instant Action modes.
	
	RESOLUTION
	==========
	
	If you install Black Knight after you install Inner Sphere 'Mech Pak, the mechs
	from Inner Sphere 'Mech Pak are not available in MechWarrior 4: Black Knight
	during Multiplayer and Instant Action. To resolve this issue, use Method 1.
	
	Method 1: Remove and Reinstall Mech Paks
	----------------------------------------
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click "Inner Sphere 'Mech Pak" or or "Clan 'Mech Pak", and then click
	  "Add/Remove" or "Change/Remove".
	
	4. Click Uninstall, click OK, and then click OK.
	
	5. Close Add/Remove Programs, and then insert the Inner Sphere 'Mech Pak or Clan
	  'Mech Pak CD-ROM into your computer's CD-ROM or DVD-ROM drive.
	
	6. Click Install, and then follow the instructions to install.
	
	If Inner Sphere or Clan mechs are still not available in Instant Action or
	Multiplayer in Black Knight, proceed to Method 2.
	
	Method 2: Install Update
	------------------------
	
	1. Insert the Inner Sphere CD-ROM into your computer's CD-ROM or DVD-ROM drive,
	  and then hold down the SHIFT key to prevent the installation program from
	  starting.
	
	2. Locate the following folder
	
	  <CD-ROM>:\goodies\patch3\mw4xp1
	
	  where <CD-ROM> is your CD-ROM or DVD-ROM drive.
	
	3. Double-click Mw4xp1.exe.
	
	If these steps do not resolve the issue, or if you receive the following error
	message
	
	  The current version of the game is already up-to-date. You don't need to
	  apply this patch to the game.
	
	proceed to Method 3.
	
	Method 3: Remove and Reinstall All Mech Warrior Products
	--------------------------------------------------------
	
	Preserve Pilot and Variants:
	
	If you have variant mech designs or campaign pilots that you want to save, follow
	these steps. Otherwise, go to the next section of this article.
	
	1. Locate the following folder:
	
	  C:\Program Files\Microsoft Games\MechWarrior Vengeance\Resource
	
	2. Right-click the Pilots folder, point to Send To, and then click My Documents.
	
	3. Repeat step 2 for the Pilotsx, variants, and Variantsx folders.
	
	Remove Mech Pak, Black Knight, and MechWarrior Vengeance:
	
	To remove these games, follow these steps.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click "Inner Sphere 'Mech Pak", and then click Add/Remove or Change/Remove.
	
	4. Click Uninstall, click OK, and then click OK.
	
	5. Repeat steps 3 and 4 to remove MechWarrior Black Knight and MechWarrior
	  Vengeance in that order.
	
	Delete the MechWarrior Vengeance Folder:
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "MechWarrior Vengeance" (without the quotation marks).
	
	3. In the "Look in" box, point to the arrow, and then click My Computer.
	
	4. Click to select the "Include subfolders" check box.
	
	5. Click Find Now.
	
	6. In the search results, right-click MechWarrior Vengeance, click Delete, and
	  then click Yes.
	
	7. Close the Find window.
	
	Restart the Computer by Using a Clean-Boot Procedure:
	
	Start Windows by loading a minimal set of drivers and services. This process,
	also known as a clean boot, provides as "clean" an installation environment as
	possible in which to reinstall a program. To clean-boot your computer, use the
	appropriate method for your version of Windows.
	
	NOTE: For more information about how to use a clean boot in other operating
	systems, see the "More Information" section of this article.
	
	Microsoft Windows 98
	
	1. Click Start, click Run, type "msconfig.exe" (without the quotation marks) in
	  the Open box, and then click OK.
	
	2. Click the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	
	   - Process Autoexec.bat File
	
	   - Process Winstart.bat File (if available)
	
	   - Process System.ini File
	
	   - Process Win.ini File
	
	   - Load Startup Group Items
	
	3. Click OK, and then restart your computer when you are prompted to do so.
	
	Microsoft Windows XP
	
	NOTE: You must be logged on as an administrator or a member of the Administrators
	group to complete this procedure. If your computer is connected to a network,
	network policy settings may also prevent you from completing this procedure.
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. Click the General tab, click Selective Startup, and then click to clear all
	  of the check boxes except Load System Services.
	
	  You cannot clear the "Use Original BOOT.INI" check box.
	
	3. Click the Services tab, and then click to select the "Hide All Microsoft
	  Services" check box.
	
	4. Click Disable All.
	
	5. Click OK, and then click Restart to restart your computer.
	
	Empty Temp Folder in Windows:
	
	1. Double-click My Computer.
	
	2. Locate the Temp folder.
	
	In Microsoft Windows 98 and Microsoft Windows Millennium Edition (Me):
	
	  C:\Windows\Temp
	
	In Microsoft Windows 2000 and Microsoft Windows XP:
	
	  C:\Documents and Settings\user name\Local Settings\Temp
	
	3. On the Edit menu, click Select All.
	
	4. On the File menu, click Delete, and then click Yes.
	
	Install MechWarrior, Black Knight, and 'Mech Pak:
	
	NOTE: Install all these games by using the same CD-ROM or DVD-ROM drive.
	
	1. Insert the MechWarrior CD-ROM into your computer's CD-ROM or DVD-ROM drive,
	  and then follow the Setup Wizard instructions on your screen. If the Setup
	  Wizard does not appear, complete steps 2 and 3. Otherwise, go to step 4.
	
	2. Click Start, and then click Run.
	
	3. Type "<drive>:\setup" (without the quotation marks), where
	  <drive> is the drive letter of your computer's CD-ROM or DVD-ROM drive.
	
	4. Click Install, and then click Next.
	
	5. Click Change, delete the existing path in the Path box, and then type the
	  following line
	
	  <drive>:\Program Files\Microsoft Games\MW4
	
	  where <drive> is the drive letter of the hard disk on which you want to
	  install MechWarrior Vengeance.
	
	6. Click OK, and then click Yes.
	
	7. Click Install, and then follow the instructions to complete the installation
	  process.
	
	8. Repeat steps 1 through 4 for Black Knight and then for 'Mech Pak.
	
	9. Restart the computer normally. To do this in Windows 98, Windows Me, and
	  Windows XP, use the Msconfig utility to select a normal startup.
	
	(Optional) Restore Saved Pilots and Variants:
	
	Copy the folders saved to the My Documents folder to the following location,
	replacing the new, empty folders:
	
	  C:\Program Files\Microsoft Games\MW4\Resources
	
	MORE INFORMATION
	================
	
	For additional information about how to clean-boot your computer, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	  Q281770 How to Perform Clean-Boot Troubleshooting for Windows 2000
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
