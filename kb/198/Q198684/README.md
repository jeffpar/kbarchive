---
layout: page
title: "Q198684: Event 94 Continuously Logged on COMTI Client"
permalink: kb/198/Q198684/
---

## Q198684: Event 94 Continuously Logged on COMTI Client

	Article: Q198684
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Microsoft Transaction Server, COMTI, and the Windows SNA
	client may repeatedly log the error below in the Windows NT Application Event
	log when multiple instances of COMTI are using one local APPC LU on SNA Server.
	The only way to stop the event from being logged is to stop SnaBase.
	
	  
	
	  Event ID:  94
	  APPC remote conversation start failed:
	
	  Primary_rc   = 0002
	  Secondary_rc = 00000509
	  TP name      =
	
	  EXPLANATION
	  An invokable APPC TP configured on SNA Server has issued a RECEIVE_ALLOCATE
	  verb that failed.
	
	  ACTION
	  Refer to the "Microsoft SNA Server APPC Programmer's Guide" for information
	  about the displayed primary_rc and secondary_rc values.
	
	CAUSE
	=====
	
	The Resync TP service runs on the COMTI computer, and it is used for two-phase
	commit. The error occurs when the Resync TP service is enabled, and multiple
	COMTI computers are trying to use the same local APPC LU on the SNA Server
	computer.
	
	WORKAROUND
	==========
	
	To work around this problem, if the COMTI transaction program does not use
	two-phase commit, and no instances of COMTI require a transaction, stop the
	Resync TP service on the computer running COMTI, and set the Startup value to
	Manual. In addition, if the COMTI components do not require transactions, the
	SyncPoint Support option should not be checked in the properties of the local
	APPC LU being used on SNA Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, associate each instance of COMTI to its own local APPC
	LU on the SNA Server computer, as opposed to associating all the instances of
	COMTI to the same local APPC LU.
	
	MORE INFORMATION
	================
	
	Two-phase commit is a protocol that ensures that transactions which take place
	on multiple servers are completed on all servers or none at all. In other words,
	if a transaction fails on one server, then the changes that took place on the
	other servers are backed out. The resynchronization service is used in
	conjuction with two-phase commit and allows Distributed Transaction Coordinator
	(DTC) and CICS to initiate the rollback process after there has been an outage
	of some sort. For example, a communications failure, a CICS failure, an MVS
	failure, and so forth. Resync TP monitors the situation, and when the partner
	comes alive again, it ensures that a proper "Exchange Log Names(XLN)" is
	performed between the two ends (DTC and CICS). This is how they synchronize
	after an outage. At the time, it may be discovered that everything is OK.
	Otherwise, the transaction that was in-flight at the time of the outage will be
	rolled back. Each COMTI computer must have its own local APPC LU configured on
	the SNA Server for two-phase commit to function properly, because each local
	APPC LU is associated to one CICS region on the host.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1
	Issue type        : kbprb
	
	=============================================================================
	
