---
layout: page
title: "Q182262: Manager Traps When Switching Domains in 3270 LU Range Wizard"
permalink: /kb/182/Q182262/
---

## Q182262: Manager Traps When Switching Domains in 3270 LU Range Wizard

	Article: Q182262
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Manager traps when switching domains in the 3270 LU Range wizard.
	
	CAUSE
	=====
	
	The "type" library being generated does not match the actual objects.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 Service Pack
	1 (SP1), 3.0 SP2, and 4.0. We are researching this problem in SNA Server version
	3.0 and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, calls made by the Snaapp.odl file reference the correct
	place.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
