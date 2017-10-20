---
layout: page
title: "Q137455: MS Exchange Err Msg: Groups Deleted from CompuServe Mail"
permalink: /kb/137/Q137455/
---

## Q137455: MS Exchange Err Msg: Groups Deleted from CompuServe Mail

{% raw %}

	Article: Q137455
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message from Microsoft Exchange to a distribution list from a
	CompuServe address book, you may receive the following undeliverable mail
	message from the Microsoft Exchange System Administrator:
	
	  Your message did not reach some or all of the intended recipients.
	  The following recipients could not be reached. Group deleted from
	  CompuServe address book.
	
	CAUSE
	=====
	
	This error can be caused by an empty distribution list from a new CompuServe
	address book. When this error occurs, the empty distribution list is displayed.
	
	RESOLUTION
	==========
	
	Check all the groups in the CompuServe address book to make sure that each one
	contains valid entries. If a group does not contain valid entries, remove it
	from the list in Microsoft Exchange and then send the message again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The message is not sent if any of the addresses are invalid, even if the rest of
	the addresses are good.
	
	Additional query words: cis
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
