---
layout: page
title: "Q140065: Multiprocessor Systems Randomly Restart or Stop Responding"
permalink: kb/140/Q140065/
---

## Q140065: Multiprocessor Systems Randomly Restart or Stop Responding

	Article: Q140065
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Workstation systems with more than two processors and Windows NT
	Server systems with more than four processors experience random restarts or stop
	responding after four to six hours of operation.
	
	NOTE: Retail versions of Windows NT Server or Windows NT Workstation do not
	support the number of processors necessary to experience this problem.
	Therefore, this problem is only seen on OEM versions of Windows NT.
	
	CAUSE
	=====
	
	There is a problem with some of the functions in Ntoskrnl.exe related to support
	of Windows NT Workstation systems with more than two processors and Windows NT
	Server systems with more than four processors.
	
	WORKAROUND
	==========
	
	Obtain the following update or wait for the next Service Pack.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postSP1/32proc-fix/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
