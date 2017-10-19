---
layout: page
title: "Q237867: INF: SyncPoint Support Synchronization Failure CICS Cold Start"
permalink: /kb/237/Q237867/
---

## Q237867: INF: SyncPoint Support Synchronization Failure CICS Cold Start

	Article: Q237867
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0 SP1,4.0 SP1
	Operating System(s): 
	Keyword(s): kbsna400sp1
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 SP1 
	- Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a customer's problem incurred in a production application
	after the computer running COM Transaction Integrator for CICS and IMS (COMTI)
	was upgraded to Windows NT 4.0 Server Service Pack 4 from Windows NT 4.0 Server
	Service Pack 3.
	
	The customer's COMTI application runs in a two phase commit environment, which
	uses IBM Sync Level 2 protocol to extend a two phase commit to the mainframe
	CICS environment. The CICS region on the mainframe, according to the customer's
	standard operating procedure, is stopped each morning and restarted with a COLD
	start initialization. After the COLD start initialization and before Windows NT
	4.0 SP4 was installed, the application could then be used successfully.
	
	However, after installing Windows NT 4.0 SP4, the following entry would appear in
	the Event Log after the CICS region was cold started and the COMTI application
	would return a user-defined error message to the client.
	
	  Event ID: 120
	  Source: COMTI Resync TP
	  Type: Error
	  Category: General
	
	  (120) The Resynchronization Service failed on a
	     Log Name Exchange (XLN) initiated by the LOCAL LU.
	 
	 EXPLANATION
	  Local LU llllllll and host LU hhhhhhhh failed to synchronize
	   logs. Local log state was WARM. Host log state was COLD.
	  DTC XLN Confirmation Code was 2
	
	The prior event log entry may be followed by:
	
	  Event ID: 116
	  Source: COMTI Resync TP
	  Type: Error
	  Category: General
	
	  (116) The Resynchronization Service failed to handle an
	  exchange log name request from a Remote Environment.
	 
	  EXPLANATION
	   The Resynchronization Service encountered HRESULT 8004ee0d
	   while trying to exchange log names (XLN) between
	   local LU llllllll and host LU hhhhhhhh.
	
	The customer discovered that rebooting the COMTI computer cleared up the
	problem.
	
	A permanent solution was discovered when the Microsoft Distributed Transaction
	Coordinator (DTC) log was reset. After that, the problem no longer occurred with
	successive CICS cold starts.
	
	MORE INFORMATION
	================
	
	In a two phase commit situation, such as this, there must have been a successful
	Exchange Log Names (XLN) between Microsoft Distributed Transaction Coordinator
	on the COMTI computer and the CICS region on the mainframe before a new COMTI
	transaction can be enlisted on DTC. The XLN needs to occur after an outage of
	either partner in the two phase commit operation. It serves to get all partners
	synchronized as to the state of any pending transactions. In this case, the CICS
	region was stopped and started in the morning and an XLN is therefore necessary.
	It failed due to some unexplained problem involving the DTC log.
	
	To reset the DTC log, launch DAC.exe and select the "Advanced" tab. In the "Log"
	section of the dialog box, click Reset Log.
	
	Besides the prior example, Microsoft recommends that a CICS region be initialized
	with a WARM start when involved with COMTI applications that uses a two phase
	commit and IBM Sync Level 2. This will cause CICS to retain a "memory" of
	pending transactions that can be resolved during a CICS WARM start
	initialization at the time of the XLN.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100SP1 kbSNAServ400SP1
	Version           : WINDOWS:1.0 SP1,4.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
