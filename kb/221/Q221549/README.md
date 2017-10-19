---
layout: page
title: "Q221549: Importing Client Authentication Certificates into IIS 4.0"
permalink: /kb/221/Q221549/
---

## Q221549: Importing Client Authentication Certificates into IIS 4.0

	Article: Q221549
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Server (IIS) 4.0 performs certificate mapping
	through two means?either by setting certificate content rules or using the
	actual certificate itself. Unfortunately, certificates may be encoded in many
	ways, and the certificate mapper in IIS 4.0 only reads one format, which is
	Base64 encoded X.509. This is the format that Certificate Server 1.0 produces by
	default. You can export this format from Internet Explorer 5.0.
	
	MORE INFORMATION
	================
	
	To export a client authentication certificate from Internet Explorer 5.0,
	perform the following steps from the browser:
	
	1. Click Tools.
	
	2. Click Internet Options.
	
	3. Click the Content tab.
	
	4. Click the Certificates button.
	
	5. Select the certificate that you want to export, and then click Export.
	
	6. Click Next.
	
	7. Do not export the private key.
	
	8. Select Base64 encoded X.509 (.CER).
	
	9. Enter a file name.
	
	10. Click Next.
	
	11. Click Finish.
	
	To import this into Internet Information Server 4.0, perform the following steps
	(this is assuming you have SSL installed):
	
	1. Righ-click on the Web location where you want to use client authentication
	  certificates.
	
	2. Select the Directory Security tab.
	
	3. Click the Edit button in the Secure Communications frame.
	
	4. Make sure Require Secure Channel, Require Client Certificates, and Client
	  Certificate Mapping are checked.
	
	5. Select Add.
	
	6. Click the certificate you exported.
	
	7. Enter the mapping and user account information.
	
	Now, whenever a client uses that certificate to access a secured resource in IIS
	4.0, the Web server will automatically log the user account on what was entered
	in the mapping dialog box.
	
	Additional query words: certificate clientcert
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
