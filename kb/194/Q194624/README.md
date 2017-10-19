---
layout: page
title: "Q194624: TN3270 Server Traps When TN3270 Session Load Is Under 30K"
permalink: /kb/194/Q194624/
---

## Q194624: TN3270 Server Traps When TN3270 Session Load Is Under 30K

	Article: Q194624
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP1
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The TN3270 Server traps in mngbase!CManage_GetNotify in rare cases when the
	TN3270 session load is less than 30 KB.
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 Service
	Pack 1 for Windows NT. This problem was corrected in the latest SNA Server
	version 4.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 4.0. This
	problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1
	Version           : :4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
