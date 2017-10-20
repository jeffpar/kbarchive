---
layout: page
title: "Q182064: APPC Program May Stop or Fail with SNA Server 4.0 on DEC Alpha"
permalink: /kb/182/Q182064/
---

## Q182064: APPC Program May Stop or Fail with SNA Server 4.0 on DEC Alpha

{% raw %}

	Article: Q182064
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Win32 APPC application over SNA Server 4.0 on a DEC Alpha system,
	the APPC application may stop on an [MC_]DEALLOCATE call or fail unexpectedly.
	
	
	CAUSE
	=====
	
	The Alpha version of the SNA Server service (Snaservr.exe) included with SNA
	Server 4.0 was built using a compiler optimization that introduced a problem
	with an internal function, causing the problem to occur. This problem does not
	occur on Intel-based servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
