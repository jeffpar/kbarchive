---
layout: page
title: "Q78718: Tempus Link Version 3.2 Required with EMM386 and MS-DOS 5.0"
permalink: /kb/078/Q78718/
---

## Q78718: Tempus Link Version 3.2 Required with EMM386 and MS-DOS 5.0

	Article: Q78718
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Micro Tempus recommends using Tempus Link version 3.2 or later (dated August
	1991 or later) with MS-DOS 5.0 and EMM386.EXE. Using earlier versions with
	EMM386.EXE may cause system hangs, or one of the following error messages:
	
	  Out Of Memory
	
	  -or-
	
	  Divide Overflow
	
	Tempus recommends TLDD.SYS dated 11-11-91 or later for use with the MS-DOS 5.0
	Shell.
	
	Tempus Link software is used to create a virtual disk.
	
	CAUSE
	=====
	
	Tempus Link creates virtual disk space on PS/2 machines in conjunction with a
	3270 mainframe system. The current device driver is TLDD.SYS. MTIN.EXE provides
	the interface with the communications board (for example, IRMA or Attachmate
	applications).
	
	Without the current version of the software, memory conflicts with EMM386.EXE may
	occur.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	REFERENCES
	==========
	
	Micro Tempus: (800) 361-4983
	(514) 397-9512
	
	Additional query words: 3rdparty err msg 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
