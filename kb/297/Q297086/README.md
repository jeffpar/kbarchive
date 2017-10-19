---
layout: page
title: "Q297086: Redirected to Former Site After Web Resource IP Address Changes"
permalink: /kb/297/Q297086/
---

## Q297086: Redirected to Former Site After Web Resource IP Address Changes

	Article: Q297086
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	If the IP address of a Web resource that you access through a proxy server (or
	an array) is changed, you may be redirected to the former site by the Proxy DNS
	Cache until the Time To Live (TTL) value of the older, cached entry expires.
	
	The default TTL for cached entries is 6 hours (21,600 seconds, hexadecimal:
	0x5460). You can modify this value to a minimum of 1 hour by editing the
	registry.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following Registry values affect the Web Proxy service on Proxy Server.
	
	To change the default TTL value:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the DnsTTLInSecs value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W3Proxy\Parameters
	
	3. On the Edit menu, click DWORD, type "0xe10" (without the quotation marks),
	  and then click OK.
	
	4. Quit Registry Editor.
	
	In hexadecimal, the full TTL range is
	
	  DnsTTLInSecs REG_DWORD 0xE10 - 0x8CA0
	
	3,600 to 36,000 seconds respectively.
	
	To clear the cache, stop all proxy services of array members, such as Web Proxy,
	Winsock Proxy, and Proxy Administrator. Delete the physical folders under the
	URLCACHE folder on each array member, and then restart the proxy services.
	Otherwise, you can create a cache filter that avoids caching the DNS named Web
	resource. After the DNS TTL expires for the cached objects, remove the filter.
	The filter is global to all array members.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
