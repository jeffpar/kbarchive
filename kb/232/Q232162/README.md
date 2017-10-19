---
layout: page
title: "Q232162: Incorrect CRL on Certificates Issued by Certificate Services 2.0"
permalink: /kb/232/Q232162/
---

## Q232162: Incorrect CRL on Certificates Issued by Certificate Services 2.0

	Article: Q232162
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a server certificate for Microsoft Internet Information Services (IIS) 5.0
	is issued using Microsoft Certificate Services version 2.0, the CRL (Certificate
	Revocation List) may be incorrect. For example, the CRL location may point to an
	internal URL (such as the NetBIOS name of the Web server, not the DNS name).
	Although the NetBIOS name will be acceptable for local (intranet) users,
	Internet users will not be able to check for certificate revocation. This may
	cause the applications that check for certificate revocation (for example
	Internet Explorer 5.0 can enable this) to fail when trying to negotiate a secure
	connection (https://) to your Web site.
	
	WORKAROUND
	==========
	
	To check to see where the CRL is pointing to on your server certificate(s),
	start the MMC containing the Certificates snap-in that points to Computer
	certificates. If you do not already have one installed for viewing the
	computer's certificates store, perform the following steps:
	
	1. Click Start, and then click Run.
	
	2. Type "MMC.EXE" (without the quotation marks) and click OK.
	
	3. Click Console in the new MMC you created, and then click Add/Remove Snap-in.
	
	4. In the new window, click Add.
	
	5. Highlight the Certificates snap-in, and then click Add.
	
	6. Choose the Computer option and click Next.
	
	7. Select Local Computer, and then click OK.
	
	8. Click Close, and then click OK.
	
	9. You have now added the Certificates snap-in, which will allow you to work
	  with any certificates in your computer's certificate store. You may want to
	  save this MMC for later use.
	
	Now that you have access to the Certificates snap-in, open Personal and then
	Certificates. You should see the name of your server certificate (denoted by the
	common name). Double-click the certificate to bring up the properties. Click the
	Details tab and then look under CRL Distribution Point. Be sure that the URL is
	correct for the users you are targeting on this Web site. If it is not, it can
	only be changed by requesting a new certificate that contains the correct CRL
	information. Please notify the Certificate Services administrator that this
	information may need to be changed.
	
	MORE INFORMATION
	================
	
	
	Additional information on changing your Certificate Services CRL location can be
	found in the Certificate Services documentation.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
