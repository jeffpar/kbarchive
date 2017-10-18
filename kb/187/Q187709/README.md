---
layout: page
title: "Q187709: Domain Name Resolver Caches Responses"
permalink: kb/187/Q187709/
---

## Q187709: Domain Name Resolver Caches Responses

	Article: Q187709
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
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
	
	When a Windows Sockets application uses DNS to resolve a hostname to an IP
	address by means of the gethostbyname API, the Domain Name Resolver (DNR) on a
	computer running Windows NT 4.0 caches the response for the TTL (Time to Live)
	specified in the response on a per-process basis. This means that if there is a
	change in the IP address of the host computer, the client application continues
	to try connecting to the old address. It also means that the same IP address
	will be used each time, until the TTL expires, if the response contains multiple
	IP addresses.
	
	CAUSE
	=====
	
	Winsock2 support was introduced in Windows NT 4.0. Previous versions of Windows
	NT supported a MaxHostentCacheSize registry value, which you could set to zero
	to disable caching. Support for this parameter was not included in Winsock2.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Support for the MaxHostentCacheSize registry value has been added to Winsock2.
	The registry value controls the number of cache entries that are available to
	the process. If you set the value to zero, no caching will be done.
	
	HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\ServiceProvider
	\MaxHostentCacheSize
	
	NOTE: The above link is one path; it has been wrapped for readability.
	
	Value type: REG_DWORD
	Default value: 10
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
