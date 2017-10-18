---
layout: page
title: "Q182578: MC_CONFIRMED Stops Following what_rcvd=AP_CONFIRM_DEALLOCATE"
permalink: kb/182/Q182578/
---

## Q182578: MC_CONFIRMED Stops Following what_rcvd=AP_CONFIRM_DEALLOCATE

	Article: Q182578
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an APPC application is using confirmation processing on an LU6.2 conversation
	and receives an MC_RECEIVE_AND_WAIT response with a what_rcvd value of
	AP_CONFIRM_DEALLOCATE (0x0400), the application's call to MC_CONFIRMED may stop
	responding.
	
	
	CAUSE
	=====
	
	The SNA Server was not resetting an error indicator on an internal LU6.2 control
	block between reuses of the control block. So, if an error occurs on a prior
	conversation over a session (for example, following an APPC application issuing
	an [MC_]SEND_ERROR), the current conversation may fail unexpectedly when the
	current session is brought down incorrectly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
