---
layout: page
title: "Q172478: LU Assigned to a Workstation Disappears After Restart"
permalink: /kb/172/Q172478/
---

## Q172478: LU Assigned to a Workstation Disappears After Restart

{% raw %}

	Article: Q172478
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the name of a Logical Unit (LU) is the same as the name of the workstation
	this particular LU is assigned to, it will disappear from within SNA Manager
	after SNA Manager has been restarted.
	
	CAUSE
	=====
	
	SNA Manager uses the same function when checking both for duplicate workstation
	entries and for duplicate workstation LU configuration records. SNA Manager does
	not distinguish between the two. So, when a workstation is found with the same
	name as the workstation LU record being added, it will fail because it is
	assumed to be a duplicate Workstation name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
