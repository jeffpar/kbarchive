---
layout: page
title: "Q176849: SNA Server Logs Events 684 and 685 When Using SDLC Connection"
permalink: kb/176/Q176849/
---

## Q176849: SNA Server Logs Events 684 and 685 When Using SDLC Connection

	Article: Q176849
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SNA Server computer using an SDLC Link Service for host connections may log
	the following message in the Windows NT application event log at random
	intervals:
	
	  Event ID: 684
	  Description: A buffer pool audit has been triggered by a pool extension.
	
	The description also lists the number of allocated trusted headers. Each
	successive Event 684 shows a larger number of allocated trusted headers.
	
	Eventually the allocated trusted headers will reach the maximum value, and the
	connection to the host will be lost. At this point, the following message will
	be logged in the application event log:
	
	  Event ID: 685
	  Description: An attempt was made to extend a buffer pool, but the
	  related pool had reached its maximum size. The affected component is
	  terminating, and an audit of the buffer pools just before termination is
	  attached.
	
	  <Listing of the buffer pools omitted>
	
	A trace of the SDLC Link Service shows numerous DLCST UPSN messages (update
	station statistics) being sent to the SNA Server service. For more information
	about DLCST UPSN messages, refer to the following Microsoft Knowledge Base
	article:
	
	  Q139594 Meaning of "DLCST UPSN" in an SNA Server Data Link Control Trace
	
	CAUSE
	=====
	
	Messages from the Link Service are being placed into the buffer pool much faster
	than the SNA Server service can process them. This is usually caused by a
	problem elsewhere in the system, for example, in the SDLC adapter or driver.
	However, SNA Server should deal with this situation without dropping the host
	connection.
	
	The UPSNSTAT messages let the SNA Server service track statistics for sending in
	RECFMS messages to the host. RECFMS has been retired from SNA for type 2 nodes,
	and UPSNSTAT is not in the published Microsoft SNA Device Interface
	Specification, so UPSNSTAT message handling has been removed from the
	Ibmsdlc.dll Link Service. This eliminates the effects of the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 2 and earlier.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
