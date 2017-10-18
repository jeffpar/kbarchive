---
layout: page
title: "Q182268: SNA Server Event 60 Should Log Local APPC LU Name"
permalink: kb/182/Q182268/
---

## Q182268: SNA Server Event 60 Should Log Local APPC LU Name

	Article: Q182268
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft SNA Server logs an Event 60 error if it receives an FMH- 5 Attach
	request from a remote system and the invokable transaction program (TP) is not
	registered on an SNA Server client or fails to start within the timeout period.
	The event appears as follows:
	
	 Event ID:    60
	 Source:      SNA Server
	 Description: Failed to invoke APPC TP <name> (<hex name>), sense
	data =
	              <sense code>
	
	EXPLANATION
	An attempt to invoke the APPC TP shown has failed. The error will be reported to
	the invoking TP on the remote system with the following primary return code:
	
	  AP_ALLOCATION_ERROR. The sense data shown is the secondary return code, which
	  will be one of the following hexadecimal values:
	
	  [ other sense codes not shown ]
	
	  X'084C0000' AP_TRANS_PGM_NOT_AVAIL_NO_RETRY
	
	However, if multiple instances of this same TP name are registered on many SNA
	Server clients, it is difficult to troubleshoot this problem because this event
	does not indicate the Local APPC LU name that the FMH-5 attach was received.
	
	CAUSE
	=====
	
	The SNA Server Event 60 was not originally intended to log the Local APPC LU
	name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With this update applied, the SNA Server now indicates the Local APPC LU name
	within the Event 60 error log.
	
	The updated modules for the SNA Server computer (this is not necessary on the SNA
	Server NT client computer) are as follows:
	
	<snaroot>\system\snaservr.exe
	<snaroot>\system\snaevent.dll
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
