---
layout: page
title: "Q96759: No Expanded Memory Available After Installing EMM386.EXE"
permalink: /kb/096/Q96759/
---

## Q96759: No Expanded Memory Available After Installing EMM386.EXE

	Article: Q96759
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install EMM386.EXE to provide access to the upper memory area (UMA),
	Microsoft Windows versions 3.0 and 3.1 no longer provide expanded memory to your
	MS-DOS-based applications.
	
	If expanded memory is no longer provided, your MS-DOS-based applications may
	exhibit some of the following common symptoms:
	
	- When you start an MS-DOS-based application from within Windows, the
	  application displays an "Out of Memory" message and then quits.
	
	- When you start an MS-DOS-based application from within Windows, the
	  application behaves erratically, and displays "Out of Memory" messages when
	  you try to perform certain functions.
	
	- Windows stops responding (hangs) when you start some MS-DOS-based
	  applications, but you can start and run other MS-DOS-based applications
	  without any problems.
	
	CAUSE
	=====
	
	The DEVICE command line for EMM386.EXE contains the NOEMS switch, which tells
	EMM386.EXE and Windows not to provide expanded memory to MS-DOS-based
	applications.
	
	WORKAROUND
	==========
	
	To correct this problem, edit your CONFIG.SYS file so that the DEVICE command
	for EMM386.EXE uses the RAM switch instead of the NOEMS switch. Procedure 1
	explains how to do this. After you complete Procedure 1, if some of your
	memory-resident programs or device drivers fail to load into upper memory blocks
	(UMBs), continue with Procedure 2 and, if necessary, Procedure 3.
	
	NOTE: In the following three procedures, c represents your hard disk drive.
	
	Procedure 1: Changing the DEVICE Command
	----------------------------------------
	
	To use the RAM switch instead of the NOEMS switch, follow these steps:
	
	1. Use a text editor to open your CONFIG.SYS file. To edit the file using MS-DOS
	  Editor, type the following at the MS-DOS command prompt, and press the ENTER
	  key:
	
	  " edit c:\config.sys" (without the quotation marks)
	
	2. Locate the DEVICE command for EMM386.EXE. It should look similar to the
	  following:
	
	     device=c:\dos\emm386.exe noems
	
	3. Substitute RAM for NOEMS. The corrected DEVICE command for EMM386.EXE should
	  look similar to the following:
	
	     device=c:\dos\emm386.exe ram
	
	4. Save your CONFIG.SYS file and quit the text editor. If you are using MS-DOS
	  Editor, choose Exit from the File menu. When MS-DOS Editor displays a dialog
	  box prompting you to save your file, choose the Yes button or press ENTER.
	
	5. Restart your computer by pressing CTRL+ALT+DEL.
	
	6. Start Windows and try to reproduce the problem. If your application runs
	  normally, using the NOEMS switch caused the problem and replacing it with the
	  RAM switch corrected it. If the problem still occurs, call Microsoft Product
	  Support Services for further assistance.
	
	After you finish this procedure, you may find some programs or device drivers now
	fail to load into UMBs. If so, continue with Procedure 2.
	
	To see if your programs and device drivers successfully loaded into UMBs, type
	the following at the MS-DOS command prompt and press ENTER:
	
	  " mem /c | more" (without the quotation marks)
	
	This command displays the contents of your computer's conventional and upper
	memory, and shows where each program is running in memory. (For more information
	about the MEM /C command and UMBs, see page 320 of the Microsoft MS-DOS "User's
	Guide and Reference" for MS-DOS 5.0. If you are using MS-DOS 6.0 or 6.2, type
	HELP at the MS-DOS command prompt.)
	
	Procedure 2: Making More Room in the UMA
	----------------------------------------
	
	Certain address ranges in the UMA are normally reserved for use by hardware
	adapters. EMM386.EXE usually ignores these ranges and does not use them for
	UMBs. On most systems, however, adapters do not use all the reserved address
	ranges. You can instruct EMM386.EXE to use these empty address ranges, thereby
	increasing the number of programs and device drivers that you load into UMBs.
	
	If you have MS-DOS 6.0 or 6.2, you can use the MemMaker program to maximize
	EMM386.EXE's use of the UMA. To do so, use the following steps:
	
	1. To start MemMaker, type the following at the MS-DOS command prompt and then
	  press ENTER:
	
	  " memmaker" (without the quotation marks)
	
	2. When you are prompted to choose express or custom setup, choose Custom Setup.
	
	3. When you are asked if you use any programs that need expanded memory, choose
	  Yes.
	
	4. In the Advanced Options screen make the following choices:
	
	  Specify which drivers and TSRs to include in
	  optimization? box,                                   No
	
	  Scan the upper memory area aggressively?             Yes
	
	  Optimize upper memory for use with Windows?          No
	
	  Use monochrome region (B000-B7FF) for running        No programs?
	
	  Keep current EMM386 memory exclusions and            Yes inclusions?
	
	  Move Extended BIOS Data Area from conventional       Yes to upper
	  memory?
	
	  NOTE: If your computer does not have a monochrome monitor, choose Yes in
	  response to the question "Use monochrome region (B000-B7FF) for running
	  programs?"
	
	5. After MemMaker restarts your computer the last time, type the following
	  command at the MS-DOS prompt and then press ENTER:
	
	  " mem /c | more" (without the quotation marks)
	
	  If your programs and device drivers are running in UMBs, and your MS-DOS-based
	  application works properly and is receiving the expanded memory it needs, you
	  have corrected the problem. If not, continue with Procedure 3.
	
	If you have MS-DOS 5.0, use the following steps to configure EMM386.EXE's use of
	the UMA:
	
	1. Create an MS-DOS 5.0 startup disk. To do so, insert a formatted floppy disk
	  in drive A, type the following at the MS-DOS command prompt, and press
	  ENTER:
	
	  " sys c: a:" (without the quotation marks)
	
	2. Copy your CONFIG.SYS file to the startup disk by typing the following:
	
	  " copy c:\config.sys a:\ " (without the quotation marks)
	
	3. Use a text editor to open your original CONFIG.SYS file. To edit the file
	  using MS-DOS Editor, type the following at the MS-DOS command prompt and
	  press ENTER:
	
	  " edit c:\config.sys" (without the quotation marks)
	
	4. Locate the DEVICE command for EMM386.EXE, and insert the i switch before the
	  RAM switch. The i switch instructs EMM386.EXE to use an address range in the
	  UMA for UMBs. The value you specify for the i switch depends on your computer
	  and monitor type.
	
	  NOTE: In the following examples, hexadecimal addresses consist of the letters
	  A-F and numbers. All "0"s represent zeros, not letters.
	
	   - If your computer has a monochrome monitor but is not an IBM(R) PS/2(R),
	     add the i=E000-EFFF switch before the RAM switch, as follows:
	
	        device=c:\dos\emm386.exe i=E000-EFFF ram
	
	   - If your computer is an IBM PS/2 but does not have a monochrome monitor,
	     add the i=B000-B7FF switch before the RAM switch, as follows:
	
	        device=c:\dos\emm386.exe i=B000-B7FF ram
	
	   - If your computer is not an IBM PS/2 and does not have a monochrome
	     monitor, add the i=E000-EFFF and the i=B000-B7FF switches before the
	     switch, as follows:
	
	        device=c:\dos\emm386.exe i=E000-EFFF i=B000-B7FF ram
	
	   - If your computer is an IBM PS/2 with a monochrome monitor, skip to
	     Procedure 3.
	
	5. Save your changes and exit the text editor. If you're using MS-DOS Editor,
	  choose Exit from the File menu. When MS-DOS Editor displays a dialog box
	  prompting you to save your file, choose the Yes button or press ENTER.
	
	6. Restart your computer by pressing CTRL+ALT+DEL.
	
	  If your computer fails when you start it, the memory range you specified for
	  EMM386.EXE is probably being used by hardware adapters. In this case, insert
	  your startup disk in drive A and restart your computer. Then, edit your
	  CONFIG.SYS file and remove the i switch(es) you added to the DEVICE command
	  for EMM386.EXE. Call Microsoft Product Support Services for further
	  assistance.
	
	7. After your computer restarts, see if your programs successfully loaded into
	  UMBs by typing the following at the MS-DOS command prompt and then pressing
	  ENTER:
	
	  " mem /c | more" (without the quotation marks)
	
	  You have corrected the problem if your programs and device drivers are running
	  in UMBs and your MS-DOS-based application still works properly and is
	  receiving the expanded memory it needs. If you still cannot load programs
	  into UMBs, continue with Procedure 3.
	
	Procedure 3: Reducing the Space Allocated for Expanded Memory
	-------------------------------------------------------------
	
	If you start EMM386.EXE with the RAM switch and programs or device drivers do not
	load into UMBs when your computer starts, your system may not have enough UMBs
	to run those programs or device drivers. The RAM switch sets aside 64 kilobytes
	(K) of the UMA as a page frame for use with expanded memory. The remaining UMBs
	may not be large enough to run your programs, even if you were able to include
	additional addresses by following Procedure 2. In such cases, you can instruct
	EMM386.EXE to reduce the 64K page frame to 16K, making more UMBs available.
	
	NOTE: Use this procedure only if your applications use expanded memory according
	to the Lotus-Intel-Microsoft Expanded Memory Specification (LIM EMS) version
	4.0. Applications that follow the LIM EMS version 3.2 need the full 64K page
	frame, and cannot use expanded memory if you follow this procedure. If you are
	not sure which LIM EMS version your application needs, contact your application
	manufacturer.
	
	To reduce the size of the 64K page frame and increase the number of available
	UMBs, use the following steps:
	
	1. Type "EMM386" (without the quotation marks) at the MS-DOS command prompt and
	  press ENTER:
	
	  EMM386.EXE displays information about its current memory management
	  activities. Locate the line that reads "Page frame segment" and write down
	  the hexadecimal address that appears on that line. In the following example,
	  the page frame segment address starts at E000:
	
	  Page frame segment . . . . . . . . . E000 H
	
	2. Use a text editor to open your original CONFIG.SYS file. To edit the file
	  using MS-DOS Editor, type the following at the MS-DOS command prompt and
	  press ENTER:
	
	  " edit c:\config.sys" (without the quotation marks)
	
	3. Locate the DEVICE command for EMM386.EXE, and insert the P0 switch before the
	  RAM switch. The P0 switch should specify the address you noted in step 1. For
	  example, if the page-frame segment address starts at E000, the DEVICE command
	  appears similar to the following:
	
	     device=c:\dos\emm386.exe p0=E000 ram
	
	  NOTE: In the P0=E000 switch, the 0s are zeros.
	
	4. Save your changes and quit the text editor. If you are using MS-DOS Editor,
	  choose Exit from the File menu. When MS-DOS Editor displays a dialog box
	  prompting you to save your file, choose the Yes button or press ENTER.
	
	5. Restart your computer by pressing CTRL+ALT+DEL.
	
	  If your computer fails when you start it and you have MS-DOS 5.0, insert your
	  startup disk in drive A and restart your computer. Edit your CONFIG.SYS file
	  and remove the P0 switch you added to the DEVICE command for EMM386.EXE.
	  Then, save the file, restart your computer, and repeat Procedure 3. Be sure
	  to carefully note the page-frame segment address.
	
	  If your computer fails when you start it and you have MS-DOS 6.0 or 6.2,
	  restart your computer and press the F8 key. When you are asked if you want to
	  load EMM386.EXE, choose No. Edit your CONFIG.SYS file and remove the P0
	  switch you added to the DEVICE command for EMM386.EXE. Then, save the file,
	  restart your computer, and repeat Procedure 3. Be sure to carefully note the
	  page-frame segment address.
	
	6. After your computer starts, see if your programs were successfully loaded
	  into UMBs by typing the following at the MS-DOS command prompt and then
	  pressing ENTER:
	
	  " mem /c | more" (without the quotation marks)
	
	You have corrected the problem if your programs and device drivers are running in
	UMBs and your MS-DOS-based applications still work properly and are receiving
	the expanded memory they need.
	
	If your programs and device drivers still do not load into UMBs, it is possible
	that your system simply does not have enough UMBs available to run those
	programs. See your hardware documentation for information about which addresses
	in the UMA are in use, or call Microsoft Product Support Services for further
	assistance.
	
	If your applications do not seem to be receiving the expanded memory they need,
	they may require LIM EMS version 3.2. If this is the case, you should remove the
	P0 switch.
	
	REFERENCES
	==========
	
	MS-DOS 5.0
	----------
	
	For more information about the "MEM /C" command and UMBs, see page 320 of the
	Microsoft MS-DOS "User's Guide and Reference".
	
	For more information about EMM386.EXE and its startup parameters, see pages
	605-609 of the Microsoft MS-DOS "User's Guide and Reference."
	
	MS-DOS 6.0
	----------
	
	Type "help" (without the quotation marks) at the MS-DOS command prompt and search
	on Mem, Emm386, or EMM386.EXE.
	
	Also
	----
	
	Microsoft Windows "User's Guide" explains how to use Windows program information
	files (PIFs) to provide expanded memory to MS-DOS-based applications.
	
	Additional query words: appnote 6.00 5.00 5.00a dos 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
