---
layout: page
title: "Q196571: NVRunCmd Does Not Return More Than 32 KB of Data Per Command"
permalink: /kb/196/Q196571/
---

## Q196571: NVRunCmd Does Not Return More Than 32 KB of Data Per Command

	Article: Q196571
	Product(s): Microsoft SNA Server
	Version(s): 2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Issuing a NVRunCMD command from the host whose response contains more than 32 KB
	of data results in an "Invalid Data Received" error message being returned to
	the host session.
	
	The following is an example of a host error message that is seen when you issue a
	TYPE command for a file larger than 32 KB using NVRunCMD:
	
	  * IP659 RUN SP=R2841, APPL=NVRUNCMD CMD TYPE D:\TEMP\JUNK\A.TXT - DSIGDS
	  DSI296I RUN FAILED. INVALID DATA RECEIVED FROM R2841
	
	When this occurs, none of the returned data is displayed on the host.
	
	CAUSE
	=====
	
	The NVRunCMD service is only designed to return up to 32 KB of data for each
	command. If the command results in more than 32 KB of data being returned, none
	of the data is returned. The "Invalid Data Received" error message is returned
	instead.
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1, 2.11 Service Pack 2, 3.0, 3.0 Service Pack 1, 3.0 Service Pack
	2, 3.0 Service Pack 3, 4.0, and 4.0 Service Pack 1. This problem was first
	corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	After applying the update, NVRunCMD will return up to 31,700 bytes of data for
	each NVRunCMD command issued. In addition, NVRunCMD will truncate responses that
	contain more than 31,700 bytes and will append a truncation message to the end
	of the data to indicate that the data has been truncated.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
