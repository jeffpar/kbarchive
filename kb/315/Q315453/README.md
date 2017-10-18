---
layout: page
title: "Q315453: FP: Error 0177: 800401f3 When You Attempt to Connect to Database"
permalink: kb/315/Q315453/
---

## Q315453: FP: Error 0177: 800401f3 When You Attempt to Connect to Database

	Article: Q315453
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 21-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to browse to an Active Server Page (ASP) database results page
	that you created in Microsoft FrontPage, you receive an error message similar to
	the following:
	
	  Server object error 'ASP 0177 : 800401f3'
	
	  Server.CreateObject Failed
	
	  /_fpclass/fpdbrgn1.inc, line 99
	
	  Invalid ProgID. For additional information specific to this message please
	  visit the Microsoft Online Support site located at:
	  http://www.microsoft.com/contentredirect.asp.
	
	
	CAUSE
	=====
	
	Your ADO components are incorrectly registered.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall the database components. For additional
	information, visit to the following Microsoft Web site:
	
	  http://www.microsoft.com/data/
	
	You can also use the Component Checker tool to verify problems with your existing
	database components. For additional information about the Component Checker,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q301202 HOW TO: Check for MDAC Version
	
	  Q307255 INFO: Component Checker: Diagnose Problems and Reconfigure MDAC
	  Installations
	
	MORE INFORMATION
	================
	
	For additional information about ASP/IIS errors when you work with the database
	connectivity features of FrontPage, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q265161 FP: Errors Appear When You Attempt to Connect to Database Results
	  Page
	
	  Q219170 FP2000: Error Browsing Database Results Pages After Publishing from
	  Disk-Based Web
	
	  Q315454 FP: ASP Error 0178: 80070005 When You Attempt to Connect to Database
	  Results Page
	
	  Q315456 FP: Error: Unable to Open Jet Temporary Key When You Attempt to
	  Connect to Database
	
	For additional information about how to troubleshoot IIS permissions, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q185874 How to Troubleshoot Permissions in Internet Information Server 4.0
	
	  Q309051 HOW TO: Troubleshoot ASP in IIS 5.0
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
