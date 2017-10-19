---
layout: page
title: "Q232167: How to Remove a Server Certificate from an IIS 5.0 Web Site"
permalink: /kb/232/Q232167/
---

## Q232167: How to Remove a Server Certificate from an IIS 5.0 Web Site

	Article: Q232167
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
	
	When you use an Internet Information Services (IIS) 5.0 Web server, you may find
	the need to remove a server certificate from a Web site. This is a very easy
	task to accomplish using the Web Site Certificate Wizard that comes with IIS
	5.0.
	
	MORE INFORMATION
	================
	
	To remove a server certificate, follow these steps:
	
	1. Start the Internet Services Manager.
	
	2. Navigate to the site you want to remove the server certificate from,
	  right-click on the site, and then choose Properties.
	
	3. On the screen that follows, click the Directory Security tab, and then click
	  Server Certificate.
	
	4. In the Web Site Certificate Wizard, click Next. Choose the Remove the Current
	  Certificate option, and then click OK.
	
	5. View the summary to be sure that this is the certificate you want to remove.
	  If this is correct, click Next, and then click Finish to complete the task.
	
	Note: Removing the server certificate from the Web site only disables the secure
	communications (SSL/TLS) on that site. The server certificate will still exist
	in the Certificate Store of that server. This allows you to later assign the
	certificate to that Web site again. You may alternately remove the certificate
	from the certificate store as well.
	
	Additional query words: iis certificate services
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
