---
layout: page
title: "Q177290: Configuring Internal DNS Server When Using Proxy Server"
permalink: kb/177/Q177290/
---

## Q177290: Configuring Internal DNS Server When Using Proxy Server

	Article: Q177290
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Microsoft Proxy Server is an extensible firewall and Web cache server that
	provides security for a company's intranet and its connection to the Internet
	while improving network response time and efficiency. When Proxy Server is
	implemented in an environment where workstations can use an internal Domain Name
	Service (DNS) server and an external DNS server (usually through an Internet
	Service Provider), it is necessary to modify the registry of the internal DNS
	Server. This article discusses this modification.
	
	MORE INFORMATION
	================
	
	If you are using Microsoft Windows NT DNS servers on your intranet and also have
	external DNS Servers, you will need to change the configuration of the internal
	DNS servers to turn off recursive forwarding for DNS searches. To turn off
	recursive forwarding on the Windows NT DNS servers, use the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe).
	
	2. Go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	3. Create the NoRecursion value using the following information:
	
	  Value    : NoRecursion
	  Data Type: REG_DWORD
	  Data     : 0x1
	
	4. Exit Registry Editor and restart the Domain Name Service.
	
	The NoRecursion registry value prevents your local DNS server from blocking
	further attempts to resolve a request for host name resolution. This allows DNS
	searches to continue trying other secondary DNS Servers specified in the search
	list.
	
	If your internal DNS server uses a platform other than Microsoft Windows NT
	Server version 4.0, such as a UNIX-based DNS server that uses the BIND service,
	refer to your server's documentation on how to turn off recursive forwarding.
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
