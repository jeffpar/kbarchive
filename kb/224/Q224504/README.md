---
layout: page
title: "Q224504: Modem Sharing Installs the Netmodem Tool"
permalink: /kb/224/Q224504/
---

## Q224504: Modem Sharing Installs the Netmodem Tool

	Article: Q224504
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	BackOffice Small Business Server (SBS) contains a tool named Modem Sharing. You
	can administer Modem Sharing in Windows, or you can use the Netmodem.exe tool at
	a command prompt. Netmodem.exe provides similar functionality to a subset of the
	Net.exe tool.
	
	MORE INFORMATION
	================
	
	The following list shows the available Netmodem.exe commands:
	
	netmodem use
	------------
	
	Connects a modem-sharing port to the server, or show current port mapping.
	
	  Example:
	
	  
	
	- netmodem use (view current mapping of ports, including local ports)
	
	- netmodem use com3 \\server\pool (connect COM3 to pool on server)
	
	- netmodem use * \\server\pool (select and connect a port to pool on server)
	
	- netmodem use com3 /d (disconnect COM3 from the server)
	
	  NOTE: Netmodem use cannot be used on the SBS-based server.
	
	netmodem view
	-------------
	
	Displays the modem pools shared at a server.
	
	  Example:
	
	  
	
	- netmodem view \\server
	
	netmodem ver
	------------
	
	Displays the version of the modem-sharing files.
	
	  Example:
	
	  
	
	- netmodem ver
	
	netmodem share pool name
	------------------------
	
	Displays pools defined at the local server.
	
	  Example:
	
	  
	
	- netmodem share
	
	- netmodem share pool1
	
	Additional query words: smallbiz bos bof 4.00 4.50
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbinfo
	
	=============================================================================
	
