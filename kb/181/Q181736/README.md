---
layout: page
title: "Q181736: LUA or EIS Application Must Enforce 3270 Bracket Protocol"
permalink: /kb/181/Q181736/
---

## Q181736: LUA or EIS Application Must Enforce 3270 Bracket Protocol

	Article: Q181736
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SNA Server LUA API to communicate with a host application, the
	SNA Server expects the LUA application to detect and handle bracket errors on
	the session. This simplifies the detection and handling of bracketing errors and
	prevents potential problems if SNA Server simultaneously receives a Begin
	Bracket (BB) request from both the LUA application and the host.
	
	If the LUA application has written a 3270 message to initiate a bracket (causing
	the session to be in a bracket state), and later receives a new bracket request
	from the host, the LUA application should send a negative response to the host
	bracket request and send sense code 08130001: Bracket Bid Reject: The component
	was in the in-bracket state when a bracket request was received.
	
	CAUSE
	=====
	
	The LUA application must enforce bracket protocols on the session.
	
	RESOLUTION
	==========
	
	The LUA application must be modified to reject bracket requests if already in an
	in-bracket state.
	
	MORE INFORMATION
	================
	
	The following message flow describes a possible scenario where this problem may
	occur. In this case, the host application is not behaving properly with regard
	to bracketing protocols, and SNA Server expects the application to respond with
	a sense code (which it fails to do):
	
	 LUA/RUI application   SNA Server service             Host
	 ===================   ==================             =========
	 RUI_WRITE (BC, BB, Data) ->
	                       DLC FMD (RQE BC, BB, Data) ->
	 RUI_WRITE (MC, Data) ->
	        DLC FMD (MC) ->
	 RUI_WRITE (MC, Data) ->
	        DLC DATA (MC) ->
	 RUI_WRITE (EC, CD, Data) ->
	        DLC DATA (EC, CD) ->
	                                                  <- DLC DATA (RQD BB, EB)
	  <- RUI_READ complete (BB, EB, Data)
	 RUI_WRITE (+RSP) ->
	  <- RUI_WRITE -RSP (UNSUCCESSFUL / BRACKET ERROR)
	
	Instead of issuing an RUI_WRITE (+RSP), the LUA/RUI application should have sent
	a negative response with sense data 08130001.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400
	Version           : WINDOWS:2.11,3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
