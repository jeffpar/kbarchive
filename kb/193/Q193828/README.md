---
layout: page
title: "Q193828: IMS Programs May Lock after COMTI Posts a Backout Operation"
permalink: /kb/193/Q193828/
---

## Q193828: IMS Programs May Lock after COMTI Posts a Backout Operation

{% raw %}

	Article: Q193828
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In testing COMTI components that require transactions interoperating with IMS
	version 6.0, Microsoft has observed unexpected behavior when the transaction
	does not come to a successful conclusion on all systems. When MSDTC determines
	that the transaction cannot be committed, it causes COMTI to send a back-out
	indication to IMS. In order to back out the application, IMS issues an ABEND,
	code 0711, in the MPR (Message Processing Region). This returns the
	application's data to its original state, but causes undesirable consequences.
	The IMS transaction and program are left in a stopped state and must be manually
	started by the master terminal operator before COMTI can resume operations with
	them. The SNA conversation is abnormally terminated, which causes a number of
	events to be posted to the Windows NT application event log, indicating problems
	with the COMTI SNA transport.
	
	MORE INFORMATION
	================
	
	(203) The COM Transaction Integrator state machine's call to the transport's
	Abort method failed.
	
	  HRESULT: 0x80020009
	
	Explanation: The COM Transaction Integrator state machine's call to the Abort
	method on the transport object failed unexpectedly. This is probably caused by a
	problem with the LU6.2 transport. Normal transaction aborts do not generate this
	event.
	
	Action: Look for related event log entries from the COM Transaction Integrator
	transport object or SNA Server to may provide additional information.
	
	Also, MSDTC does not know the disposition of the transaction after the
	conversation ABENDs, so it initiates a recovery sequence to make sure it is
	backed out, leaving this event in the log:
	
	  (122) The Resynchronization Service performed successful transaction
	  recovery.
	
	Explanation: Local LU xxxxxxxx and host LU yyyyyyyy agreed on the final state of
	the transaction. Local transaction state was RESET. Host transaction state was
	1, where:
	
	  1 = RESET
	  3 = IN_DOUBT
	  4 = COMMITTED
	  5 = HEURISTIC_RESET
	  6 = HEURISTIC_COMMITTED
	  7 = HEURISTIC_MIXED
	
	Logical Unit of Work ID = SGPHL1.L1163000 07CE091E0E150001
	
	Action: No Action is necessary.
	
	If the host reported a heuristic decision for the transaction due to host
	configuration or operator action, the outcome selected for the transaction was
	correct.
	
	If the client program subsequently attempts a new method before the IMS
	transaction has been started again, it will receive the following exception,
	which is also recorded in the event log:
	
	(102) COM Transaction Integrator reported the following exception to the client:
	
	  Component: IMS2PH.TRANSACTIONS.1
	  Method: TRANUPDT
	
	  Exception description:
	  (1429) Transaction TRANUPDT at host LU IMSMLU62 could not load the server
	  program.
	
	See the Windows NT Event Log on the COMTI computer for SNA error log data,
	including possible host ABEND code. Review the host region configuration.
	
	Explanation: An Automation exception representing an error condition was returned
	to a COM Transaction Integrator client. The description shown above contains
	more information about the exception that was reported.
	
	Action: The exception may be caused by communication problems or errors in your
	Host application. See the exception description for corrective actions.
	
	IBM has stated that this behavior by IMS is as intended. However, Microsoft does
	not believe that this is a correct implementation of the protocols specified in
	IBM's Systems Network Architecture: Sync Point Services Reference (SC31-8134-00,
	p2-67). This reference states that the system that receives the Backout (FMH-7)
	should reply positively and leave the conversation intact. We are continuing to
	work with IBM to seek a resolution on this issue.
	
	NOTE: The data integrity is not jeopardized by the inconvenient behavior
	described above. The back-out operations are successfully issued in each
	environment.
	
	Additional query words: 2PC, IMS, COMTI, BACKOUT, TWO PHASE COMMIT, Sync Level 2
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
