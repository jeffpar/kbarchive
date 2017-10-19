---
layout: page
title: "Q176574: Correlation Error Causes Unexpected Loss of TN3270(E) Sessions"
permalink: /kb/176/Q176574/
---

## Q176574: Correlation Error Causes Unexpected Loss of TN3270(E) Sessions

	Article: Q176574
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users are logged on to a CICS application via the TN3270(E) server. The CICS
	application frequently writes data to the user's terminal. At random times,
	users are suddenly disconnected and have to log on again.
	
	The SNA Server computer's application log shows Event 309:
	
	  WRITE failed with LUA_UNSUCCESSFUL/LUA_RSP_CORRELATION_ERROR
	
	A trace will show the user's session ended with a TERM-SELF and UNBIND.
	
	CAUSE
	=====
	
	An unusual sequence of messages results in correlation errors being received
	from the SNA Server service. The TN3270(E) service treats the correlation errors
	as fatal errors, resulting in the sessions being disconnected.
	
	STATUS
	======
	
	The TN3270(E) service has been updated so that the correlation error is not
	handled as a fatal error. This change allows the TN3270 session to be maintained
	when this error occurs.
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1, 2.11 Service Pack 2, 3.0, 3.0 Service Pack 1, and 3.0 Service
	Pack 2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
