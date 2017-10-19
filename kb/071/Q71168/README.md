---
layout: page
title: "Q71168: Printing a File from MS-DOS Shell"
permalink: /kb/071/Q71168/
---

## Q71168: Printing a File from MS-DOS Shell

	Article: Q71168
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To print a file from the MS-DOS Shell File System, the background printing
	utility, PRINT.COM, must be installed. The following is the procedure to install
	PRINT.COM from MS-DOS Shell:
	
	1. If using MS-DOS version 5.0 or later, verify that Task Swapping is not
	  enabled in the Options menu. If it is enabled, disable it.
	
	2. From MS-DOS Shell, press SHIFT+F9.
	
	3. Execute the PRINT.COM command by typing the following command at the command
	  prompt:
	
	  " print /d:<device>" (without the quotation marks)
	
	  The default device is PRN. Other possible print device names for parallel
	  ports are LPT1, LPT2, and LPT3. Serial device names are COM1, COM2, COM3, and
	  COM4. (LPT1 and PRN both refer to the first parallel port on your computer.)
	
	4. Type "exit" (without the quotation marks) to return to Shell.
	
	5. Select the file or files that you would like to print.
	
	6. From the File menu, choose Print.
	
	MORE INFORMATION
	================
	
	The PRINT.COM (PRINT.EXE in version 5.0 or later) command can also be executed
	from the command line or placed in your AUTOEXEC.BAT file. Type the following
	command at the MS-DOS command prompt or use a text editor to add the line to
	your AUTOEXEC.BAT file:
	
	  " print /d:<device>" (without the quotation marks)
	
	For more information, query on the following words here in the Microsoft
	Knowledge Base:
	
	  menu and letter and asterisk
	
	Additional query words: 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
