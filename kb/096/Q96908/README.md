---
layout: page
title: "Q96908: Network Installation of TrueType Font Pack 2"
permalink: kb/096/Q96908/
---

## Q96908: Network Installation of TrueType Font Pack 2

	Article: Q96908
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	This information in this article applies to:
	
	- Microsoft TrueType Font Pack 2 for Windows
	
	- Microsoft Windows operating system, versions 3.1, 3.11
	
	---------------------------------------------------------------
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses installing Microsoft TrueType Font Pack 2 on a network.
	
	MORE INFORMATION
	================
	
	There are two options for network installations of the TrueType Font Pack 2: you
	can allow all workstations to both access the new TrueType fonts and install the
	Font Assistant, or you can only allow users to access the new TrueType fonts.
	
	To allow all workstations to access the TrueType fonts and install the Font
	Assistant, use the following steps:
	
	1. Copy the contents of each disk to subdirectories of the Windows shared
	  directory called DISK1, DISK2, and DISK3, and so forth (the number of disks
	  varies depending on which disk size you have).
	
	2. Run SETUP.EXE from the DISK1 subdirectory.
	
	3. Follow the online instructions.
	
	4. Other users should follow this same procedure for their workstations.
	
	NOTE: Make sure you are using a network license pack if multiple users will have
	access to the TrueType Font Pack 2. For pricing and availability information,
	call the Microsoft Sales Information Center (MSIC) at (800) 426- 9400.
	
	To allow users to access only the TrueType fonts, use the following steps:
	
	1. Use the EXPAND.EXE file in Windows 3.1 to decompress all the .TT_ files to a
	  directory called TTFONTS, then type the following
	
	  expand a:\*.tt_ <x>:\ttfonts
	
	  where <x> is the drive containing the ttfonts directory.
	
	2. Change to the TTFONTS directory and rename all the *.TT_ files to *.TTF with
	  the following command:
	
	  rename *.tt_ *.ttf
	
	3. Start Windows on the workstation.
	
	4. In Control Panel, choose the Fonts icon.
	
	5. Choose the Add button and select the TTFONTS directory.
	
	6. Clear the Copy To Windows Directory check box if you don't want the fonts
	  loaded on the hard disk drive.
	
	7. Choose the Select All button, then choose the OK button.
	
	8. Repeat steps 1-7 for other workstations that are licensed to use these fonts.
	
	If you receive any of the following error messages, you do not have full rights
	to the directory that contains the fonts:
	
	  Cannot Change properties of the file named <filename>.
	
	  -or-
	
	  Setup program file has been modified or corrupted.
	
	The following warning message normally occurs when you are using TrueType fonts
	from a network drive:
	
	  The specified path points to a font file that may not be available during
	  later Windows sessions.
	
	If you want to control access to the fonts, change the network rights necessary
	to access the TTFONTS directory. Consult your network manual for this
	procedure.
	
	You can also substitute your user directory or local hard disk drive instead of
	the TTFONTS directory on the server.
	
	Additional query words: 3.10 3.11 true type tt ttf fontpack2
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
