---
layout: page
title: "Q165088: CPIC Application Stops Responding When Starting Conversation"
permalink: /kb/165/Q165088/
---

## Q165088: CPIC Application Stops Responding When Starting Conversation

{% raw %}

	Article: Q165088
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a CPIC application on Windows 95, the CPIC application stops
	responding intermittently when you try to acquire the conversation. Traces show
	that the CM_Init request is not getting a response.
	
	CAUSE
	=====
	
	This problem occurs if both of the following conditions are true:
	
	- The CPIC application calls WinCPICCleanup() while there are pending RPC
	  requests.
	
	  -and-
	
	- The RPC response arrives before SNAKRNL has closed all connections.
	
	The following is a call to WinAPPCCleanup. Under the covers, there are still
	outstanding rpc requests:
	
	  APPC   WinAPPCCleanup response, result = TRUE
	  CPIC   ---------------------------------------------- 09:34:42.49
	  CPIC   WinCPICCleanup response, result = TRUE
	  CPIC   ---------------------------------------------- 09:34:42.99
	  CPIC   WinCPICStartup request
	  CPIC
	  CPIC   Version Requested = 1.0
	  APPC   ---------------------------------------------- 09:34:42.99
	  APPC   WinAPPCStartup request
	  APPC
	  APPC   Version Requested = 1.0
	  APPC   ---------------------------------------------- 09:34:42.99
	  APPC   WinAPPCStartup response, result = OK
	  APPC
	  APPC   Version Supported = 1.0
	  CPIC   ---------------------------------------------- 09:34:42.99
	  CPIC   WinCPICStartup response, result = OK
	  CPIC
	  CPIC   Version Supported = 1.0
	
	The following is a request to start the conversation. There is no return to the
	CMNIT() CPIC call:
	
	  CPIC   ---------------------------------------------- 09:34:43.10
	  CPIC   CMINIT request
	  CPIC    Sym dest name = QR27
	  APPC   ---------------------------------------------- 09:34:43.10
	  APPC   TP_STARTED request
	  APPC
	  APPC   Type:Sync                                  VerbID:00001800
	  APPC
	  APPC   ---- Verb Parameter Block at address 01300000 ----
	  APPC   14000000 00000000 00000000 00000000     <................>
	  APPC   00000000 00000000 F80B5800 C3D7C9C3     <........8.X.CPIC>
	  APPC   6DC4C5C6 C1D3E36D E3D72020 20202040     <mDEFALTmTP     @>
	  APPC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	  APPC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	  APPC   40404040 40404040 40404040              <@@@@@@@@@@@@    >
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With the hotfix,
	SNAKRNL now ignores all RPC responses that arrive after WinCPICCleanup() or
	WinAPPCCleanup().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
