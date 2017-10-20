---
layout: page
title: "Q166556: XADM: Modifying cc:Mail Proxy Address Can Cause Double Escapes"
permalink: /kb/166/Q166556/
---

## Q166556: XADM: Modifying cc:Mail Proxy Address Can Cause Double Escapes

{% raw %}

	Article: Q166556
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you modify a cc:Mail proxy address that contains an escape character, the
	single escape character becomes doubled, as in the following examples:
	
	  "/hhhh" changes to "//hhhh"
	
	  -and-
	
	  "//hhhh" changes to "////hhhh"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
