---
layout: page
title: "Q165248: Description for Event ID 5111 is Incomplete"
permalink: /kb/165/Q165248/
---

## Q165248: Description for Event ID 5111 is Incomplete

{% raw %}

	Article: Q165248
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
	
	Event 5111 states, "The manage agent service failed to start.%1." No description
	is given for %1.
	
	CAUSE
	=====
	
	The event handler for this message inadvertently omitted the correct
	description.
	
	RESOLUTION
	==========
	
	The appropriate information is now displayed in the description for this event.
	
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
