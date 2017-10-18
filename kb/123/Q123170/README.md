---
layout: page
title: "Q123170: WINS Event Log IDs 4135 - 4144 (Warning Messages)"
permalink: kb/123/Q123170/
---

## Q123170: WINS Event Log IDs 4135 - 4144 (Warning Messages)

	Article: Q123170
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	This article describes WINS event log IDs 4135 through 4144. These events
	represent warning messages.
	
	Event Log IDs 4135 - 4144
	-------------------------
	
	Event   Description
	-----   -----------
	
	4135    The local WINS server received a request from a remote WINS
	       server that is not of the same version. Because the WINS servers
	       are not compatible, the connection was terminated. The version
	       number of the remote WINS server is given below.
	
	4136    Winsock Send could not send all the bytes. Connection could have
	       been aborted by the remote client.
	
	4137    WINS adjusted a scavenging related time interval (%1) so that it
	       is compatible with the replication time intervals.
	
	4138    WINS adjusted a scavenging related time interval (%1).
	
	4139    The timeout period has expired on a call to another WINS server.
	       Assuming that the network and routers are working properly, either
	       the remote WINS server is overloaded, or its TCP listener thread
	       has terminated.
	
	4140    The Scavenger thread found active replicas that needed to be
	       verified with the owner WINS server since they were older than the
	       verify time interval. The table of owner to address mappings
	       indicated the WINS server to be not ACTIVE.
	
	4141    The name registration packet that was just received has too many
	       addresses. The maximum number of addresses for a multi-homed
	       client is 25. The number of addresses found in the packet is given
	       below.
	
	4142    A replica clashed with a static record in the database. The
	       replica was rejected.
	
	4143    WINS could not initialize because of some problem with the RPC
	       service. Make sure that the RPC service is running.
	
	4144    WINS did not send a notification message to the WINS server whose
	       address is given below, because it had a number of communications
	       failures with that server in the past few minutes.
	
	Additional query words: NBT NETBT
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	Issue type        : kbinfo
	
	=============================================================================
	
