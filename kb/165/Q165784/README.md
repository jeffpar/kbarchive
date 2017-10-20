---
layout: page
title: "Q165784: TN3270 Service Doesn't Read Configuration Changes"
permalink: /kb/165/Q165784/
---

## Q165784: TN3270 Service Doesn't Read Configuration Changes

{% raw %}

	Article: Q165784
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
	
	If changes are made to a TN3270 Property page, the TN3270 Service will not read
	and recognize these configuration changes; therefore, these changes will not
	take effect.
	
	CAUSE
	=====
	
	The TN3270 Service only reads the configuration changes if a change was made to
	a non-TN3270 specific option.
	
	RESOLUTION
	==========
	
	A fix is available for the TN3270 Service to force it to re-read the
	configuration file if a change is made to any TN3270 specific option.
	
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
