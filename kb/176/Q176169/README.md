---
layout: page
title: "Q176169: XADM: How to Install ILS on Exchange Server Computer"
permalink: /kb/176/Q176169/
---

## Q176169: XADM: How to Install ILS on Exchange Server Computer

{% raw %}

	Article: Q176169
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage exc55
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To install the Internet Locator Server (ILS) on a computer that is running
	Microsoft Exchange Server version 5.5, you must change the port number that
	Exchange Server uses for the Lightweight Directory Access Protocol (LDAP). The
	default port number for the LDAP is 389. This can be modified by changing the
	port number field on the General Page of the LDAP (Directory) Site Defaults
	object at the site level and the LDAP (Directory) Settings at the server level.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
