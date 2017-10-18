---
layout: page
title: "Q82204: Windows Err Msg: Group File Error..."
permalink: kb/082/Q82204/
---

## Q82204: Windows Err Msg: Group File Error...

	Article: Q82204
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.1 or 3.11 may return the following error message:
	
	  Group File Error
	  Cannot Open Program Group File <xxxx>.GRP
	  Do you want Program Manager to try and load it in the future?
	
	At this point, a Yes/No option box appears.
	
	In Windows 3.0, the error message appears as follows:
	
	  Group File Error
	  Cannot Open Program Group File
	
	With both versions, the message occurs if a program group listed in the [Groups]
	section of the PROGMAN.INI does not have a corresponding *.GRP in the specified
	path, or if the file is corrupted.
	
	MORE INFORMATION
	================
	
	Windows 3.1
	-----------
	
	If you choose Yes, Windows attempts to load the .GRP file during the next boot.
	
	If you select the No option, Windows modifies the PROGMAN.INI file by deleting
	the line that referenced the corrupt .GRP file.
	
	NOTE: If you prefer, you can use any text editor to edit the PROGMAN.INI file,
	rather than allowing Windows to modify it automatically.
	
	If you have moved the group, you should be sure to add a correct reference to
	PROGMAN.INI.
	
	For example, if the PROGMAN.INI reads as follows
	
	     [Groups]
	     Group1=D:\WIN31\NONWINDO.GRP
	     Group2=D:\WIN31\GAMES.GRP
	     Group3=D:\WIN31\ACCESSOR.GRP
	     Group4=D:\WIN31\MAIN.GRP
	     Group5=D:\WIN31\WindowsA.GRP
	     Group6=D:\WIN31\OTHER.GRP
	
	and you have moved the OTHER.GRP file to E:\WIN31, Windows displays the following
	error message:
	
	  Cannot Open Program Group File D:\WIN31\OTHER.GRP
	
	To correct the problem, add the following line to the PROGMAN.INI:
	
	       Group6=E:\WIN31\OTHER.GRP
	
	Windows 3.0
	-----------
	
	In Windows 3.0, the automatic update option is unavailable. You must manually
	update PROGMAN.INI to change or eliminate any erroneous .GRP references.
	
	Additional query words: 3.00 3.00a 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
