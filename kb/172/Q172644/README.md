---
layout: page
title: "Q172644: SNA Manager User Name Column Does Not Sort Alphabetically"
permalink: /kb/172/Q172644/
---

## Q172644: SNA Manager User Name Column Does Not Sort Alphabetically

{% raw %}

	Article: Q172644
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the SNA Manager, when you click either the Configured Users or Active Users
	folder and then go to the right side of the window and click User Name, the
	names do not sort alphabetically. Other columns defined in the SNA Manager have
	this capability.
	
	CAUSE
	=====
	
	The User Name column was not designed to include this functionality.
	
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
	
	With the fix applied, the User Name column will sort the names alphabetically
	when the column button is pressed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
