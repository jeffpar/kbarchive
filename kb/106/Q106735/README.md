---
layout: page
title: "Q106735: Closing Word for Windows 6.0 Causes General Protection Fault"
permalink: kb/106/Q106735/
---

## Q106735: Closing Word for Windows 6.0 Causes General Protection Fault

	Article: Q106735
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After shutting down Microsoft Word for Windows version 6.0 and restarting, you
	minimize and close Word. A general protection (GP) fault occurs in KRNL386.EXE
	(the Windows NT kernel).
	
	This problem may occur in other Windows-based applications that use
	object-linking and embedding (OLE) version 2.0.
	
	CAUSE
	=====
	
	The Windows-on-Windows (WOW) subsystem memory manager in KRNL386.EXE has a bug
	which causes an access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
