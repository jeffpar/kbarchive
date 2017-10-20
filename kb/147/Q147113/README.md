---
layout: page
title: "Q147113: XADM: Spaces Not Allowed in Some X.400 Entry Fields"
permalink: /kb/147/Q147113/
---

## Q147113: XADM: Spaces Not Allowed in Some X.400 Entry Fields

{% raw %}

	Article: Q147113
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a custom X.400 recipient, the following fields on the advanced
	property page of the X.400 addressing page allow only for numerals 0 - 9. No
	alphanumeric characters or spaces are allowed. The fields that are thus limited
	are as follows:
	
	  User Agent numeric ID (n-id)
	  X.121 (x.121)
	  Terminal Type (t-ty)
	
	WORKAROUND
	==========
	
	The workaround is to remove the space from the desired user on the above fields
	so that they match the Exchange format.
	
	MORE INFORMATION
	================
	
	The X.400 specification allows for spaces in the above types, however, the
	Microsoft Exchange addressing scheme (Address.dll) does not support spaces in
	those three fields.
	
	This can become a problem when creating custom recipients to X.400 system
	recipients who follow this addressing scheme; it could result in a non- delivery
	report (NDR) to such a user.
	
	Additional query words: x400 bluebook redbook x121 1988 1984
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
