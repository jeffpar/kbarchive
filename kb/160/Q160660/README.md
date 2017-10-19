---
layout: page
title: "Q160660: Ntregmon.exe causes STOP 0x0000001E with New Service Pack"
permalink: /kb/160/Q160660/
---

## Q160660: Ntregmon.exe causes STOP 0x0000001E with New Service Pack

	Article: Q160660
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the latest Windows NT version 4.0 Service Pack, running the
	utility Ntregmon.exe 1.1 will cause Windows NT to crashdump with a STOP
	0x0000001E error in the driver Regsys.sys.
	
	CAUSE
	=====
	
	The Regsys.sys device driver that comes with NTREGMON directly accesses data
	structures internal to Windows NT. This type of access to the data structures is
	illegal. Anytime there is an update to Windows NT there is a possibility that
	these internal data structures will change. These changes result in the driver
	creating or utilizing invalid pointers and causing the crashdump.
	
	MORE INFORMATION
	================
	
	NTREGMON is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: sp2 0x1e ntregmon
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
