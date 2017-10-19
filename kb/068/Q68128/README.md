---
layout: page
title: "Q68128: Troubleshooting the CONFIG.SYS and AUTOEXEC.BAT Files"
permalink: /kb/068/Q68128/
---

## Q68128: Troubleshooting the CONFIG.SYS and AUTOEXEC.BAT Files

	Article: Q68128
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 18-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbfasttip kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run or install Microsoft Windows, you may encounter the following
	problems: corrupted or incomplete installation of Windows, insufficient memory
	or file handles, and/or an inability to use standard and enhanced modes of
	Windows.
	
	CAUSE
	=====
	
	Your CONFIG.SYS and AUTOEXEC.BAT files contain device drivers,
	terminate-and-stay-resident (TSR) programs, and other files.
	
	WORKAROUND
	==========
	
	To reduce or eliminate these problems, follow the instructions in the More
	Information section of this article to modify the CONFIG.SYS and AUTOEXEC.BAT
	files.
	
	Use a text editor such as MS-DOS EDIT, EDLIN programs, or Windows Notepad to edit
	your CONFIG.SYS and AUTOEXEC.BAT files.
	
	NOTE: Make backup copies of the the AUTOEXEC.BAT and CONFIG.SYS files, before you
	make your changes.
	
	MORE INFORMATION
	================
	
	CONFIG.SYS File
	---------------
	
	Modify the CONFIG.SYS file as follows:
	
	1. Remove nonessential device drivers such as keyboard buffers, scanner drivers,
	  printer drivers, and country drivers. If you are unsure of what a device
	  driver does, do NOT remove it.
	
	2. Remove FASTOPEN statements and disk caches.
	
	3. Verify that you have at least 60 FILES, and 20 BUFFERS.
	
	4. If you are using MS-DOS version 3.3 or later, add a STACKS=0,0 line to your
	  CONFIG.SYS file. For MS-DOS version 3.2, the line should read STACKS=9,192.
	  For more information on STACKS, query on the following words in the Microsoft
	  Knowledge Base:
	
	  stacks and explanation and config
	
	5. If you have a SHELL=COMMAND.COM /P /E:256 statement, increase the number
	  following the E: (the environment space) to 2048. Verify that the /p switch
	  is used. If you do not have a SHELL command, you may want to add one, making
	  sure that the path to COMMAND.COM in the SHELL statement matches the COMSPEC
	  statement. At the command prompt, type
	
	  set
	
	  This command will give you the path to which the location COMSPEC is pointing.
	
	AUTOEXEC.BAT File
	-----------------
	
	Modify the AUTOEXEC.BAT file as follows:
	
	1. Remove any nonessential programs such as TSR programs, print buffers and
	  APPEND, JOIN, SUBST, PRINT, and GRAPHICS statements. If you are unsure of
	  what a program does, do NOT remove it.
	
	2. Remove all duplicate PATH entries so you only have one PATH line in your
	  AUTOEXEC.BAT file. Modify your PATH statement so it uses the root, MS-DOS,
	  and Windows directories only.
	
	3. Verify that you have a valid SET TEMP statement to an existing directory. For
	  example, SET TEMP=C:\WINDOWS\TEMP.
	
	Additional Troubleshooting Steps
	--------------------------------
	
	- Verify that the File Allocation Table is valid:
	
	  1. Exit Windows.
	
	  2. At the command prompt, type the following:
	
	  chkdsk /f
	
	  Caution: You must Exit Windows BEFORE you type the above command. CHKDSK will
	  also check the directory structure.
	
	- Verify that you are using the proper version of DOS for your computer. For
	  example, if you are using a COMPAQ computer, you should be using a version of
	  COMPAQ DOS.
	
	- Verify that the path, environment space, and TEMP directory are valid. At the
	  command prompt, type:
	
	  set
	
	Reinstall Windows after you make the above changes to the CONFIG.SYS and
	AUTOEXEC.BAT files.
	
	NOTE: Before you reinstall Windows, switch your computer off, wait a few seconds,
	and switch your computer on again and read the new CONFIG.SYS and AUTOEXEC.BAT
	files to verify your changes.
	
	- To determine the function of certain drivers when Windows will not run,
	  create a MS-DOS boot floppy disk containing the following CONFIG.SYS file and
	  AUTOEXEC.BAT files and boot from the floppy disk.
	
	       CONFIG.SYS:             AUTOEXEC.BAT:
	       FILES=50                PATH=C:\WINDOWS;C:\DOS
	       BUFFERS=20              PROMPT $P$G
	       DEVICE=C:\HIMEM.SYS     SET TEMP=C:\WINDOWS\TEMP
	
	  If, after booting, you can access the hard disk properly (CHKDSK gives the
	  same output as before) try to run Windows.
	
	  If CHKDSK gives different output, do NOT run CHKDSK /F in this state. You may
	  have booted without a driver necessary to access the hard drive properly.
	  Remove the floppy and reboot from the hard drive.
	
	For more information on troubleshooting similar Windows problems, query on the
	following word in the Microsoft Knowledge Base:
	
	  tshoot
	
	REFERENCES
	==========
	
	"Getting Started with Microsoft Windows," version 3.1, page 100
	
	"Microsoft Windows User's Guide," version 3.0, page 515
	
	Additional query words: 3.00 3.00a 3.10 3.11 clean boot
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
