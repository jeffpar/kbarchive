---
layout: page
title: "Q191586: BUG: Database Property in Connection Dialog Has no Effect"
permalink: kb/191/Q191586/
---

## Q191586: BUG: Database Property in Connection Dialog Has no Effect

	Article: Q191586
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to a Microsoft Access 7.0 Datasource from Microsoft Visual
	FoxPro 6.0, the Database property of the connection is ignored.
	
	RESOLUTION
	==========
	
	Specify the database name in the Datasource, or use a connect string with the
	database specified rather than an ODBC Datasource.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new connection object in a Microsoft Visual FoxPro database.
	
	2. Specify the default Microsoft Access database Datasource "MS Access 97
	  Database" in the Data Source drop-down.
	
	3. Point to an existing Microsoft Access database in the Database text box.
	
	4. Click the Verify Connection button.
	
	Notice the File Open dialog box displays prompting for a Microsoft Access
	database file.
	
	Additional query words: kbVFp600bug KbDBFDBC kbDatabase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
