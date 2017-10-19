---
layout: page
title: "Q163120: XCLN: Error Messsage: Could Not Schedule Fax for Transmission"
permalink: /kb/163/Q163120/
---

## Q163120: XCLN: Error Messsage: Could Not Schedule Fax for Transmission

	Article: Q163120
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): exc4
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to send a fax from Microsoft Exchange Client in a profile that
	contains both the Exchange Server Service AND the Windows 95 fax service, you
	may receive the following error messages during the rendering of the fax:
	
	  Could not schedule fax for transmission.
	
	  -OR-
	
	  File system error.
	
	CAUSE
	=====
	
	Norton Antivirus is enabled on the Windows 95 computer, preventing the fax from
	being properly rendered in the Windows/Spool directory.
	
	Also files in the Windows/Spool/Fax directory can prevent the fax from being
	properly rendered.
	
	RESOLUTION
	==========
	
	To resolve this issue, try any of the following:
	
	- Remove or disable Norton Antivirus.
	
	- Create two Microsoft Exchange profiles: one with Exchange Server service
	  (only) and one with only Fax service.
	
	- Remove any files that are in the Windows/Spool/Fax directory.
	
	- This may also happen when a blank fax is attempted to be sent without a
	  subject or cover page. This can be avoided by adding a Subject line or a
	  coverpage to a blank fax.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
