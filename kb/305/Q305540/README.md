---
layout: page
title: "Q305540: XCON: Accented Characters in Subject Field Are Modified"
permalink: /kb/305/Q305540/
---

## Q305540: XCON: Accented Characters in Subject Field Are Modified

	Article: Q305540
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Mail Service to send a message to, or receive a message
	from, another SMTP host, if the Subject field contains an accented character,
	this character is unexpectedly modified.
	
	CAUSE
	=====
	
	This behavior can occur if the Character Set configuration for MIME and Non-MIME
	are set to a value other than Western European (ISO-8859-1).
	
	RESOLUTION
	==========
	
	Use the Exchange Administrator tool to go to Internet Mail Service properties.
	Click the Internet Mail tab, and then set the MIME and Non-MIME character sets
	to Western European (ISO-8859-1).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
