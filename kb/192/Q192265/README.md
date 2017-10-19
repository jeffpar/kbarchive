---
layout: page
title: "Q192265: Winlogon Leaks Because of SMTPSVC Performance Counters"
permalink: /kb/192/Q192265/
---

## Q192265: Winlogon Leaks Because of SMTPSVC Performance Counters

	Article: Q192265
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Over time, the Windows NT system responsiveness appears sluggish, and clients
	may report a gradual decrease in system performance. Users connecting to the
	server over the network may receive RPC Server Busy errors.
	
	Side effects of the memory leak may include "Out of Virtual Memory" messages or
	the system stops responding completely when memory is totally exhausted.
	
	By tracking the handle count and the amount of Private Bytes for Winlogon.exe, it
	can be observed that, over time, the values continue to increase.
	
	CAUSE
	=====
	
	When running the resource kit utility Srvinfo.exe against a server remotely
	handles to the registry are not closed if the server has the SMTP service
	installed.
	
	The following key was being repeatedly opened and not closed:
	
	HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\SMTPSVC\Performance
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
