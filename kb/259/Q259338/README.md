---
layout: page
title: "Q259338: XCLN: Private Meeting Requests Are Not Forwarded to Delegate"
permalink: kb/259/Q259338/
---

## Q259338: XCLN: Private Meeting Requests Are Not Forwarded to Delegate

	Article: Q259338
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Outlook delegate that is configured to receive meeting requests from the
	mailbox owner does not receive meeting requests that are marked with a "private"
	sensitivity.
	
	CAUSE
	=====
	
	When you click the "Delegate receives copies of meeting-related messages sent to
	me" check box, or the "Send meeting requests and responses only to my delegates,
	not to me" check box, the Forward Meeting Request rule that is created to
	forward these messages is designed to not forward private meetings.
	
	WORKAROUND
	==========
	
	To ensure that the delegate receives all meetings requests, do not mark these
	meetings with a "private" sensitivity.
	
	MORE INFORMATION
	================
	
	In Outlook 2000, a delegate can view private items in the mailbox owner's
	calendar if the "Delegate can see my private items" check box is selected. To
	select this option, click Options on the Tools menu, and then click the
	Delegates tab.
	
	The "Delegate can see my private items" option is a new feature in Outlook 2000.
	It does not include meeting requests that are marked as private. For additional
	information about the meeting requests that are marked as private, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q197906 OL2000: (CW) Purpose of the Private Check Box on Outlook Items
	
	NOTE: This setting affects Resource accounts that are configured to use a
	delegate account as well.
	
	For additional information about creating Resource accounts, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q181988 OL98: (CW) How to Create a Resource Account
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
