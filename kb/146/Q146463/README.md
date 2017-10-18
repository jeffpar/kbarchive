---
layout: page
title: "Q146463: XGEN: KMS Cannot Write Certificate Revocation List"
permalink: kb/146/Q146463/
---

## Q146463: XGEN: KMS Cannot Write Certificate Revocation List

	Article: Q146463
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Key Management (KM) Server is unable to write the certificate revocation
	list, the following events are logged:
	
	  MSExchange KMS 3013: Unable to get the Microsoft Exchange Key Management
	  Server Site Entry ID when writing the Certificate Revocation List. The error
	  code returned is 8004010f.
	
	  MSExchange KMS 3147: Writing of Certificate Revocation List to the Microsoft
	  Exchange Directory while saving the revocation list failed.
	
	CAUSE
	=====
	
	This problem occurs if the KM Server service account is not configured
	correctly.
	
	RESOLUTION
	==========
	
	To correct this problem, make sure that the service account for the KM Server is
	the Exchange service account.
	
	
	Additional query words: security viewer
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
