---
layout: page
title: "Q214406: CICS ABEND ATCV When Using Two Phase Commit and CICS Remote Envi"
permalink: /kb/214/Q214406/
---

## Q214406: CICS ABEND ATCV When Using Two Phase Commit and CICS Remote Envi

{% raw %}

	Article: Q214406
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,1.0 SP1
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 1.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A CICS ABEND error message is recorded in the CICS log on the mainframe computer
	when the COM Transaction Integrator (COMTI) method invoked is participating in a
	Microsoft Transaction Server transaction using two phase commit and SNA Server
	Sync Point Support (for IBM Sync Level 2). For example:
	
	  "DFHAC2236 WNWCI51C Transaction TSQU abend ATCV in program LU62TSQU. Updates
	  to local recoverable resources will be backed out."
	
	In this example, DFHAC2236 is the IBM message number or ID and WNWCI51C is the
	name of the CICS region.
	This error can occur when you use a "CICS" remote environment (SNA Server version
	4.0 and SNA Server version 4.0 Service Pack 1) or a "CICS Using LU6.2" remote
	environment (SNA Server version 4.0 SP2).
	The COMTI component library installed in the Microsoft Transaction Server package
	would be marked as "Requires a transaction" or "Requires a new transaction".
	
	CAUSE
	=====
	
	The CICS program may have been modeled after Synclevel2.txt, the two-phase
	commit sample program provided with COMTI in the samples directory. This code
	contains the following:
	
	  ********************************************************
	  ** CHECK THE EIB FIELDS TO DETERMINE WHAT ACTION COMTI
	  ** HAS REQUESTED, THEN ISSUE EITHER A SYNCPOINT OR     
	  ** ROLLBACK.
	  ********************************************************
	   NORMAL-TX-SYNCPOINT.
	     IF EIBSYNC = X'FF'
	       EXEC CICS SYNCPOINT END-EXEC
	       EXEC CICS RECEIVE
	         RESP(CMD-RESP)
	         STATE(CONV-STATE)
	         END-EXEC
	     ELSE                                                         
	       IF EIBSYNRB = X'FF'                                       
	         EXEC CICS SYNCPOINT ROLLBACK END-EXEC                  
	       ELSE                                                      
	         EXEC CICS ABEND ABCODE('UNKN') END-EXEC                
	       END-IF                                                    
	     END-IF.
	
	The EXEC CICS RECEIVE is inappropriate if the conversation is in a "free" state,
	but is appropriate if the conversation is in a "receive" state.
	
	WORKAROUND
	==========
	
	NOTE: This workaround may not address all the possible conversational states
	that may occur, however, it does handle those encountered during testing at
	Microsoft. Customers may find this solution is not comprehensive.
	After the syncpoint command is issued (EXEC CICS SYNCPOINT), the conversation may
	either be in a receive state (code: 88) or in a free state (code: 85). If it is
	in a receive state , you should issue an EXEC CICS RECEIVE statement, as
	follows, otherwise just terminate the program as in the product sample.
	The following code would accomplish the task:
	
	  *FIRST, DETERMINE THE CONVERSATION STATE.
	   EXEC CICS EXTRACT ATTRIBUTES
	     STATE (CONV-STATE)
	     END-EXEC.
	
	  *THEN, CONDITIONALLY, ISSUE THE RECEIVE.
	   IF CONV-STATE = 88
	     EXEC CICS RECEIVE
	       RESP(CMD-RESP)
	       STATE(CONV-STATE)
	       END-EXEC
	     END-IF.
	
	Incidentally, similar logic would be appropriate after the EXEC CICS SYNCPOINT
	ROLLBACK END-EXEC statement presented above as excerpted from the COMTI sample.
	
	MORE INFORMATION
	================
	
	For more information, please see the IBM manual, "CICS Trasnaction Server for
	OS/390 CICS Messages and Codes Relase 2." The document ID number is
	GC33-1694-01.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100 kbCOMTI100SP1
	Version           : WINDOWS:1.0,1.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
