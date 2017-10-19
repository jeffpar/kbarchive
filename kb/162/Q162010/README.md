---
layout: page
title: "Q162010: XCLN: Exchange Server Name Resolution on a Novell Network"
permalink: /kb/162/Q162010/
---

## Q162010: XCLN: Exchange Server Name Resolution on a Novell Network

	Article: Q162010
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When the Microsoft Exchange client tries to locate the computer running
	Microsoft Exchange Server on a Novell network, it tries to locate a file server
	for the Microsoft Exchange Server name resolution.
	
	To do this, it sends out a SAP Nearest Service Query packet to get the nearest
	NetWare file server. There are two ways it should get a response:
	
	- If the file server is on the same subnet as the client, it will respond.
	
	- A router responds on behalf of the servers on a different subnet, if and only
	  if the router believes that no servers exist on the client subnet.
	
	This is how most networks are configured, so the client gets a response from the
	Nearest Service Query request from several file servers.
	
	Once a NetWare file server has been located, its bindery is used to translate the
	name of the computer running Microsoft Exchange Server into an IPX address.
	
	On the network being used, when the file server is on the same subnet as the
	client, but there is an internal network number defined on this server, the file
	server acts as if it is on a different subnet. Because of this, it should act as
	a router and respond to the Nearest Service Query.
	
	But if "Respond To Nearest Service Query=OFF" is set on the NetWare server, it
	does not respond to a Nearest Service Query. This setting is used in some
	NetWare environments when people do not want all of their servers to respond to
	this request. To enable this option, type the following on the NetWare Server
	console: SET REPLY TO GET NEAREST SERVER=ON. If setting the SET REPLY TO GET
	NEAREST SERVER=ON resolves the problem, add the entry to the AUTOEXEC.NCF file
	on the Novell server. If this entry is not added to the AUTOEXEC.NCF and the
	server is cycled, the problem will resurface.
	
	If the Nearest Service Query fails, a General Service Query is issued. All file
	servers on the subnet and routers will respond, including the one configured
	with a different internal network number. When the Microsoft Exchange client
	receives the response to the General Service query, it does not connect
	successfully to the computer running Microsoft Exchange Server; it must have a
	response to the Nearest Service Query.
	
	
	MORE INFORMATION
	================
	
	This behavior is by product design.
	
	Additional query words: WINNT WIN16 WIN95
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : 4.0
	
	=============================================================================
	
