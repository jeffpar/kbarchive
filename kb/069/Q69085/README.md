---
layout: page
title: "Q69085: Trailing Space in SET TEMP Causes Printing Problems in Windows"
permalink: /kb/069/Q69085/
---

## Q69085: Trailing Space in SET TEMP Causes Printing Problems in Windows

	Article: Q69085
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the SET TEMP= line in your AUTOEXEC.BAT file contains a space at the end of
	the line (after the last character), you will encounter problems when using
	Windows applications in Microsoft Windows.
	
	NOTE: If the SET TEMP= line in your AUTOEXEC.BAT does not have the backslash
	character, (SET TEMP=C:TEMP) the same problems will occur in Windows 3.1.
	
	WORKAROUND
	==========
	
	To correct the problem, reenter the SET TEMP= line in your AUTOEXEC.BAT file,
	being careful not to include any spaces except the one between SET and TEMP.
	
	If using Windows 3.1, be sure to include the backslash character:
	
	  SET TEMP=C:\TEMP
	
	Save the edited AUTOEXEC.BAT file and reboot the system.
	
	MORE INFORMATION
	================
	
	A trailing space in the SET TEMP= line of the AUTOEXEC.BAT file can cause
	problems when Microsoft Windows version 3.x tries to access the declared
	directory.
	
	The symptoms that you observe will be different in different applications. The
	symptoms of some common applications are described below.
	
	Calendar (CALENDAR.EXE)
	-----------------------
	
	When executed, Calendar will display an error message:
	
	  Warning: Unable to create file needed to save changes; changes you are going
	  to make will not be saved.
	
	Cardfile (CARDFILE.EXE)
	-----------------------
	
	When executed, Cardfile will display an error message:
	
	  Warning: Cardfile will not be able to save changes; delete one or more files
	  to increase available disk space and try again.
	
	Paintbrush (PBRUSH.EXE)
	-----------------------
	
	The Print command under the File menu will be grayed.
	
	Notepad (NOTEPAD.EXE)
	---------------------
	
	The Print command under the File menu will be grayed.
	
	SysEdit (SYSEDIT.EXE)
	---------------------
	
	The Print command under the File menu will be grayed.
	
	Write (WRITE.EXE)
	-----------------
	
	When executed, Write will display an error message:
	
	  System Error: Cannot find TEMP.WRI
	
	followed by another error
	
	  Insufficient memory to run Write; close one or more Windows applications to
	  increase available memory.
	
	Excel Versions 2.x (EXCEL.EXE)
	------------------------------
	
	When the Print command is selected from the File menu, Excel displays an error
	message
	
	  Error printing on XXXX
	
	where XXXX is the description of the current printer driver and port.
	
	Excel Version 3.00 (EXCEL.EXE)
	------------------------------
	
	When the Print command is selected from the File menu, Excel displays an error
	message
	
	  Cannot open printer driver
	
	followed by another error
	
	  Error printing on XXXX
	
	where XXXX is the description of the current printer driver and port.
	
	Word for Windows (WINWORD.EXE)
	------------------------------
	
	When the Print command is selected from the File menu, Word for Windows displays
	an error message:
	
	  Cannot print
	
	PowerPoint (POWERPNT.EXE)
	-------------------------
	
	When the Print command is selected from the File menu, PowerPoint displays an
	error message
	
	  Sorry, memory is too full to perform operation
	
	Similar errors may also occur when the Windows directory is missing from the path
	statement.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
