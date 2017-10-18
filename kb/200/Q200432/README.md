---
layout: page
title: "Q200432: XFOR: Notes Sent Time Migrates Improperly, Shifts Backward"
permalink: kb/200/Q200432/
---

## Q200432: XFOR: Notes Sent Time Migrates Improperly, Shifts Backward

	Article: Q200432
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate a Lotus Notes user from the Traditional Chinese (CHT) version
	with the calendar set to Taiwanese and who has sent items in the Sent folder to
	the U.S. version of Exchange Server, the sent date of these messages will be
	incorrect when viewed on Exchange Server using Outlook.
	
	When you compare the migrated Sent Time on Exchange Server to the original Sent
	Time from Notes, the Exchange Server time is shifted eight hours back.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	
	
	MORE INFORMATION
	================
	
	Taiwanese Calendar
	------------------
	
	The Taiwanese calendar year is equal to the Western calendar year minus 11 years.
	It was set up by Taiwan. The People's Republic of China (PRC) does not use this
	system.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
