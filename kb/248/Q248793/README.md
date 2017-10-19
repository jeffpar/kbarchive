---
layout: page
title: "Q248793: XCLN: Renaming Mailbox That Is Displayed in Outlook"
permalink: /kb/248/Q248793/
---

## Q248793: XCLN: Renaming Mailbox That Is Displayed in Outlook

	Article: Q248793
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; :
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to rename a mailbox in Outlook 97, Outlook 98, and
	Outlook 2000. In Outlook 97, the mailbox name is displayed as follows:
	
	  mailbox - {display name}
	
	In Outlook 98 and Outlook 2000, the mailbox name is displayed as follows:
	
	  Outlook Today - [mailbox - {display name}]
	
	MORE INFORMATION
	================
	
	You can change the first name, last name, display name, and alias of a user by
	using the Microsoft Exchange Server Administrator program. However, if you
	change a user's name in Microsoft Exchange Server and do not change the user's
	display name, when the user logs on to the mailbox by using Outlook, the old
	name of the mailbox is still displayed in Outlook. During the profile creation
	process, Outlook resolves the alias name that is specified in the Display Name
	box for the mailbox, and then uses that display name in the Outlook user
	interface.
	
	Because this can lead to confusion, ensure that the mailbox is renamed in the
	Outlook user interface. The following procedure applies to Outlook 97, Outlook
	98, and Outlook 2000. Either the user or an administrator can perform this
	procedure. Make sure that you perform this procedure after you have renamed the
	mailbox on the Exchange Server computer.
	
	1. Log on to the computer that the user's Outlook profile is located on. Make
	  sure that Outlook is not running.
	
	2. Click the Start button, point to Settings, and then click Control Panel.
	
	3. Double-click either Mail or Mail and Fax, as applicable.
	
	4. Click Show Profiles.
	
	5. Click the profile that you use to access that mailbox.
	
	6. Click Properties, click Exchange Server, and then click Properties again.
	
	7. Under Mailbox, type the new alias name.
	
	8. Click Check Name.
	
	9. The alias name is resolved to the new display name of the user.
	
	10. Click Apply, and then click OK.
	
	This procedure does not rename the profile. If multiple users use the computer,
	the user must remember to select the correct profile.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q198469 XCLN: How to Rename the Inbox in Outlook
	
	Additional query words: RENAME MAILBOX
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000; :
	Issue type        : kbhowto
	
	=============================================================================
	
