---
layout: page
title: "Q186812: PRB: Error Message: 403.7 Forbidden: Client Certificate Required"
permalink: kb/186/Q186812/
---

## Q186812: PRB: Error Message: 403.7 Forbidden: Client Certificate Required

	Article: Q186812
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp4037 kbProd2Web
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to establish communication with a Web site that requires client
	authentication, you may receive the following error messages:
	
	  HTTP Error 403
	  403.7 Forbidden: Client certificate required
	
	CAUSE
	=====
	
	This error occurs when the resource that you are trying to access requires that
	your browser has a client Secure Sockets Layer (SSL) certificate that the server
	recognizes. This is used for authenticating you as a valid user of the resource.
	Contact the administrator of the Web server to obtain a valid client
	certificate.
	
	There are several possible causes of this problem:
	
	- The root certificate (certificate authority certificate) of the client
	  certificate issuing server is not installed on the computer that is running
	  IIS.
	
	  -or-
	
	- The client certificate has expired or the effective time has not been
	  reached.
	
	  -or-
	
	- The client certificate has been revoked.
	
	RESOLUTION
	==========
	
	Depending on the cause of your problem, try one of the following resolutions:
	
	- Download the root server certificate in a browser on the server computer. Run
	  the Iisca.exe command line utility that is located in the Inetsrv directory.
	
	- Check the effective date on the client certificate and make sure that the
	  date and time has arrived. Check the expiration date and make sure that the
	  certificate has not expired.
	
	- Contact your certificate authority to see if your certificate has expired.
	
	MORE INFORMATION
	================
	
	Microsoft Internet Explorer 4.0 and IIS 4.0 store their root certificates in
	different locations of the registry. The Iisca.exe utility synchronizes the two
	root certificate stores.
	
	Additional query words: 403.7 IE Client SSL
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp4037 kbProd2Web 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
