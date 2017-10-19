---
layout: page
title: "Q185690: SNA Server Manager Not Reflecting Correct Status"
permalink: /kb/185/Q185690/
---

## Q185690: SNA Server Manager Not Reflecting Correct Status

	Article: Q185690
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When remotely viewing the status of an SNA Server computer, SNA Manager may
	display a blank status column for a particular connection or print server.
	
	CAUSE
	=====
	
	When sending updates to the MngClient, the MngAgent hits a boundary condition,
	and the DMOD (part of the client server interface) terminates the connection
	between the Manage Client and the Manage Agent. After that occurs, the status no
	longer appears. This problem can be reproduced on a connection that has 254 LUs,
	each of which has an 8-character name. However, there may be other cases that
	hit this boundary condition.
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, stop and restart the MngAgent service on the server
	that is not showing a status. The status will usually disappear again within a
	few days.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP2 and
	3.0 SP3 and SNA Server 4.0. This problem was first corrected in SNA Server 3.0
	Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP2
	Version           : :3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
