---
layout: page
title: "Q184737: XADM: Cannot Start Information Store and MTA After Setup /R Usin"
permalink: kb/184/Q184737/
---

## Q184737: XADM: Cannot Start Information Store and MTA After Setup /R Usin

	Article: Q184737
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Exchange Server using service account "A" and then
	later reinstall the server using a different service account ("B" for example),
	when you start the information store and the message transfer agent (MTA), you
	will receive the following error message:
	
	  The Microsoft Exchange Information Store service returned service
	  specific error 4021" (DS_E_INSUFFICIENT_ACCESS_RIGHTS)
	
	  Could not start the Microsoft Exchange MTA service on \\server name,
	  Error2140: an internal Windows NT error occurred.
	
	CAUSE
	=====
	
	The service account you specified during the reinstall does not have permissions
	in the Exchange Server hierarchy.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Perform a Remove All.
	
	2. Reinstall Setup /r using the original service account.
	
	3. Restore data from tape.
	
	All services should now start.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
