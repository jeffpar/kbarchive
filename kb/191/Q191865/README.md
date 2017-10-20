---
layout: page
title: "Q191865: Loop in COMTI After CICS ABEND During Send Processing"
permalink: /kb/191/Q191865/
---

## Q191865: Loop in COMTI After CICS ABEND During Send Processing

{% raw %}

	Article: Q191865
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,1.0 SP1,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 1.0 SP1, used with:
	   - Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Service Pack 1 is not installed, the following symptoms appear:
	
	1. The COM Transaction Integrator component in the Microsoft Transaction Server
	  (MTS) writes messages to the application event log until it is full. The
	  specific message is presented in MORE INFORMATION below.
	
	2. An SNA APPC API trace shows a RECEIVE_WAIT loop, with the response being a
	  PARAMETER_CHECK. Example trace entries are presented in MORE INFORMATION
	  below.
	
	With Service Pack 1 installed, the symptoms are slightly different:
	
	1. An SNA Server APPC API trace shows a similar repetitive pattern, but the
	  entries are named differently, that is, MC_RECEIVE_AND_POST instead of
	  MC_RECEIVE_AND_WAIT. Trace examples are presented in MORE INFORMATION below.
	
	2. Only one entry is written to the application event log.
	
	CAUSE
	=====
	
	The problem is caused when the CICS program terminates abnormally (ABENDs) in
	the midst of, or following, repetitive SENDs to return variable-length reply
	data to COMTI. COMTI fails to properly handle the message coming back from the
	mainframe that indicates the application program terminated abnormally. Instead,
	COMTI continues to incorrectly expect more of the variable-length data being
	returned, hence the MC_RECEIVE_AND_WAIT loop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS versions 1.0 and 1.0 SP1, included with SNA Server
	versions 4.0 and 4.0 SP1, respectively.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	MORE INFORMATION
	================
	
	The application event log entry is as follows:
	
	  Event ID: 401
	  Source: COMTI
	  Type: Warning
	  Category: General
	
	  (401) COM Transaction Integrator Received SNA-defined Error Log Data text:
	
	  DFHAC2206 14:19:08 <Remote APPC LU> Transaction <tttt> failed with
	  abend <aaaa>. Updates to local recoverable resources backed out.
	
	Explanation:
	
	The host LU terminated the conversation with COM Transaction Integrator
	abnormally and sent information about the error. The message text of the SNA
	Error Log GDS Variable is displayed above.
	
	Trace entries when SP1 is NOT installed:
	
	     APPC  MC_RECEIVE_AND_WAIT request
	     APPC
	     APPC  Type:Sync                                  VerbID:0001C000
	     APPC
	     APPC  ---- Verb Parameter Block at address 00EFEF8C ----
	     APPC  0B000100 00000000 00000000 00000000     <................>
	     APPC  00A17700 C0A37700 00000100 00000900     <..w..tw.........>
	     APPC  00000000 90C90A00 00000000 00000000     <.....I..........>
	     APPC  ------------------------------------------------------------------
	     --------------
	     APPC  MC_RECEIVE_AND_WAIT response, result = PARAMETER_CHECK
	     APPC
	     APPC  Type:Sync                                  VerbID:0001C000
	     APPC
	     APPC  ---- Verb Parameter Block at address 00EFEF8C ----
	     APPC  0B000100 00010000 00000002 00000000     <................>
	     APPC  00A17700 C0A37700 00000100 00000900     <..w..tw.........>
	     APPC  00000000 90C90A00 00000000 00000000     <.....I..........>
	
	Trace entries when SP1 IS installed:
	
	     APPC  MC_RECEIVE_AND_POST request
	     APPC
	     APPC  Type:Sync                                  VerbID:0001C000
	     APPC
	     APPC  ---- Verb Parameter Block at address 00769B00 ----
	     APPC  0D000100 00000000 00000000 00000000     <................>
	     APPC  D0AE7700 C0A37700 00000100 00000900     <..w..tw.........>
	     APPC  00000000 60B60A00 7C020000 00000000     <....`...|.......>
	     APPC  ------------------------------------------------------------------
	     --------------
	     APPC  MC_RECEIVE_AND_POST response, result = PARAMETER_CHECK
	     APPC
	     APPC  Type:Sync                                  VerbID:0001C000
	     APPC
	     APPC  ---- Verb Parameter Block at address 00769B00 ----
	     APPC  0D000100 00010000 00000002 00000000     <................>
	     APPC  D0AE7700 C0A37700 00000100 00000900     <..w..tw.........>
	     APPC  00000000 60B60A00 7C020000 00000000     <....`...|.......>
	     APPC  ------------------------------------------------------------------
	     --------------
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,1.0 SP1,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
