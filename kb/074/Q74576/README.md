---
layout: page
title: "Q74576: Communication Between EMM386.EXE and Windows"
permalink: kb/074/Q74576/
---

## Q74576: Communication Between EMM386.EXE and Windows

	Article: Q74576
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Both EMM386.EXE and Microsoft Windows version 3.0 in 386 enhanced mode use the
	upper memory area (UMA) to emulate expanded memory on 80386 or faster
	processors. To ensure that no conflicts occur, EMM386.EXE passes mapping
	information for the UMA to Windows when Windows starts (when Windows starts, it
	queries EMM386.EXE for this mapping information). Windows then sets up its page
	tables to duplicate the EMM386.EXE mapping for this region and disables
	EMM386.EXE, which ensures that when Windows attempts to load device drivers and
	TSRs high, it will not conflict with what EMM386.EXE is using.
	
	MORE INFORMATION
	================
	
	The communication between EMM386.EXE and Windows 3.0 has several important
	implications:
	
	- Using the NOEMS parameter with EMM386.EXE is functionally equivalent to
	  adding EMMEXCLUDE=A000-EFFF to the [386ENH] section of the SYSTEM.INI file.
	  No expanded memory will be available to MS-DOS applications running inside
	  Windows.
	
	  Note: The MEM command run under Windows 3.0 will return available expanded
	  memory. This is LIM 4.0 memory and is not useful to MS-DOS applications
	  running from Windows.
	
	- Any hardware that requires an EMMEXCLUDE statement to run Windows (such as a
	  network card, or the Stacker acceleration card) will also require that
	  EMM386.EXE not use those addresses. Use the X= switch to exclude EMM386.EXE
	  from using a specific address range. Multiple X= switches are supported by
	  EMM386.EXE.
	
	- If an EMMPAGEFRAME= line is added to the SYSTEM.INI, it should specify the
	  same starting address that EMM386.EXE is using to create its page frame. The
	  page frame for EMM386.EXE can be set using either the Mx or the FRAME=
	  switch.
	
	For more information on the SYSTEM.INI file, see the SYSINI.TXT, SYSINI2.TXT, or
	SYSINI3.TXT file located by default in the Windows subdirectory.
	
	For more information about EMM386.EXE, see the version 5.0 "Microsoft MS-DOS
	User's Guide."
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
