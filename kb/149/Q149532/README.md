---
layout: page
title: "Q149532: Windows NT Clients Run Out of Ports"
permalink: kb/149/Q149532/
---

## Q149532: Windows NT Clients Run Out of Ports

	Article: Q149532
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	An Event ID 2009 "Number of sessions exceeds 2048" may be recorded in the event
	log and/or clients may be unable to create new connections to the server.
	
	CAUSE
	=====
	
	This behavior can occur because computers that run Microsoft Windows NT clients
	and use excessive numbers of ports (more than 3,976 simultaneously) may run out
	of ports before TCP/IP releases closed connections. The TCP/IP-state computer
	dictates that when a connection is closed, the connection is not released until
	two maximum segment lives (MSLs) have passed. This state is defined as the
	Time-wait state. Since one MSL is defined as 120 seconds, it takes four minutes
	for a closed connection to be released in TCP/IP.
	
	NOTE: For more information on MSL and Time-wait, please refer to Internet RFC
	793.
	
	WORKAROUND
	==========
	
	To resolve this behavior, you must make the following registry change:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  HKEY_LOCAL_MACHINE\System\CurrectControlSet\services\Tcpip\Parameters
	
	The registry value is:
	
	TcpTimedWaitDelay
	
	Key: Tcpip\Parameters
	Value Type: REG_DWORD - Time in seconds
	Valid Range: 30-300 (decimal)
	Default: 0xF0 (240 decimal)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Workstation
	version 3.51 and Microsoft Windows NT Server version 3.51. This problem was
	corrected in the latest U.S. Service Pack for Windows NT Workstation or Server
	version 3.51. For information on obtaining this update, query "servpack"
	(without the quotation marks) in the Microsoft Knowledge Base.
	
	
	MORE INFORMATION
	================
	
	For additional information about configuration options for Windows NT 4.0, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q170359 How to Modify TCP/IP Maximum Retransmission Timeout
	
	This registry entry was first added in Windows NT 3.51 Service Pack 5. Customers
	using Windows NT 3.51 need to apply Service Pack 5 before making this
	modification.
	
	Additional query words: kbnetwork kbbug3.51 NTSrvWkst nttcp
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbWinNTAdvServ351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
