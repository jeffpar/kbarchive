---
layout: page
title: "Q241731: Denial of Service Generates Error Message When Using Windows Ter"
permalink: kb/241/Q241731/
---

## Q241731: Denial of Service Generates Error Message When Using Windows Ter

	Article: Q241731
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a function (such as logging on to a domain) that is performed by
	Lsass.exe, you may receive the following error message:
	
	  A controller for this domain could not be found.
	
	Note that this behavior may be more noticeable with programs (such as Cybercop
	version 2.5) that perform large amounts of RPC calls.
	
	CAUSE
	=====
	
	This problem can occur if Lsass.exe is no longer working properly or at all.
	This can occur if Lsass.exe receives a "denial of service" by RPC, which makes a
	call to SamEnumerateUsersInDomain with a NULL value for Domain Handle. This
	stops LSA and then prevents anyone from logging on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Terminal Server 4.0.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	Terminal Server 4.0. For information about obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
