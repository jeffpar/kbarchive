---
layout: page
title: "Q199429: XFOR: Err Msg: MSEXIMC.DBG, Generated an Application Error"
permalink: kb/199/Q199429/
---

## Q199429: XFOR: Err Msg: MSEXIMC.DBG, Generated an Application Error

	Article: Q199429
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): exc4
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Server Internet Mail Connector (IMC), you
	may receive the following Dr. Watson error message:
	
	  The application, MSEXIMC.DBG, generated an application error. The error
	  occurred on MM/DD/YYY @ hh:mm:ss.sss. The exception generated was c0000005 at
	  address <xxxxxxxx>.
	
	The IMC does not start.
	
	CAUSE
	=====
	
	The administrator mailbox for the IMC may be corrupted.
	
	RESOLUTION
	==========
	
	Use another mailbox as the administrator mailbox, or delete and re-create the
	administrator mailbox.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
