---
layout: page
title: "Q198562: XCLN: Cannot Find Users on Referral Server Using Outlook Express"
permalink: /kb/198/Q198562/
---

## Q198562: XCLN: Cannot Find Users on Referral Server Using Outlook Express

{% raw %}

	Article: Q198562
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to find users on a referral server using the Find People command in
	Outlook Express, you get the following error message:
	
	  There are no entries in the Address Book that match your search criteria.
	
	CAUSE
	=====
	
	This problem occurs because the Lightweight Directory Access Protocol (LDAP) has
	been enabled at the site level.
	
	WORKAROUND
	==========
	
	To work around this problem, disable LDAP referrals at the site level in order
	to allow referrals at the server level.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
