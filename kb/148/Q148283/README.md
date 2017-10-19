---
layout: page
title: "Q148283: XADM: Custom Attribute Values Replicate, but Names Do Not"
permalink: /kb/148/Q148283/
---

## Q148283: XADM: Custom Attribute Values Replicate, but Names Do Not

	Article: Q148283
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Custom Attributes and Display Templates are best defined using an Organization
	scope. It is best to maintain the same name for each attribute because the
	values of the attributes will replicate but the names will not.
	
	As an example, if an administrator from one site configures Custom Attribute 1 to
	be Favorite Sport, and an administrator from a second site configures Custom
	Attribute 1 to be Shoe Size, the value of this attribute will not make sense to
	a user in the first site viewing a user in the second site. When the user from
	the first site views a user from the second site, they could see an attribute
	labeled Favorite Sport with a value of 7- 1/2.
	
	
	Additional query words: FAQ
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
