---
layout: page
title: "Q77083: Optimizing Your Use of Upper Memory Blocks"
permalink: /kb/077/Q77083/
---

## Q77083: Optimizing Your Use of Upper Memory Blocks

	Article: Q77083
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You have set up your computer to load programs or device drivers into upper
	memory blocks (UMBs). Now you want to make sure you are making optimal use of
	those UMBs so that you can run as many programs in the upper memory area as
	possible.
	
	This article provides techniques for making the best use of your computer's upper
	memory area. To use these techniques, you should be familiar with the
	information on pages 313-330 of the Microsoft MS-DOS "User's Guide and
	Reference" for version 5.0, which explains how to load programs into UMBs. In
	particular, pages 327 and 329 provide some basic information about optimizing
	your use of UMBs.
	
	This article explains the following optimization techniques:
	
	- Starting EMM386 with the NOEMS switch instead of the RAM switch
	
	- Finding the best order for loading drivers and programs into UMBs
	
	- Adjusting EMM386 to provide more UMBs
	
	STARTING EMM386 WITH THE NOEMS SWITCH INSTEAD OF THE RAM SWITCH
	---------------------------------------------------------------
	
	If you do not use programs that require expanded memory (EMS), start EMM386 with
	the NOEMS switch. Doing so can give you an additional 64K of UMBs, because the
	NOEMS switch instructs EMM386 not to create an EMS page frame in the upper
	memory area. If you start EMM386 with the NOEMS switch, programs will be unable
	to use expanded memory, even when they are running with Windows.
	
	To start EMM386 with the NOEMS switch:
	
	1. Edit your CONFIG.SYS file. To edit the file using MS-DOS Editor, type the
	  following at the MS-DOS command prompt:
	
	  " edit c:\config.sys " (without the quotation marks)
	
	2. Find the DEVICE command that starts EMM386. If the DEVICE command contains
	  the RAM switch, change it so it contains the NOEMS switch instead. The DEVICE
	  command for EMM386 should now look like the following:
	
	  device=c:\dos\emm386.exe noems
	
	3. Save the changes (if any) to your CONFIG.SYS file and quit the text editor.
	  If you are using MS-DOS Editor, choose Exit from the File menu. When MS-DOS
	  Editor displays a dialog box prompting you to save your file, choose Yes, or
	  press ENTER.
	
	4. Restart your system by pressing CTRL+ALT+DEL.
	
	After you complete this procedure, some programs might display out-of- memory
	messages or fail to run. Such programs might require expanded memory. If this is
	the case, replace the NOEMS switch with the RAM switch to make expanded memory
	available again.
	
	FINDING THE BEST ORDER FOR LOADING DRIVERS AND PROGRAMS INTO UMBS
	-----------------------------------------------------------------
	
	When you start a program using the DEVICEHIGH or LOADHIGH commands, MS-DOS loads
	that program into the largest remaining UMB, even if it would fit into a smaller
	UMB. Because of this, the order in which you load programs into UMBs is
	important when trying to optimize your use of the upper memory area. You will
	need to experiment to find the best order for your system.
	
	Creating a Startup Disk:
	
	Before you start optimizing, create a startup floppy disk that contains a backup
	copy of your CONFIG.SYS and AUTOEXEC.BAT files. To do so, insert a formatted
	floppy disk into drive A and type the following commands:
	
	  "sys c: a:" (without the quotation marks)
	  "copy c:\config.sys a:\" (without the quotation marks)
	  "copy c:\autoexec.bat a:\" (without the quotation marks)
	
	Having this startup disk will enable you to experiment more freely; if you change
	your CONFIG.SYS or AUTOEXEC.BAT file and your computer locks up when you restart
	it, just insert the backup disk in drive A and press CTRL+ALT+DEL.
	
	Finding the Best Load Order:
	
	When loading programs high, MS-DOS loads each program into the largest remaining
	UMB, even if it would fit into a smaller UMB. Therefore, the order in which you
	load programs into UMBs is important. In general, when loading programs into the
	upper memory area, load larger programs before smaller ones. However, this
	simple load-the-biggest-first method might not always be the most efficient.
	Sometimes, you might have to juggle the load order to get the most out of the
	upper memory area.
	
	For example, suppose you want to load the following three programs into UMBs:
	
	  PROGRAM1.EXE   2K
	  PROGRAM2.EXE   2K
	  PROGRAM3.EXE   3K
	
	Suppose you have two UMBs available; one is 4K in size; the other is 3K in size.
	(You can find out the sizes of individual UMBs by issuing the MEM /P command.
	For more information, see page 519 of the "User's Guide and Reference.")
	
	As you can see, PROGRAM3.EXE is the largest, at 3K. If you load PROGRAM3 first,
	MS-DOS puts it into the largest UMB (4K). Since PROGRAM3 doesn't use the entire
	4K of space in that UMB, an additional kilobyte of memory is left unused. The
	next program, PROGRAM1 (2K), fits into the 3K UMB, again leaving an unused
	kilobyte of memory. However, PROGRAM2 also needs 2K of contiguous space, and
	will not fit into either of the 1K UMBs that remain. This is an example of when
	it's not as efficient to load the largest program first.
	
	A more efficient method would be to load PROGRAM1 (2K), then PROGRAM3 (3K), and
	then PROGRAM2 (2K). Then, all three programs would fit into UMBs. MS-DOS would
	load PROGRAM1 into the 4K UMB, leaving 2K of space. PROGRAM3 would then fit into
	the next largest UMB (3K), and PROGRAM2 would fit into the 2K remaining.
	
	Figuring Out a Program's Memory Requirements:
	
	A program's memory requirements determine what size UMB it needs. Unfortunately,
	it can sometimes be difficult to figure out what size UMB a particular program
	needs, since this depends on how and when the program allocates memory. In
	general, programs fall into one of two groups:
	
	- Most programs need a UMB that is at least as large as the program's size
	  while it is running.
	
	  To find out this size, issue the MEM /C command while the program is running.
	  In most cases, if there is a UMB of that size available, the program should
	  fit into that UMB.
	
	- Some programs need a UMB that is at least as large as the program's file
	  size.
	
	  Such programs use a lot of memory during startup and require less memory once
	  they are running. Such a program initially needs a large UMB; but, after it
	  has started, the program relinquishes some memory that can then be used to
	  load the next program.
	
	The following table lists some common Microsoft device drivers and
	memory-resident programs that can run in the upper memory area. The table
	specifies how to determine the size of UMB that each program needs: by checking
	the program's size while it is running, or by checking its file size.
	
	  Program Name   Size of UMB It Needs
	  ------------------------------------
	
	  ANSI.SYS       File size
	  DISPLAY.SYS    Size while running
	  DRIVER.SYS     File size
	  EGA.SYS        File size
	  MOUSE.COM      File size
	  MOUSE.SYS      File size
	  PRINTER.SYS    Size while running
	  RAMDRIVE.SYS   Size while running
	  SMARTDRIVE.SYS Size while running
	  SETVER.EXE     File size
	  APPEND.EXE     Size while running
	  ASSIGN.COM     Size while running
	  DOSKEY.COM     Size while running
	  FASTOPEN.EXE   Size while running
	  GRAFTABL.COM   File size
	  GRAPHICS.COM   Size while running
	  KEYB.COM       File size
	  MIRROR.COM     Size while running
	  NLSFUNC.EXE    File size
	  SHARE.EXE      Size while running
	
	Juggling the Load Order Between Your CONFIG.SYS and AUTOEXEC.BAT Files:
	
	Most device drivers are loaded from your CONFIG.SYS file, and most
	memory-resident programs from your AUTOEXEC.BAT file. MS-DOS processes your
	CONFIG.SYS file first and then executes the commands in your AUTOEXEC.BAT file.
	This limits your ability to manipulate the load order of your device drivers and
	programs, since the device drivers in your CONFIG.SYS file will always load
	before the programs in your AUTOEXEC.BAT file.
	
	The following tips can help you balance the use of UMBs between device drivers
	and memory-resident programs:
	
	- In your CONFIG.SYS file, start only the largest device drivers using the
	  DEVICEHIGH command. If you use device drivers that are smaller than the
	  largest memory-resident programs that load from your AUTOEXEC.BAT file, start
	  those drivers using the DEVICE command. (Use the DEVICE command to load
	  HIMEM.SYS and EMM386.EXE, since you cannot run these drivers in UMBs.)
	
	- In your AUTOEXEC.BAT file, start your largest memory-resident programs using
	  the LOADHIGH command.
	
	- If your mouse comes with both a MOUSE.SYS and MOUSE.COM file, you can start
	  your mouse driver from either your CONFIG.SYS or AUTOEXEC.BAT file. This way,
	  you can load the mouse driver at any point in the startup process (as long as
	  you load it after HIMEM.SYS and EMM386.EXE).
	
	   - To load the mouse driver into UMBs from your CONFIG.SYS file, use the
	     DEVICEHIGH command to load the MOUSE.SYS file.
	
	   - To load the mouse driver into UMBs from your AUTOEXEC.BAT file, use the
	     LOADHIGH command to load the MOUSE.COM file.
	
	ADJUSTING EMM386 TO PROVIDE MORE UMBS
	-------------------------------------
	
	You can adjust EMM386 to allocate additional space in the upper memory area.
	(This is particularly useful if you have to start EMM386 with the RAM switch to
	make expanded memory available to programs.) First, carry out the steps in
	Procedure 1. After carrying out Procedure 1, if you still cannot load programs
	and device drivers into UMBs, carry out the steps in Procedure 2.
	
	Procedure 1: Including Specific Portions of the Upper Memory Area:
	
	Certain addresses in the upper memory area are normally reserved for use by
	hardware and video drivers; EMM386 does not usually make these areas available
	as UMBs. However, on many systems, the hardware and video drivers do not use all
	the reserved memory addresses. The remaining addresses can be included by EMM386
	for use as UMBs. To instruct EMM386 to include these unused areas, you use the I
	switch after the DEVICE command that starts EMM386.
	
	To allocate additional space in the upper memory area for use as UMBs, follow
	these steps:
	
	1. Create an MS-DOS startup disk. To do so, insert a formatted floppy disk in
	  drive A and type the following:
	
	  " sys c: a: " (without the quotation marks)
	
	2. Copy your CONFIG.SYS file to the startup disk by typing the following:
	
	  " copy c:\config.sys a:\ " (without the quotation marks)
	
	3. Edit your original CONFIG.SYS file. To edit the file using MS-DOS Editor,
	  type the following at the command prompt:
	
	  " edit c:\config.sys " (without the quotation marks)
	
	4. Locate the DEVICE command for EMM386.EXE, and insert the I switch in front of
	  the RAM or NOEMS switch. The I switch specifies a range of addresses in the
	  upper memory area, and tells EMM386 to allocate that memory for use as UMBs.
	  The value you specify for the I switch will depend on your computer and
	  monitor type.
	
	   - If your computer is not an IBM PS/2 and does not have a monochrome
	     monitor, add the i=E000-EFFF and the i=B000-B7FF switches before the RAM
	     or NOEMS switch, as follows:
	
	  " device=c:\dos\emm386.exe i=E000-EFFF i=B000-B7FF ram " (without the
	  quotation marks)
	
	   - If your computer is not a PS/2 and has a monochrome monitor, add the
	     i=E000-EFFF switch before the RAM or NOEMS switch, as follows:
	
	  " device=c:\dos\emm386.exe i=E000-EFFF ram " (without the quotation marks)
	
	   - If your computer is an IBM PS/2 and does not have a monochrome monitor,
	     add the i=B000-B7FF switch before the RAM or NOEMS switch, as follows:
	
	  " device=c:\dos\emm386.exe i=B000-B7FF ram " (without the quotation marks)
	
	   - If your computer is an IBM PS/2 with a monochrome monitor, see Procedure
	     2.
	
	5. If you're using MS-DOS Editor, choose Exit from the File menu. When MS-DOS
	  Editor displays a dialog box prompting you to save your file, choose Yes, or
	  press ENTER.
	
	6. Restart your computer by pressing CTRL+ALT+DEL.
	
	  If your computer fails when you start it, the memory range you specified for
	  EMM386 is probably being used by hardware or video display drivers. In that
	  case, insert your startup disk in drive A and restart your computer. Then,
	  edit your CONFIG.SYS and remove the I switch(es) you added to the DEVICE
	  command for EMM386. Contact Microsoft Support Services for further
	  assistance.
	
	7. After your computer starts, check whether your programs loaded into UMBs
	  successfully. To do so, type the following at the command prompt:
	
	  " mem /c |more " (without the quotation marks)
	
	  This command displays the contents of your computer's conventional and upper
	  memory, and shows where in memory each program is running. (For more
	  information about the MEM /C command and UMBs, see page 320 of the "User's
	  Guide and Reference.")
	
	Procedure 2: Reducing the Space Set Aside for Use with Expanded Memory:
	
	Starting EMM386 with the RAM switch makes fewer upper memory blocks (UMBs)
	available than starting it with the NOEMS switch. If programs or device drivers
	do not load into UMBs when your computer starts, there might not be enough UMBs
	to run those programs. This is because using the RAM switch sets aside 64K of
	the upper memory area for use with expanded memory. The remaining UMBs might not
	be large enough to run your programs, even if you were able to include
	additional addresses by following Procedure 2.
	
	You can instruct EMM386 to set aside 16K of the upper memory area, rather than
	64K, for use with expanded memory. This makes more UMBs available, but programs
	that use expanded memory might run less efficiently. Follow these steps:
	
	1. Exit from Windows, and type the following at the command prompt:
	
	  " emm386 " (without the quotation marks)
	
	  EMM386 displays information about its current memory-management activities.
	  Locate the line that reads "Page frame segment" and write down the
	  hexadecimal address on that line. In the following example, the page frame
	  segment is E000.
	
	  Page frame segment . . . . . . . . . E000 F
	
	2. Edit your original CONFIG.SYS file. To edit the file using MS-DOS Editor,
	  type the following at the command prompt:
	
	  " edit c:\config.sys " (without the quotation marks)
	
	3. Locate the DEVICE command for EMM386.EXE, and insert the P0 switch before the
	  RAM switch. The P0 switch should specify the address you obtained from EMM386
	  in Step 1. For example, if the page frame segment was E000, the DEVICE
	  command might appear as follows:
	
	  device=c:\dos\emm386.exe i=E000-EFFF p0=E000 ram
	
	4. If you're using MS-DOS Editor, choose Exit from the File menu. When MS-DOS
	  Editor displays a dialog box prompting you to save your file, choose Yes, or
	  press ENTER.
	
	5. Restart your computer by pressing CTRL+ALT+DEL.
	
	  If your computer fails when you start it, insert your startup disk in drive A
	  and restart your computer. Then, edit your CONFIG.SYS file and remove the P0
	  switch you added to the DEVICE command for EMM386. Then, save the file,
	  restart your computer, and repeat Procedure 2; be sure to check the page
	  frame address carefully.
	
	6. After your computer starts, check whether your programs were loaded into UMBs
	  successfully. To do so, type the following at the command prompt:
	
	  " mem /c |more " (without the quotation marks)
	
	  This command displays the contents of your computer's conventional and upper
	  memory, and shows where in memory each program is running. (For more
	  information about the MEM /C command and UMBs, see page 320 of the "User's
	  Guide and Reference.")
	
	You have solved the problem if your programs and device drivers are running in
	UMBs.
	
	If your programs and drivers still do not load into UMBs, it is possible that
	your system simply does not have enough UMBs available to run those programs.
	See your computer's hardware documentation for information about which addresses
	in the upper memory area are in use; contact Microsoft Product Support Services
	for further assistance.
	
	REFERENCES
	==========
	
	See the following pages in the "User's Guide and Reference" for additional
	information:
	
	- How to set up your computer to run programs in the upper memory area, pages
	  313-326
	
	- Tips for troubleshooting the process of running programs in the upper memory
	  area, page 327
	
	- Information about the DEVICEHIGH command, page 435
	
	- Information about the LOADHIGH command, page 518
	
	- Information about the MEM command, page 519
	
	- Information about EMM386.EXE startup parameters, page 605
	
	- Information about HIMEM.SYS startup parameters, page 610
	
	Additional query words: appnote 5.00
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : :5.0
	
	=============================================================================
	
