---
layout: page
title: "Q150474: Accessing an Access Database Through GSNW May Hang Access"
permalink: kb/150/Q150474/
---

## Q150474: Accessing an Access Database Through GSNW May Hang Access

	Article: Q150474
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Microsoft Access database located on a Novell NetWare server
	through a Windows NT Server running Gateway Services for NetWare (GSNW), the
	database may appear to stop responding (hang) when you close it.
	
	This problem does not occur if the database is located on the Windows NT Server
	or if the clients directly access the database on the NetWare Server by using
	Client Services for NetWare (CSNW).
	
	CAUSE
	=====
	
	When an Access database is shared between several users, it is normal for a lock
	violation to occur on the locked database file (.LDB) when you close the
	database. This lock violation is normally reported to the client; however, when
	this occurs through GSNW, GSNW waits indefinitely for the lock to clear.
	Eventually the client times out and closes the session to GSNW.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, add the following value to the registry:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer \Parameters
	
	Value: LockViolationDelay
	Type: REG_DWORD
	Data: 0
	
	This effectively turns off the lock violation optimisation within the Windows NT
	Server and causes all lock violations to fail immediately.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
