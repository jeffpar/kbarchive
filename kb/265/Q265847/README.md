---
layout: page
title: "Q265847: Err Msg: The Page Cannot Be Displayed . . ."
permalink: /kb/265/Q265847/
---

## Q265847: Err Msg: The Page Cannot Be Displayed . . .

	Article: Q265847
	Product(s): Internet Information Server
	Version(s): 2.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Certificate Services, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect through Secure Sockets Layer (SSL) to an Internet
	Information Services (IIS) 5.0 Web site with Certificate Services 2.0 installed,
	the following error message may be returned to the browser:
	
	  The Page Cannot Be Displayed . . . Cannot Find Server or DNS Error
	
	CAUSE
	=====
	
	The Certificate Services 2.0 Root Certificate Authority Certificate is bound to
	IIS as a Server Certificate. During the installation of Certificate Services
	2.0, a Root Certificate Authority Certificate is generated for the server. This
	certificate is used by Certificate Services only.
	
	RESOLUTION
	==========
	
	1. Use the Server Certificate Wizard in IIS to remove the current certificate.
	
	2. Generate a new request by performing the steps in the following Knowledge
	  Base article:
	
	  Q228821 Generating a Certificate Request File Using Certificate Wizard
	
	3. When a request is generated, perform the following steps to have Certificate
	  Services sign the request and issue a certificate:
	
	  a. On the Web server, open the browser and go to http://<server
	     name>/certsrv.
	
	  b. Select Request a Certificate, select Advanced Request, and then select
	     Submit a certificate request using a base64 encoded PKCS #10 file or a
	     renewal request using a base64 encoded PKCS #7 file.
	
	  c. Cut and paste the information from the file you generated in step 2 into
	     the form, and then click Submit.
	
	     NOTE: Open the file in Notepad, and then copy the contents to the
	     clipboard. Browsing to the file usually fails due to the browser security
	     settings.
	
	  d. Depending on the setting of the policy module under Certificate Services,
	     the certificate will either be issued or it will notify you to check back
	     within 10 days. If necessary, go into the Certificate Service snap-in in
	     Administrative Tools and find the request under the pending certificates.
	     Right-click the request, and then click Issue to issue the certificate.
	
	     NOTE: If the policy module is set to automatically issue the request, this
	     step is not necessary.
	
	  e. Open the browser again, open the CertSrv directory, and then select Check
	     on a pending certificate.
	
	  f. Download the certificate to the local machine. Download the certification
	     path to set up the chain properly. The default name for the certificate is
	     Certnew.cer. For the path, the default is Certnew.p7b.
	
	4. When the file is downloaded, perform the steps in the following Knowledge
	  Base article to install the server certificate:
	
	  Q228836 Installing a New Certificate for Use in SSL/TLS
	
	NOTE: When the server certificate is installed, verify that the server is
	listening on port 443 under the SSL port on the Web site tab to make a
	connection to IIS through SSL.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbCertServSearch kbZNotKeyword3 kbCertServ200
	Version           : :2.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
