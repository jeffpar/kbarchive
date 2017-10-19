---
layout: page
title: "Q168925: Err Msg: The WIN16 Subsystem Was Unable to Enter Protected Mode"
permalink: /kb/168/Q168925/
---

## Q168925: Err Msg: The WIN16 Subsystem Was Unable to Enter Protected Mode

	Article: Q168925
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run a 16-bit Windows-based program at a command prompt using
	the START command, you may receive the following error message:
	
	  The WIN16 subsystem was unable to enter Protected Mode, DOSX.EXE must be
	  present in you AUTOEXEC.NT and present in your path.
	
	However, Dosx.exe is present in the Autoexec.nt file and the file is in the path.
	
	CAUSE
	=====
	
	This error message occurs when all of the following conditions exist:
	
	- The /separate switch is used with the START command.
	
	- There is a .pif file for the program in the path.
	
	- The .pif file references custom Autoexec and Config files that do not load
	  Dosx.exe or Himem.sys.
	
	RESOLUTION
	==========
	
	Rename the program's .pif file. Change the .pif file name from
	<Program>.pif, where <Program> is the executable file name of the
	program, to <Program>.xxx. Make sure to search for and rename all
	instances of the <Program>.pif file.
	
	MORE INFORMATION
	================
	
	The START command is a command-line tool that starts a separate window to run a
	specified program or command. It is frequently used in batch files. The
	/separate switch starts 16-bit Windows-based programs in separate memory space.
	
	When you use the START /SEPARATE <PROGRAM>.EXE command, the path is
	searched for any instances of a <Program>.pif file. If no
	<Program>.pif file is found, Windows NT loads the _default.pif file and
	then runs <Program>.exe. This behavior does not occur if the /separate
	switch is not used, nor does it occur in Windows NT version 3.51 even when the
	/separate switch is used.
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
