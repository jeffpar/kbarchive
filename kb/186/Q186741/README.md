---
layout: page
title: "Q186741: XFOR: INS Error Msg.: 502 You Have No Permission to Talk"
permalink: /kb/186/Q186741/
---

## Q186741: XFOR: INS Error Msg.: 502 You Have No Permission to Talk

	Article: Q186741
	Product(s): Microsoft Exchange
	Version(s): Winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	To prevent unauthorized access to their NNTP servers, Internet Service Providers
	often restrict logon attempts to their own network or to a group of IP
	addresses.
	
	You may not see this error message unless you manually telnet to port 119 of an
	NNTP server for troubleshooting reasons. The telnet dialog box looks something
	similar to the following:
	
	  502 You have no permission to talk, Goodbye
	  Connection closed by foreign host.
	
	SYMPTOMS
	========
	
	When you set up the Internet News Service for Microsoft Exchange Server 5.5, and
	you attempt to connect to another host Network News Transfer Protocol (NNTP)
	server, the following error message may appear:
	
	  502 You Have No Permission to Talk
	
	CAUSE
	=====
	
	This error can occur if you try to connect to a host server that does not allow
	access from your IP address.
	
	This is a security measure that allows Internet Service Providers (ISPs) to
	restrict access to their NNTP server.
	
	RESOLUTION
	==========
	
	If you are setting up a new connection with an NNTP server, your ISP needs to
	include the IP address (or range of addresses) of your Exchange Server computer,
	explicitly in order to allow you to connect.
	
	If you do not have a static IP address (or a range of addresses) that can be
	included on your newsfeed server's authorized pool for incoming connections,
	then you may need to set up a secure connection using a logon name and
	password.
	
	To select a secure outbound connection, click the Security tab IN the newsfeed
	object in the Microsoft Exchange Administrator program.
	
	Additional query words: news, usenet
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : Winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
