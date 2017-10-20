---
layout: page
title: "Q140837: AS/400 Demo Link Service Fails to Log Events"
permalink: /kb/140/Q140837/
---

## Q140837: AS/400 Demo Link Service Fails to Log Events

{% raw %}

	Article: Q140837
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	AS/400 Demo Link Service Transaction Programs (TPs) do not log events in the
	Event Viewer's application log.
	
	CAUSE
	=====
	
	SNACLASP.INF does not create the registry entry that references the event DLL
	for the Demo Link Service.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the file SNACLASP.INF to correctly modify the registry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna SDLC
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
