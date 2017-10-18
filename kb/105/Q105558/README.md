---
layout: page
title: "Q105558: MS-DOS 6.2 MEMMAKER.INF File"
permalink: kb/105/Q105558/
---

## Q105558: MS-DOS 6.2 MEMMAKER.INF File

	Article: Q105558
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a complete listing of the MS-DOS 6.2 MEMMAKER.INF file.
	
	MORE INFORMATION
	================
	
	;
	;
	*************************************************************************
	***
	;
	; This file specifies the programs that MEMMAKER should either ignore
	; or disable during the optimization process. You can have MEMMAKER
	; ignore or disable device drivers, memory-resident programs (TSRs),
	; or applications.
	;
	; Other features provided by this file include the ability to change the
	; default behavior of MEMMAKER and the ability to move or keep a file at
	; the top of the config.sys file.
	;
	;  Use the following guidelines when editing this file:
	;
	;  * To have MEMMAKER ignore a program, add the program name to this file
	;    and insert an asterisk (*) before the program name. MemMaker will
	;    not attempt to load that program into the upper memory area. The
	;    program will be loaded into conventional memory during and after
	;    the optimization process.
	;
	;  * To have MemMaker disable a program during optimization, add the
	;    program name to this file, but do not insert an asterisk before its
	;    name. MemMaker will disable the program by using the REM command
	;    so the program will not be loaded during the optimization process.
	;    When optimization is complete, MemMaker removes the REM command
	;    so that the program starts as usual.
	;
	;  * To have MemMaker use different default for an option, delete the
	;    semicolon and space in front of the # sign. For example to have
	;    MemMaker use more aggressive settings as its default, delete the
	;    semicolon and space in front of #HIGHSCAN There are seven settings
	;    all found in the default options section below.
	;
	;  * To have MemMaker move a program to the top of CONFIG.SYS, add the
	;    program name to this file, and insert a carat (^) before the program
	;    name.  This program will then be loaded into memory before HIMEM.SYS
	;    and EMM386.EXE, and so will not be loaded into upper memory.  This
	;    is useful for drivers for certain disk drives that must be activated
	;    before upper memory is enabled.
	;
	;  * Begin each statement at the left margin.
	;
	;  * List each program without its file extension.
	;
	;  * To insert a comment, start that line with a semi-colon (;).
	;
	;
	************************************************************************
	;
	;  default options
	;
	; #SPECIFYTSR
	; #HIGHSCAN
	; #WINDOWSOPT
	; #MONOCHROME
	; #NOKEEPEMM
	; #NOMOVEXBDA
	; #EMS
	;
	;
	************************************************************************
	;
	AUTOMENU
	DBASE
	DOSSHELL
	EZMENU
	LOTUS
	MENU
	NC
	PARADOX
	PS1START
	RSSTUB
	SHELL
	SHELLSTB
	START
	WORD
	WP
	WIN
	123
	DEFRAG
	PCSHELL
	*AUTOMENU
	*BOOT
	*DOSEDIT
	*DRAGON
	*NDD
	*NETBIOS
	*PROTMAN
	*RP
	*SCREATE
	*SMARTDRV /L
	*SS365SLB
	*SSWAP
	*STRETCH
	*VANSI
	*VDEFEND
	*VRESUME
	*VT
	^ASPI4DOS
	^ASPI3X90
	^ASPI3X92
	^ATDOSHC2
	^ATDOSXL
	^BOOTCON
	^KWIKBOOT
	^SMARTDRV
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
