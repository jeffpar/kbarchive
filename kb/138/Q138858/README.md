---
layout: page
title: "Q138858: TN3270 User Session Is Lost Unexpectedly"
permalink: /kb/138/Q138858/
---

## Q138858: TN3270 User Session Is Lost Unexpectedly

	Article: Q138858
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a TN3270 client program through the SNA Server 2.11 TN3270 Server
	service:
	
	- A TN3270 user session may be lost unexpectedly.
	
	- A TN3270 file transfer upload request may appear to be hung, though the
	  TN3270 display session may have been reset to the initial host signon screen.
	
	- A TN3270 client emulator may fail to get a session through the TN3270 server.
	
	CAUSE
	=====
	
	The TN3270 server incorrectly requests definite response during a chain, even
	though exception response was requested by the TN3270 client application. The
	TN3270 server then receives the following error from the SNA Server LUA API
	interface:
	
	  prim_rc=0x1400 (LUA_UNSUCCESSFUL)
	  sec_rc=0x00000740 (LUA_DEFINITE_RSP_NOT_ALLOWED)
	
	This causes the session to be reset.
	
	RESOLUTION
	==========
	
	To correct this problem, install the fix mentioned below. When exception
	response protocol is being used, the TN3270 server now properly sets the
	Definite Response indicator only when the End Chain (EC) is set.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 2.11 prodsna hang freeze
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
