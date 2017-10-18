---
layout: page
title: "Q152817: FP98: Server Error Listing Users or Groups in Trusted Domains"
permalink: kb/152/Q152817/
---

## Q152817: FP98: Server Error Listing Users or Groups in Trusted Domains

	Article: Q152817
	Product(s): Word Front Page
	Version(s): 1.0,6.0
	Operating System(s): 
	Keyword(s): kbdtakbbuglist
	Last Modified: 05-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	- Microsoft Visual InterDev, versions 1.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you list users or groups in trusted domains on a FrontPage 98 client, you
	may receive the following error message:
	
	  Server Error: Error occurred while retrieving the list of users from the
	  system.
	
	CAUSE
	=====
	
	This problem may occur when all of the following conditions are true:
	
	- You are logged on to the FrontPage client, but you do not have administrator
	  permissions on the Microsoft Internet Information Services (IIS) server.
	
	- Anonymous and Basic authentication are disabled.
	
	- You are attempting to apply permissions to a FrontPage web on a different
	  server running IIS, using Windows NT Challenge/Response, and running
	  FrontPage Server Extensions.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, install the latest version of FrontPage 2000 Server
	Extensions from the following Microsoft Web site:
	
	  http://msdn.microsoft.com/workshop/languages/fp/default.asp
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q205696 FPSE: How to Install FrontPage 2000 Server Extensions for IIS
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta kbbuglist
	Technology        : kbVisIDsearch kbFrontPageSearch kbAudDeveloper _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3 kbVisID100 kbVisID600
	Version           : :1.0,6.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
