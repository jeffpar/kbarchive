---
layout: page
title: "Q96766: Running Both Extended and Expanded Memory on Your Computer"
permalink: /kb/096/Q96766/
---

## Q96766: Running Both Extended and Expanded Memory on Your Computer

{% raw %}

	Article: Q96766
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to allocate memory and set up your system to run both
	expanded and extended memory. Some applications require expanded memory and
	others need extended memory. As a result, you may decide to customize your
	system. For example, you may want to run MS-DOS in the high memory area (which
	is part of extended memory) while also running applications in expanded memory.
	As a result, you may want to allocate your memory so that your system runs more
	efficiently.
	
	The method you use to allocate memory differs depending on the type of computer
	you have. Refer to the section that applies to your computer's processor.
	
	80386 AND 80486 SYSTEMS
	-----------------------
	
	If your computer has an 80386 or 80486 processor, it supports both expanded and
	extended memory. Most 80386 and 80486 computers come with 1 megabyte (MB) or
	more of extended memory. The EMM386.EXE device driver, which comes with MS-DOS,
	can use a portion of your computer's extended memory to emulate expanded memory.
	Applications that need expanded memory can get it from EMM386.EXE, while other
	applications can still use the remaining extended memory.
	
	MS-DOS 6.0 or 6.2
	-----------------
	
	If you have MS-DOS 6.0 or 6.2, you can run MemMaker to configure your 80386 or
	80486 system to provide both extended and expanded memory. To do so, type the
	following at the MS-DOS command prompt:
	
	  " memmaker" (without the quotation marks)
	
	When MemMaker asks you if you want expanded memory, choose Yes. You can then
	accept the default settings and let MemMaker configure your computer's memory.
	
	MS-DOS 5.0
	----------
	
	If you have MS-DOS 5.0 Upgrade, do the following:
	
	1. If your memory board can be configured as expanded or extended memory,
	  configure the board so that it provides only extended memory. (To reconfigure
	  your memory board, see the documentation that came with your board or contact
	  your hardware vendor.)
	
	2. Create an MS-DOS startup disk by inserting a formatted floppy disk in drive A
	  and typing the following at the MS-DOS command prompt and pressing ENTER
	
	  " sys <drive>: a:" (without the quotation marks)
	
	  where <drive> is the drive where your CONFIG.SYS file resides. For
	  example, if your CONFIG.SYS file is located on drive C, type the following
	  command:
	
	  " sys c: a:" (without the quotation marks)
	
	3. Copy your CONFIG.SYS file to the startup disk by typing the following at the
	  MS-DOS command prompt and pressing ENTER
	
	  " copy <drive>:\config.sys a:\ " (without the quotation marks)
	
	  where <drive> is the drive where the CONFIG.SYS file currently resides.
	
	  For example, if your CONFIG.SYS file is located on drive C, type the following
	  command:
	
	  " copy c:\config.sys a:\ " (without the quotation marks)
	
	  If, after you complete these steps, your computer fails to start normally or
	  you have any other problems, you can use the startup disk to start your
	  system and restore your original configuration. To get your system running
	  again, insert the startup floppy disk into drive A and restart your system.
	  Then, copy your backup CONFIG.SYS file to the drive on your system where the
	  original CONFIG.SYS file resided by typing the following command
	
	  " copy a:\config.sys <destination>" (without the quotation marks)
	
	  where <destination> is the drive on your system where the original
	  CONFIG.SYS file resided (usually drive C). For example, if your original
	  CONFIG.SYS file was on drive C, type the following command:
	
	  " copy a:\config.sys c:\ " (without the quotation marks)
	
	4. Edit your original CONFIG.SYS file. To edit the file using MS-DOS Editor,
	  type the following at the MS-DOS command prompt and press ENTER
	
	  " edit <drive>:\config.sys" (without the quotation marks)
	
	  where <drive> is the drive where your CONFIG.SYS file currently resides.
	  For example, if CONFIG.SYS is located on drive C, type the following
	  command:
	
	  " edit c:\config.sys" (without the quotation marks)
	
	5. Make sure your CONFIG.SYS file contains a DEVICE command for HIMEM.SYS. The
	  command should appear before any other DEVICE commands and should look like
	  the following
	
	  " device=<path>\himem.sys" (without the quotation marks)
	
	  where <path> is the drive and directory where your HIMEM.SYS file
	  currently resides. For example, if your HIMEM.SYS file is located in your DOS
	  directory on drive C, type the following command:
	
	  " device=c:\dos\himem.sys" (without the quotation marks)
	
	6. Add a DEVICE command for EMM386.EXE that has the location of EMM386.EXE, that
	  specifies you want EMM386.EXE to emulate expanded memory, and that indicates
	  the amount of extended memory to allocate to EMM386.EXE. The following DEVICE
	  command specifies that EMM386.EXE should use 640 kilobytes (K) of extended
	  memory to emulate expanded memory
	
	  " device=<path>\emm386.exe 640" (without the quotation marks)
	
	  where <path> is the drive and directory where your EMM386.EXE file
	  currently resides. For example, if your EMM386.EXE file is located in your
	  DOS directory on drive C, type the following command:
	
	  " device=c:\dos\emm386.exe 640" (without the quotation marks)
	
	  If you also want to run programs in the upper memory area to increase your
	  available conventional memory, add the RAM switch to the DEVICE command. The
	  following command specifies that EMM386.EXE should provide 640K of emulated
	  expanded memory, and should also provide access to upper memory blocks
	  (UMBs)
	
	  " device=<path>\emm386.exe 640 ram" (without the quotation marks)
	
	  where <path> is the drive and directory where your EMM386.EXE file
	  currently resides. For example, if your EMM386.EXE file is located in your
	  DOS directory on drive C, type the following command:
	
	  " device=c:\dos\emm386.exe 640 ram" (without the quotation marks)
	
	  NOTE: Do not use the NOEMS switch; the NOEMS switch disables all support for
	  expanded memory.
	
	7. If you want MS-DOS to reside in the high memory area, make sure your
	  CONFIG.SYS file contains a DOS=HIGH command (or a DOS=HIGH,UMB command if you
	  used the RAM switch with EMM386.EXE). If the file doesn't contain one of
	  these commands, insert the following line after the
	  DEVICE=<path>\HIMEM.SYS command:
	
	  " dos=high,umb" (without the quotation marks)
	
	8. Close MS-DOS Editor by choosing Exit from the File menu, and save the new
	  CONFIG.SYS file by choosing Yes or pressing ENTER when MS-DOS Editor displays
	  a dialog box prompting you to save your file.
	
	9. Restart your computer by pressing CTRL+ALT+DEL.
	
	10. Use the MEM command to check that both expanded and extended memory are
	  available. (For information about interpreting output from the MEM command,
	  see pages 519-522 of the Microsoft MS-DOS 5.0 "User's Guide and Reference.")
	
	Example
	-------
	
	Suppose your HIMEM.SYS, EMM386.EXE, and SMARTDRV.SYS files are in the DOS
	directory on drive C and you have an 80386 computer with 2 MB of extended memory
	that you want to configure as follows:
	
	- 512K of expanded memory for your word processing application
	
	- 1024K of extended memory for SMARTDrive
	
	- Maximize conventional memory
	
	Your CONFIG.SYS file would contain the following commands:
	
	  device=c:\dos\himem.sys
	  device=c:\dos\emm386.exe 512 ram
	  dos=high,umb
	  devicehigh=c:\dos\smartdrv.sys 1024
	
	The first DEVICE command loads HIMEM.SYS, which provides access to extended
	memory. The next DEVICE command loads EMM386.EXE, which provides 512K of
	expanded memory for your word processor. The RAM switch instructs EMM386.EXE to
	also provide access to the upper memory area. The DOS command loads MS-DOS into
	the high memory area and specifies that you want to be able to load programs
	into the UMBs. The DEVICEHIGH command loads SMARTDrive into the upper memory
	area and creates a 1024K cache in extended memory. With this CONFIG.SYS file,
	there should be about 512K of extended memory left over.
	
	80286 SYSTEMS
	-------------
	
	If your computer has an 80286 processor, it supports both expanded and extended
	memory. Many 80286 computers have 384K of built-in extended memory. Others have
	an add-in memory board. Add-in memory boards can contain expanded or extended
	memory.
	
	If your 80286 computer has an add-in memory board, you might be able to configure
	the memory board so that it provides both expanded and extended memory. For
	information about configuring your memory board, see the documentation that came
	with the board or contact your hardware vendor.
	
	If your computer's memory board can provide both expanded and extended memory,
	follow these steps:
	
	1. Configure your memory board so that it provides as much expanded memory as
	  your application requires. (See your application's documentation for
	  information about its memory requirements.) Leave any remaining memory as
	  extended.
	
	2. Create an MS-DOS startup disk by inserting a formatted floppy disk in drive A
	  and typing the following at the MS-DOS command prompt
	
	  " sys <drive>: a:" (without the quotation marks)
	
	  where <drive> is the drive where your CONFIG.SYS file currently resides.
	  For example, if your CONFIG.SYS file is located on drive C, type the
	  following command:
	
	  " sys c: a:" (without the quotation marks)
	
	3. Copy your CONFIG.SYS file to the startup disk by typing the following at the
	  MS-DOS command prompt and pressing ENTER
	
	  " copy <drive>:\config.sys a:\ " (without the quotation marks)
	
	  where <drive> is the drive where the CONFIG.SYS file currently resides.
	  For example, if your CONFIG.SYS file is located on drive C, type the
	  following command:
	
	  " copy c:\config.sys a:\ " (without the quotation marks)
	
	  If, after you complete these steps, your computer fails to start normally or
	  you have any other problems, you can use the startup disk to start your
	  system and restore your original configuration. To get your system running
	  again, insert the startup floppy disk into drive A and restart your system.
	  Then, copy your backup CONFIG.SYS file to the drive on your system where the
	  original CONFIG.SYS file resided by typing the following command
	
	  " copy a:\config.sys <destination> " (without the quotation marks)
	
	  where <destination> is the drive on your system where the original
	  CONFIG.SYS file resided (usually drive C). For example, if your original
	  CONFIG.SYS file was on drive C, type the following command:
	
	  " copy a:\config.sys c:\ " (without the quotation marks)
	
	4. Edit your original CONFIG.SYS file. To edit the file using MS-DOS Editor,
	  type the following at the MS-DOS command prompt
	
	  " edit <drive>:\config.sys " (without the quotation marks)
	
	  where <drive> is the drive where your CONFIG.SYS file currently resides.
	  For example, if your CONFIG.SYS file is located on drive C, type the
	  following command:
	
	  " edit c:\config.sys " (without the quotation marks)
	
	5. Make sure your CONFIG.SYS file contains a DEVICE command for your memory
	  board's memory manager. The command should appear before the DEVICE command
	  for HIMEM.SYS. (See your memory board's documentation for information about
	  installing its memory manager.)
	
	6. Make sure your CONFIG.SYS file contains a DEVICE command for HIMEM.SYS. The
	  command should appear after the DEVICE command for your memory board's device
	  driver, but before any other DEVICE commands. The DEVICE command for
	  HIMEM.SYS should look like the following
	
	  " device=<path>\himem.sys" (without the quotation marks)
	
	  where <path> is the drive and directory where your HIMEM.SYS file
	  currently resides. For example, if your HIMEM.SYS file is located in your DOS
	  directory on drive C, type the following command:
	
	  " device=c:\dos\himem.sys" (without the quotation marks)
	
	7. If you want MS-DOS to load itself into the high memory area, make sure your
	  CONFIG.SYS file contains a DOS=HIGH command. If the file doesn't contain this
	  command, insert the following after the DEVICE=<path>\HIMEM.SYS
	  command:
	
	  " dos=high" (without the quotation marks)
	
	8. Close MS-DOS Editor by choosing Exit from the File menu, and save your file
	  by choosing Yes or pressing ENTER when MS-DOS Editor displays a dialog box
	  prompting you to save your file.
	
	9. Restart your computer by pressing CTRL+ALT+DEL.
	
	  If your computer fails when you restart it, your expanded memory manager might
	  be incompatible with HIMEM.SYS. To get your system running again, insert the
	  startup floppy disk into drive A and restart your system. Then, copy your
	  backup CONFIG.SYS file to the drive on your system where the original
	  CONFIG.SYS file resided by typing the following
	
	  " copy a:\config.sys <destination>" (without the quotation marks)
	
	  where <destination> is the drive on your system here the original
	  CONFIG.SYS file resided (usually drive C).
	
	  For example, if, in step 3, your original CONFIG.SYS file was on drive C, type
	  the following at the MS-DOS command prompt:
	
	  " copy a:\config.sys c:\ " (without the quotation marks)
	
	  For help in getting your expanded memory manager to work with HIMEM.SYS,
	  contact Microsoft Product Support Services or the manufacturer of your
	  expanded memory board.
	
	10. Use the MEM command to make sure that both expanded and extended memory are
	  available. For information about interpreting output from the MEM command,
	  see pages 519-522 of the Microsoft MS-DOS 5.0 "User's Guide and Reference"
	  or type "help mem" (without the quotation marks) at any MS-DOS 6.0 command
	  prompt.
	
	8086 OR 8088 SYSTEMS
	--------------------
	
	If your computer has an 8086 or 8088 processor, you can use expanded memory only.
	The 8086 and the 8088 processors do not support extended memory. To set up your
	computer so that applications can use the memory on your expanded memory board,
	see the documentation that came with your memory board.
	
	REFERENCES
	==========
	
	MS-DOS 5.0
	----------
	
	For additional information, see the following pages in the "User's Guide and
	Reference" for version 5.0:
	
	- An overview of memory concepts, page 274
	
	- Information about installing HIMEM.SYS, page 279
	
	- Information about using EMM386.EXE as an expanded memory emulator, page 289
	
	- Information about the DEVICE command, page 433
	
	- Information about the MEM command, page 519
	
	- Details about EMM386.EXE startup parameters, page 605
	
	Versions 6.0 and 6.2
	--------------------
	
	For more information, see the following sources:
	
	- Information about making more memory available, Chapter 6 in the "User's
	  Guide" for versions 6.0 and 6.2.
	
	- Information about the DEVICEHIGH, LOADHIGH, and MEMMAKER commands, Help (type
	  "help" (without the quotation marks) at any MS-DOS command prompt).
	
	- Information about EMM386.EXE or HIMEM.SYS, Help (type "help" (without the
	  quotation marks) at any MS-DOS command prompt).
	
	Additional query words: 6.22 6.00 5.00 5.00a 6.20 dos
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
