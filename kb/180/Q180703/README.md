---
layout: page
title: "Q180703: SLI_BID May Return LUA_CANCELLED/LUA_TERMINATED"
permalink: kb/180/Q180703/
---

## Q180703: SLI_BID May Return LUA_CANCELLED/LUA_TERMINATED

	Article: Q180703
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Win32 SLI application is running on an SNA Server computer and the SNA
	Server service is stopped, any outstanding SLI_BID requests are returned with
	the following error:
	
	  primary_rc = 0x0021 (LUA_CANCELLED)
	  secondary_rc = 0x00000080 (LUA_TERMINATED)
	
	The SLI application may not be expecting this particular error code and may not
	recognize that the SNA Server is no longer available.
	
	Instead, the SLI interface should return:
	
	  primary_rc = 0xF003 (LUA_COMM_SUBSYSTEM_ABENDED)
	
	CAUSE
	=====
	
	The SNA Server SLI interface is not returning an informative return code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0
	Service Pack 1 (SP1), 3.0 SP2 and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With this update applied, the SLI interface now returns the following error to
	the SLI_BID function in this instance:
	
	  primary_rc = 0xF003 (LUA_COMM_SUBSYSTEM_ABENDED)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
