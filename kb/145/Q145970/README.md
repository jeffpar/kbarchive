---
layout: page
title: "Q145970: XCLN: Search Items Don't Match Criteria"
permalink: kb/145/Q145970/
---

## Q145970: XCLN: Search Items Don't Match Criteria

	Article: Q145970
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange MS-DOS client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Find feature to locate a piece of mail, the search results may
	not seem to reflect the syntax of the query.
	
	CAUSE
	=====
	
	This is by design.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange MS-DOS,
	Windows 3.x, Windows 95, and Windows NT clients. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	On the Tools menu there is a Find option that can be used to locate data in the
	user's mailbox. Under the Find option, users can choose an Advanced button to
	perform a more specific search for needed information. One of the options here
	is the choice "Only items that do no match these conditions."
	
	Under normal circumstances, this would cause the search engine to locate data
	that does not match the search criteria on the first query page. However, it
	also has the effect of negating all the query data on the Advanced page.
	
	For example, there is a choice on the Advanced search page to search for Only
	Unread Items. If the user chooses this option and THEN chooses the option to
	also search for items that DO NOT match these conditions, the net effect is to
	search for items that are already read by the user.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : 4.0
	
	=============================================================================
	
