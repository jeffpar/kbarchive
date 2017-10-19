---
layout: page
title: "Q295416: XCON: How to Use the PortPing Utility"
permalink: /kb/295/Q295416/
---

## Q295416: XCON: How to Use the PortPing Utility

	Article: Q295416
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Enterprise Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the PortPing utility that is located in the Microsoft
	BackOffice Resource Kit.
	
	MORE INFORMATION
	================
	
	You can use PortPing to verify that a computer is actively listening on a
	specific port. For example, you can use PortPing to verify that your server is
	listening on port 25 when you install an Internet Mail Connector on your
	Exchange Server computer, and then start the Internet Mail Service. When you use
	PortPing, you can type either the host name of the server or the Internet
	protocol (IP) address in the Target Server box. If you type the host name and
	PortPing fails, type the IP address. If you can reach the specified port when
	you type the IP address, but not when you type the host name, the name
	resolution service on the computer may not be working properly. When you run
	PortPing, if the remote port is listening, you receive the following message:
	
	  Success! Pinged port x in y milliseconds.
	
	However, if the remote port is not open or if a firewall is blocking that
	particular port, you receive the following error message:
	
	  Error Detected: Connection refused <XXXXX> returned.
	
	In this error message, <XXXXX> represents the error code.
	
	For additional information about the error code that you receive when you run
	PortPing, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q150537 Windows Sockets Error Codes, Values, and Meanings
	
	The following scenario describes how to use this information for troubleshooting
	purposes:
	
	  Messages are backed up between two Exchange Server computers that are
	  connected by an X.400 connector. The X.400 connector uses Transmission
	  Control Protocol (TCP) port 102. To confirm that this issue is caused by
	  network problems, run PortPing to that port number. When you start PortPing
	  to make a remote call on the server to port 102, if the ping command does not
	  come back successfully to port 102, you can confirm that X.400 mail traffic
	  is not flowing.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000EntServ
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
