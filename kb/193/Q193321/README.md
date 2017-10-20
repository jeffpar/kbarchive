---
layout: page
title: "Q193321: XCON: Recipient Name Not Recognized"
permalink: /kb/193/Q193321/
---

## Q193321: XCON: Recipient Name Not Recognized

{% raw %}

	Article: Q193321
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect Exchange 4.0 or 5.0 sites with a Dynamic RAS Connector and use
	custom recipients instead of directory replication, messages that are replied to
	are returned with the following non-delivery report (NDR):
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:   RE: Please Reply
	     Sent:   15/04/97 14:27:29
	
	  The following recipient(s) could not be reached:
	
	     'Test User' on 15/04/97 14:27:30
	           The recipient name is not recognized
	           MSEXCH:MSExchangeMTA:<SITENAME>:<SERVERNAME>
	
	Note that the name is a valid user on the receiving server, the custom recipients
	are created from an export file created on the receiving server, and details are
	correct.
	
	CAUSE
	=====
	
	If you install Exchange Server to a different site or organization and only
	modify the display name, an NDR results when you reply to messages that
	originated at the site where the Organization/Site display names and
	distinguished names match. The reply address contains the return routing
	information, which is based on the X.500 Distinguished Name. The address space
	is configured with the display name information. The message does not go through
	when the sending server tries to resolve the name because it does not have a
	route.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Add a new address space based on the directory names for the receiving site.
	
	- Reinstall the Exchange Server software that has incorrect directory names
	  specified.
	
	MORE INFORMATION
	================
	
	To verify the symptoms above, try sending a message by selecting the names from
	the global address list. Verify that the Directory Name fields for Organization
	and Site are the same as the Display Name fields.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
