---
layout: page
title: "Q177564: TN3270 Server Access Violation in SRSGetSpecificResource"
permalink: /kb/177/Q177564/
---

## Q177564: TN3270 Server Access Violation in SRSGetSpecificResource

	Article: Q177564
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TN3270 service may unexpectedly stop responding, causing all attached TN3270
	client users to lose their sessions. When this occurs, an
	<ntroot>\drwtsn32.log file may be created, indicating a "FAULT" in the
	following routine:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0c74fc94  0011c0e2  0bf62c18 0bf64382 0bf643d4
	  TN3SERVR!SRSGetSpecificResource+0x28e
	
	The TN3270 service must be restarted to recover.
	
	CAUSE
	=====
	
	This TN3270 failure can occur if an LUA Pool (with an active session) is deleted
	from the configuration file. Further attempts to access the pool will lead to a
	TN3270 access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11
	(including SP1 and SP2) and 3.0 (including SP1 and SP2).
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
