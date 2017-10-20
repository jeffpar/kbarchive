---
layout: page
title: "Q188302: XADM: Clean Mailbox Command Cannot Delete Based on Date Received"
permalink: /kb/188/Q188302/
---

## Q188302: XADM: Clean Mailbox Command Cannot Delete Based on Date Received

{% raw %}

	Article: Q188302
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you use the Clean Mailbox command on the Tools menu in the Microsoft Exchange
	Server Administrator program to delete messages that are older than a certain
	number of days, the age of the messages is calculated based on the date the
	message was last modified. You cannot cause the age of the messages to be
	calculated based on the date the message was originally received.
	
	MORE INFORMATION
	================
	
	Microsoft recognizes the need for people to use the Clean Mailbox command to
	delete messages based on the date the messages were received. We have modified
	the Microsoft Exchange Server version 5.0 Administrator program so that when you
	delete messages that are older than a certain number of days, the age of the
	messages can be calculated based on either of the following criteria:
	
	- The date the message was last modified.
	
	- The date the message was received.
	
	After this feature is enabled, select Last Modified Date in the Clean Mailbox
	dialog box to delete messages based on the date the messages were last modified.
	To delete messages based on the date the messages were received, select Received
	Date in the Clean Mailbox dialog box. To view the Clean Mailbox dialog box,
	follow these steps:
	
	1. Start the Exchange Server Administrator program. To do so, click Start, point
	  to Programs, point to Microsoft Exchange, and then click Microsoft Exchange
	  Administrator.
	
	2. In the left pane, click the Recipients container under the appropriate site.
	  In the right pane, click a mailbox, and then on the Tools menu, click Clean
	  Mailbox.
	
	
	This supported feature is now available, but has not been fully regression tested
	and should be applied only to systems having a specific need for it. Unless you
	are severely impacted by the lack of this feature, Microsoft recommends that you
	wait for the next Service Pack that contains this feature. Contact Microsoft
	Technical Support for more information.
	
	
	We have also modified the Microsoft Exchange Server version 5.5 Administrator
	program to support this feature. This feature is included in the latest
	Microsoft Exchange Server version 5.5 U.S. service pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces): S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
