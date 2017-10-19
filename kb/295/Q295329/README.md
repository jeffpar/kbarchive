---
layout: page
title: "Q295329: HOWTO: Renew VeriSign SSL Certificate with New Key in IIS 5.0 MM"
permalink: /kb/295/Q295329/
---

## Q295329: HOWTO: Renew VeriSign SSL Certificate with New Key in IIS 5.0 MM

	Article: Q295329
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you try to renew a Secure Sockets Layer (SSL) Server Certificate from
	VeriSign, and you want to generate new keys, the Internet Information Server
	(IIS) 5.0 Microsoft Management Console (MMC) tries to connect to your local
	Certificate Authority that is configured in your domain. This article explains
	how to renew an SSL Server Certificate from VeriSign with a new key set.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new site in the IIS 5.0 MMC Snap-in.
	
	2. Right-click the new site, and then click Properties.
	
	3. On the Directory Security tab, click Server Certificate to request a new
	  certificate.
	
	4. In the Certificate Wizard, retain the same fields as the old certificate so
	  that only your private and public keys change.
	
	5. Cut and paste the newly created Certificate Request information to VeriSign.
	
	6. When you receive a text file for your request, process the pending request in
	  the IIS 5.0 MMC. To do this, follow these steps:
	
	  a. Right-click the new site, and then click Properties.
	
	  b. On the Directory Security tab, click "Process the pending request and
	     install the certificate".
	
	  c. Click the file that you received from VeriSign for your request, and click
	     Next. Verify that the values are correct, click Next, and then click
	     Finish.
	
	This creates a new certificate with new keys. You can use this certificate for
	your old site because the new certificate has the same "Common name" as the old
	certificate, so it still matches your server's name.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
