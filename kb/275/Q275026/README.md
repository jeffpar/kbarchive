---
layout: page
title: "Q275026: XADM: Notifications Not Sent by Mailbox Manager in Audit Mode"
permalink: kb/275/Q275026/
---

## Q275026: XADM: Notifications Not Sent by Mailbox Manager in Audit Mode

	Article: Q275026
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Mailbox Manager utility that is shipped with Exchange
	Server 5.5 Service Pack 3 (SP3). You can use this utility to monitor mailboxes
	on various Exchange Server computers in the site based on set policies. However,
	Mailbox Manager does not send any user notifications when it is operating in
	Audit mode.
	
	MORE INFORMATION
	================
	
	Mailbox Manager operates in two modes, Audit mode and Cleanup Mailboxes mode. To
	choose the mode that Mailbox Manager operates in, click the General tab, and
	then click either the Cleanup Mailboxes option or the Audit option.
	
	You can configure Mailbox Manager to send a summary report or a detailed report
	to an administrator mailbox when Mailbox Manager is operating in either of these
	modes. In addition, you can configure Mailbox Manager to send notifications to
	users. To do so, click the Notification tab in the Configuration window for
	Mailbox Manager, and then click to select the Notify Users check box.
	Alternatively, if you click to clear this check box, notifications are not sent
	to users.
	
	User notifications can only be sent when Mailbox Manager is operating in Cleanup
	Mailboxes mode; user notifications are not sent when Mailbox Manager is in Audit
	mode. However, because the Notification tab is always available, it may seem
	that you can configure Mailbox Manager to send user notifications in either
	mode.
	
	
	Additional query words: MAILBOX-MANAGER AUDIT-MODE
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
