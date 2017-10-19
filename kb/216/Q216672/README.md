---
layout: page
title: "Q216672: BUG:Wrong Error/Incorrect Data Returned w/ TCP/IP &amp; CICS Link"
permalink: /kb/216/Q216672/
---

## Q216672: BUG:Wrong Error/Incorrect Data Returned w/ TCP/IP &amp; CICS Link

	Article: Q216672
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	COMTI can return incorrect data to a client program or write an inaccurate and
	misleading error message to the Application Event Log.
	
	Such errors may be observed when using a COMTI component library where the
	Interface Properties specify:
	
	  Remote Environment (RE) type: 'CICS and IMS Using TCP/IP',
	  Target Environment: 'CICS',
	  Server mode: 'MS Link'.
	
	The error is produced when an invalid value is specified for the 'Host Names'
	'Transaction ID' property of a method.
	
	While incorrect data may be returned under some conditions, a code conversion
	error or an error message similar to the following may be returned under other
	conditions.
	
	  Event ID: 102
	  Source: COMTI
	  Type: Error
	  Category: General
	
	  (102) COM Transaction Integrator reported the following exception to the
	  client:
	
	  Component: Cedar.Bank.1
	  Method: getaccts
	
	  Exception description:
	  (2159) The TCP transport received a socket error while attempting to receive
	  user data. Expected length: 128, received length: 128. IP Address:
	  157.56.24.23, port: 3000, transid: BO42.
	
	CAUSE
	=====
	
	COMTI sends a Transaction Request Message (TRM) to the CICS listener program.
	Because it contains an invalid transaction identifier for the concurrent
	listener program, for example the MS Link sample supplied with COMTI, an unusual
	reply to the TRM is returned to COMTI.
	
	This TRM reply message consists of all nulls. In one case, there were 132 bytes
	of nulls. COMTI has no expectations for the TRM reply message, just that it gets
	one. First, COMTI issues a receive for the 4-byte length of the TRM reply
	message. In this case, it is zero because the message was all nulls. Then, COMTI
	issues a receive for the TRM reply data with length zero. Therefore, in this
	case, 128 nulls still have to be received (132 bytes - 4 bytes [the length
	received] = 128 bytes).
	
	Subsequently, COMTI sends the application [input] data to the host CICS region
	and issues a receive for the application reply data. This receive is satisfied
	immediately with the 128 bytes of nulls of the TRM reply message still
	outstanding and awaiting to be received.
	
	If the amount of application [output] data expected by COMTI is less than the
	number of nulls awaiting a receive, then COMTI receives only the amount of null
	bytes it expects and passes them to the data conversion routines. If no
	conversion error results, the data may be passed to the client program and it is
	NOT application data. Instead, it is derived from the TRM reply message.
	
	Alternatively, there may not be enough nulls in the TRM reply message residual to
	satisfy the receive for application [output] data. In this case, COMTI would
	write an error message to the Event Log similar to the one presented in the
	"Symptoms" section.
	
	WORKAROUND
	==========
	
	Supplying the correct Transaction ID for the method is the preferred workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS, version 4.0 SP2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
