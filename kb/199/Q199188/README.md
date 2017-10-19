---
layout: page
title: "Q199188: XADM: Special Characters in Mailbox Display Name"
permalink: /kb/199/Q199188/
---

## Q199188: XADM: Special Characters in Mailbox Display Name

	Article: Q199188
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Exchange Administrator program, it is possible to add special characters
	to the display name of a mailbox from the General tab of the mailbox. It is not
	possible to add these special characters to the simple display name in the
	Advanced tab of the mailbox.
	
	MORE INFORMATION
	================
	
	The simple display name feature on the Advanced tab is specifically for
	interoperability with foreign systems that do not recognize the special
	characters set on the General tab within the mailbox properties. Although not
	all special characters can be typed in the Simple Display field of the Advanced
	tab, the following characters will be accepted:
	
	  (),.?/:'=+-
	
	A simple display name can coexist with the regular display name, however; the
	simple display name will be displayed for systems that cannot understand the
	special characters set in the General tab.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
