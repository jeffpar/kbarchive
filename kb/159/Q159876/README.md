---
layout: page
title: "Q159876: XADM: Permissions Lost During Move Mailbox Operation"
permalink: /kb/159/Q159876/
---

## Q159876: XADM: Permissions Lost During Move Mailbox Operation

{% raw %}

	Article: Q159876
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs in Schedule+ when attempting to "open other's
	appointment book" of a recently moved mailbox:
	
	  The schedule could not be open. Access is denied.
	
	Moving a user mailbox is done in the Microsoft Exchange Administrator program by
	accessing the Move Mailbox command from the Tools menu and can only be done
	between Microsoft Exchange Severs in the same Microsoft Exchange Site. Moving
	mailboxes between Servers in a Site with the Move Mailbox utility can cause
	previously assigned permissions on the mailbox to be temporarily lost.
	
	CAUSE
	=====
	
	The Move Mailbox command ignores the default access control list (ACL) when
	resetting the ACL data during the move. Any users that previously accessed the
	appointment book using default access permissions subsequently fail. Users with
	explicit permissions to the appointment book do not experience this error.
	
	WORKAROUND
	==========
	
	To view the schedule:
	
	1. In Schedule+ on the mailbox that can't be opened, on the Tools menu, click
	  Set Access Permissions and verify that the user attempting to view the
	  schedule does have the required permissions.
	
	2. Click OK, which will effectively reset the permissions and allow clients with
	  permissions to view the schedule.
	
	If other users are unable to open this mailbox:
	
	1. Re-apply the permissions on the mailbox that has permissions set.
	
	2. Remove and re-add the other mailbox from the profile of the user that is
	  having problems opening the mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem was also corrected in Microsoft Exchange Server version 5.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
