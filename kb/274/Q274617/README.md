---
layout: page
title: "Q274617: XCLN: Opening Many Contacts Folders in One Outlook Address Book"
permalink: /kb/274/Q274617/
---

## Q274617: XCLN: Opening Many Contacts Folders in One Outlook Address Book

{% raw %}

	Article: Q274617
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You are able to open multiple Contacts folders from different Exchange Server
	5.5 mailboxes in one Outlook Address Book as long as you have the correct
	permissions to access the additional mailboxes.
	
	MORE INFORMATION
	================
	
	To open Contacts folders from more than one mailbox, follow these steps:
	
	1. Create a profile for one mailbox, for example, <Mailbox1>, and then add
	  the Outlook Address Book to the profile.
	
	2. Start Outlook and log on to <Mailbox1>. Right-click the Contacts
	  folder, and then click Properties.
	
	3. Click the Outlook Address Book tab, and then click to select the "Show this
	  folder as an e-mail Address Book" check box.
	
	4. Quit Outlook.
	
	5. Open the profile for <Mailbox1>, remove the Exchange Server service
	  from the profile, then add it again.
	
	6. Start Outlook and log on to a different mailbox, for example,
	  <Mailbox2>. Right-click the Contacts folder, and then click Properties.
	
	7. Click the Outlook Address Book tab, and then click to select the "Show this
	  folder as an e-mail Address Book" check box.
	
	You are now able to access <Mailbox1> and <Mailbox2>. To verify that
	you can do this, check the properties for the Outlook Address Book.
	
	NOTE: To access both Contacts folders successfully, the associated Windows
	account must have the correct permissions to access both mailboxes.
	
	Additional query words: OL2000 9.0 9 0
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
