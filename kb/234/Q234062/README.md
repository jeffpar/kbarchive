---
layout: page
title: "Q234062: INF: Determine Conversation State in CICS After SYNCPOINT"
permalink: /kb/234/Q234062/
---

## Q234062: INF: Determine Conversation State in CICS After SYNCPOINT

	Article: Q234062
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article deals with sample application code for a host Customer Information
	Control System (CICS) TP monitor.
	
	The sample program, SyncLev2.txt, is installed with the COM Transaction
	Integrator for CICS and IMS feature of SNA Server. It is found in the following
	directory:
	
	  SNA\COMTI\SampleCode\SyncLev2
	
	MORE INFORMATION
	================
	
	The following code snippet from it is not correct.
	
	********************************************************
	     ** CHECK THE EIB FIELDS TO DETERMINE WHAT ACTION COMTI
	     ** HAS REQUESTED, THEN ISSUE EITHER A SYNCPOINT OR     
	     ** ROLLBACK.
	     ********************************************************
	      NORMAL-TX-SYNCPOINT.
	          IF EIBSYNC = X'FF'
	             EXEC CICS SYNCPOINT END-EXEC
	             EXEC CICS RECEIV
	                       RESP(CMD-RESP)
	                       STATE(CONV-STATE)
	                       END-EXEC
	
	After the CICS syncpoint command is issued (EXEC CICS SYNCPOINT), the LU6.2
	conversation may be in either a receive state (code: 88) or in a free state
	(code: 85). If it is in a receive state, you need to issue an EXEC CICS RECEIVE
	command in the program, as follows, otherwise, just quit the program.
	
	*FIRST, DETERMINE THE CONVERSATION STATE.
	EXEC CICS EXTRACT ATTRIBUTES
	  STATE (CONV-STATE)
	  END-EXEC
	
	*THEN, ACT ACCORDINGLY.
	IF CONV-STATE = 88
	  EXEC CICS RECEIVE
	    RESP(CMD-RESP)
	    STATE(CONV-STATE)
	    END-EXEC
	  END-IF
	
	Similar logic should also be executed if the EXEC CICS SYNCPOINT ROLLBACK command
	is issued.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	
