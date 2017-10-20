---
layout: page
title: "Q200278: XFOR: Messages in Draft Folder Lose Draft Flag after Migration"
permalink: /kb/200/Q200278/
---

## Q200278: XFOR: Messages in Draft Folder Lose Draft Flag after Migration

{% raw %}

	Article: Q200278
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the IMAP4 Migration wizard to migrate messages from an IMAP4 mail
	server, messages in the Drafts folder may lose the Unsent flag after migration.
	
	MORE INFORMATION
	================
	
	This occurs because some IMAP4 clients do not properly set the Draft flag on
	messages in the Drafts folder. Some clients treat any message in the Drafts
	folder as a draft message without checking for or setting the Draft flag. When
	messages are migrated from this folder, they will appear as sent messages in
	Exchange Server.
	
	Additional query words: attributes
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
