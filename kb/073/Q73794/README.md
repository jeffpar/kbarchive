---
layout: page
title: "Q73794: Windows Productivity Pack Installation Deletes Other Groups"
permalink: kb/073/Q73794/
---

## Q73794: Windows Productivity Pack Installation Deletes Other Groups

	Article: Q73794
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install the Windows Productivity Pack when you have a damaged program
	group or PROGMAN.INI, you will lose all of your current program groups except
	for the new ones created by the Productivity Pack installation. You can tell if
	you have a damaged PROGMAN.INI or group file because you will receive the
	following Windows error message when you start Windows.
	
	  Group File Error
	  Cannot Open Program Group File
	  "filename"
	
	WARNING: DO NOT install the Windows Productivity Pack if you receive this error
	message.
	
	MORE INFORMATION
	================
	
	Steps to Recover Lost Program Groups
	------------------------------------
	
	When the Windows Productivity Pack installs, it first makes a backup copy of your
	WIN.INI and PROGMAN.INI files and names them with .BAK extensions. To restore
	your original program groups, rename WIN.BAK to WIN.INI and PROGMAN.BAK to
	PROGMAN.INI, and restart Windows. This should restore Windows to its
	pre-Productivity Pack condition. Once your groups are restored, correct the
	Group File error that caused the problem, and reinstall the Windows Productivity
	Pack.
	
	Microsoft has confirmed this to be a problem in the Windows Productivity Pack
	version 1.0. We are researching this problem and will post new information here
	as it becomes available.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
