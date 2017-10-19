---
layout: page
title: "Q198832: XFOR: Wrong Statement in Browse Log Error Message"
permalink: /kb/198/Q198832/
---

## Q198832: XFOR: Wrong Statement in Browse Log Error Message

	Article: Q198832
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Lotus Notes server is shut down, the Browse log of the Microsoft
	Exchange Notes Connector may register an error message due to the connector's
	inability to find the Notes server. This error message is the only error logged
	in the Browse log, has a typographical error, and reads as follows:
	
	  Unable to connect to to the Notes Server
	
	It should read:
	
	  Unable to connect to the Notes Server
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Logging component of the
	Microsoft Exchange Server version 5.5 Notes Connector.
	
	
	Additional query words: NotesMC
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
