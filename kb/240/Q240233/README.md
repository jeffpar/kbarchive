---
layout: page
title: "Q240233: XCLN: Local Free-Busy Cache Not Updated When Using AutoAccept"
permalink: /kb/240/Q240233/
---

## Q240233: XCLN: Local Free-Busy Cache Not Updated When Using AutoAccept

	Article: Q240233
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:5.5,5.5 SP2; :8.03,8.04
	Operating System(s): 
	Keyword(s): exc55 exc55sp2
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP2 
	- Microsoft Outlook 97, versions 8.03, 8.04 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the updated AutoAccept Event script, when you access the resource
	calendar (on the File menu, click Open, and then click Other User's Folder) with
	Reviewer permission, the following error message is displayed:
	
	  Can't open this item. Unable to open the free/busy information.
	
	Also, dates on which meetings are scheduled may not be bold, and the AutoAccept
	script may not decline conflicting meetings.
	
	CAUSE
	=====
	
	You do not have full control permissions to update the locally cached copy of
	free and busy information for the resource. The following process occurs:
	
	1. The free and busy information is updated on the server.
	
	2. The locally cached copy of the free and busy information is deleted.
	
	3. The server attempts to provide a complete copy of the free and busy
	  information to the client.
	
	  NOTE: If the client that you currently use to log on to the server does not
	  have full control permissions, the locally cached copy is not updated.
	
	4. You experience the problems described in the "Symptoms" section of this
	  article.
	
	WORKAROUND
	==========
	
	You can use one of the following methods to work around this problem:
	
	Workaround 1:
	
	1. Set up one Windows NT account that has full permissions for all of the
	  resource mailboxes that use the AutoAccept script.
	
	2. Log on to each resource mailbox once, and set each resource mailbox to update
	  the free and busy information on the server every minute:
	
	  a. On the Tools menu, click Options.
	
	  b. Click Calendar Options, and then click Free/Busy Options.
	
	  c. In the "Update free/busy information on the server every" box, type "1"
	     (without the quotation marks).
	
	  Then log off from the resource mailbox.
	
	3. At a client computer, log on using the Windows NT account that you created
	  that has full permissions for all of the resource mailboxes.
	
	4. Start Outlook and log on to one of the resource mailboxes. On the File menu,
	  click Open, and then click Other User's Folder to open every other resource
	  mailbox, and then leave them open.
	
	Workaround 2:
	
	Log on to the server using the resource mailbox, and then open Outlook using the
	/CleanFreeBusy switch.
	
	Workaround 3:
	
	This workaround requires a pure Outlook 2000 environment. Deploy Outlook 2000,
	and then follow the instructions in the following Microsoft Knowledge Base
	article:
	
	  Q192877 OL2000: (CW) Direct Offline Booking of Resources
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q179303 XADM: Reducing Event Service Firing Delays
	
	
	Additional query words: CDO 1.2 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          : exc55 exc55sp2 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook803 kbOutlook804 kbExchange550SP2
	Version           : WINDOWS:; winnt:5.5,5.5 SP2; :8.03,8.04
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
