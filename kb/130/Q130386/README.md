---
layout: page
title: "Q130386: RECEIVE_ALLOCATE May Return AP_UNEXPECTED_DOS_ERROR (F011)"
permalink: kb/130/Q130386/
---

## Q130386: RECEIVE_ALLOCATE May Return AP_UNEXPECTED_DOS_ERROR (F011)

	Article: Q130386
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	If an APPC application does not properly issue TP_ENDED for each matching
	TP_STARTED and RECEIVE_ALLOCATE call, the SNA Server client software
	eventually runs out of TP control blocks, causing the following error to be
	returned on a subsequent RECEIVE_ALLOCATE and TP_STARTED calls:
	
	  
	
	  primary_rc = AP_UNEXPECTED_DOS_ERROR (0xF011)
	
	When writing an invokable APPC transaction program (TP), that issues
	RECEIVE_ALLOCATE to accept a new conversation, each successful
	RECEIVE_ALLOCATE call returns with a unique transaction program id (tp_id)
	as well as a conversation id (conv_id). The conversation is eventually
	terminated by the TP or the partner TP by issuing a DEALLOCATE call.
	However, the program must still issue TP_ENDED to free up the tp_id as
	well, or a TP control block will remain in use on the SNA Server client.
	This may eventually cause the SNA Server client to run out of these control
	blocks, causing the APPC interface to return AP_UNEXPECTED_DOS_ERROR in
	response to a RECEIVE_ALLOCATE call.
	
	NOTE: If the AP_UNEXPECTED_DOS_ERROR is occurring for some other reason,
	the SNA Server software may have encountered an error from an underlying
	operating system call. Internal SNA Server client traces and APPC API
	traces should be generated and passed to SNA Server support personnel to
	troubleshoot this type of problem.
	
	Additional query words: prodsna f011
	
	======================================================================
	Keywords          : kbnetwork kbprogramming kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	
	=============================================================================
	
