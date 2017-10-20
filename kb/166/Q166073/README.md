---
layout: page
title: "Q166073: Adding Connections/Link Services Causes Event 5167 and 5166"
permalink: /kb/166/Q166073/
---

## Q166073: Adding Connections/Link Services Causes Event 5167 and 5166

{% raw %}

	Article: Q166073
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following events will be logged when trying to add a link service or
	connection in SNA Server Manager when the SNA Server service is Active:
	
	  Event ID: 5167
	  Source: SNA Manage Agent
	  Description:
	  An internal error has occurred in mngsna module - Dynamic update for
	  3270 LU failed.
	
	  Event ID: 5166
	  Source: SNA Manage Agent
	  Description:
	  An internal error has occurred in the snaadmin module - Received an
	  error in dynamic update response - update failed.
	
	CAUSE
	=====
	
	Because the SNA Server Service does not allow connections and link services to
	be added while it is running, SNA Manager should not try to send any dynamic
	updates for resources on those connections.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem. To resolve this problem, obtain the
	hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
