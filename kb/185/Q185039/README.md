---
layout: page
title: "Q185039: XWEB: Deleting Email Address in OWA Contacts Generates Error"
permalink: kb/185/Q185039/
---

## Q185039: XWEB: Deleting Email Address in OWA Contacts Generates Error

	Article: Q185039
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to delete the e-mail address of a saved Personal Contact in
	Outlook Web Access, you may receive the following error message:
	
	  You must have an e-mail display name associated with the e-mail address.
	
	This will also occur if you attempt to erase an existing e-mail address and leave
	it blank.
	
	WORKAROUND
	==========
	
	To workaround this problem:
	
	1. First, click the Edit E-mail icon next to the e-mail address field on the
	  General properties page of your saved Contact
	
	2. A Java script prompt appears. If an e-mail address appears, either select and
	  delete the address, or simply backspace over the address.
	
	3. Finally, press the spacebar once at the beginning of the e-mail address field
	  to register an entry in the blank e-mail field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Outlook Web Access, Exchange 5.5
	SP 1.
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
