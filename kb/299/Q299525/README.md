---
layout: page
title: "Q299525: HOWTO: Set Up SSL Using IIS 5.0 and Certificate Server 2.0"
permalink: /kb/299/Q299525/
---

## Q299525: HOWTO: Set Up SSL Using IIS 5.0 and Certificate Server 2.0

	Article: Q299525
	Product(s): Internet Information Server
	Version(s): 2.0,5.0
	Operating System(s): 
	Keyword(s): kbgrpdsvc
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Certificate Services, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up Secure Sockets Layer (SSL) on an Internet
	Information Services (IIS) version 5.0 computer, using Certificate Server 2.0 as
	the certificate provider.
	
	MORE INFORMATION
	================
	
	1. First, the Web server must make a certificate request. To do this, follow
	  these steps:
	
	  a. Start the Internet Service Manager (ISM), which loads the Internet
	     Information Server snap-in for the Microsoft Management Console (MMC).
	
	  b. Right-click the Web site on which you want to enable SSL, and click
	     Properties.
	
	  c. Click the Directory Security tab, and then click Server Certificate to
	     start the Web Server Certificate Wizard.
	
	  d. Click Next to start the wizard, and select Create a new certificate.
	
	  e. Click Next, and select Prepare the request now, but send it later.
	
	  f. Click Next, and give your certificate a name. You may want to match it
	     with the name of the Web site. Now, select a bit length; the higher the
	     bit length, the stronger the certificate encryption. Select Server Gated
	     Cryptography if your users may be coming from countries with encryption
	     restrictions.
	
	  g. Click Next, and type your Organization and Organizational Unit. These
	     values do not need to match any Active Directory entries.
	
	  h. Click Next, and enter the common name. The common name must match the
	     fully qualified domain name of the server as listed in DNS. For example,
	     if the URL is https://www.mydomain.com/securedir, then the common name
	     must be www.mydomain.com.
	
	  i. Click Next, and type your country, state, and city or locality. Type the
	     full name of your state here; do not abbreviate.
	
	  j. Click Next, and select a location and file name to save your request to.
	
	  k. Click Next twice, and then click Finish to close the wizard.
	
	2. Process your request through Certificate Server. To do this, follow these
	  steps:
	
	  a. Browse to http://CAServerName/CertSrv, and select Request a certificate.
	
	     NOTE: Do not use "localhost" as the server name. If you browse from the
	     Certificate Server computer, use the computer name instead.
	
	  b. Click Next and select Advanced request.
	
	  c. Click Next and select Submit a certificate request using a base64 encoded
	     PKCS #10 file or a renewal request using a base64 encoded PKCS #7 file.
	
	  d. Click Next, and open the request file that you saved from the Web
	     Certificate Wizard in Notepad. Paste the entire text of the file,
	     including the BEGIN and END lines, into the Base64 Encoded Certificate
	     Request text box.
	
	  e. Click Submit. You may be presented with a Certificate Pending dialog box.
	     If you are prompted for download, skip to step 2j.
	
	  f. Close your browser. On the Certificate Server computer, open the
	     Certification Authority MMC.
	
	  g. Expand the tree underneath the server name, and select the Pending
	     Requests folder. Right-click the certificate that you just submitted
	     (scroll to the right for more information to determine which certificate
	     is yours if there are several pending), click All Tasks, and then click
	     Issue. You may now close the Certification Authority MMC.
	
	  h. Open a new browser window, and browse to the URL that is listed in step a.
	     Select Check on a pending certificate.
	
	  i. Click Next, and select the request that you made earlier.
	
	  j. Click Next, select DER encoded, and then click the Download CA certificate
	     link. Save the certificate file to your Web server's local drive, and
	     close your Web browser.
	
	3. Now, finish processing the request within IIS to install the certificate to
	  the server, and enable SSL.
	
	  a. Open the Internet Information Services MMC, right-click the Web site on
	     which you want to enable SSL, and click Properties.
	
	  b. Click the Directory Security tab, then click Server Certificate.
	
	  c. Click Next, and select Process the pending request and install the
	     certificate.
	
	  d. Click Next, and enter the path and file name of the certificate that you
	     saved in the last section.
	
	  e. Click Next twice, and then click Finish to complete the wizard.
	
	  f. Click the Web Site tab, and make sure that the SSL Port text box is
	     populated with the port you would like SSL to run on. The default (and
	     recommended) port is 443.
	
	  g. Click OK to close the Web site Properties dialog box.
	
	You can now use SSL on your server. Test the setup by connecting to the Web
	site's home page by using https instead of http. You have a valid connection if
	the page comes up and a small lock appears in the status bar in the lower
	right-hand corner of the browser.
	
	REFERENCES
	==========
	
	For additional information on connecting to IIS through SSL, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q290625 HOWTO: IIS5: How to Configure SSL in a Windows 2000 IIS 5 Test
	  Environment Using Certificate Server 2.0
	
	  Q201255 Enabling SGC on Internet Information Server
	
	Additional query words: iis 5 kbiisSearch kbCertSrvSearch
	
	======================================================================
	Keywords          : kbgrpdsvc 
	Technology        : kbiisSearch kbiis500 kbCertServSearch kbZNotKeyword3 kbCertServ200
	Version           : :2.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
