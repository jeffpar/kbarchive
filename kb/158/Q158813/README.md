---
layout: page
title: "Q158813: Cannot Connect to Personal Web Server from Remote System"
permalink: /kb/158/Q158813/
---

## Q158813: Cannot Connect to Personal Web Server from Remote System

	Article: Q158813
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): mspwsw95
	Last Modified: 15-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After sharing files with Personal Web Server, you may not be able to connect to
	the computer from a remote system.
	
	CAUSE
	=====
	
	This behavior may be caused by a problem with name resolution. When you attempt
	to connect to a remote system using a machine name with the Transmission Control
	Protocol/Internet Protocol (TCP/IP), TCP/IP must first find the Internet
	Protocol (IP) address of the remote system. If the remote machine name is not
	registered with the Domain Name System (DNS) or Windows Internet Name Service
	(WINS) server you are using, or is not listed in your HOSTS file, TCP/IP cannot
	resolve the name.
	
	RESOLUTION
	==========
	
	The user of the remote system should contact the system administrator or
	Internet service provider (ISP) and have the machine registered in the DNS or
	WINS servers on the network. Or, the user of the client system can contact their
	system administrator to add an entry to the HOSTS file for the remote system.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
