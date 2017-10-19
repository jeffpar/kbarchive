---
layout: page
title: "Q124399: Beyond Mail Clients Unable to Log On to NetWare Post Office"
permalink: /kb/124/Q124399/
---

## Q124399: Beyond Mail Clients Unable to Log On to NetWare Post Office

	Article: Q124399
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT version 3.5 with Client or Gateway Services installed, when a
	user tries to run Banyan Systems' Beyond Mail client software and log on to a
	Beyond Mail post office that resides on a Novell NetWare server, the logon
	fails. Accessing files or printers on the NetWare server works fine.
	
	CAUSE
	=====
	
	The SetLockMode API is not handled correctly by the Client Services for NetWare,
	resulting in the Beyond Mail client being unable to lock open the user's
	mailbox. Because the file cannot be locked in exclusive mode, the logon attempt
	fails.
	
	WORKAROUND
	==========
	
	To avoid this problem, use a Beyond Mail post office on another supported
	network server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
