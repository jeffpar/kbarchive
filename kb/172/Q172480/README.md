---
layout: page
title: "Q172480: GET_LU_STATUS_VERB Stops Responding on Call from 2nd Thread"
permalink: kb/172/Q172480/
---

## Q172480: GET_LU_STATUS_VERB Stops Responding on Call from 2nd Thread

	Article: Q172480
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When two threads are using the same TP_ID, the GET_LU_STATUS verb hangs on the
	second call.
	
	CAUSE
	=====
	
	When a GET_LU_STATUS call is made the second time on two threads using the same
	TP_ID, the second call should return an AP_TP_BUSY.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the GET_LU_STATUS returns an AP_TP_BUSY on the second call
	to the same TP_ID.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
