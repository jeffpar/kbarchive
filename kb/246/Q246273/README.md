---
layout: page
title: "Q246273: XCLN: Poor Performance Starting Outlook over PPTP Connection"
permalink: kb/246/Q246273/
---

## Q246273: XCLN: Poor Performance Starting Outlook over PPTP Connection

	Article: Q246273
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a Microsoft Exchange Server client, such as Microsoft Outlook,
	over a Point to Point Tunneling Protocol (PPTP) connection, the program may
	start very slowly.
	
	CAUSE
	=====
	
	This behavior can occur when server host name to Internet Protocol (IP) address
	resolution is slow. Inefficient remote procedure call (RPC) binding order on the
	client computer can also affect connection speed.
	
	RESOLUTION
	==========
	
	To resolve this problem, add an entry for the Exchange Server to the Hosts file
	on the remote computer. You may also want to modify the RPC binding order on the
	remote computer.
	
	To add the necessary entry to the Hosts file on the remote computer, follow these
	steps:
	
	1. Start a text editor, for example Notepad.
	
	2. Open the Hosts file from the Winnt\System32\Drivers\Etc folder.
	
	  NOTE: If you are using the Lmhosts file instead of the Hosts file, it is also
	  in the Winnt\System32\Drivers\Etc folder.
	
	3. To add an entry to the Hosts file, at the end of the file, type the IP
	  address and computer name of the destination server. For example:
	
	  1.1.1.1 SERVER1
	
	4. Save the Hosts file without an extension, and then quit the text editor.
	
	MORE INFORMATION
	================
	
	For information about how to modify the RPC binding order on the remote
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q163576 XGEN: Changing the RPC Binding Order
	
	The Hosts file contains mappings of IP address to host name. It is used to
	resolve names on Transmission Control Protocol/Internet Protocol (TCP/IP)
	networks.
	
	The Hosts file on the local computer is parsed before the name resolution request
	goes to a name server. When an entry in the Hosts file is incorrect, the host
	name is resolved to the incorrect IP address and the name resolution process
	stops. Make sure you type the correct mapping path in the host files.
	
	There are no #PRE options to preload entries in the Hosts file as there are in
	the Lmhosts file.
	
	For additional information about improving performance over PPTP connections,
	please see the following article in the Microsoft Knowledge Base:
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
