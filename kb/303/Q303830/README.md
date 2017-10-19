---
layout: page
title: "Q303830: BUG: VFP7: Upsize Wizard Fails on Bulk Insert"
permalink: /kb/303/Q303830/
---

## Q303830: BUG: VFP7: Upsize Wizard Fails on Bulk Insert

	Article: Q303830
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbwizard kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 15-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upsize a local Visual FoxPro database to a remote Microsoft SQL Server
	database on another computer, the wizard creates the tables on the SQL server,
	but the data is not moved to the SQL server.
	
	CAUSE
	=====
	
	The path for the file that is created by the Upsizing Wizard for the bulk insert
	is incorrect, and SQL Server is unable to find the file.
	
	RESOLUTION
	==========
	
	An update is available from the Visual FoxPro product updates page at the
	following Microsoft Developer Network (MDSN) Web site:
	
	  http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Upsizing Wizard.
	
	2. Select a Visual FoxPro database to upsize.
	
	3. Select a database that points to a SQL server that resides on a different
	  computer.
	
	4. Choose a table to upsize and click Next.
	
	5. Select New, and then type the name for the database to which you want to
	  upsize.
	
	NOTE: In order for SQL Server to run the bulk insert, the domain user account
	that the SQL server runs under must be added to the Administators group on the
	computer that runs the the Upsizing Wizard.
	
	REFERENCES
	==========
	
	For more information, see the "Managing Security" topic in the Microsoft SQL
	Server 2000 Books Online.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
