---
layout: page
title: "Q182503: XADM: LDAP Displays Directory Name"
permalink: /kb/182/Q182503/
---

## Q182503: XADM: LDAP Displays Directory Name

{% raw %}

	Article: Q182503
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 16-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you run Microsoft Exchange Server version 5.0 or 5.5 and use the LDAP
	protocol to view the Exchange directory, the search for "cn" returns the value
	of the Exchange directory name. The directory name may have a nondescript value.
	Viewing the mailbox or custom recipient Advanced properties will show the
	directory name. Custom attributes modified by Dirsync may have unique directory
	names such as B829F6D that do not directly correlate to the Display Name, Alias,
	First name, or Last name.
	
	For example, a cc:Mail or MS Mail address user1 could have B829DF6D as its
	directory name. A directory name must be unique and may or not be the same as
	the alias name.
	
	MORE INFORMATION
	================
	
	This is by product design.
	
	Additional query words: bad incorrect
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
