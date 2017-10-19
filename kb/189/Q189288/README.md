---
layout: page
title: "Q189288: XADM: Exchange Administrator Generates Dr. Watson Errors"
permalink: /kb/189/Q189288/
---

## Q189288: XADM: Exchange Administrator Generates Dr. Watson Errors

	Article: Q189288
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Exchange Server Administrator program (Admin.exe),
	it generates an immediate Dr Watson error. No additional errors are recorded in
	the application log.
	
	CAUSE
	=====
	
	The Windows NT system path has been altered or deleted.
	
	WORKAROUND
	==========
	
	In order to operate, Admin.exe must have full access to %SystemRoot%\system32
	and %SystemRoot%.
	
	To verify this, at a command prompt, type PATH <Enter>. Be sure that this
	displays the actual path (for example: C:\WINNT\SYSTEM32;C:\WINNT) and not the
	system variables referenced above.
	
	The system path can be changed in the Control Panel Systems icon on the
	Environment tab. When this information is accurate, the Exchange Server
	Administration Program can be viewed without a Dr. Watson.
	
	Additional query words: PATH WATSON ADMIN
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
