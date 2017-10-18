---
layout: page
title: "Q154799: Update.exe in 3.51 Service Packs May Use Wrong Patchdll.dll"
permalink: kb/154/Q154799/
---

## Q154799: Update.exe in 3.51 Service Packs May Use Wrong Patchdll.dll

	Article: Q154799
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Service Pack executable file Update.exe calls Patchdll.dll, and if one
	exists in the path, it will use that one. This may cause Update to terminate
	with the following error message:
	
	  An error has occurred. Invalid library procedure: <library procedure>
	
	where <library procedure> is a specific library procedure name. The
	procedure name differs each time you run Update.exe.
	
	CAUSE
	=====
	
	This problem occurs if Patchdll.dll is in your path. Patchdll.dll is used during
	the Service Pack upgrade, but it is removed after the upgrade. The Windows NT
	3.51 Service Pack upgrade does not place the file in your path.
	
	RESOLUTION
	==========
	
	To work around this problem, remove Patchdll.dll from your path.
	
	To resolve this problem, obtain the following fix or wait for the next Windows NT
	service pack. The fix is that Update.exe now loads Patchdll.dll from the
	directory in which Update.inf is found.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 3.51
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
