---
layout: page
title: "Q149924: TN3270 Session Fail w/Sense 2004 if TN3270E Server Stressed"
permalink: /kb/149/Q149924/
---

## Q149924: TN3270 Session Fail w/Sense 2004 if TN3270E Server Stressed

	Article: Q149924
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbnetserv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the TN3270E server is under heavy client stress, a TN3270 session may stop
	receiving data from the host. The Microsoft Windows NT Application Event Log
	will log the following message:
	
	  Event ID: 21
	  Description: Negative Response Sent on Connection xxxx (SENSE = 2004)
	
	where xxxx is the name of the SNA Server connection being used to host
	communication.
	
	
	CAUSE
	=====
	
	The TN3270E Server uses the RUI interface to communicate with the mainframe
	using RUI_READ and RUI_WRITE verbs. The RUI interface is asynchronous with
	completion notified via NT events. The normal sequence of verbs is the
	following:
	
	- issue RUI_READ - read waiting for data from host.
	
	- issue RUI_WRITE - send data to host.
	
	- RUI_WRITE completes - data has been sent to the host.
	
	- RUI_READ completes - the host has sent data in response.
	
	When this problem occurs, this is the sequence of verbs as the TN3270E Server
	sees it:
	
	- issue RUI_READ - read waiting for data from host.
	
	- issue RUI_WRITE - send data to host.
	
	- RUI_READ completes - the host has sent data in response.
	
	- RUI_WRITE completes - data has been sent to the host.
	
	The TN3270E Server is receiving notification of the RUI_READ verb completing
	before it receives notification of the RUI_WRITE verb completing, although the
	RUI_WRITE did complete before the RUI_READ. Although this is not usual behavior,
	Windows NT does not guarantee the order in which events are processed. The
	TN3270E Server is not able to handle a RUI_READ completing while the RUI_WRITE
	is still outstanding, and it treats the case as an error.
	
	RESOLUTION
	==========
	
	The TN3270E Server has been updated so that it will queue up an RUI_READ
	completion if it occurs while an RUI_WRITE is still pending. It will then
	process the RUI_READ completion after processing the RUI_WRITE completion.
	
	The following files have been modified:
	
	  \TN3270\TN3NTMSG.DLL
	  \TN3270\TN3SERVR.EXE
	  \TN3270\TNADMIN.EXE
	
	
	This fix is for the TN3270E Server that is included with SNA Server 2.11 Service
	Pack 1. If this problem occurs with the TN3270 Server shipped with SNA Server
	2.11, apply Service Pack 1 before applying these fixes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 and
	2.11 SP1. This problem was corrected in the latest Microsoft SNA Server 2.11
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbnetserv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
