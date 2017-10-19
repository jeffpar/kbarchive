---
layout: page
title: "Q181134: The Service Pack Uninstall Does Not Check for Active Processes"
permalink: /kb/181/Q181134/
---

## Q181134: The Service Pack Uninstall Does Not Check for Active Processes

	Article: Q181134
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Service Pack Uninstall does not check for active processes (such as
	Snabase). Since Uninstall does not stop these processes, they and their related
	services are not restored to their pre-Service Pack revision levels.
	
	CAUSE
	=====
	
	The Service Pack Update.exe was not designed to check for active processes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Packs 1 and 2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
