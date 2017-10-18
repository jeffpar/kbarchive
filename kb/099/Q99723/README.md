---
layout: page
title: "Q99723: Mac Srv: Large Messages Stuck in Outgoing Queue"
permalink: kb/099/Q99723/
---

## Q99723: Mac Srv: Large Messages Stuck in Outgoing Queue

	Article: Q99723
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0a,3.0b,3.1,3.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0a, 3.0b, 3.1, 3.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.0a or later of Microsoft Mail for AppleTalk Networks, large
	messages may appear stuck in an outgoing server queue.
	
	RESOLUTION
	==========
	
	If you are using Mail version 3.0a, upgrade to version 3.1 to correct a problem
	that may cause messages larger than 64K to become stuck at the front of an
	outgoing server queue. The body of a Mail message can only be 32K; therefore, if
	a message is larger than 32K, an attachment is enclosed (the message body and
	enclosures are packaged together into one server-to-server message).
	
	MORE INFORMATION
	================
	
	The following are a few reasons why a large message may be queued up on a server
	longer than desired:
	
	- The destination server no longer exists. Verify this by looking in the
	  Chooser for the destination Mail server.
	
	- A problem with the network makes the destination server unreachable. Verify
	  this by looking in the Chooser for the destination Mail server while sitting
	  at the Mail server with the queued-up enclosure.
	
	- A problem with the network is not allowing a reliable network connection
	  between the two Mail servers. The Mail server with the enclosure may begin
	  sending the message to the destination server, but a problem with the network
	  causes AppleTalk packets to get lost. If this is the case and the message is
	  larger than 64K, it will be shuffled to the end of the queue and the Mail
	  server will try the next message in the queue.
	
	  NOTE: The Mail server with the enclosure will mark the destination server as
	  unreachable and not try again for X minutes, where X is specified in the
	  Server Settings "If undeliverable, retry sending mail every X minutes"
	  option.
	
	- The destination server does not have enough disk space to read in this large
	  message/enclosure. Increase disk space on the destination server.
	
	
	Additional query words: 3.00 3.00a 3.00b 3.10 3.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300a kbMailATN300b kbMailATN310 kbMailATN310a
	Version           : WINDOWS:3.0a,3.0b,3.1,3.1a
	
	=============================================================================
	
