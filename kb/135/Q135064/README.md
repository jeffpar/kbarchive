---
layout: page
title: "Q135064: XADM: Owner of a Distribution List"
permalink: /kb/135/Q135064/
---

## Q135064: XADM: Owner of a Distribution List

{% raw %}

	Article: Q135064
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a distribution list is created, the administrator can assign an owner. The
	owner can be any Microsoft Exchange user or custom recipient. The Owner field is
	currently used only for informational purposes.
	
	MORE INFORMATION
	================
	
	Being the owner of a distribution list does not automatically imply the ability
	to manage the membership of the distribution list. To allow a user to manage the
	membership of a distribution list, the Administrator must grant user permission
	on the distribution list object to that user's Windows NT account. Hence, even
	though the owner can be a Microsoft Exchange user or a custom recipient, only
	Microsoft Exchange users can modify a distribution list.
	
	Although the owner field is currently strictly informational, it could be used
	for various purposes. For example, a custom Exchange form could be developed to
	automate the modification of distribution lists. The Exchange form could
	automatically send the modification request to the owner of the distribution
	list, who could then take action on it.
	
	Additional query words: DL
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
