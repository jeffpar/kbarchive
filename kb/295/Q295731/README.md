---
layout: page
title: "Q295731: XCON:  RPC Fails Between Site Connectors When Servers Use IPX"
permalink: /kb/295/Q295731/
---

## Q295731: XCON:  RPC Fails Between Site Connectors When Servers Use IPX

	Article: Q295731
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use site connectors or multiple servers in a site where Internetwork
	Packet Exchange (IPX) is the only protocol that is used, if a Novell Bindery
	server does not exist, remote procedure call (RPC) fails between the two servers
	that are only using IPX.
	
	Exchange Server RPC over Sequenced Packet Exchange (SPX) tries a getaddressbyname
	by using bindery lookup. This process fails because a Bindery server is not
	available; Service Advertising Protocol (SAP) lookup also fails because an SAP
	Agent is not present to respond.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Enable Gateway Services for NetWare (GSNW) on the servers, and then make sure
	  that you have a Netware server available that supports bindery functions.
	  This method is the preferred method because bindery is more efficient than
	  SAP.
	
	  -or-
	
	- Install GSNW and the SAP Agent on both servers. This method is not the
	  preferred method because SAP is essentially a broadcast. However, this method
	  is the only method you can use if a Bindery server is not available.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
