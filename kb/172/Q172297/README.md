---
layout: page
title: "Q172297: SNA Client Upgrade Forces Re-Entry of Configuration Information"
permalink: /kb/172/Q172297/
---

## Q172297: SNA Client Upgrade Forces Re-Entry of Configuration Information

	Article: Q172297
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install an SNA Client Upgrade over an existing SNA Client, the
	configuration information must be re-entered. This behavior is not expected; the
	SNA Client should use the pre-existing information. All versions of the SNA
	Client Upgrade ignore the configuration information.
	
	CAUSE
	=====
	
	The SNA Client Upgrade ignores the previous install settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest SNA Server version 3.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the SNA Client Upgrade initializes with the previous
	install settings.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
