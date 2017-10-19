---
layout: page
title: "Q269290: Error: CAPI2 = 80093005 When Installing a WWW Certificate"
permalink: /kb/269/Q269290/
---

## Q269290: Error: CAPI2 = 80093005 When Installing a WWW Certificate

	Article: Q269290
	Product(s): Internet Information Server
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Certificate Services, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a DER-encoded certificate that was issued by a computer that is
	running Microsoft Certificate Server 2.0 on a computer that is running Microsoft
	Windows NT 4.0 Internet Information Server 4.0, you may receive the following
	error in Key Manager:
	
	  The Certificate is invalid. Please double-check that you have chosen the
	  correct file.
	
	  CAPI2 error = 80093005
	
	CAUSE
	=====
	
	Certificate Server 2.0 has two certificate formats: DER and Base64. Windows NT
	4.0 Key Manager cannot process DER-encoded certificates.
	
	RESOLUTION
	==========
	
	When you download the certificate from Certificate Server 2.0, select the Base64
	encoded option instead of DER encoded.
	
	-or-
	
	Convert your existing certificate (.cer) file to Base64 encoded by using the
	following command.
	
	  certutil -encode <source certificate (*.cer)> <output certificate (*.cer)>
	
	MORE INFORMATION
	================
	
	CertUtil is a command line utility that is installed with Certificate Server 1.0
	and 2.0.
	
	
	Additional query words: Exchange POP3 IMAP4 SMTP TLS renew
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ200
	Version           : :2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
