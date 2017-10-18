---
layout: page
title: "Q166568: XCLN: Message Created Using MAPI Cannot Be Opened"
permalink: kb/166/Q166568/
---

## Q166568: XCLN: Message Created Using MAPI Cannot Be Opened

	Article: Q166568
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A message created programmatically using MAPI IMsgOnIStg code cannot be opened
	by Capone/Outlook in Microsoft Exchange Server 5.0.
	
	CAUSE
	=====
	
	The last property, PR_RENDERING_POSITION, is not written to the attachment. When
	you attempt to open the message, a failure occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: MAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
