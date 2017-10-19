---
layout: page
title: "Q131624: Connecting to a Remote AS/400 Connected Through an APPN Network"
permalink: /kb/131/Q131624/
---

## Q131624: Connecting to a Remote AS/400 Connected Through an APPN Network

	Article: Q131624
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure SNA Server to talk to a remote IBM
	AS/400 computer , connected as follows:
	
	 SNA Server <--->  AS/400  <- (appn) ->  AS/400
	 (SNASERV)        (AS400A)              (AS400B)
	
	For users to connect to AS400B through SNA Server, SNA Server should be
	configured with two Remote APPC LU's (AS400A and AS400B) off a single 802.2
	connection to AS400A. Users can then open sessions to AS400B by requesting the
	AS400B remote LU name.
	
	For additional information and configuration examples showing how SNA Server can
	be configured to communicate with an AS/400, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q112158 Configuring SNA Server to Talk to AS/400 Over 802.2
	
	  Q112159 Configuring SNA Server to Talk to AS/400 Over SDLC
	
	NOTE: SNA Server should only be configured with a single 802.2 connection to an
	AS/400. SNA Server dual connections to the same AS/400 will not work, since the
	AS/400 only supports a single APPC controller definition per control point, and
	SNA Server (acting as a LEN node) can only be configured with a single local
	control point name.
	
	MORE INFORMATION
	================
	
	In some network configurations, it may not be practical for SNA Server to have a
	direct SNA link to an AS/400. In cases where a remote AS/400 is accessible
	through a locally accessible AS/400 acting as an APPN network node, SNA Server
	can be configured to access the remote AS/400.
	
	Referring to the diagram above, here is how SNA Server could be configured to
	support user access to both AS/400's. Using an 802.2 connection as an example:
	
	  Server Properties
	    Local network name        = APPN
	    Local control point name  = SNASERV
	
	  Local APPC LU Properties: SNASERV
	    LU 6.2 type = Independent
	    LU alias            = SNASERV
	    network name        = APPN
	    LU name             = SNASERV
	
	  Connection Properties:  TOKEN1
	    Remote end = peer system
	    Remote network address    = < address of AS400A >
	    Remote network name       = APPN
	    Remote control point name = AS400A
	
	  Remote APPC LU Properties: AS400A   (used to access AS400A)
	    LU alias            = AS400A
	    network name        = APPN
	    LU name             = AS400A
	    Supports parallel sessions
	
	    Partners:
	    Partner LU = SNASERV, Mode = QPCSUPP, Connection: TOKEN1
	
	  Remote APPC LU Properties: AS400B   (used to access AS400B)
	    LU alias            = AS400B
	    network name        = APPN
	    LU name             = AS400B
	    Supports parallel sessions
	
	    Partners:
	    Partner LU = SNASERV, Mode = QPCSUPP, Connection: TOKEN1
	
	To open a session to AS400B, the SNA Server user should request Local LU alias of
	SNASERV, and a remote LU alias of AS400B.
	
	Additional query words: prodsna 2.00 2.10 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbinfo
	
	=============================================================================
	
