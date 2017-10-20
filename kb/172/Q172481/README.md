---
layout: page
title: "Q172481: Invalid SAP Entries Allowed in AS/400 and 3270 Wizard"
permalink: /kb/172/Q172481/
---

## Q172481: Invalid SAP Entries Allowed in AS/400 and 3270 Wizard

{% raw %}

	Article: Q172481
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The AS/400 Wizard and the 3270 Wizard allow invalid SAP entries when configuring
	DLC connections. No error message appears when the invalid SAP address is
	entered, but the Wizards fail when they attempt to set the invalid address.
	
	CAUSE
	=====
	
	The AS/400 and 3270 Wizard routines do not check to validate that the SAP is an
	appropriate hexadecimal value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the edit boxes where the SAP is entered are changed to
	drop-down boxes containing only valid SAP entries.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
