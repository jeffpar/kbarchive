---
layout: page
title: "Q161944: XCLN: Outlook Users Can't Access/Update Public Free/Busy Data"
permalink: /kb/161/Q161944/
---

## Q161944: XCLN: Outlook Users Can't Access/Update Public Free/Busy Data

	Article: Q161944
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using Outlook and you try to view the free/busy times of someone
	who is in another site, you may be notified that you cannot access the calendar
	folder.
	
	When attempting to modify a calendar item the following error message appears:
	
	  Unable to update public free/busy data.
	
	CAUSE
	=====
	
	The error happens when a call is made to OpenItem on the public store with the
	entry ID of your public free/busy message. The entry ID is correct, but the call
	returns MAPI_E_CALL_FAILED.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0.
	
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange400 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
