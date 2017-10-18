---
layout: page
title: "Q185685: TN5250 Event ID 9 Causes TN5250 Server to Stop Responding"
permalink: kb/185/Q185685/
---

## Q185685: TN5250 Event ID 9 Causes TN5250 Server to Stop Responding

	Article: Q185685
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
	
	Users may be unable to get any sessions through the TN5250 server. At the time
	this problem occurs, the TN5250 server may log one or more of the following
	messages in the Windows NT application log:
	
	  Event ID: 9
	  Source: SNA TN 5250 Server
	  Type : Error
	  Category: None
	
	  Description: The SNA TN5250 Service detected a scheduling timeout while
	  attempting to accept an incoming client.
	
	
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
	
	This problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 Service Pack 3
	and 4.0. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP2
	Version           : :3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
