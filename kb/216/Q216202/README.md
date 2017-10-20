---
layout: page
title: "Q216202: PRB: Application Hangs; IBM CICS/VSE Terminal Unavailable"
permalink: /kb/216/Q216202/
---

## Q216202: PRB: Application Hangs; IBM CICS/VSE Terminal Unavailable

{% raw %}

	Article: Q216202
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
	
	The client application may block after a period of time of normal operation. If
	it is a Visual Basic application and you click its graphical user interface, the
	following message appears in a message box:
	
	  This action cannot be completed because the other application is busy. Choose
	  'Switch To' to activate the busy application and correct the problem.
	
	The COMTI component is participating in an atomic transaction as defined by
	Microsoft Transaction Server. This problem does not occur otherwise.
	
	The following CICS informational message appears in the CICS log:
	
	  DFH2411I ???? CSNE 19:39:45 <LU name> ATTEMPTED INVALID LOGON", where
	  'LU name' is a fully-qualified Logical Unit name.
	
	Additionally, the following entry may appear in the Application Event Log:
	
	  
	
	  Event ID: 18
	  Source: SNA Server
	  Type: Information
	  Category: None
	
	  APPC session activation failure: BIND negative response or UNBIND
	  request received
	
	  Sense data   = 08063426   (NOTE: 0032xxxx indicates UNBIND
	  received)
	  Connection   = ALHOST
	  LU alias     = T22158DD
	  PLU alias    = DBDCCIDS
	  Mode name    = MODE1   
	
	CAUSE
	=====
	
	
	If the COMTI method invocations are at a high-enough rate for a given
	configuration, the same CICS terminal session is reused for a series of calls.
	However, if the rate it too low, the CICS terminal session is ended, and a new
	terminal session is STARTED on another terminal for the next COMTI method.
	
	The CICS terminal sessions are named in succession, as in this example: -99A,
	-99B, -99C, ... -99Z. When the use of one of the terminals is ended, CICS/VSE
	does not free its name for reuse at a later time. When the list of available
	names is completely used up, the COMTI application blocks.
	
	When this happens, the last entries in the CICS log show as follow:
	
	  
	
	DFH3461I -99X CSNE 19:37:39 NODE COMTI01 SESSION STARTED                       
	DFH3462I -99X CSNE 19:37:57 NODE COMTI01 SESSION TERMINATED                    
	DFH3461I -99Y CSNE 19:38:30 NODE COMTI01 SESSION STARTED                       
	DFH3462I -99Y CSNE 19:38:48 NODE COMTI01 SESSION TERMINATED                    
	DFH3461I -99Z CSNE 19:39:11 NODE COMTI01 SESSION STARTED                       
	DFH3462I -99Z CSNE 19:39:34 NODE COMTI01 SESSION TERMINATED                    
	DFH2411I ???? CSNE 19:39:45 <LU name> ATTEMPTED INVALID LOGON
	
	WORKAROUND
	==========
	
	Inactivate and reactivate the LU to allow normal processing to resume.
	
	MORE INFORMATION
	================
	
	Three IBM PTFs have been identified for appliction to the host system to fix
	this IBM CICS/VSE problem: UQ23940, UQ14297 and UQ23939.
	
	IBM APAR, PQ19793, indicates that the SNA Server MODE property 'Automatic
	Activation Limit,' could be set to 10 from 0 for a "LOCAL FIX." This is
	misleading, but the customer may wish to maximize this value. For example, if
	the SNA Server MODE property, 'Parallel Session Limit,' is set to 128, set
	'Automatic Activation Limit' to 128. Microsoft has NOT found this to be a
	successful solution to the problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
