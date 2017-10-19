---
layout: page
title: "Q190865: XCLN: Outlook Error: Unable to Forward Meeting-Related Messages"
permalink: /kb/190/Q190865/
---

## Q190865: XCLN: Outlook Error: Unable to Forward Meeting-Related Messages

	Article: Q190865
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you set up a delegate for your mailbox, you may receive the following error
	message:
	
	  Unable to forward meeting-related messages. Choose Inbox Assistant or Rules
	  Wizard, remove some rules, and try again. Unable to modify folder rule.
	
	This message occurs if you uncheck the option "Delegate receives copies of
	meeting-related messages sent to me" in the Delegate Permissions or if you
	select "None" in the Calendar selection option box for Delegate Permissions.
	
	CAUSE
	=====
	
	This is by design. The message occurs because no delegates have been designated
	to receive meeting-related messages.
	
	This message will only occur under the following conditions:
	
	- No rules of any kind have been created for the users mailbox.
	
	- The checkbox "Delegate receives copies of meeting-related messages sent to
	  me" must be unchecked for all delegates.
	
	- The user then selects OK or Apply after unchecking the above option.
	
	WORKAROUND
	==========
	
	To avoid this message, you can create at least one rule for your mailbox or
	select a delegate to receive meeting-related messages.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	
