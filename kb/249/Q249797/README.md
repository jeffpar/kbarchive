---
layout: page
title: "Q249797: XCLN: Client Folder View Doesn't Display Bcc Address Properties"
permalink: /kb/249/Q249797/
---

## Q249797: XCLN: Client Folder View Doesn't Display Bcc Address Properties

{% raw %}

	Article: Q249797
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Exchange Server 5.5 blocks requests for Bcc properties in the client's folder
	view. Even when you use the Bcc address field as a display column in a client,
	Bcc address field values are not returned to the client. This behavior is by
	design, and occurs in all folders, including the Sent Items and Drafts folders.
	However, after a message is opened, the Bcc address properties on messages in
	the Sent Items and Drafts folders are visible.
	
	MORE INFORMATION
	================
	
	This behavior is by design for security and performance reasons. If you want to
	view Bcc information in a table view, use the Find functionality of your
	Exchange Server client, and query the information store using the Bcc properties
	column as a display column in your search folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
