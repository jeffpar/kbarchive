---
layout: page
title: "Q172373: Change Made to Enable 3270 SSO Does Not Set Out-Of-Date Flag"
permalink: kb/172/Q172373/
---

## Q172373: Change Made to Enable 3270 SSO Does Not Set Out-Of-Date Flag

	Article: Q172373
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the SNA Server Service is active and you make a change by selecting or
	clearing the "Enable 3270 Single Sign-On" check box via Host Security Domains
	(new with SNA Server 3.0 SP1), the SNA Server Service will not show "Out of
	Date" after the configuration is saved.
	
	Although it appears that this change happens dynamically by the node, the change
	does not take place until the SNA Server Service is stopped and then restarted.
	
	CAUSE
	=====
	
	The "Out of Date" flag is not being set on the SNA Server when a change is made
	to the "Enable 3270 Single Sign-On" check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the SNA Server is updated and flagged "Out of Date" when
	this option is changed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
