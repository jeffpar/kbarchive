---
layout: page
title: "Q152732: XADM: How to Modify Fields in the Exchange Mailbox Template"
permalink: /kb/152/Q152732/
---

## Q152732: XADM: How to Modify Fields in the Exchange Mailbox Template

{% raw %}

	Article: Q152732
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Fields are displayed on the properties of a mailbox from within the client. If
	you change the mailbox template in the Exchange Server Administrator program,
	you can remove fields from the template, move fields within the template, and
	add new fields to the template.
	
	Removing a field from the template does not remove that field from the Exchange
	Server schema. You can restore the original configuration; click either the
	Templates or MS-DOS Templates tab as applicable, and then click Original.
	
	MORE INFORMATION
	================
	
	To edit, add, or remove a field from the template information display (using the
	mailbox type as an example):
	
	1. Start the Exchange Server Administrator program.
	
	2. On the Site menu, click Configuration. Click Addressing and Details
	  Templates. Click the English/USA mailbox, and then click Templates.
	
	3. To add, delete, or move fields in the template, click either the Template or
	  the MS-DOS Template tab, as applicable. Windows clients use the Template tab
	  and the MS-DOS client uses the MS-DOS Template tab. Make any additions,
	  deletions, or changes as needed.
	
	4. Click Test to view the template as it is seen from the client.
	
	To view the change from the client, on the Tools menu, click Address Book.
	Double-click a mailbox user. The user must quit and log off from the client
	before the changes are visible. You change and verify the other template types
	the same way.
	
	The change is only visible on the client side. If you view a mailbox using the
	Exchange Server Administrator program, it does not reflect the template change.
	
	Using the templates within the Exchange Server Administrator program, you can
	also modify the way that the following objects are displayed: the Custom
	Recipient, Distribution List, Exchange Send Options, Mailbox, Mailbox Agent,
	Public Folder, and Search Dialog objects.
	
	Additional query words: view details statistics
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
