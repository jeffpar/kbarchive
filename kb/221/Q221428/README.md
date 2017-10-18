---
layout: page
title: "Q221428: XFOR: Mail Forwarded from GroupWise to Exchange Loses Flag"
permalink: kb/221/Q221428/
---

## Q221428: XFOR: Mail Forwarded from GroupWise to Exchange Loses Flag

	Article: Q221428
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Novell GroupWise user forwards mail that originated in Microsoft Exchange
	Server to another Exchange Server user, the Importance and Sensitivity settings
	may not be retained. These settings can be found in the Header.txt file that is
	attached to the message. This behavior does not occur with messages that
	originate in GroupWise.
	
	CAUSE
	=====
	
	This behavior can occur because the Novell application programming interface
	(API) gateway does not process the importance and sensitivity information
	properly.
	
	MORE INFORMATION
	================
	
	For additional information on this issue, refer to Novell's Web site at:
	
	  http://support.novell.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
