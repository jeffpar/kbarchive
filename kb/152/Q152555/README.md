---
layout: page
title: "Q152555: XADM: Permissions Given to Local Groups Don't Work"
permalink: /kb/152/Q152555/
---

## Q152555: XADM: Permissions Given to Local Groups Don't Work

{% raw %}

	Article: Q152555
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Exchange Server is installed on a Member Server, you can add
	Local Groups on the permissions lists but users from this group will not be
	granted permissions.
	
	MORE INFORMATION
	================
	
	In Microsoft Exchange Administrator, you can select individual accounts, global
	groups, or Local Groups. The three options will work when Microsoft Exchange is
	on a PDC or BDC. Only individual accounts and/or global groups will work when
	Microsoft Exchange is running on a Member Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
