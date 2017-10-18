---
layout: page
title: "Q285069: How Do I Fix Blank Certificate List Displayed on IIS5 Web Site?"
permalink: kb/285/Q285069/
---

## Q285069: How Do I Fix Blank Certificate List Displayed on IIS5 Web Site?

	Article: Q285069
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 19-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article answers the following question:
	
	How can I fix the empty or blank client or personal certificate list that is
	displayed when I browse to an Internet Information Server (IIS) 5.0 Web site?
	
	MORE INFORMATION
	================
	
	The empty or blank certificate list is usually displayed because either you have
	no client certificates or you have no client certificates that are trusted by
	IIS. A third, less common reason stems from a corrupted Certificate Trust List
	(CTL) on the client or IIS computer.
	
	The CTL is built from certificates in the Trusted Root Certification Authorities
	certificate store and corruption is usually in the form of two or more
	certificates with the same Issuer identity. These duplicate identities are
	usually caused by repetitive installations of root certificates or certificates
	that are installed to the wrong certificate store.
	
	To eliminate duplicate certificates, follow these steps:
	
	1. Locate the thumbprint of the root Certificate Authority (CA) certificate that
	  was used to sign (that is, verify) the personal or client certificate that
	  you want to use.
	
	  a. In Internet Explorer on the client computer, on the Tools menu, click
	     Internet Options.
	
	  b. Click the Content tab and click Certificates.
	
	  c. Select the Personal certificate store.
	
	  d. Double-click the client certificate that you are attempting to use.
	
	  e. Click the Certification Path tab.
	
	  f. Double-click the top certificate in the path.
	
	  g. Click the Details tab.
	
	  h. Scroll down to the Issuer and Thumbprint extensions and make a note of
	     these values. You will use these to identify and remove duplicate
	     identities on the client computer and IIS server.
	
	2. On the client computer, remove duplicate certificates.
	
	  a. In Internet Explorer on the client computer, on the Tools menu, click
	     Internet Options.
	
	  b. Click the Content tab and click Certificates.
	
	  c. Select the Trusted Root Certification Authorities certificate store.
	
	  d. Double-click the client certificate that you are attempting to use.
	
	  e. Compare the Issuer and Thumbprint fields to the client certificate Issuer
	     and Thumbprint fields. Delete any certificates that MATCH the client
	     certificate's Issuer but that DO NOT match the client certificate's
	     Thumbprint.
	
	NOTE: Also delete any certificates that have different Issuer and Subject (that
	is, Issued To and Issued By) fields, because all certificates in this store must
	be "self-signed" (that is, they must have the same Issuer and Subject).
	
	3. On the IIS computer, add the Certificates (Local Computer) Microsoft
	  Management Console (MMC) snap-in.
	
	  a. Open a new Management Console. To do this, click Start, click Run, type
	     "Mmc.exe" (without the quotation marks), and click OK.
	
	  b. On the Console menu, click Add/Remove Snap-in.
	
	  c. Click Add.
	
	  d. Double-click Certificates and select Local Computer.
	
	  e. Click OK.
	
	4. On the IIS computer, remove duplicate certificates.
	
	  a. Expand the Certificates (Local Computer) node.
	
	  b. Expand the Trusted Root Certification Authorities node.
	
	  c. Expand the Certificates node.
	
	  d. Double-click the client certificate that you are attempting to use.
	
	  e. Compare the Issuer and Thumbprint fields to the client certificate Issuer
	     and Thumbprint fields and delete any certificates that MATCH the client
	     certificate's Issuer but that DO NOT match the client certificate's
	     Thumbprint.
	
	NOTE: Also delete any certificates that have different Issuer and Subject (that
	is, Issued To and Issued By) fields, because all certificates in this store must
	be "self-signed" (that is, they must have the same Issuer and Subject).
	
	Additional query words: blank empty certificate personal client require
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
