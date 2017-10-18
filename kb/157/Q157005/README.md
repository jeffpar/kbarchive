---
layout: page
title: "Q157005: XCLN: Invalid Page Fault in Mapi32.dll"
permalink: kb/157/Q157005/
---

## Q157005: XCLN: Invalid Page Fault in Mapi32.dll

	Article: Q157005
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0; :4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange for Windows 95, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Simple MAPI function MAPISendMail(), its data structure
	contains a Cc: recipient, the MAPI_DIALOG flag is set, and the simple SendNote
	UI is turned ON, the client or application calling this function might generate
	an invalid page fault or general protection fault in module Mapi32.dll.
	
	CAUSE
	=====
	
	A parameter that is passed into the function that displays the Send Note UI is
	incorrectly set to NULL and this causes the fault in Mapi32.dll
	
	
	WORKAROUND
	==========
	
	Do not set the MAPISendMail() MAPI_DIALOG flag, do not turn on the simple
	SendNote UI flag, or do not include a Cc: recipient.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: Access95 Access 7.00
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword8 kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0; :4.0
	
	=============================================================================
	
