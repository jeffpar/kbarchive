---
layout: page
title: "Q185381: How to Give Remote Web Site Operators Access to New Web Site"
permalink: kb/185/Q185381/
---

## Q185381: How to Give Remote Web Site Operators Access to New Web Site

	Article: Q185381
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create a new Web site in Microsoft Management Console, Web site operators
	cannot remotely connect to that site with Internet Service Manager (HTML) until
	you create a virtual directory called IISADMIN. (Note that users designated as
	Administrators are able to remotely administer the site through the
	Administrative Web Site without this virtual directory.) If you create the Web
	site by using Internet Service Manager (HTML), then your Web server
	automatically creates the IISADMIN site, because the server assumes that you
	want to remotely administer that site.
	
	MORE INFORMATION
	================
	
	To create the IISADMIN virtual directory, do the following:
	
	1. In Internet Service Manager, select the Web site you want your operators to
	  remotely administer.
	
	2. Right-click, select New, and then click Virtual Directory.
	
	3. In the Alias box, type IISADMIN and then click Next.
	
	4. Type the following:
	
	  " <DriveLetter>:\Winnt\System32\Inetsrv\Iisadmin " (without the
	  quotation marks)
	
	  Replace DriveLetter with the letter of your local drive. This physical path is
	  the same as the path for the default Web site's Iisadmin directory. Click
	  Next.
	
	5. Select Allow Read Access and Allow Script Access. Click Next.
	
	6. Click Finish.
	
	7. Select the new IISADMIN virtual directory for the Web site, and open its
	  property sheets.
	
	8. Select Directory Security property sheet. Under Anonymous Access and
	  Authentication Control, click Edit.
	
	9. Clear the Allow Anonymous Access check box.
	
	10. Select either Basic Authentication or Windows NT Challenge/Response
	  Authentication, and click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
