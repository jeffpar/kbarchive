---
layout: page
title: "Q216653: XADM: Certificate Server is Exclusive to Exchange Advanced Secur"
permalink: kb/216/Q216653/
---

## Q216653: XADM: Certificate Server is Exclusive to Exchange Advanced Secur

	Article: Q216653
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using Exchange Server Advanced Security with the Certificate Server
	included with the Windows NT Option Pack, that Certificate Server will only be
	able to issue and verify certificates for Exchange Server Advanced Security.
	
	MORE INFORMATION
	================
	
	Part of the process of setting up Exchange Server Advanced Security to use a
	Certificate Server is to register the Exchange Server policy module
	(Expolicy.dll) with the Certificate Server. After this policy module has been
	registered and the Certificate Server service is restarted, that Certificate
	Server will only be able to issue and verify certificates for Exchange Server.
	
	If you need to have a Certificate Server for issuing and verifying certificates
	outside of Exchange Server, then you will have to install another Certificate
	Server to perform that functionality.
	
	Additional query words: kms certsrv cs ca authority encryption digital signature sig key management km
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword8 kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
