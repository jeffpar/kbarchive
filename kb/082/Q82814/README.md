---
layout: page
title: "Q82814: Re-Registering .REG Files"
permalink: kb/082/Q82814/
---

## Q82814: Re-Registering .REG Files

	Article: Q82814
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbenv kbdisplay kbole
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Shell (for example, Program Manager) and OLE registration information is stored
	in .REG files that are used by the Registration Editor (REGEDIT.EXE) to add
	information to the registration database, REG.DAT. There is no difference
	between the way the Microsoft Windows version 3.1 Setup program originally
	registers this information and the way an application can be re- registered.
	
	MORE INFORMATION
	================
	
	The Windows 3.1 Setup program calls WinExec("REGEDIT /S /U SETUP.REG", ...).
	This executes REGEDIT.EXE under Windows. This is the same as choosing Run from
	the File menu of either Program Manager or File Manager and typing the following
	line in the Command Line box:
	
	  REGEDIT SETUP.REG
	
	Therefore, if your registration information for Windows 3.1 accessory
	applications (ONLY those applications that ship with Windows 3.1, such as
	Paintbrush and Write) has been lost, you can restore it by typing the above line
	in the Command Line box as described above.
	
	
	KBCategory: kbenv kbdisplay kbole
	KBSubcategory: win31 winshell
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
