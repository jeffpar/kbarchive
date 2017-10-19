---
layout: page
title: "Q184187: XADM: Unable to Connect to Server, Licenses Still Available"
permalink: /kb/184/Q184187/
---

## Q184187: XADM: Unable to Connect to Server, Licenses Still Available

	Article: Q184187
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Microsoft Exchange Server computer, you may
	receive an error message indicating that there are no more client access
	licenses available. This problem occurs even though the number of users
	connected to the server does not exceed the number of client access licenses
	that have been added on the server.
	
	CAUSE
	=====
	
	This problem can occur when the "Not for Resale" (NFR) version of Microsoft
	Windows NT Server or the version of Windows NT Server that is included with the
	Microsoft Developer Network (MSDN) is installed on the computer running Exchange
	Server. The NFR version of Windows NT Server is limited to five users and the
	version of Windows NT Server that is included with MSDN is limited to ten users.
	
	WORKAROUND
	==========
	
	To work around this problem, install the retail version of Windows NT Server.
	For information about doing so, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q142391 Cannot Upgrade NFR or MSDN Windows NT 4.0 to Retail
	
	
	MORE INFORMATION
	================
	
	To determine if you are running the NFR or MSDN version of Windows NT Server,
	double-click Licensing in Control Panel. If you are running the NFR or MSDN
	version of Windows NT Server, the following message is displayed:
	
	  Not available in NFR (Not for Resale)/MSDN Edition of Windows NT
	  Server.
	
	Additional query words: cal
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
