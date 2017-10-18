---
layout: page
title: "Q138015: TN3270 Server Rejects Client Model Types"
permalink: kb/138/Q138015/
---

## Q138015: TN3270 Server Rejects Client Model Types

	Article: Q138015
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If your TN3270 clients are configured with two LU pools, each with different
	3270 LU Model types, a TN3270 client is only able to connect with one Model
	type.
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Use TN3270 Server Admin to set up two pools or use individual LUs:
	
	  Pool1 use Model 2
	  Pool2 use Model 5
	
	2. Try to connect.
	
	  NOTE: Only the Model 5 clients are able to connect in this example.
	
	CAUSE
	=====
	
	When the TN3270 client accesses an LU for the first time, the TN3270 server
	starts an LU list of LUs that the client may access, however, when the client
	tries to connect to another LU, the TN3270 server fails to add that LU to the LU
	list, thus always limiting the client to the first LU.
	
	RESOLUTION
	==========
	
	Microsoft has updated the following file to correct this problem:
	
	  <tnserverroot>\TN3SERVR.EXE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The problem lies in the TN3270 Server implementation of TCP/IP masking. Each LU
	configured for use by the TN3270 Server can have TCP/IP masks associated with
	it, and these masks specify the TCP/IP addresses of clients that may connect
	through that LU. By default each LU has a mask that lets any client connect.
	When a client first tries to connect (and this is before the client has
	specified which Model type it wants to use) the server builds a list of LUs that
	that client may access, based on the LU's TCP/IP mask and the client's TCP/IP
	address.
	
	In the Steps To Reproduce Problem example above, there are two LUs configured,
	one that supports Model 2 requests and one that supports Model 5 requests. When
	the client tries to connect, the server builds the list of LUs and stops when it
	has that one LU in the list. When the client tries to connect again the LU it
	selects is always the one that supports Model 5 requests. When the client
	requests a Model 2 terminal, the server rejects the request, because the only LU
	in the list is a Model 5 LU.
	
	Additional query words: prodsna 2.11 tn3270
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
