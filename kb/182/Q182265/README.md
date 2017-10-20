---
layout: page
title: "Q182265: APPC Display Call Fails With AP_STATE_CHECK (Primary_rc = 0002)"
permalink: /kb/182/Q182265/
---

## Q182265: APPC Display Call Fails With AP_STATE_CHECK (Primary_rc = 0002)

{% raw %}

	Article: Q182265
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Occasionally, the APPC DISPLAY function will fail with the following error:
	
	  primary_rc = 0x0002 (AP_STATE_CHECK)
	  secondary_rc = 0x00000000
	
	This problem seems to occur when two separate DISPLAY calls are made at the same
	time from two different threads of the same APPC program.
	
	CAUSE
	=====
	
	Although the APPC DISPLAY function is implemented in a thread-safe manner, it
	does not properly handle unsolicited status messages received from the SNA
	Server, which could cause AP_STATE_CHECK to be returned in error. This problem
	is not related to issuing separate DISPLAY calls from different threads.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 Service Pack
	1 (SP1), 3.0 SP2, and 4.0. We are researching this problem in SNA Server version
	3.0 and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
