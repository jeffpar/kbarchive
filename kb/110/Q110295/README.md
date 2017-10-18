---
layout: page
title: "Q110295: Remote Log On Authentication"
permalink: kb/110/Q110295/
---

## Q110295: Remote Log On Authentication

	Article: Q110295
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Windows NT version 3.51 client can connect to a Windows NT Workstation version
	3.51 or Windows NT Server version 3.51 using credentials that have already been
	cached on that Windows NT version 3.51 machine. This is an improvement with this
	version and is especially useful when the Windows NT version 3.51 client is a
	Remote Access Service (RAS) client or is on a private local area network
	connected to a wide area network (WAN) through a RAS client.
	
	MORE INFORMATION
	================
	
	When you interactively log on to a Windows NT machine (through WinLogon) to an
	account not physically maintained on the machine, the logon information is
	cached on the machine. This allows you to later interactively log on to the
	Windows NT machine again even though a domain controller defining the account
	isn't available. This is especially useful for laptop systems when they aren't
	connected to the network or RAS client systems that aren't yet dialed in.
	
	Cached credentials in Windows NT versions 3.5 and earlier could only be used to
	authenticate future interactive logons. With Windows NT version 3.51, the cached
	credentials can also be used to authenticate network logons.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
