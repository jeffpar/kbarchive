---
layout: page
title: "Q264745: XCLN: Can't Permanently Delete Defer. Delivery Mails fr. Outbox"
permalink: /kb/264/Q264745/
---

## Q264745: XCLN: Can't Permanently Delete Defer. Delivery Mails fr. Outbox

	Article: Q264745
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Outlook 2000, if the Outbox contains e-mail items that are marked
	for deferred delivery, you may not be able to delete those e-mail items
	permanently. If you attempt to delete the items permanently, you may receive the
	following error message:
	
	  The item could not be deleted. It was either moved or already deleted, or
	  access was denied.
	
	WORKAROUND
	==========
	
	To work around this issue, delete the e-mail item as you would delete any other
	e-mail item. Select the e-mail item, and then click Delete on the File menu.
	After the e-mail item is moved to the Deleted Items folder, you can delete the
	e-mail item from the Deleted Items folder, which permanently deletes the e-mail
	item.
	
	MORE INFORMATION
	================
	
	You can delete any item in any Outlook folder by selecting the item, and then
	pressing the DELETE key to move the item to the Deleted Items folder (this
	procedure works in all folders except the Deleted Items folder). The move to the
	Deleted Items folder is a precautionary measure that enables the user to recover
	the item from the Deleted Items folder later, if necessary.
	
	However, if you want to bypass this step and permanently delete the item, you can
	select the item, and then press SHIFT+DELETE simultaneously. This deletes the
	item permanently, and the item cannot be recovered. In Microsoft Outlook 97 and
	Microsoft Outlook 98, when items are marked for deferred delivery, those items
	are moved to the Sent Items folder. In Outlook 2000, when items are marked for
	deferred delivery, those items are moved to the Outbox. Outlook 97 and Outlook
	98 do not exhibit the issue that is described in the "Symptoms" section of this
	article. Only Outlook 2000 is affected.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q248253 XCON: Deferred Delivery Problems in Exchange Server 5.5 SP3 MTA
	
	  Q188696 XCLN: Deferred Delivery Options for Exchange/Outlook Clients
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
