---
layout: page
title: "Q113576: Winsock App's Reject Connection Requests with Reset Frames"
permalink: /kb/113/Q113576/
---

## Q113576: Winsock App's Reject Connection Requests with Reset Frames

	Article: Q113576
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows NT TCP/IP Winsock server application (for example, Microsoft NT SQL
	Server) is bombarded with multiple simultaneous TCP\IP connection requests, it
	quickly begins to reject requests by replying with a TCP\IP Reset Frame.
	
	The symptom may be difficult to detect. If you trace this problem with a protocol
	analyzer you will see that the 7th or 8th TCP SYN connection request frames are
	replied to with TCP Reset bit set, which tells the sending station that the
	frame was received but the server did not have the resources to process the
	connection request.
	
	This might show up as a delayed or slower connection. The client should attempt
	the connection again after waiting for a timeout (so you don't see an error) but
	this can slow the connection in certain types of systems.
	
	CAUSE
	=====
	
	A Winsock application accepts connections on a port by calling a Listen()
	function, which has a Backlog parameter specifying the maximum length of the
	pending-connection queue. The Winsock specification defines the maximum Listen()
	backlog at 5 and when this is exceeded, TCP/IP issues a Reset.
	
	
	RESOLUTION
	==========
	
	In Windows NT 3.1 Service Pack 3 the backlog limit has been increased from 5 to
	60, Socket applications now can accept 60 simultaneous connection requests
	without issuing a reset.
	
	In Windows NT 3.5x the backlog limit has been increased to 100. In Windows NT
	Server version 4.0 the backlog limit has been increased to 200. In Windows NT
	Workstation version 4.0 the backlog limit has been kept at the Winsock
	specification of 5.
	
	
	NOTE: This fix applies only to the MAXIMUM allowed Listen() Backlog. Each Winsock
	application must request its own Listen() Backlog queue length.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	REFERENCES
	==========
	
	The Winsock specification (available on ftp://ftp.microsoft.com/bussys/winsock),
	has more information about Winsock and the listen() function. See Visual C++
	documentation as well.
	
	"Internetworking with TCP\IP" by Comer, has more information about TCP\IP
	connections.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
