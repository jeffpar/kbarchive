---
layout: page
title: "Q179048: XADM: Mailbox Cleanup Deletes Calendar, Contacts, and Notes"
permalink: /kb/179/Q179048/
---

## Q179048: XADM: Mailbox Cleanup Deletes Calendar, Contacts, and Notes

{% raw %}

	Article: Q179048
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 17-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This problem occurs when you use Mailbox Cleanup in the Microsoft Exchange
	Server Administrator program. Calendar, Contacts, Notes, Journal, and Task
	information in Outlook is deleted.
	
	CAUSE
	=====
	
	This problem can occur because the Outlook client program stores Contact and
	Calendar information as message files. The Clean Mailbox functionality of the
	Administrator program cannot differentiate between Outlook's special folder
	messages and normal mail messages. It will clean ALL messages, based on message
	size or message age only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the Administrator program in Microsoft Exchange Server versions 5.0 and 5.5,
	you cannot specify from which folders messages meeting the selected criteria
	will be deleted. With the fixes described in this article, the Tools/Clean
	Mailbox feature has been extended to include the check box Only delete mail
	messages. With this box selected(default), the Clean Mailbox feature will not
	remove Outlook special folders. If this box is unchecked, Clean Mailbox will
	clean all messages that fit the age criteria, including Calendar appointments,
	Contacts, and so on.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
