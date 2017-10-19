---
layout: page
title: "Q268753: PRB: CDO Cannot Access Secure Properties"
permalink: /kb/268/Q268753/
---

## Q268753: PRB: CDO Cannot Access Secure Properties

	Article: Q268753
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbCDO121
	Last Modified: 04-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When certain properties, such as secure properties, are accessed through the
	Fields collection, Collaboration Data Objects (CDO) may return the
	MAPI_E_NOT_FOUND error (&H8004010F), even though the properties exist and
	are accessible through the Extended Messaging Application Programming Interface
	(MAPI).
	
	CAUSE
	=====
	
	CDO uses a local cache of properties on objects. If a property is not found in
	the cache, CDO does not pass on the request to the underlying provider. Instead,
	it returns MAPI_E_NOT_FOUND.
	
	RESOLUTION
	==========
	
	Use Extended MAPI to retrieve the property.
	
	NOTE: Because Extended MAPI can only be used from Microsoft Visual C++, you will
	need to write a dynamic-link library (DLL) that encapsulates the calls if the
	property is needed from Microsoft Visual Basic.
	
	MORE INFORMATION
	================
	
	The cache that CDO uses is filled through a call to the MAPI GetProps function
	with a NULL parameter. Although this call is designed to request all properties
	on an object, the properties that are actually returned are at the discretion of
	the underlying provider. In particular, secure properties, whose property tag
	lies in the range 0x6600 to 0x67FF, are rarely returned in this call.
	
	This is not a problem in Extended MAPI, where a secure property may be
	individually requested.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCDO121 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
