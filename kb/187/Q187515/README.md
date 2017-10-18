---
layout: page
title: "Q187515: REG.EXE Err Msg: The Operation Could not be Completed"
permalink: kb/187/Q187515/
---

## Q187515: REG.EXE Err Msg: The Operation Could not be Completed

	Article: Q187515
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Command-line Registry Manipulation Utility (Reg.exe) may fail with the
	following error message:
	
	  The operation could not be completed.
	
	CAUSE
	=====
	
	NetBIOS names have a limit of 15 characters. The Command-line Registry
	Manipulation Utility fails if the remote computer is 14 or 15 characters because
	it considers the two backslashes included as part of the Universal Naming
	Convention (UNC) as part of the computer name. For example, Reg.exe successfully
	connects to a computer with the name THIRTEENCHARS because it sees the UNC name
	as fifteen characters (\\THIRTEENCHARS). However, Reg.exe fails if the computer
	name is FIFTEENCHARACTR because it thinks the UNC name is seventeen characters
	(\\FIFTEENCHARACTR).
	
	This problem occurs with Reg.exe version 1.04 and earlier.
	
	RESOLUTION
	==========
	
	To resolve this problem on Intel platforms, obtain Reg_x86.exe from the
	following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/i386/
	
	To resolve this problem on Alpha platforms, obtain Reg_axp.exe from the following
	Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/alpha/
	
	MORE INFORMATION
	================
	
	Reg.exe ships with the Windows NT 4.0 Resource Kit. For more information on the
	use of this utility, please consult your documentation or type the following
	command at a command prompt:
	
	reg /?
	
	Additional query words: rkit
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
