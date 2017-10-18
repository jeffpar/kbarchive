---
layout: page
title: "Q171942: SNA Windows 95 and Win 3.x Named Pipe Clients Fail to Connect"
permalink: kb/171/Q171942/
---

## Q171942: SNA Windows 95 and Win 3.x Named Pipe Clients Fail to Connect

	Article: Q171942
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server Windows 95 and Windows 3.x named pipe clients may be unable to
	connect to an SNA Server computer if the Windows NT domain controller is slow to
	authenticate user logon requests.
	
	Looking at a network monitor or sniffer trace, the trace may show the server
	responding repeatedly with Server Message Block (SMB) Error 231
	(ERROR_PIPE_BUSY) to the client's named pipe open request (that is, SMB Open to
	\PIPE\COMNODE, the SNA Server named pipe, or \PIPE\COMNAP, the SnaBase named
	pipe).
	
	CAUSE
	=====
	
	When SNA Server named pipe clients connect to the SNA Server (or SnaBase
	service), the client is authenticated against a Windows NT domain controller.
	While this authentication is occurring, the SNA Server has no listens pending on
	the server end of the named pipe, causing Windows NT to respond with
	ERROR_PIPE_BUSY if other clients attempt to connect to the SNA Server named pipe
	during this time period.
	
	The SNA Server Windows NT named pipe client accommodates this condition by
	retrying the named pipe open request up to 50 times with 250-millisecond delays
	between each request. The SNA Server Windows 95 client retries 50 times with no
	delay, and the Windows 3.x client only retries five times.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When the update to the SNA Server 3.0 Windows 95 and Windows 3.x clients is
	applied, the client retry behavior is similar to the SNA Server Windows NT
	client. The SNA client software should already be upgraded to 3.0 SP1 before
	applying this update. This has corrected this problem in SNA Server client
	stress testing.
	
	However, if the Windows NT domain controller is very slow to respond to client
	authentication requests, the network and Windows NT domain structure should be
	investigated, to find ways to improve the speed of the authentication. For
	example, if users are connecting to an SNA Server which is separated across a
	wide area network from the user's Windows NT domain controller, you should
	consider installing a Windows NT domain controller near the SNA Server to
	improve responsiveness of user authentication.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
