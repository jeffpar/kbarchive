---
layout: page
title: "Q228836: Installing a New Certificate for Use in SSL/TLS"
permalink: kb/228/Q228836/
---

## Q228836: Installing a New Certificate for Use in SSL/TLS

	Article: Q228836
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to provide secure communications (SSL/TLS) in Internet Information
	Services (IIS) 5.0, a server certificate is required on the site you want to
	provide the service on.
	
	MORE INFORMATION
	================
	
	Before the following steps can be completed, you must first generate a
	certificate request, and then send it to an online authority (certificate
	authority). If you have not done this, perform the steps in the following
	Microsoft Knowledge Base article:
	
	  Q228821 Generating a Certificate Request File Using Certificate Wizard in IIS
	  5.0
	
	When you receive your response file from the online authority, you will need to
	install this on the Web server.
	
	NOTE: The response file contains your public key that has been signed by the
	authority. A client can successfully connect to the site without trusting the
	authority who issued the server certificate. However, if the client does not
	trust the authority, a security prompt that says "The security certificate was
	issued by a company you have not chosen to trust. View the certificate to
	determine whether you want to trust the certifying authority." appears each time
	the client connects. The client is given the option to continue or view the
	certificate at this point.
	
	To install the response file, follow these steps:
	
	1. Open Internet Services Manager, or the custom MMC containing the Internet
	  Information Services snap-in.
	
	2. Expand Internet Information Services (if needed) and browse to the Web site
	  you have a pending certificate request on.
	
	3. Right-click on the site and then click Properties.
	
	4. Click the Directory Security tab.
	
	5. Under the Secure Communications section, click Server Certificate.
	
	6. On the Web Site Certificate Wizard, click Next.
	
	7. Choose to Process the Pending Request and Install the Certificate. Click
	  Next.
	
	8. Type in the location of the certificate response file (you may also browse to
	  the file), and then click Next.
	
	9. Read the summary screen to be sure that you are processing the correct
	  certificate, and then click Next.
	
	10. You will see a confirmation screen. When you have read this information,
	  click Next.
	
	You now have a server certificate installed. You may want to test the Web site to
	ensure that everything is working correctly. Be sure to use https:// when you
	test connectivity to the site.
	
	Additional query words: SSL TLS certificate https iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
