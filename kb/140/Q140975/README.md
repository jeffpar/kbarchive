---
layout: page
title: "Q140975: XFOR: Event ID 4037 An Exception Has Occurred"
permalink: /kb/140/Q140975/
---

## Q140975: XFOR: Event ID 4037 An Exception Has Occurred

	Article: Q140975
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Multiple errors might be logged in the Windows NT Event Viewer Application Log.
	These errors will be as follows
	
	  Event ID: 4037
	  Type: Error
	  Source: MSExchangeIMC
	  Category: Internal Processing
	  An exception has occurred which was handled internally by the Internet Mail
	  Connector. This may have resulted in a message not being delivered.
	
	CAUSE
	=====
	
	The memory heap will be corrupted if a function call fails when moving inbound
	mail from the Exchsrvr\Imcdata\Work directory to the Exchsrvr\Imcdata\In
	directory for any reason other than file name collision. This corruption occurs
	when the event is logged.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4037 Exception
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
