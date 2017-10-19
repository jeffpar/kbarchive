---
layout: page
title: "Q299495: Explanation of Passport Certificate Dialog Boxes from Browser"
permalink: /kb/299/Q299495/
---

## Q299495: Explanation of Passport Certificate Dialog Boxes from Browser

	Article: Q299495
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The first time a Passport user connects to a Passport express purchase Secure
	Sockets Layer (SSL) page, the browser may display an acceptance dialog box for
	the security certificate.
	
	MORE INFORMATION
	================
	
	This is required for SSL-served pages. Users must accept this certificate to
	continue. During the sign-in process at the Passport Login server, there is
	another SSL connection that writes the "ticket-granting" cookie. It also
	requires the acceptance of a certificate. Your own SSL-served pages may require
	yet another certificate-acceptance step. After certificates have been accepted
	by a client browser user, the dialog box does not appear again unless the
	certificates expire or are specifically revoked by the certificate-issuing
	agency.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	
