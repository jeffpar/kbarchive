---
layout: page
title: "Q178074: RUI_TERM Fails to Return When lua_resv56&#91;2&#93; Is Set in RUI_INIT"
permalink: /kb/178/Q178074/
---

## Q178074: RUI_TERM Fails to Return When lua_resv56&#91;2&#93; Is Set in RUI_INIT

{% raw %}

	Article: Q178074
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An RUI (LUA)-based application may not be able to establish a session between
	SSCP and a specified LU using RUI_INIT after previously issuing an RUI_TERM on
	the same LU. The RUI_INIT request may return with a
	STATE_CHECK_DUPLICATE-RUI_INIT message, which can be observed in an SNA LUA API
	trace. The symptoms described here may occur when you use either the 16- bit or
	32-bit version of the WINRUI libraries.
	
	CAUSE
	=====
	
	The RUI_TERM does not work correctly when the lua_resv56[2] option is set in the
	RUI_INIT. Setting lua_resv56[2] to a non-zero value means that the RUI library
	will not drop the LU-SSCP connection to the node unless the application
	specifically asks it to do so by issuing an RUI_TERM.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	The RUI application should set all reserved bits in the verb control block to
	NULL prior to calling the RUI interface, unless specific bits are purposely
	being set in the lua_resv56 byte when calling RUI_INIT.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
