---
layout: page
title: "Q172708: BID Response Not Honoring Pacing Indicator from FMI Application"
permalink: kb/172/Q172708/
---

## Q172708: BID Response Not Honoring Pacing Indicator from FMI Application

	Article: Q172708
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an SNA Client system does not receive a Host data stream after successful
	session initialization, a problem with pacing may have occurred between the Host
	and the SNA Server. Users will not receive data from the Host, even though the
	session is still active in SNA Manager.
	
	CAUSE
	=====
	
	When a host sends a pacing indicator (Byte 2 of the RH set to 81) in an FMI
	message, SNA Server changes it to a value of 80 (no pacing). The Host is then
	unable to send the data because it has not received a pacing response.
	
	A modification made to SNA Server version 3.0 had a side effect of disabling
	pacing if the first RU received on a session does not have the PI (pacing
	indicator) bit set.
	
	For additional information about the RH (request header), please refer to the IBM
	SNA Formats Guide (GA27-3136).
	
	RESOLUTION
	==========
	
	Snaservr.exe has been modified so that pacing is not disabled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
