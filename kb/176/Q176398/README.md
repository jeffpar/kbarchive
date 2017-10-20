---
layout: page
title: "Q176398: XADM: User Count Shows 4294962176"
permalink: /kb/176/Q176398/
---

## Q176398: XADM: User Count Shows 4294962176

{% raw %}

	Article: Q176398
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Performance Monitor to view the User Count counter for the Exchange
	information store, User Count may appear to be a large number, such as
	4294962176.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The User Count is incremented only when a license is granted successfully.
	However, the User Count will be decremented regardless of when the session is
	freed.
	
	The problem occurs when you attempt to connect clients beyond the number of
	allocated licenses. Each client beyond the number of licenses will cause the
	counter to incorrectly decrement by 1.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
