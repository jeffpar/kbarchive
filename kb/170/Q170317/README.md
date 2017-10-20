---
layout: page
title: "Q170317: XFOR: IMC Stops Responding When VRFY Is Enabled"
permalink: /kb/170/Q170317/
---

## Q170317: XFOR: IMC Stops Responding When VRFY Is Enabled

{% raw %}

	Article: Q170317
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Administrators of Microsoft Exchange Server version 5.0 will notice that when
	VRFY is enabled and the VRFY command is carried out against a valid account, the
	Internet Mail Server (IMS) will halt and produce a Dr. Watson log.
	
	CAUSE
	=====
	
	The source of the trouble is in the executable file that drives the IMS,
	Msexcimc.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
