---
layout: page
title: "Q299342: FP: Confirmation Page Appears, Data Not Added to Database"
permalink: kb/299/Q299342/
---

## Q299342: FP: Confirmation Page Appears, Data Not Added to Database

	Article: Q299342
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In your Web browser, when you submit a form set up to save data to a database
	(.mdb file), you receive a confirmation page, but the data is not added to the
	database.
	
	CAUSE
	=====
	
	This problem can occur if the user account (usually the IUSR_<servername>)
	browsing the Web site does not have the permissions to write to the database
	file.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the appropriate method for your situation:
	
	Method 1: If the Database Is Stored Outside the Web Content Area
	----------------------------------------------------------------
	
	If access to the database is through a system DSN (Data Source Name) and it is
	located outside the Web content area, give the IUSR_<servername> account
	write access to the database. To do this, follow these steps:
	
	1. On the server, right-click the Start button on the Windows taskbar, and then
	  click Explore.
	
	2. Open the folder that contains the .mdb file.
	
	3. Right-click the .mdb file, and then click Properties on the menu that
	  appears.
	
	4. Click the Security tab.
	
	5. Select the account whose permissions you want to modify. For example, select
	  the IUSR_<servername> account and then click to select the Write check
	  box for that account.
	
	6. Click OK
	
	Method 2: If the Database Is Stored Inside the Web Content Area
	---------------------------------------------------------------
	
	If the database is stored in the Fpdb folder in the Web content area, reset
	anonymous access on the site from within FrontPage. To do this, use the
	appropriate method for your version of FrontPage.
	
	In FrontPage 2002:
	
	1. Start FronPage and then open the Web site.
	
	2. On the Tools menu, point to Server, and then click Permissions.
	
	3. On the Permissions Administration page, click the "Change anonymous access
	  settings" link.
	
	4. Set the option for Anonymous access to Off and click Submit.
	
	5. If you are prompted to change the security of your Web, click OK.
	
	6. Click the "Change anonymous access settings" link.
	
	7. Set the option for Anonymous access to On and click Submit.
	
	8. If you are prompted to change the security of your Web, click OK.
	
	In FrontPage 2000:
	
	1. Start FrontPage and then open the Web site.
	
	2. On the Tools menu, point to Security, and then click Permissions.
	
	3. Click the Users tab. Select the "Only registered users have browse access"
	  option.
	
	4. Click Apply.
	
	5. Click to select the "Everyone has browse access" check box.
	
	6. Click Apply.
	
	REFERENCES
	==========
	
	For additional informationabout a related problem, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q219158 FP2000: Save to Database Form Gives Confirmation but Does Not Add
	  Data to Database
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
