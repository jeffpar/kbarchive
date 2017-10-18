---
layout: page
title: "Q152725: XCLN: How to Connect over the Internet to an Exchange Server"
permalink: kb/152/Q152725/
---

## Q152725: XCLN: How to Connect over the Internet to an Exchange Server

	Article: Q152725
	Product(s): Microsoft Exchange
	Version(s): MS-DOS:4.0,5.0; WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage
	Last Modified: 22-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange clients can connect to Microsoft Exchange Servers over the
	Internet via third party Internet Service Providers.
	
	In order to connect from a client, you must:
	
	- Have dial-in or direct connection to the Internet.
	
	- Be validated by the Microsoft Exchange Server's NT domain in order to talk to
	  Microsoft Exchange Server via RPCs. To verify this, clear the Use Network
	  Security During Logon checkbox. This will require domain login credentials
	  when you start the Microsoft Exchange client with this profile.
	
	- Put the Microsoft Exchange Server name in the client's HOSTS file with IP
	  address.
	
	- Have the ability to ping the Microsoft Exchange Server by server name
	
	MORE INFORMATION
	================
	
	Connecting Microsoft Exchange clients to Microsoft Exchange Servers over the
	Internet is similar to using a large WAN. When a client communicates with an
	Exchange Server over the Internet, the TCP/IP packets are sent across several
	routers along the way. This route may not always be the same. Also, in order for
	an Outlook client to establish proper communication with an Exchange Server, it
	needs to use TCP/IP port 135. This means that TCP/IP port 135 has to be enabled
	on all routers (and firewalls) in a packet's path for RPC communication to work.
	This condition cannot always be ensured because several routers on the Internet
	disable TCP/IP port 135. Use RPCPing.exe on both the server and client computers
	to verify that RPC communication is working. For additional information about
	the RPCPing utility, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q167260 XCLN: How to Use RPCPing to Test RPC Communication
	
	
	Additional query words: exchange client internet connect exfaqclnt
	
	======================================================================
	Keywords          : kb3rdparty kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : MS-DOS:4.0,5.0; WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
