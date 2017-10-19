---
layout: page
title: "Q183886: Access Violation in LSASS When Logging on System"
permalink: /kb/183/Q183886/
---

## Q183886: Access Violation in LSASS When Logging on System

	Article: Q183886
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When logging on to a computer immediately after restarting it, you receive an
	access violation in Lsass.exe that causes the security subsystem to fail,
	rendering the computer inoperable until you restart it. The error occurs only if
	you log on immediately after the CTR+ALT+DEL prompt appears. If you wait a few
	minutes, the logon attempt will be successful.
	
	CAUSE
	=====
	
	A timing issue that prevents Netlogon from reading the cached domain list from
	the registry causes this error. Netlogon fails to obtain a handle to the
	registry, and then attempts to use the uninitialized handle to read in a value,
	causing the access violation.
	
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
	
	
	Additional query words: hang dr. watson
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
