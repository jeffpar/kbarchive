---
layout: page
title: "Q196607: CPIC Application Produces Event 3017 - CPIC Conversation Unknown"
permalink: kb/196/Q196607/
---

## Q196607: CPIC Application Produces Event 3017 - CPIC Conversation Unknown

	Article: Q196607
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Common Programming Interface for Communications (CPIC) application may produce
	event 3017: CPI-C conversation_ID unknown, in the Windows NT application event
	log. The CPIC application appears to be working fine, but this error may be
	produced every time the application is called.
	
	MORE INFORMATION
	================
	
	The application sends data to the host. After the application has finished
	sending the data, it changes the direction by issuing Receive verb. The host
	responds by returning data to the client AND deallocating the session. This can
	be seen in the node message trace snippet below:
	
	   ----------------------------------------------- 14:30:51.0031
	   05160002->01020101 DLC DATA
	                      DAF:02 OAF:02 ODAI:on  Normal
	                      RQE FMD EC DR1 CEB
	
	The CEB indicates that the host no longer cares about any conversation related
	matters. When the client receives this chunk of data, you need to inspect the
	return code on the verb. In this case, it's a CM_DEALLOCATED_NORMAL, which means
	the conversation has been deallocated normally, and no longer exists.
	
	The application then issues a Deallocate verb as shown below:
	
	   ----------------------------------------------- 14:30:51.0062
	   CMDEAL request
	    Conversation ID = 01000000
	   Conversation characteristics
	    Deallocate type = CM_DEALLOCATE_SYNC_LEVEL
	    Log data pointer = 00000000
	    Log data length = 0
	
	The SNA Server, appropriately, responds with a Parameter Check because the
	conversation no longer exist, as shown below:
	
	   ----------------------------------------------- 14:30:51.0062
	   CMDEAL response, result = CM_PROGRAM_PARAMETER_CHECK
	
	Summary of the Parameter Check
	------------------------------
	
	The application does not need to issue the CMDEAL CPIC verb.
	
	RESOLUTION
	==========
	
	Change the application so it does not include the CMDEAL, and the event 3017s
	should stop.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
