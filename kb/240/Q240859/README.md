---
layout: page
title: "Q240859: XADM: Admin.exe Stops Responding when Connected over Internet"
permalink: /kb/240/Q240859/
---

## Q240859: XADM: Admin.exe Stops Responding when Connected over Internet

	Article: Q240859
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to an Exchange Server computer over the Internet, the Exchange
	Server Administrator program (Admin.exe) stops responding (hangs). In Task
	Manager, the Administrator program is listed as "Not responding."
	
	MORE INFORMATION
	================
	
	Troubleshooting Steps:
	----------------------
	
	1. Ping the Exchange Server computer by name to verify successful name
	  resolution. If necessary create a HOSTS file for troubleshooting purposes.
	
	2. Statically map the ports for the information store, directory service, and
	  system attendant on the Exchange Server computer.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q155831 XADM: Setting TCP/IP Ports for Exchange and Outlook Client
	  Connections Through a Firewall
	
	3. Configure any firewall or router involved to allow TCP connections to be made
	  to the ports mapped for the information store, directory, and system
	  attendant, as well as to port 135. Exchange Server uses a well-known static
	  port (port 135) to listen for Administrator connections to the remote
	  procedure call (RPC) Endpoint Mapper Service. However, after the
	  Administrator program connects to this socket, Exchange Server then
	  re-assigns the program three random ports to use when communicating with the
	  information store, directory, and the system attendant. This makes it
	  impossible to allow these through the firewall without forcing them to be
	  statically assigned.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q148732 XADM: Setting TCP/IP Port Numbers for Internet Firewalls
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
