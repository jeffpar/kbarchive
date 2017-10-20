---
layout: page
title: "Q186357: RPC UseWinsockForIP Is Only Applicable to UDP and IPX"
permalink: /kb/186/Q186357/
---

## Q186357: RPC UseWinsockForIP Is Only Applicable to UDP and IPX

{% raw %}

	Article: Q186357
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fix kbWinNT400sp4fea
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Workstation versions 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Winsock Proxy lets a Windows Sockets application, running on a private network
	client, behave as if it were directly connected to a remote Internet server
	application when, in fact, the Microsoft Proxy Server is the host for this
	connection. This means that all application-level communications are channeled
	through a single secured computer -- the gateway computer running Microsoft
	Proxy Server.
	
	Ordinarily, for datagram packet transfers, the RPC transport DLL bypasses the
	sendto( ) and recvfrom( ) functions provided in Wsock32.dll, and communicates
	directly with the underlying device driver. This improves the speed of packet
	transfers but makes Winsock Proxy features unavailable to the application.
	
	Effective with Windows NT 4.0 with Service Pack 2, the RPC transport checks the
	registry to see whether to use the function calls provided in Wsock32.dll or to
	talk directly with the device driver.
	
	NOTE: To use RPC with Winsock Proxy, you must add the following information to
	the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\UseWinsockForIP
	
	REG_DWORD "1"
	
	CAUSE
	=====
	
	RPC on Windows NT uses optimization for connection oriented traffic. This
	optimization includes calling the TDI transport. As a result, RPC bypasses the
	Winsock proxy.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After you obtain the latest service pack, perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Apply Windows NT 4.0 Service Pack 4.
	
	  NOTE: The third-party application must also be a Winsock 2.1 LSP (layered
	  service provider).
	
	2. Copy the %SystemRoot%\System32\Rpcltscm.dll file to another name (for
	  example, Rpclts13.dll).
	
	3. For the protocol that is being implemented by the LSP (for example, TCP/IP),
	  replace the reference to Rpcltscm.dll in the registry with the above name.
	  For example,
	
	  change:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\ServerProtocols
	  \ncacn_ip_tcp=rpcltscm.dll
	
	  to:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\ServerProtocols
	  \ncacn_ip_tcp=rpclts13.dll
	
	4. Shut down and restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fix kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
