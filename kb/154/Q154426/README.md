---
layout: page
title: "Q154426: XCLN: EFD Cannot Display Initial Subject Text in Reply Item"
permalink: kb/154/Q154426/
---

## Q154426: XCLN: EFD Cannot Display Initial Subject Text in Reply Item

	Article: Q154426
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a two form application (send form and response form) created in
	Microsoft Exchange Electronic Forms Designer, the subject line on the response
	form cannot be set to its initial value when you compose a response to the send
	form.
	
	MORE INFORMATION
	================
	
	If the following conditions are met, when a response to the send form is
	created, the initial value set for the response will not be used:
	
	1. The subject line for the response form must be configured with an initial
	  value for the MAPI_Subject field.
	
	2. The send form is set to use the response form as the Item Type to be Used for
	  the Reply Event.
	
	3. The Initialize New Items When Created option is selected.
	
	The subject line will be blank or the subject line will contain a "RE:" and the
	text from the subject line of the send form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	To fix this problem, you must manually copy Vbfsm.dll to your local hard disk.
	
	Additional query words: efd subject line text
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
