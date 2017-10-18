---
layout: page
title: "Q65445: Printing Directory Listings from Windows File Manager"
permalink: kb/065/Q65445/
---

## Q65445: Printing Directory Listings from Windows File Manager

	Article: Q65445
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbusage kbtool
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no direct method to print a listing of files or directories from
	Microsoft Windows File Manager.
	
	To work around this limitation, you can print the list of files using a batch
	file. Or, if the file list is short enough, you can press the ALT+PRINT SCREEN
	key combination to copy the active File Manager window, paste the information
	into Microsoft Windows Paintbrush, and then print the bitmap from Paintbrush.
	
	If you are using Windows 3.0 or 3.0a, you can print the list of files from MS-DOS
	Executive (MSDOS.EXE).
	
	MORE INFORMATION
	================
	
	Printing from a Batch File
	--------------------------
	
	You can print a directory listing in Windows by creating an MS-DOS batch file
	with the following steps:
	
	1. Using a text editor such as Microsoft Windows Notepad, create a batch file
	  with the following line:
	
	  DIR %1 > LPT1 (or another appropriate printer port)
	
	2. Save the file as DIRPRINT.BAT in a directory that is in your PATH statement.
	
	3. In File Manager, choose Run from the File menu.
	
	4. Type the following
	
	  dirprint.bat <drive>:<path><directory>
	
	  where <drive>:<path><directory> points to the directory you
	  want to print. For example, type the following to print a listing of the
	  Windows directory on drive C:
	
	  dirprint.bat c:\windows
	
	5. An MS-DOS screen appears briefly and then a batch file is run, sending the
	  directory information to the printer. You are then returned to File Manager.
	
	NOTE: This procedure does not work with PostScript printers. Refer to the
	"Printing to a PostScript Printer" section below for more information.
	
	Printing from MS-DOS Executive
	------------------------------
	
	Microsoft Windows MS-DOS Executive is included with Windows versions 3.0 and 3.0a
	but not later versions. If you upgraded from Windows 3.0, you may still have the
	MS-DOS Executive file (MSDOS.EXE) in your Windows program directory.
	
	MS-DOS Executive is the operating shell for earlier versions of Windows. MS- DOS
	Executive can print directory listings that include all the files in that
	directory plus a listing of all subdirectories in that directory. The only
	directory MSDOS.EXE cannot print is the root directory.
	
	To use MSDOS.EXE for printing directories:
	
	1. In Program Manager, choose Run from the File menu.
	
	2. In the Command Line box, type the following:
	
	  msdos.exe
	
	  This file should be in the Windows program directory.
	
	3. When MS-DOS Executive is running, choose the directory that you want to
	  print, then choose Print from the File menu.
	
	Printing to a PostScript Printer
	--------------------------------
	
	If you are using a PostScript printer, follow the procedure below to print a
	directory.
	
	1. Exit to the MS-DOS prompt.
	
	2. Type the following:
	
	  dir {path} > dirlist.dat"
	
	3. Type "exit" (without the quotation marks)
	
	4. In Windows, run Notepad, and open the file.
	
	5. Print the file to your PostScript printer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
