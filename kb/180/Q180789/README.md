---
layout: page
title: "Q180789: Cancelling APPC RECEIVE_AND_POST Causes SNA Event ID 95"
permalink: /kb/180/Q180789/
---

## Q180789: Cancelling APPC RECEIVE_AND_POST Causes SNA Event ID 95

{% raw %}

	Article: Q180789
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following event may occur when an APPC application cancels a
	[MC_]RECEIVE_AND_POST function by calling TP_ENDED:
	
	 Source: SNA APPC Application
	 Event ID: 95
	 Description:  APPC given bad event handle or callback address 00000006
	
	The following SNA Server APPC Application traces were captured when this problem
	occurred:
	
	  APPC  ---------------------------------------------------------------
	  APPC  MC_RECEIVE_AND_POST request
	  APPC
	  APPC  Type:Sync                                  VerbID:00084000
	  APPC
	  APPC  ---- Verb Parameter Block at address 0138F34C ----
	  APPC  0D000100 00000000 00000000 00000000     <................>
	  APPC  00A87700 80A97700 00000100 00000800     <.yw..zw.........>
	  APPC  00000000 58270900 94020000 00000000     <....X'..m.......>
	  APPC  ---------------------------------------------------------------
	  APPC  MC_RECEIVE_AND_POST response, result = OK
	  APPC
	  APPC  Type:Sync                                  VerbID:00084000
	  APPC
	  APPC  ---- Verb Parameter Block at address 0138F34C ----
	  APPC  0D000100 00000000 00000000 00000000     <................>
	  APPC  00A87700 80A97700 00040101 00000400     <.yw..zw.........>
	  APPC  00000000 6EAA7700 94020000 00000000     <....n.w.m.......>
	  APPC  ---------------------------------------------------------------
	  APPC  TP_ENDED request
	  APPC
	  APPC  Type:Sync                                  VerbID:00028000
	  APPC
	  APPC  ---- Verb Parameter Block at address 0138F090 ----
	  APPC  13000000 00000000 00000000 00000000     <................>
	  APPC  00A87700 01000000                       <.yw.....        >
	  APPC  ---------------------------------------------------------------
	  APPC  ***UNKNOWN VERB*** response, result = DEALLOC_ABEND
	  APPC
	  APPC  Type:Async   Method:Post   Hwnd:0138F398   VerbID:00084000
	  APPC
	  APPC  ---- Verb Parameter Block at address 0138F34C ----
	  APPC  20F43801 0005                           < 48...          >
	  APPC  ---------------------------------------------------------------
	
	CAUSE
	=====
	
	The APPC application was deallocating the verb control block (VCB) that it had
	passed to the [MC_]RECEIVE_AND_POST function prior to calling TP_ENDED. This
	caused an error when the APPC interface attempted to set the event handle
	indicating final completion of the [MC_]RECEIVE_AND_POST VCB.
	
	RESOLUTION
	==========
	
	The APPC application should maintain the state of the RECEIVE_AND_POST VCB until
	the function has fully completed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
