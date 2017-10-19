---
layout: page
title: "Q168451: Cached IP Address Never Expires for SNMP Trap Destination"
permalink: /kb/168/Q168451/
---

## Q168451: Cached IP Address Never Expires for SNMP Trap Destination

	Article: Q168451
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbSDKPlatform kbSNMP kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Simple Network Management Protocol (SNMP) Service Configuration, the trap
	destination can be entered as a host name or IP address. The host name is
	resolved to an IP address when the SNMP Agent loads, and is cached until the
	computer with the SNMP agent is restarted, or the SNMP service is stopped. This
	cached address is only used by SNMP; other services will do a name query to find
	this IP address.
	
	If the SNMP Agent is configured to send traps based on host name, and the IP
	address changes on the SNMP Management Station at some point after the SNMP
	Agent is started on the Windows NT computer, the trap would not be received.
	
	WORKAROUND
	==========
	
	If host names are used for trap destinations, and the IP address of a Network
	Management station changes, be sure to stop and restart the SNMP service on the
	Windows NT computer. The SNMP service can be stopped and started by using the
	Services tool in Control Panel, or by typing net stop SNMP and net start SNMP at
	the command line.
	
	You can also use an IP address for the trap destination; and modify this address
	if needed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: caching
	======================================================================
	Keywords          : kbnetwork kbSDKPlatform kbSNMP kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
