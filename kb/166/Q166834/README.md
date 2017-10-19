---
layout: page
title: "Q166834: Lost Record Locks from MS-DOS-based Program to NetWare Server"
permalink: /kb/166/Q166834/
---

## Q166834: Lost Record Locks from MS-DOS-based Program to NetWare Server

	Article: Q166834
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An MS-DOS-based application that does record locking on file(s) located on a
	Novell NetWare server may experience problems if it shells out of the
	application while the locks are held. For example, the application may be
	prematurely terminated when it tries to close the locks it originally opened.
	
	CAUSE
	=====
	
	If the shell application takes any action that would cause its own record locks
	to be closed, the locks held by the parent application are also closed. NWRDR
	does not maintain the locks held by the parent application in this scenario.
	
	RESOLUTION
	==========
	
	Avoid shelling out of MS-DOS-based applications that open files on NetWare
	servers or obtain an updated version of Nwrdr.sys.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: 4.00 prodnt ipx msdos drwatson access violation
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
