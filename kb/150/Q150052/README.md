---
layout: page
title: "Q150052: XCLN: Simple MAPI Not Supported as an Exchange 4.0 Service"
permalink: kb/150/Q150052/
---

## Q150052: XCLN: Simple MAPI Not Supported as an Exchange 4.0 Service

	Article: Q150052
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): exc4
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange does not support running Simple Messaging Application
	Programming Interface (MAPI) applications that were developed to run as a
	service on Windows NT.
	
	MORE INFORMATION
	================
	
	All MAPI applications require a profile to create a session on Microsoft
	Exchange. Extended MAPI is suggested as a solution because the Application
	Programming Interface (API) contains tools to create profiles and allow login
	from a service.
	
	For more information concerning the MAPI 1.0 interface, please refer to the Win32
	SDK.
	
	Additional query words: 4.00 SMAPICMC
	
	======================================================================
	Keywords          : exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
