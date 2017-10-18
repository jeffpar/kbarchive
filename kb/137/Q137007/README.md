---
layout: page
title: "Q137007: Cannot Delete Default Folders in Microsoft Exchange"
permalink: kb/137/Q137007/
---

## Q137007: Cannot Delete Default Folders in Microsoft Exchange

	Article: Q137007
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add a new set of personal folders to your active profile in Microsoft
	Exchange, you can configure Microsoft Exchange so that new mail is delivered to
	the new set of personal folders. When you do so, Inbox, Outbox, and Sent Items
	folders are created in addition to the existing Deleted Items folder.
	
	If you then configure Microsoft Exchange so that new mail is delivered to a
	different set of personal folders, the Inbox, Outbox, and Sent Items folders are
	not removed from the personal folders that new mail was previously delivered to.
	If you attempt to delete these three folders or the Deleted Items folder, the
	following error message is displayed:
	
	  An object could not be deleted. You cannot delete the Inbox, Outbox, Deleted
	  Items, or Sent Items folders.
	
	RESOLUTION
	==========
	
	To remove the Inbox, Outbox, and Sent Items folders from a set of personal
	folders, you must remove the set of personal folders and then add it back again.
	If the set of personal folders contains messages that you want to keep, move
	those messages to a different folder, remove the set of personal folders and add
	it back again, and then move the messages back to their original location.
	
	To remove a set of personal folders and then add it back again, follow these
	steps:
	
	1. Double-click the Inbox icon on the desktop to start Microsoft Exchange.
	
	2. On the Tools menu, click Services.
	
	3. Click the set of personal folders that you want to remove, and then click
	  Remove.
	
	4. Click Add.
	
	5. Click Personal Folders, and then click OK.
	
	6. Type a filename for the new personal folders file in the File Name box, click
	  Open, and then click OK.
	
	7. Click OK.
	
	You can rename the set of personal folders by using the right mouse button to
	click the Personal Folders icon, and then clicking Rename on the menu that
	appears.
	
	MORE INFORMATION
	================
	
	In Microsoft Exchange, your profile contains one set of personal folders by
	default. This set of personal folders is called Personal Folders, and contains
	an Inbox, Outbox, Sent Items, and Deleted Items folder. In addition to this
	default set of personal folders, you can add a new set of personal folders by
	clicking Services on the Tools menu, clicking Add, and then clicking Personal
	Folders in the list of available information services. The new set of personal
	folders contains only a Deleted Items folder by default.
	
	All new mail is delivered to the Inbox folder in Personal Folders by default.
	When you add a new set of personal folders, you can configure Microsoft Exchange
	so that new mail is delivered to the new set of personal folders. To do so,
	follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the Delivery tab.
	
	3. Click the set of personal folders to which you want new mail to be delivered.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
