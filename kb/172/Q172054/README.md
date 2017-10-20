---
layout: page
title: "Q172054: 3270 Script File Won't Work With Japanese Host Code Page"
permalink: /kb/172/Q172054/
---

## Q172054: 3270 Script File Won't Work With Japanese Host Code Page

{% raw %}

	Article: Q172054
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a script file with the Microsoft 3270 applet (a new feature of
	Microsoft SNA Server 3.0 Service Pack 1 [SP1]), with the host code page set to
	Japanese, the script file will not run.
	
	This problem is only seen on the Japanese (localized) version of SNA Server.
	
	CAUSE
	=====
	
	The Operator Information Area (OIA) format used by the Japanese code page is
	incorrect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, version 3.0 Service
	Pack 1 (SP1) (Japanese version only). This problem was corrected in the latest
	SNA Server version 3.0 U.S. Service Pack. For information on obtaining this
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
