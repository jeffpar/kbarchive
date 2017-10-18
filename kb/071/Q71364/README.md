---
layout: page
title: "Q71364: Program Manager Command Line Limited to 80 Characters"
permalink: kb/071/Q71364/
---

## Q71364: Program Manager Command Line Limited to 80 Characters

	Article: Q71364
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	The Program Manager (PROGMAN.EXE) included with Windows 3.0 has an
	80-character limit in the Command Line text entry box in the Program Item
	Properties dialog box. (This dialog box can be accessed by choosing
	Properties from the File menu.) There is no way to get beyond this
	limitation. If the pathnames to your programs are very long, you may want
	to consider placing these pathnames in the AUTOEXEC.BAT or some other batch
	file that you run before starting Windows. This way, just the executable
	needs to be on the command line.
	
	NOTE: MS-DOS itself has a limitation of 128 characters on its command line.
	Additional character length in the Program Manager Command Line field is
	available in Windows 3.1, which allows up to 128 characters.
	
	Additional query words: 3.00 win30 windrvr 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
