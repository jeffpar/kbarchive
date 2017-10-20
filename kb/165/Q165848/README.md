---
layout: page
title: "Q165848: Barr Channel Link Doesn't Support the Distribute Option"
permalink: /kb/165/Q165848/
---

## Q165848: Barr Channel Link Doesn't Support the Distribute Option

{% raw %}

	Article: Q165848
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When viewing the properties of the Barr channel link service within SNA Server
	Manager, the link service is missing the following check box option:
	
	  Allow Link Service to be Distributed
	
	This prevents the link service from being used as a distributed link.
	
	CAUSE
	=====
	
	The Barr channel link service setup script was missing the distributed link
	option. Also, the link service itself had a separate problem which prevented the
	link service from working after adding this option.
	
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available for the Barr channel link service to
	support distributed operation. However, the Barr channel link service property
	page still does not include the check box to enable distributed operation. To do
	this, follow these configuration steps:
	
	1. Add the Barr channel link service using SNA Server Manager.
	
	2. Run External Link Services from the SNA Manager Tools menu.
	
	3. Click Links, focus on the Barr S/370 Channel Link Service, and then click the
	  DISTRIBUTE button.
	
	The link service name will now begin with "[D]" to indicate that the link has
	been distributed.
	
	
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
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
