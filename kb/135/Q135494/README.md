---
layout: page
title: "Q135494: Failure of One SDLC Multidrop Connection Reactivates All Others"
permalink: /kb/135/Q135494/
---

## Q135494: Failure of One SDLC Multidrop Connection Reactivates All Others

{% raw %}

	Article: Q135494
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A multidrop connection is a connection through which a primary computer
	communicates with multiple secondary computers. SNA Server supports multidrop
	connections to peer or downstream computers on leased SDLC lines. You can
	configure up to four multidrop connections on each line with one SNA Server
	server acting as primary on each.
	
	When SNA Server Admin is configured with more than 1 multidrop primary SDLC
	connections and the active connection has an outage or timeout, the failing
	connection is reactivated. However, all the other connections using the same
	link service are (incorrectly) activated or reactivated as well.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 multidrop primary
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
