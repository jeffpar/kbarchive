---
layout: page
title: "Q199387: XADM: Replication Stops with Event ID 1188, 1083, and 1059"
permalink: kb/199/Q199387/
---

## Q199387: XADM: Replication Stops with Event ID 1188, 1083, and 1059

	Article: Q199387
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55kbfixlist
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During directory replication the following events may be logged in the
	application event log:
	
	  Event ID 1188
	  Source: MSExchange DS
	  Type: Information
	  Category: Replication
	  Description:
	  Internal event: The directory replication agent (DRA) received exception 1727
	  from a remote procedure call (RPC) connection to server SERVER1.
	
	  Event ID 1083
	  Source: MSExchangeDS
	  Type: Warning
	  Category: Replication
	  Description:
	  Replication warning: The directory replication agent (DRA) couldn't
	  synchronize naming context /o=Org/ou=Site with naming context on directory
	  SERVER1.
	
	  Event ID 1059
	  Source: MSExchangeDS
	  Type: Warning
	  Category: Replication
	  Description:
	  Internal error: The directory replication agent (DRA) call returned error 13.
	
	CAUSE
	=====
	
	The Exchange Server computer cannot resolve the name of the server to which it
	is replicating by means of TCP/IP.
	
	RESOLUTION
	==========
	
	Troubleshoot and resolve the name resolution issue.
	
	WORKAROUND
	==========
	
	As a temporary workaround, you can add an entry to the Hosts or Lmhosts file on
	the server; this entry points to the Exchange Server computer that you want the
	server to replicate to.
	
	To add an Exchange Server computer entry to a Hosts file:
	
	1. Start a text editor, for example, Notepad.
	
	2. Open the Hosts file from the Winnt\System32\Drivers\Etc directory.
	
	3. To add an entry in the Hosts file, at the bottom of the file, type the IP
	  address and computer name of the destination server, for example:
	
	  1.1.1.1 SERVER1
	
	4. Save the Hosts file without an extension, and then quit Notepad.
	
	The Hosts file is read every time a Winsock application resolves a host name.
	There are NO #PRE options to preload entries (which is how it is done in the
	Lmhosts file). You can add the Exchange Server computer entry to the Hosts file
	and start directory replication again without restarting Windows.
	
	NOTE: If you are using the Lmhosts file instead of the Hosts file, it is also
	located in the Winnt\System32\Drivers\Etc directory.
	
	Additional query words: ping RPC network transport control transmission
	
	======================================================================
	Keywords          : exc4 exc5 exc55 kbfixlist
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
