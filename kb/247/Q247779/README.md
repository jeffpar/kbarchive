---
layout: page
title: "Q247779: XCLN: Mailboxes Not Available Through OWA, Timeout Error Appears"
permalink: /kb/247/Q247779/
---

## Q247779: XCLN: Mailboxes Not Available Through OWA, Timeout Error Appears

	Article: Q247779
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users on your network attempt to access their mailboxes by using Microsoft
	Exchange Outlook Web Access (OWA), they may receive the following error messages
	when the Web server that is running OWA is installed on a server other than the
	Exchange Server 5.5 computer that is hosting the mailboxes:
	
	  ASP0113 Server Timeout. The maximum amount of time for a script to execute
	  was exceeded. You can change this timeout value by specifying a new value for
	  property server.script.timeout or by changing the value for script timeout in
	  the registry.
	
	  Microsoft Internet Explorer error: 10060 connection timed out.
	
	CAUSE
	=====
	
	This behavior can occur when name resolution between OWA and Exchange Server
	does not occur quickly enough. The Web server running OWA times out during its
	attempt to contact the Exchange Server computer.
	
	RESOLUTION
	==========
	
	To resolve this behavior, add an Exchange Server entry to the Hosts file:
	
	1. Start a text editor, for example, Notepad.
	
	2. Open the Hosts file from the Winnt\System32\Drivers\Etc folder.
	
	  NOTE: If you are using the Lmhosts file instead of the Hosts file, it is also
	  located in the Winnt\System32\Drivers\Etc folder.
	
	3. To add an entry in the Hosts file, at the bottom of the file, type the IP
	  address and computer name of the destination server. For example:
	
	  1.1.1.1 SERVER1
	
	4. Save the Hosts file without an extension, and then quit the text editor.
	
	MORE INFORMATION
	================
	
	The Hosts file contains mappings of Internet Protocol (IP) address to host name
	and is used to resolve names on TCP/IP networks.
	
	The Hosts file on the local computer is parsed before the name resolution request
	goes to a name server. If the entries in the Hosts file are incorrect, the host
	name is resolved to the incorrect IP address and the name resolution process
	stops. Make sure you type the mapping path in the Host file correctly.
	
	There are no #PRE options to preload entries as there are in the Lmhosts file.
	
	You can add the Exchange Server computer entry to the Hosts file and start
	directory replication again without restarting Microsoft Windows NT.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
