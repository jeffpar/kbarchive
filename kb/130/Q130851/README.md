---
layout: page
title: "Q130851: Slow Time-Out Trying to Connect to Nonexistent Computer"
permalink: /kb/130/Q130851/
---

## Q130851: Slow Time-Out Trying to Connect to Nonexistent Computer

	Article: Q130851
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun 3rdpartynet win95 kb3rdPartyNetClient kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an application that uses Remote Registry Services (such as
	System Monitor) and you try to connect to a computer that does not exist on the
	network, it may take several minutes before you receive a response indicating
	that the remote computer cannot be located or connected to.
	
	CAUSE
	=====
	
	This situation can occur because Domain Name Service (DNS) resolution is using
	User Datagram Protocol (UDP) to send name-resolution packets to the DNS server,
	which is unreachable. When this occurs, the resolver times out repeatedly,
	taking approximately one minute per attempt.
	
	RESOLUTION
	==========
	
	To work around this situation, remove the TCP/IP protocol from the network
	adapter or the dial-up adapter.
	
	MORE INFORMATION
	================
	
	This situation can occur if you have the following configuration:
	
	- A physical LAN connection.
	
	- Dial-Up Networking is installed.
	
	- The TCP/IP protocol is installed and is bound to both the network adapter and
	  the Dial-Up Networking adapter.
	
	- The system is configured for Remote Registry Services.
	
	
	======================================================================
	Keywords          : dun 3rdpartynet win95 kb3rdPartyNetClient kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
