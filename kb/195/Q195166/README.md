---
layout: page
title: "Q195166: NVAlert Service Logs Event 3006(ReadEventLog Returns 122)"
permalink: kb/195/Q195166/
---

## Q195166: NVAlert Service Logs Event 3006(ReadEventLog Returns 122)

	Article: Q195166
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP3,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP3, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the NVAlert service encounters an event that is greater than 4 KB in size in
	the Window NT event log, the NVAlert Service stops responding, and logs the
	following event:
	
	  Event ID: 3006
	  Source:   SNA Netview Alerter
	  Type: error
	  Description : Error reading log event record.Handle specified is <handle>.
	  Return Code from ReadEventLog is 122.
	
	CAUSE
	=====
	
	This problem is the same as that detailed in the Knowledge Base article,
	Q160452, "NVAlert Service Logs Event 3006 and Stops Responding," and has
	reoccurred as a result of a regression in NVAlert.exe.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 Service Pack 3
	and SNA Server 4.0 Service Pack 1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Version           : :3.0 SP3,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
