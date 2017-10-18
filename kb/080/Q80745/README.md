---
layout: page
title: "Q80745: Saving GW-Basic/BASICA ASCII File to Use with QBasic"
permalink: kb/080/Q80745/
---

## Q80745: Saving GW-Basic/BASICA ASCII File to Use with QBasic

	Article: Q80745
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to run a program created with GW-Basic or BASICA in MS-DOS QBasic,
	the following error message may be displayed:
	
	  SYNTAX ERROR
	
	CAUSE
	=====
	
	This message means that either a syntax modification may be needed to meet
	QBasic language rules, or the file format is not ASCII. All QBasic programs must
	be in ASCII format.
	
	By default, GW-Basic and BASICA save programs in binary format that QBasic cannot
	read. A program written in GW-Basic or BASICA must be saved in ASCII format
	before it can be loaded into QBasic.
	
	WORKAROUND
	==========
	
	To eliminate the error, do the following:
	
	1. Make a backup copy of the original program written in GW-Basic or BASICA.
	
	2. Locate GWBASIC.EXE or BASICA.EXE and execute the program.
	
	3. Use the LOAD (F3) command to load the program to be used in QBasic. For
	  example, type the following:
	
	  " load "progname.bas" " (without the quotation marks)
	
	4. Use the LIST (F1) command to verify the program's contents.
	
	5. Use the SAVE (F4) command with the A option to save the program in ASCII
	  format. For example, type the following:
	
	  " save "progname.bas",a " (without the quotation marks)
	
	6. Exit GW-Basic or BASICA with the SYSTEM command.
	
	The program is now in ASCII format and can be used in QBasic.
	
	To execute the program in QBasic, do the following:
	
	1. Run QBASIC.EXE.
	
	2. From the File menu, choose Open, and enter the program file that was saved in
	  ASCII format.
	
	3. From the Run menu, choose Start.
	
	If the text is garbled with control characters and character set characters, the
	program is probably not in ASCII format. Exit QBasic and save the file in ASCII
	as explained above.
	
	For more information about BASICA and GW-Basic conversion, query on the following
	words in the Microsoft Knowledge Base:
	
	  " basica and qbasic " (without the quotation marks)
	
	Additional query words: 6.22 basic convert gwbasic.exe qbasic.exe basica.exe gw-basic 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
