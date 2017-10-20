---
layout: page
title: "Q246795: XCLN: Automatic Name Checking Stops on Some Outlook Clients"
permalink: /kb/246/Q246795/
---

## Q246795: XCLN: Automatic Name Checking Stops on Some Outlook Clients

{% raw %}

	Article: Q246795
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:5.5; :
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The automatic Check Name feature of Outlook 98 or Outlook 2000 may stop working
	for some users after you create a new information store or run the Exmerge
	utility to import mailbox data to a new information store.
	
	CAUSE
	=====
	
	The profiles for the affected users contain the Outlook Address Book. If you
	create a new information store, you create a new set of mailbox folders. The
	Outlook Address Book service is tied to the Contacts folder of the previous
	information store. If this link is broken, the Check Name feature does not work.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the Outlook Address Book service from the
	profiles of the affected users, and then re-add it to the profiles of the
	affected users.
	
	MORE INFORMATION
	================
	
	To add one or more contacts folders to the profile that can be used for
	automatic name resolution:
	
	1. On the Tools menu, click Services, and then click the Addressing tab.
	
	2. Click Add, and then click the appropriate contacts folder.
	
	3. Click Close. Click either the Move up or Move down button to change the order
	  in which these address books are checked for name resolution.
	
	4. Click OK.
	
	Additional query words: AutoCheckName
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:; winnt:5.5; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
