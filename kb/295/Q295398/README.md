---
layout: page
title: "Q295398: PRB: Error in Remote View Wizard When Connecting to DB2"
permalink: /kb/295/Q295398/
---

## Q295398: PRB: Error in Remote View Wizard When Connecting to DB2

	Article: Q295398
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbvfp kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Visual FoxPro Remote View Wizard to connect to a DB2 database
	using the DB2 Run-time Client driver version 7.01, the following error message
	may appear after choosing the DB2 ODBC data source:
	
	  The Remote View Wizard was unable to obtain column information for this
	  remote table. This may be the result of an ODBC error or the remote table may
	  not be owned by the current user or the table doesn't have columns.
	
	Note that this error may also occur with the 7.01 versions of the Administration
	Client and the Application Development Client driver.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following three options:
	
	- Create the remote view using the View Designer.
	
	- Create the remote view using SQLPassThrough code.
	
	- Use the 6.01 version of the DB2 driver.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install version 7.01 of the DB2 Run-time ODBC driver.
	
	2. Create a database container. Choose New Remote View from the Database menu
	  pad.
	
	3. In the New Remote View dialog box, click View Wizard.
	
	4. In the Available Data Sources list box, select the ODBC data source for your
	  DB2 Server and click Next.
	
	The error listed in the "Symptoms" section appears. Although the Remote View
	Wizard continues to step 2, clicking any field causes the error to reappear.
	
	REFERENCES
	==========
	
	For additional information on creating a remote view using SQL passthrough,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q138094 How to Create Updatable Views by Using SQL Passthrough
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbvfp kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
