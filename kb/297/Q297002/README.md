---
layout: page
title: "Q297002: &quot;The RPC Server Is Unavailable&quot; Err Msg and Events 5718 and 3013"
permalink: kb/297/Q297002/
---

## Q297002: &quot;The RPC Server Is Unavailable&quot; Err Msg and Events 5718 and 3013

	Article: Q297002
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to synchronize a backup domain controller (BDC) with the primary
	domain controller (PDC) of a domain, the synchronization of the Security
	Accounts Manager (SAM) database may not succeed. You may receive the following
	error message on the BDC:
	
	  The RPC server is unavailable
	
	The System Event Log of the BDC may display the following information:
	
	  Event ID: 5718
	  Event Type: Error
	  Event Source: Netlogon
	  Description: The full synchronization replication of the name database from
	  the primary domain controller <computername> failed with the following
	  error: <text>
	
	  Event ID: 3013
	  Event Type: Error
	  Event Source: Rdr
	  Description: The redirector has timed out a request to <computername>.
	
	CAUSE
	=====
	
	This behavior can occur if the communication link between the BDC and the PDC
	does not support large packet sizes, for example, packets that are more than
	1024 bytes in size.
	
	RESOLUTION
	==========
	
	To resolve the behavior, adjust the communication link to support larger packet
	sizes. This setting is usually adjusted on a router.
	
	MORE INFORMATION
	================
	
	To see whether there is a communication problem between the BDC and the PDC, use
	packets of increasing sizes and try to ping the PDC by IP address. You can use
	the ping command with the -l option. Also, you can use the Tracert.exe utility
	to determine where the packets are being dropped.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
