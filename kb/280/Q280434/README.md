---
layout: page
title: "Q280434: XADM: Changes Made in Raw Mode Do Not Seem to Be Applied"
permalink: /kb/280/Q280434/
---

## Q280434: XADM: Changes Made in Raw Mode Do Not Seem to Be Applied

	Article: Q280434
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Exchange Server Administrator program in Raw
	mode, and you make a change to the "Hide from Address Book" attribute on a
	public folder, the change does not seem to be applied. For example, if you
	change the property of the "Hide from Address Book" attribute from 1 to 0 in Raw
	mode, the public folder is not hidden from the address book; however, when you
	use the Administrator program in Normal mode to view the properties of the
	public folder, the "Hide from Address Book" check box is still selected.
	
	CAUSE
	=====
	
	This issue can occur because when the Administrator program is running in Raw
	mode, only directory service objects are updated; the Administrator program does
	not have an open session to the information store when it is running in Raw
	mode. When the Administrator program opens the regular public folder properties
	(and not the raw properties), it reads the information store.
	
	WORKAROUND
	==========
	
	To work around this issue, start the Administrator program in Normal mode, open
	the public folder properties, and then click to clear the "Hide from Address
	Book" check box.
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	
