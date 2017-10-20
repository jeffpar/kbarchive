---
layout: page
title: "Q149835: XADM: User With Admin Rights Cannot Edit Custom Attributes"
permalink: /kb/149/Q149835/
---

## Q149835: XADM: User With Admin Rights Cannot Edit Custom Attributes

{% raw %}

	Article: Q149835
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A user with full administrator permissions cannot use the Microsoft Exchange
	Administrator program to edit the Custom Attributes field specified in the
	Custom Attributes tab under DS Site Configuration. However, the Service Account
	and the account used to install the Microsoft Exchange Server can.
	
	MORE INFORMATION
	================
	
	Custom Attributes are objects in the Schema. As such, an administrator must have
	Administrator permissions in the Schema container. These permissions do not flow
	down from the Organization, Site, or Configuration levels. By default, the user
	account used to install the Microsoft Exchange Server and the account selected
	as the Microsoft Exchange Service Account are the only accounts that have
	Administrator permissions in the Schema container.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
