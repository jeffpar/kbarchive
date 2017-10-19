---
layout: page
title: "Q123029: WFW 3.11 Clients Hang Accessing Windows NT Server"
permalink: /kb/123/Q123029/
---

## Q123029: WFW 3.11 Clients Hang Accessing Windows NT Server

	Article: Q123029
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows for Workgroups version 3.11 hangs when you run a database application
	that is using a shared file on a Windows NT server.
	
	CAUSE
	=====
	
	This problem involves oplock, byte-range lock, and lock-&-close server
	message block (SMB) protocols. The behavior that causes this problem is as
	follows:
	
	1. CLIENT1 has a file open with an exclusive oplock and is using the file.
	
	2. CLIENT2 tries to open the file.
	
	3. SERVER sends an oplock break request to CLIENT1.
	
	4. CLIENT1 (MIDx) sends and oplock broken (locktype = x'02'). Even though
	  locktype = x'02', the SMB specifies to lock range 0-EOF.
	
	5. CLIENT1 (MIDy) sends an unlock&close request specifying 0-EOF.
	
	6. SERVER (MIDy) responds with "no such lock" error. SERVER did not close the
	  file because the unlock request failed.
	
	7. SERVER (**MIDx) responds indicating successful lock on range 0-EOF.
	
	8. CLIENT1 thinks file is unlocked and closed.
	
	9. SERVER still has file opened with locked range 0-EOF.
	
	10. Other clients will get lock error when they try to access the file.
	
	A deadlock condition occurs since CLIENT1 thinks that the file handle was closed
	and therefore will never unlock the byte range.
	
	RESOLUTION
	==========
	
	A workaround for this problem is to turning off opportunistic locking at the
	file server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 3.11. A fix to this
	problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch
	Version           : WINDOWS:; winnt:3.5
	
	=============================================================================
	
