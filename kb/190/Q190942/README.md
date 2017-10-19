---
layout: page
title: "Q190942: BUG: OLE DB AppWizard Generates Wrong SQL Statement"
permalink: /kb/190/Q190942/
---

## Q190942: BUG: OLE DB AppWizard Generates Wrong SQL Statement

	Article: Q190942
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbOLEDB kbOracle kbVC600bug
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an Oracle table name contains spaces in it, the MFC OLE DB AppWizard will
	generate incorrect SQL Statements. This problem happens when using either the
	OLE DB Provider for ODBC (using the Microsoft Oracle ODBC Driver) or the OLE DB
	Provider for Oracle.
	
	When attempting to build the application, the following error is returned:
	
	  error C2017: illegal escape sequence
	
	RESOLUTION
	==========
	
	The solution is to remove one of the slashes from each part of the SQL
	Statement. The SQL Statement should resemble the following:
	
	     "SELECT * FROM PSS.\"my table\""
	
	Although this corrects the SELECT statement, the COLUMN_MAP and Data members for
	the CMytable class are not created, because of the original syntax problem. The
	datamembers and COLUMN_MAPs must be manually created. A better solution would be
	to not use spaces in table names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a DSN pointing to an Oracle Server. Run the following DDL statement using
	SQL Plus (Oracle's client query tool):
	
	     Create table "my table" (fld1 VARCHAR2(10));
	     INSERT INTO "my table" VALUES ('Hello');
	
	Start Visual C++ version 6.0.
	
	1. Create an MFC AppWizard(exe) Project.
	
	2. Click Next in step 1 of 6.
	
	3. In step 2 of 6, select "Database view with file support."
	
	4. Click Data Source.
	
	5. Select OLE DB, then click "Select OLE DB Datasource."
	
	6. Choose the OLE DB Provider for ODBC and select the Oracle data source that
	  has been created for this test. User ID and Password need to be filled in.
	
	7. Click OK on the Database Options dialog box. Then select "my table" from the
	  table list.
	
	8. Click Finish on step 2 of 6.
	
	NOTE: The SQL SELECT statement is generated incorrectly in the
	CCommand<CAccessor<CMytable class. The CCommand<CAccessor<CMytable
	class can be found in the xxxSet.h file, where xxx is the name of your project:
	
	     "SELECT * FROM PSS.\\"my table\\""
	
	When you attempt to build the application, you will receive error C2017: illegal
	escape sequence.
	
	After testing this situation, run the following DDL script to remove the table.
	
	     DROP TABLE "my table";
	
	Additional query words: spaces
	
	======================================================================
	Keywords          : kbDatabase kbOLEDB kbOracle kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
