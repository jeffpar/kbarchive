---
layout: page
title: "Q146464: XCLN: Err Msg: Unable to Obtain a Valid...Revocation List"
permalink: kb/146/Q146464/
---

## Q146464: XCLN: Err Msg: Unable to Obtain a Valid...Revocation List

	Article: Q146464
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get the following error when you try to encrypt and/or sign messages:
	
	  Unable to obtain a valid certificate revocation list. Digital signatures
	  cannot be trusted at this time.
	
	CAUSE
	=====
	
	The Key Management (KM) Server can not write the certification revocation list
	to the directory. This happens when the KM Server service account is not set
	correctly.
	
	RESOLUTION
	==========
	
	Make sure the service account for the KM Server is the Microsoft Exchange
	service account.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
