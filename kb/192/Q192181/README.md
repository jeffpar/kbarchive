---
layout: page
title: "Q192181: XADM: Renewing User Certificates in Key Management Server"
permalink: /kb/192/Q192181/
---

## Q192181: XADM: Renewing User Certificates in Key Management Server

	Article: Q192181
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Key Management Server, a user's certificate has a valid lifetime of 18 months
	by default. After that time, it will expire. Before this happens, the
	certificate has to be renewed.
	
	At approximately 12 months, the Exchange client or Outlook client will
	automatically remind the user to renew their certificate. The user will receive
	the following message when they log on to advanced security:
	
	  Your security certificates are approaching expiration.
	  Do you want to send a certificate update request to the
	  Key Management Server?
	
	No administrator intervention is required. If the user clicks Yes, the request is
	sent to the Key Management Server. The new certificate is sent back in e-mail
	and is valid for another 18 months.
	
	MORE INFORMATION
	================
	
	If the user chooses not to update the certificate, then they will be prompted
	again the next time they log on to advanced security. If they let the
	certificate expire, they need to be re-enrolled to be able to use advanced
	security.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
