---
layout: page
title: "Q227761: Unable to Install Service Pack 4 from Distributed File System"
permalink: kb/227/Q227761/
---

## Q227761: Unable to Install Service Pack 4 from Distributed File System

	Article: Q227761
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Setup restarts your computer during an installation of Windows NT Service
	Pack 4 (SP4) from a Distributed file system (DFS) share, you may receive one or
	more of the following error messages:
	
	   - Cannot find the file 'regsvr32.exe' (or one of its components). Make sure the
	  path and filename are correct and that all required libraries are available.
	
	   - Cannot find the file 'pstores..exe' (or one of its components). Make sure the
	  path and filename are correct and that all required libraries are available
	
	CAUSE
	=====
	
	This problem can occur beause after the first logon after installing SP4,
	Windows NT tries to run information stored in the registry's Runonce key.
	Several files referred to in this key have not been copied to the destination
	computer during SP4 installation, and this generates the error messages listed
	earlier in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you install SP4 from a DFS share, several hundred files do not get copied
	to the destination computer.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
