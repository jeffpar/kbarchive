---
layout: page
title: "Q218170: APPC Application Receives AP_ALLOCATION_FAILURE_RETRY In Error."
permalink: /kb/218/Q218170/
---

## Q218170: APPC Application Receives AP_ALLOCATION_FAILURE_RETRY In Error.

	Article: Q218170
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an APPC or CPIC application attempts to allocate a conversation to the host,
	and LU6.2 session level security keys are mismatched between SNA Server and the
	host, the following problem may occur:
	
	- the Windows NT Application Event log may be filled with the following
	  errors:
	
	 Event ID: 22
	 Source: SNA Server
	 Description:
	 APPC session activation failure: BIND negotiated parameters unacceptable
	    Sense data = 080F6051
	
	 Event ID: 26
	 Source: SNA Server
	 Description:
	 APPC session activation failure: session limit error
	
	  NOTE: The sense code 080F6051 indicates a security violation, as documented
	  in the IBM SNA Formats Guide (IBM doc #GA27-3136).
	
	- The host administrator may encounter numerous LU6.2 security errors on the
	  NetView console or error log.
	
	CAUSE
	=====
	
	If an APPC application issues an [MC_]ALLOCATE request, causing SNA Server to
	establish an LU6.2 session with the host, and if the host rejects the BIND
	request because of a session level security error (because of mismatch in
	session level security keys), SNA Server returns the wrong APPC error code to
	the APPC application:
	
	primary_rc = AP_ALLOCATION_ERROR (0x0003)
	secondary_rc = AP_ALLOCATION_FAILURE_RETRY  (0x00000005)
	
	instead of indicating a more permanent error condition:
	
	primary_rc = AP_ALLOCATION_FAILURE (0x0003)
	secondary_rc = AP_ALLOCATION_FAILURE_NO_RETRY  (0x00000004)
	
	When receiving AP_ALLOCATION_FAILURE_RETRY, the APPC program may choose to retry
	the allocate request. This would cause SNA Server to retry the BIND request,
	causing the host to reject the BIND request.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 4.0.
	This problem was first corrected in SNA Server version 3.0 Service Pack 4 and
	SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
