---
layout: page
title: "Q268576: XADM: &quot;Hide from AB&quot; Value Set to NULL After Mailbox Is Created"
permalink: /kb/268/Q268576/
---

## Q268576: XADM: &quot;Hide from AB&quot; Value Set to NULL After Mailbox Is Created

{% raw %}

	Article: Q268576
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you export the settings of a Mailbox, you may see the "Hide from AB" field.
	This field is used to determine whether or not a Mailbox is visible in the
	global address list. By default, when Mailboxes are first created on an Exchange
	server, they are not hidden from the address book. The "Hide from AB" field is
	empty when you export it.
	
	MORE INFORMATION
	================
	
	You might expect that, by default, this field would be set to 0 for FALSE.
	However, if you have never modified the setting on the Advanced tab of the
	Mailbox properties, this field setting is empty.
	
	There are three possible settings for this field:
	
	  1 = TRUE (Mailbox is hidden)
	  0 = FALSE (Mailbox is visible)
	  NULL = FALSE (Mailbox is visible)
	
	You will only see a value of 0 if the Mailbox has been hidden from the Address
	Book in the past, and then unhidden. This has no effect on the performance of
	Exchange, but this may be a factor to consider when you create scripts to run
	against exported .csv files that contain user settings.
	
	Additional query words: GAL
	
	======================================================================
	Keywords          : exc55 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
