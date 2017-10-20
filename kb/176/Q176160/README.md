---
layout: page
title: "Q176160: APPC/CPI-C Apps Fail After SNA Server Gets UNBIND Type X'0A'"
permalink: /kb/176/Q176160/
---

## Q176160: APPC/CPI-C Apps Fail After SNA Server Gets UNBIND Type X'0A'

{% raw %}

	Article: Q176160
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An APPC or CPI-C application may occasionally fail to establish a session over a
	particular Local APPC LU/Remote APPC LU/Mode partnership that had previously
	been used successfully by the application.
	
	Applications may exhibit different symptoms, depending on how the application is
	written. If the application has timeout, the application will terminate the
	session after the timeout has been reached. Applications that do not have a
	timeout may appear to hang (stop responding) while waiting for the Allocate call
	to complete.
	
	SNA Application APPC API and LU 6.2 Message traces will show something similar to
	the following when this occurs while using an APPC application:
	
	  APPC Application                 Windows APPC DLL
	  ----------------                 ----------------
	  TP_STARTED            ->
	                                   Open TP Request -> SNA Server
	                                   Open TP RSP OK  <- SNA Server
	  [MC_]ALLOCATE         ->
	                                Open LU62 Request -> SNA Server
	
	If the application is not designed to time out, this problem could cause an APPC
	application to hang while issuing [MC_]ALLOCATE, or a CPIC application to hang
	while issuing CMALLC.
	
	NOTE: These symptoms may also occur for reasons other than these described in
	this article, so additional troubleshooting may be required.
	
	CAUSE
	=====
	
	If independent LU 6.2 session limits over a particular LU/LU/Mode have not been
	completed or have been reset by the partner (that is, Mainframe), SNA Server
	will have to renegotiate CNOS. During the renegotiation process, SNA Server will
	send a BIND to the host over the SNASVCMG mode for the requested Local/Remote
	APPC LUs. If the partner rejects the SNASVCMG mode BIND with an UNBIND Type
	x'0A', the SNA Server could unlock the wrong Mode for CNOS negotiations. This
	causes subsequent CNOS attempts over the requested Local/Remote APPC LUs to fail
	with a Command Race Reject error. Because CNOS does not complete for the
	requested Local/Remote APPC LUs, applications requesting sessions over these
	Local/Remote APPC LUs fail to get an active session.
	
	
	WORKAROUND
	==========
	
	When this problem occurs, the SNA Server service will need to be stopped and
	restarted to allow applications to get active sessions over the affected
	Local/Remote LUs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1, 2.11 Service Pack 2, 3.0, 3.0 Service Pack 1, and 3.0 Service
	Pack 2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	MORE INFORMATION
	================
	
	The reported instance of this problem appeared to occur after SNA Server
	received a large number of BIND -RSP or UNBIND messages from the host over a
	period of a few hours. The following is an example of the events logged by SNA
	Server in the Windows NT Application Event Log when receiving the BIND -RSP or
	UNBIND messages:
	
	  
	
	  Event ID: 18
	  Description: APPC session activation failure: BIND negative response or
	  UNBIND request received.
	
	  Sense data = 08050000
	  Connection = <SNA Server Connection Name>
	  LU alias = <Local APPC LU alias>
	  PLU alias = <Partner APPC LU alias>
	  Mode name = <APPC Mode name>
	
	IBM Sense Data of 08050000 indicates Session Limit Exceeded. This usually occurs
	when the partner has reset the session limits without informing SNA Server. This
	has been seen when CICS Regions on the mainframe are stopped/started. SNA Server
	then has to renegotiate sessions limits before an APPC application can get
	active sessions.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
