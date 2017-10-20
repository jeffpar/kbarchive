---
layout: page
title: "Q165988: SNA Print Server Doesn't Interpret LU3 Orders"
permalink: /kb/165/Q165988/
---

## Q165988: SNA Print Server Doesn't Interpret LU3 Orders

{% raw %}

	Article: Q165988
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
	
	When LU3 printing is being sent through the SNA Server Print Service, "Orders"
	will not be interpreted. For instance, if set buffer address (SBA) '11' is
	passed, the Print Service will not convert this to a carriage return if the SBA
	address is pointing to the next line.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
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
