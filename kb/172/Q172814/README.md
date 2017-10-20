---
layout: page
title: "Q172814: Control Unit Image Number Not Supported on ESCON"
permalink: /kb/172/Q172814/
---

## Q172814: Control Unit Image Number Not Supported on ESCON

{% raw %}

	Article: Q172814
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There is no Control Unit Image Number support for ESCON-type channel
	connections.
	
	CAUSE
	=====
	
	SNA Server was not originally written to provide direct support for ESCON
	connections.
	
	RESOLUTION
	==========
	
	A Control Unit Image Number field has been added to connections using a
	channel-type link service. The field is found on the Address tab of the
	connection. It is an integer with a default value of 0 and a range of 0- 0xF.
	The Control Unit Image Number is ignored when using Bus&Tag channel- type
	links.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ210 kbSNAServ300SP1
	Version           : WINDOWS:2.1,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
