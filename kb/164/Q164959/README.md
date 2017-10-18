---
layout: page
title: "Q164959: XADM: Encryption Does Not Work in Public Folders"
permalink: kb/164/Q164959/
---

## Q164959: XADM: Encryption Does Not Work in Public Folders

	Article: Q164959
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Advanced Security in Microsoft Exchange Server, you can encrypt a
	message and send it to a public folder, but no mailboxes, other than the
	originating mailbox, can open the message.
	
	MORE INFORMATION
	================
	
	To be able to send a message to a public folder, the public folder must have the
	Hide from Address Book check box in the Advanced tab cleared for that public
	folder's property page in the Microsoft Exchange Administrator program or you
	must know the one-off address. After this is done, the users can select the
	public folder as a recipient from the global address list.
	
	If users have Advanced Security enabled, they can send an encrypted message to a
	public folder. If they do, then only the mailbox that originally sent the
	message can open that encrypted message.
	
	No warning dialog box appears when sending an encrypted message to a public
	folder and other mailboxes that try to open the encrypted message receive the
	following error message:
	
	  This item has been encrypted. You do not have the security key necessary to
	  unencrypt this item.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	versions 4.0 and 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
