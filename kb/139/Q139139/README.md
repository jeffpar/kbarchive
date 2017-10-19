---
layout: page
title: "Q139139: Cannot Send E-mail to Address Containing Exclamation Point"
permalink: /kb/139/Q139139/
---

## Q139139: Cannot Send E-mail to Address Containing Exclamation Point

	Article: Q139139
	Product(s): The Microsoft Network
	Version(s): 1.0,1.05,1.2,1.3,2.0,2.5,2.6
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.0, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send e-mail to an address that includes an exclamation point (!), you
	will receive a non-delivery message from the System Administrator stating
	Mailbox not available. For example, you would be unable to successfully send
	e-mail to the following address:
	
	  tac!jms!smith@txttac.attmail.com
	
	CAUSE
	=====
	
	The Microsoft Network does not allow an exclamation point as part of an e-mail
	address. An exclamation point indicates path information within the recipient's
	internal e-mail system and is not part of Internet e-mail syntax.
	
	RESOLUTION
	==========
	
	When someone sends you an e-mail message, the message header contains that
	person's valid e-mail address. Use that e-mail address.
	
	Additional query words: 1.00 1.30 2.00 2.50 2.60 kbimu
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN260 kbMSN105 kbMSN250 kbMSN120
	Version           : :1.0,1.05,1.2,1.3,2.0,2.5,2.6
	Issue type        : kbprb
	
	=============================================================================
	
