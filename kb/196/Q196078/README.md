---
layout: page
title: "Q196078: No Error Message when Remote Link Services is Wrong for DLS"
permalink: /kb/196/Q196078/
---

## Q196078: No Error Message when Remote Link Services is Wrong for DLS

{% raw %}

	Article: Q196078
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When configuring a Distributed Link Service (DLS), if you specify an invalid
	resource for Remote Link Services such as \\Snasoga\Sample, you may observe that
	connection hangs in Pending state with no reported events in the Event Viewer.
	
	If an SNA Server internal trace is captured for the particular Remote Link
	Service (SnaRemx) in question, it will show that remote link service received
	the following error:
	
	  "RPC failure, service not found."
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	After applying the update, an event will be logged in the Application Event Log
	when this error occurs. The Remote Link Service will now report the failure, and
	include an invalid link service name as in the following example:
	
	  "Couldn't open distributed link service connection to remote link service
	  \\<server>\<service> -- Remote link service not found."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
