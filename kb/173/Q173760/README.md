---
layout: page
title: "Q173760: XADM: User's GAL Displayed Differently Based on Search Control"
permalink: /kb/173/Q173760/
---

## Q173760: XADM: User's GAL Displayed Differently Based on Search Control

{% raw %}

	Article: Q173760
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Search Control permission is used to limit directory access, the global
	address list (GAL) can be displayed differently on a user-by-user basis. The GAL
	will be displayed to the user as the container that has the largest number of
	entries where that user is a member.
	
	MORE INFORMATION
	================
	
	Exchange 5.5 introduces a new feature known as Search Control. This feature is
	implemented as a search permission on individual containers. By default, no
	search attributes are set. All users have access to all address containers.
	After the search attribute is set for one user, this container and all
	subcontainers will not be displayed to any other user unless they have been
	granted the search permission on the specific container. The search permission
	will flow down to all child containers. Please refer to the Microsoft Exchange
	Server Administrator's Guide for more information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	

{% endraw %}
