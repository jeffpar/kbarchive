---
layout: page
title: "Q170056: XCON: Messages Back Up on MTA with Event 9215 and Event 9318"
permalink: /kb/170/Q170056/
---

## Q170056: XCON: Messages Back Up on MTA with Event 9215 and Event 9318

	Article: Q170056
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages may back up on the Microsoft Exchange Server Message Transfer Agent
	(MTA) queues, and the following Event IDs will be written to the Windows NT
	Event Viewer Application log:
	
	  Event ID: 9318
	  Source: MSExchangeMTA
	  Type: Warning Category: Interface Description
	  An RPC communications error occurred.
	  Unable to bind over RPC. The locality table (LTAB) index is 76.
	  Windows NT error code: 1722. [BASE IL MAIN BASE 1 500] (12)
	
	  Event ID: 9215
	  Source: MSExchangeMTA
	  Type: Warning Category: Operating System
	  A sockets error 10061 on a connect() call was detected.
	  The MTA will attempt to recover the sockets connection.
	  Control block index: 1. [BASE IL TCP/IP DRVR 8 274] (12)
	
	CAUSE
	=====
	
	The above errors indicate that the server that the messages are destined for is
	either down or cannot be reached on the network.
	
	Things to check for:
	
	1. Try to ping the other server by both IP address and Servername.
	
	2. Try to do a NET VIEW \\Servername to verify NetBios name resolution.
	
	3. Try to do a NET USE \\Servername\IPC$ to verify rights issues.
	
	If steps 1 and 2 fail, the problem is one of basic network connectivity. Check
	the IP address and the WINS/DNS/HOSTS files.
	
	If step 3 fails, check the Windows NT access rights for the Exchange Service
	Account being used.
	
	Note: If you are running DHCP on your server, you should run IPCONFIG /RELEASE
	and IPCONFIG /RENEW.
	
	In the 9318 RPC error message, the Windows NT error code 1722 indicates that the
	RPC server is unavailable.
	
	In the 9215 error, the sockets 10061 message indicates that the connection was
	refused.
	
	This behavior is by product design.
	
	Additional query words: exfaq
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbprb
	
	=============================================================================
	
