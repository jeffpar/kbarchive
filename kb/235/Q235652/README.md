---
layout: page
title: "Q235652: XADM: Constrain Violation Adding Accounts to Permissions Tab"
permalink: /kb/235/Q235652/
---

## Q235652: XADM: Constrain Violation Adding Accounts to Permissions Tab

{% raw %}

	Article: Q235652
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 09-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you add many Windows NT accounts on the Permissions tab of an object in the
	Exchange Server Administrator program, you may get the following error message:
	
	  An internal processing error has occurred: constraint violation. The value
	  specified for an attribute is either too big, too small, or not valid.
	  Microsoft Exchange Directory
	  ID No: DS_E_CONSTRAINT_VIOLATION.
	
	CAUSE
	=====
	
	This is by product design.
	
	WORKAROUND
	==========
	
	To work around this problem, create a Windows NT group and add the Windows NT
	accounts to which you want to give permissions to that group. Then, add the
	Windows NT group to the Permissions tab.
	
	MORE INFORMATION
	================
	
	The Windows NT accounts added to an object's Permissions tab are stored in the
	NT-Security-Descriptor attribute for the object. The maximum length of the
	attribute NT-Security-Descriptor in the Exchange Server directory is 4096 bytes.
	If many Windows NT accounts are added to the Permissions tab, the length of the
	value for the attribute NT-Security-Descriptor can exceed 4096 bytes, and when
	you try to save the value, the error is logged.
	
	
	Additional query words: schema
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
