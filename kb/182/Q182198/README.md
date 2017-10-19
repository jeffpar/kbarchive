---
layout: page
title: "Q182198: XADM: Server Invocation ID Identical to Other Server's UUID"
permalink: /kb/182/Q182198/
---

## Q182198: XADM: Server Invocation ID Identical to Other Server's UUID

	Article: Q182198
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Microsoft Exchange Server, you may see problems with replication
	between two servers in a site. In addition, messages between these two servers
	may be looping.
	
	CAUSE
	=====
	
	This can be caused by a problem with the Domain Name Service (DNS) or another
	name resolution technique. To determine whether this is the problem, complete
	the following steps:
	
	WARNING: Using the raw mode of the Exchange Administrator program (admin /r)
	incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  admin /r
	
	  from the \Exchsrvr\Bin directory.
	
	2. View the raw properties for the directory service of one of the servers in
	  question.
	
	  a. Select the <server name>, under the Servers container.
	
	  b. Select Directory Service, and open a raw property.
	
	  c. Make a note of the Invocation ID attribute of the server.
	
	3. Select <sitename>.
	
	4. Select File, Raw Properties for the Site container.
	
	5. View the Reps-From attribute of the Site container.
	
	6. In the Attributes Value scroll box, move the horizontal scroll bar to the far
	  right until the Microsoft Exchange Server names can be seen. Scroll through
	  the list until the server name of the second server is found.
	
	7. Double-click this entry and view Replica link.
	
	8. Make a note of the UUID.
	
	If the UUID of the second server is the same as the Invocation ID of the first
	server, then the problem is most likely that the DNS (or any other naming
	service) has IP addresses switched for these two servers.
	
	WORKAROUND
	==========
	
	To work around this problem, correct the DNS entry. The UUID of each server will
	be dynamically updated to the correct value. At this point, replication between
	these two servers should occur, and messages should flow normally.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
