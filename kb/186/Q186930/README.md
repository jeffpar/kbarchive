---
layout: page
title: "Q186930: XFOR: Cannot Log On After Upgrading to Microsoft Chat 2.1"
permalink: kb/186/Q186930/
---

## Q186930: XFOR: Cannot Log On After Upgrading to Microsoft Chat 2.1

	Article: Q186930
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2.1,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Commercial Internet System version 2.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade to Microsoft Chat 2.1, you may be unable to log on to a server
	that is running the Microsoft Exchange Chat Service version 5.5. You may receive
	a message indicating that your logon information is incorrect, even though you
	were able to log on successfully before upgrading to Microsoft Chat 2.1.
	
	CAUSE
	=====
	
	This problem occurs when your logon information is encrypted incorrectly during
	authentication. When this occurs, the Exchange Chat Service is unable to
	authenticate your logon information, even though the information is correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMCISSearch
	Version           : WINDOWS:2.1,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
