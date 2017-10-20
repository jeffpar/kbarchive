---
layout: page
title: "Q171992: Creating Connection Gets Error Even If Link Service Selected"
permalink: /kb/171/Q171992/
---

## Q171992: Creating Connection Gets Error Even If Link Service Selected

{% raw %}

	Article: Q171992
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a new connection, you may see the following message
	
	  Must specify link service field
	
	even though you have already selected a link service field.
	
	CAUSE
	=====
	
	Before the connection record is added, its Adapter information is temporarily
	nulled out and restored after a successful Add. If a value is left in a field on
	the property page, the Validate fails, causing the Add to fail, an exception to
	occur, and the Adapter is never restored.
	
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
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
