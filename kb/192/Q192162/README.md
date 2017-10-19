---
layout: page
title: "Q192162: Windows Terminal Server Clients Do Not List Server Names"
permalink: /kb/192/Q192162/
---

## Q192162: Windows Terminal Server Clients Do Not List Server Names

	Article: Q192162
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Terminal Server clients may not list Terminal Server names under the DNS
	domain group in the connect list when browsing using DNS. They are listed as IP
	addresses instead of names.
	
	CAUSE
	=====
	
	This problem is because the Windows Terminal Server names start with the DNS
	group name defined on the client using the registry key BrowseDNSDomain.
	
	RESOLUTION
	==========
	
	To work around this problem, use server names that do not start with the DNS
	group name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server 4.0,
	Terminal Server Edition. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Windows Terminal Server clients can build a connect list Of Terminal Servers
	using DNS based on the group name configured on the client. The group name is
	defined on the client using the registry key BrowseDnsDomain.
	
	
	In certain cases, however, clients are unable to list the Terminal Server names
	that it received from the DNS server and lists only the IP addresses. This can
	happen if the server names start with the group name.
	
	
	Additional query words: domain reverse lookup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
