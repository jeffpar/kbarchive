---
layout: page
title: "Q196405: XADM: Navigation Bar Missing After Upgrading to Exchange 5.5"
permalink: /kb/196/Q196405/
---

## Q196405: XADM: Navigation Bar Missing After Upgrading to Exchange 5.5

{% raw %}

	Article: Q196405
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a mail object is created in Exchange Server version 4.0 or 5.0 and saved
	(called a message fragment) then manually placed in a public folder, it is
	converted to a mail message. This makes the message appear as a post and
	includes a navigation bar (with the Next and Previous buttons) in the client
	interface.
	
	After you upgrade to Exchange Server 5.5, the icon for the message is different
	and the navigation buttons are no longer available.
	
	CAUSE
	=====
	
	In Exchange Server 5.5, mail message fragments placed in public folders are not
	converted and remain as message fragments. This was done to enhance the object
	storage capabilities of a public folder.
	
	WORKAROUND
	==========
	
	To work around this problem and in order for the mail object to be treated as a
	'post' with a navigation bar, the message must be mailed to the folder.
	
	This is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
