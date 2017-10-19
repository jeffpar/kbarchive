---
layout: page
title: "Q193381: XFOR: Chat Portals No Longer Connect after Installing SP1"
permalink: /kb/193/Q193381/
---

## Q193381: XFOR: Chat Portals No Longer Connect after Installing SP1

	Article: Q193381
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After installing the Chat Server Service Pack 1 for Exchange Server 5.5, portals
	linking previous versions of the chat server no longer work.
	
	Microsoft Exchange Chat Service version 5.5 Service Pack 1 does not support
	mixed-version chat networks. You cannot connect a server running this version
	with servers running earlier versions of the Chat Service product (Internet Chat
	Server 1.0 or Microsoft Exchange Chat Service version 5.5).
	
	Microsoft Windows NT Server version 4.0 with Service Pack 3 and Microsoft
	Exchange Chat Service version 5.5 Service Pack 1 must be installed on each
	server.
	
	MORE INFORMATION
	================
	
	Two or more chat server computers may be connected into a network through the
	configuration of portals. A portal represents the connection between two chat
	servers on a network. Each portal consists of a name, an IP address, a port
	number, and a unique server ID number, which identifies the chat server at the
	other end of the portal.
	
	One important thing to note is that the Microsoft Exchange Chat server is not
	able to communicate with other non-Microsoft Internet Relay Chat (IRC) chat
	servers. Each IRC chat network implements the IRC protocol differently.
	
	Additional query words: chatsrv portal sp1
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
