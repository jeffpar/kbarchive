---
layout: page
title: "Q161839: XFOR: IMC May Incorrectly Set Time Zone Information"
permalink: /kb/161/Q161839/
---

## Q161839: XFOR: IMC May Incorrectly Set Time Zone Information

	Article: Q161839
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, messages sent from a Microsoft Exchange Server
	Internet Mail Connector (IMC) appear to have been sent 13 hours in the future.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	4.0. Most occurrences of this problem were fixed in Microsoft Exchange Server
	4.0 Service Pack 4. However, this problem may still occur with inbound messages
	that are not in Rich Text Format (RTF) after Service Pack 4 is applied. This
	problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 4.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This problem occurs when all of the following conditions are met:
	
	- The time zone setting on the server is set to "(GMT+1200) Wellington,
	  Auckland".
	
	- The "Automatically adjust clock for daylight saving changes" check box is
	  selected.
	
	- It is daylight saving time in the country where the IMC is located.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
