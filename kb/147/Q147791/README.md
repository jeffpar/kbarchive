---
layout: page
title: "Q147791: Small Outbound RU Size Causes Access Violations on TN3270"
permalink: /kb/147/Q147791/
---

## Q147791: Small Outbound RU Size Causes Access Violations on TN3270

{% raw %}

	Article: Q147791
	Product(s): Microsoft SNA Server
	Version(s): 2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, version 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Unexpected application exceptions occur on the TN3270 server.
	
	CAUSE
	=====
	
	When the TN3270 Server processes a BIND, it examines the RU sizes in the BIND.
	If the RU sizes are larger than the default values (these are configured through
	the TN3270 Administrator), it reallocates its send and receive buffers. When the
	TN3270 Server allocates a new outbound data buffer, it releases the old one back
	to the operating system. However, it still has a pointer to this buffer, which
	is used to examine the BIND that is occasionally referencing memory already
	released.
	
	RESOLUTION
	==========
	
	Increase the default outbound RU size or apply the SNA Server for Windows NT
	version 2.11 Service Pack 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 3.51 kbbug2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211NT
	Version           : :2.11
	
	=============================================================================
	

{% endraw %}
