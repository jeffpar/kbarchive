---
layout: page
title: "Q232177: Assigning an Existing Server Certificate to a Web Site"
permalink: /kb/232/Q232177/
---

## Q232177: Assigning an Existing Server Certificate to a Web Site

	Article: Q232177
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the Web Site Certificate Wizard, you can perform many certificate
	management tasks, including assigning an existing server certificate to a Web
	site that was added after the certificate was created.
	
	Note: The server certificate must already exist in your certificate store. If the
	public and private keys are not accessible, this process fails.
	
	MORE INFORMATION
	================
	
	To assign an existing server certificate to a Web site, do the following:
	
	1. Start the Internet Services Manager.
	
	2. Navigate to your Web site and right-click the name.
	
	3. Click Properties.
	
	4. Click the Directory Security tab, and under the Secure Communications
	  section, click the Server Certificate button. This starts the Web Site
	  Certificate Wizard.
	
	5. Click Next, choose Assign an Existing Certificate, and then click Next.
	
	6. The screen that follows displays all available certificates found in your
	  certificate store. Choose the certificate you want by highlighting it, and
	  then click Next.
	
	7. On the summary screen that shows the certificate you are going to use on this
	  site, check the common name to make sure that this is the name users will use
	  when they access your Web site. Check the expiration date as well.
	
	8. Click Next, and then click Finish.
	
	For more information about the Certificate Stores and importing certificates for
	use in the certificate stores, see the "Certificates" section in the Windows
	2000 documentation.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
