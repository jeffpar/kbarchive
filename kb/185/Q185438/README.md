---
layout: page
title: "Q185438: How To Determine Session Status Using SLI API."
permalink: kb/185/Q185438/
---

## Q185438: How To Determine Session Status Using SLI API.

	Article: Q185438
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the LUA/SLI interface to communicate with an IBM host application, it
	is necessary to make a call to SLI in order to determine if the session is still
	active. If SLI_BID is called, SLI_BID will block the calling thread until either
	the host sends a message to the SLI application, or the session is lost.
	
	If the host never sends data to the application, the SLI application can call
	SLI_RECEIVE and set the nowait flag in order to determine if the session is
	still active. SLI_RECEIVE with nowait will return immediately and will not block
	the calling thread.
	
	MORE INFORMATION
	================
	
	If the session has failed, SLI_RECEIVE(nowait) will return the following return
	codes:
	
	  primary_rc   = LUA_STATE_CHECK (0x0002)
	  secondary_rc = LUA_NO_SLI_SESSION  (0x00000034)
	
	If the session is still active, SLI_RECEIVE(nowait) will return the following
	return codes:
	
	  primary_rc   = LUA_UNSUCCESSFUL (0x0014)
	  secondary_rc = LUA_NO_DATA (0x00000011)
	
	REFERENCES
	==========
	
	Refer to the SNA Server LUA Programmer's Reference for more information about
	the SLI_RECEIVE and SLI_BID functions.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
