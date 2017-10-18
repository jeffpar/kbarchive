---
layout: page
title: "Q256019: Asheron's Call Err Msg: Cannot Initialize Data File Portal.dat.."
permalink: kb/256/Q256019/
---

## Q256019: Asheron's Call Err Msg: Cannot Initialize Data File Portal.dat..

	Article: Q256019
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool igz kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Asheron's Call: Dark Majesty, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Asheron's Call, you may receive the
	following error message:
	
	  Could not initialize data file portal.dat in <folder>.
	
	where <folder> is the folder in which Asheron's Call is installed.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- One or more files in the Asheron's Call folder are missing or damaged.
	
	- Asheron's Call cannot initialize the Portal.dat file as a result of updating
	  the client computer without restarting the computer.
	
	- If the Cell.dat and Portal.dat files are set to read only.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method.
	
	If One or More Files in the Asheron's Call Folder Are Missing or Damaged
	------------------------------------------------------------------------
	
	To resolve this issues, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Microsoft Asheron's Call, and then click
	  Add/Remove.
	
	4. Follow the instructions on the screen to remove Asheron's Call.
	
	5. Insert the Asheron's Call CD-ROM into the CD-ROM drive.
	
	  If Asheron's Call Setup does not start automatically:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following line, and then click OK:
	
	  <drive>:\setup.exe
	
	     where <drive> is the drive letter of the CD-ROM drive.
	
	6. Follow the instructions on the screen to install Asheron's Call.
	
	If Asheron's Call Cannot Initialize the Portal.dat File
	-------------------------------------------------------
	
	To resolve this issue, restart the computer.
	
	Clear the Read-only Attribute from the Files
	--------------------------------------------
	
	To resolve this issues, follow these steps:
	
	1. For Microsoft Windows 95 or Microsoft Windows 98, click Start, point to Find,
	  and then click Files or Folders.
	
	  For Microsoft Windows Millennium Edition (Me) or Microsoft Windows 2000, click
	  Start, point to Search, and then click For Files or Folders.
	
	2. In the Named or "Search for files and folders named" box, type "cell.dat"
	  (without the quotation marks) or "portal.dat" (without the quotation marks).
	
	3. In the Look in box, click My Computer.
	
	4. Click Find Now or Search Now.
	
	5. Right-click one of the files in the found files list, and then click
	  Properties.
	
	6. Clear the Read Only option.
	
	7. Click OK.
	
	8. Repeat steps 5 through 7 for the other file.
	
	
	Additional query words: 1.00 msgame ac msngz igz corrupted asherons
	
	======================================================================
	Keywords          : kberrmsg kbtool igz kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbMSNSearch kbAsheronSearch kbAsheron100 kbAsheronDarkMaj
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
