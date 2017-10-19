---
layout: page
title: "Q243337: PRB: Errors with Integration After Enabling P &amp; M"
permalink: /kb/243/Q243337/
---

## Q243337: PRB: Errors with Integration After Enabling P &amp; M

	Article: Q243337
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0,97,98; winnt:3.0
	Operating System(s): 
	Keyword(s): kbFrontPage kbSSafe500 kbSSafe600 kbVisID kbFPServX
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual InterDev, version 6.0 
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage 98 for Windows 
	- FrontPage 2000 Server Extensions from Microsoft 
	- Microsoft Site Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After enabling Personalization & Membership (P & M) from Site Server,
	the integration with Visual InterDev and Microsoft FrontPage no longer works.
	
	From Visual InterDev, you receive the following error:
	
	  User "MemProxyUser" not found.
	
	As a result, FrontPage no longer displays the green dots next to the files in the
	Web project.
	
	CAUSE
	=====
	
	P&M has its own anonymous user and this user has not been added to Visual
	SourceSafe.
	
	RESOLUTION
	==========
	
	Resolution One:
	
	Install a second Web site on the Web server and have P & M enabled on one
	site (site one) and do all the development from the other site (site two). Both
	of these Web sites can point to the same directory, namely \InetPub\wwwroot and
	thus when development makes a change to site two, it is reflected on site one.
	This way P&M works when you browse from site one and it won't effect Visual
	SourceSafe integration on site two.
	
	Resolution Two:
	
	Enable P & M on a different server and don't use all three together.
	
	Resolution Three:
	
	Add the MemProxyUser to Visual SourceSafe.
	
	NOTE: After doing this, all the Check Ins and Check Outs, from Visual SourceSafe
	are done by this user.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	- Reference "Adding Sites" in the NT Option Pack documentation (under Server
	  Administration/Web and FTP Sites).
	
	- Reference "Add User" in the Visual SourceSafe documentation.
	
	For more information about setting up Site Server Personalization and Membership,
	please see the following MSDN Web Workshop:
	
	Site Server Personalization and Membership Tutorial
	
	http://msdn.microsoft.com/workshop/server/nextgen/perstutor.asp
	(http://msdn.microsoft.com/workshop/server/nextgen/perstutor.asp)
	
	
	  Q195314 Access Denied when Using Membership Authentication
	
	Additional query words: kbcrossreference
	
	======================================================================
	Keywords          : kbFrontPage kbSSafe500 kbSSafe600 kbVisID kbFPServX 
	Technology        : kbVisIDsearch kbSSafeSearch kbSiteServSearch kbFrontPageSearch kbAudDeveloper kbFrontPage97 kbFrontPageServXSearch _IKkbZNotKeyword4 kbZNotKeyword2 kbFrontPage2000Search kbFrontPage97Search kbFrontPage98Search kbZNotKeyword3 kbFrontPage2000ServX kbZNotKeyword5 kbSiteServ300 kbVisID600 kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0,97,98; winnt:3.0
	Issue type        : kbprb
	
	=============================================================================
	
