---
layout: page
title: "Q315454: FP: Error 0178: 80070005 When You Attempt to Connect to Database"
permalink: /kb/315/Q315454/
---

## Q315454: FP: Error 0178: 80070005 When You Attempt to Connect to Database

	Article: Q315454
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
	created in Microsoft FrontPage, you may receive an error message similar to the
	following:
	
	  Server object error 'ASP 0178 : 80070005'
	
	  Server.CreateObject Access Error
	
	  /_fpclass/fpdbrgn1.inc, line 99
	
	  The call to Server.CreateObject failed while checking permissions. Access is
	  denied to this object.
	
	
	CAUSE
	=====
	
	This behavior can occur if incorrect NTFS permissions are defined for your
	"%ProgramFiles%\Common Files\System" folder.
	
	RESOLUTION
	==========
	
	To resolve your issue, reset the NTFS permissions on the "%ProgramFiles%\Common
	Files\System" folder. To do this, follow these steps:
	
	1. Open Windows Explorer. To do this, right-click Start and then click Explore
	  on the shortcut menu.
	
	2. In Folders view, expand the "%ProgramFiles%\Common Files\System" folder.
	
	3. Right-click the folder and click Properties on the shortcut menu.
	
	4. Click the Security tab.
	
	5. Add Everyone to the existing permissions, give at least Read permissions to
	  Everyone, and apply these new settings to all files and subfolders.
	
	6. Click OK.
	
	MORE INFORMATION
	================
	
	For additional information how to troubleshoot ASP/IIS errors when you work with
	the database connectivity features of FrontPage, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q265161 FP: Errors Appear When You Attempt to Connect to Database Results
	  Page
	
	  Q219170 FP2000: Error Browsing Database Results Pages After Publishing from
	  Disk-Based Web
	
	  Q315453 FP: ASP Error 0177: 800401f3 When You Attempt to Connect to Database
	  Results Page
	
	  Q315456 FP: Error: Unable to Open Jet Temporary Key When You Attempt to
	  Connect to Database
	
	For additional information how to troubleshoot IIS permissions, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q185874 How to Troubleshoot Permissions in Internet Information Server 4.0
	
	  Q309051 HOW TO: Troubleshoot ASP in IIS 5.0
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
