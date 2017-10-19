---
layout: page
title: "Q247943: XCLN: Err Mssg: Outlook Could Not Update Your Local Calendar"
permalink: /kb/247/Q247943/
---

## Q247943: XCLN: Err Mssg: Outlook Could Not Update Your Local Calendar

	Article: Q247943
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 31-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Outlook and connect to an Exchange Server computer, you may receive
	the following error message:
	
	  Outlook could not update your local calendar.
	
	NOTE: This problem can only be reproduced when you run Outlook on the same
	Exchange Server computer that Outlook is connecting to, and when offline folders
	(.ost) are configured.
	
	CAUSE
	=====
	
	The problem is caused by incompatibilities between the Emsmdb32.dll file on the
	Exchange Server computer, and the Outlook 2000 Emsmdb32.dll file.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Run the Outlook client from a different computer.
	
	  -or-
	
	- Install Outlook on the server only when all Exchange Server services have
	  stopped.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
