---
layout: page
title: "Q196230: SLI Does Not Reset Lua_flag2.async"
permalink: /kb/196/Q196230/
---

## Q196230: SLI Does Not Reset Lua_flag2.async

{% raw %}

	Article: Q196230
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an SLI application issues an SLI verb and has the Lua_flag2.async parameter
	set to 1, and the verb completes synchronously (for example, because of an
	error), the SLI library does not reset Lua_flag2.async to zero (indicating the
	verb completed synchronously). The results of this will depend on the SLI
	application, but this could cause various application problems.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
