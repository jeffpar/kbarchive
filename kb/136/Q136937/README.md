---
layout: page
title: "Q136937: Internet Tab Missing in Message Properties"
permalink: /kb/136/Q136937/
---

## Q136937: Internet Tab Missing in Message Properties

{% raw %}

	Article: Q136937
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Internet Mail service for Microsoft Exchange that is included
	with Microsoft Plus!, the Internet tab may be missing in the properties for a
	message. This problem is more likely to occur when you are viewing the
	properties for a new message with a large number of attachments.
	
	CAUSE
	=====
	
	The number of attachments included with the message has caused the 64K size
	limit for the Internet header page to be exceeded. When this limit is exceeded,
	the Internet tab is not displayed in the properties for a message.
	
	RESOLUTION
	==========
	
	Separate the attachments into multiple messages, so that the Internet header
	page for each message does not exceed 64K. Note that this problem does not
	affect the contents of the message in any way.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	

{% endraw %}
