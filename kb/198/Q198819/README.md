---
layout: page
title: "Q198819: Chat: CREATE Command Does Not Accept Capital Letters for Modes"
permalink: kb/198/Q198819/
---

## Q198819: Chat: CREATE Command Does Not Accept Capital Letters for Modes

	Article: Q198819
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Chat clients in IRCX mode will receive an error when creating a channel using a
	capital letter for the mode.
	
	For example, if you type:
	
	  CREATE #channel L 50
	
	The Microsoft Exchange Chat Service will respond with the following:
	
	  Server 472 nick L :is unknown mode char to me
	
	CAUSE
	=====
	
	The CREATE command accepts only lower case letters for the mode.
	
	WORKAROUND
	==========
	
	To work around this problem, use lower case letters when typing the CREATE
	command. For example:
	
	  CREATE #channel l 50
	
	STATUS
	======
	
	This behavior is by design, the MODE and CREATE commands accept only lower case
	letters.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
