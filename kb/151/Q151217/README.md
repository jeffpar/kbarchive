---
layout: page
title: "Q151217: Password Substitution Is Not Available in SNASVCMG Mode"
permalink: /kb/151/Q151217/
---

## Q151217: Password Substitution Is Not Available in SNASVCMG Mode

	Article: Q151217
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Currently, SNA Server does not support password substitution on the SNA System
	Services (SNASVCMG) mode, even though strict SNA implementations require that
	all sessions between two LUs have the same conversation-level security
	indicators. If the data modes support password substitution then the service
	modes should support password substitution as well.
	
	RESOLUTION
	==========
	
	Because strict SNA implementations require that all sessions between two LUs
	support the same conversation level security indicators, a hotfix is available
	to support this feature.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server for Windows
	NT, versions 2.0, 2.1, 2.11, and 2.11.sp1. This problem was corrected in the
	latest Microsoft SNA Server 2.11 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna nt mode appc snasvcmg
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
