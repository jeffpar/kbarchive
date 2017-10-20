---
layout: page
title: "Q180930: Access Violation in SNA Manager When Editing DLS Properties"
permalink: /kb/180/Q180930/
---

## Q180930: Access Violation in SNA Manager When Editing DLS Properties

{% raw %}

	Article: Q180930
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Remote Link Services and Alternate Link Services fields of the Distributed
	Link Service Properties dialog box allow strings longer than 256 characters to
	be entered. With SNA Server, 3.0 SP1, SNA Manager generates an Access Violation
	if any of these fields are edited with more than 256 characters. With SNA 3.0
	SP2, SNA Manager generates an Access Violation if the "Alternate Link Services"
	field is edited with more than 256 Characters.
	
	CAUSE
	=====
	
	SNA Server uses a 255-character long array to handle those fields but the
	properties dialog box does not check for the length of the typed string.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This update adds a check for a maximum length of 3557 characters for both lists.
	Each list can have a maximum of 127 remote link services.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
