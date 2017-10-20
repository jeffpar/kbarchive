---
layout: page
title: "Q174169: XADM: WinNT Accounts for CRs Cannot Be Deleted with Bulk Import"
permalink: /kb/174/Q174169/
---

## Q174169: XADM: WinNT Accounts for CRs Cannot Be Deleted with Bulk Import

{% raw %}

	Article: Q174169
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Server accounts created for custom recipients (CRs) cannot be deleted
	with Directory Import. This is by design.
	
	MORE INFORMATION
	================
	
	Directory Import allows you to create Windows NT Server accounts when you
	specify them for custom recipients. However, Windows NT accounts are only
	deleted when you delete mailboxes. It is a common scenario that a Windows NT
	account and a mailbox are so closely coupled that deleting one implies deleting
	the other. However, it is unlikely that the same can be said for a custom
	recipient and a Windows NT account, especially in the case where the
	relationship is one Windows NT account to many custom recipients. Additional
	query word: CR
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	

{% endraw %}
