---
layout: page
title: "Q296091: PRB: MFC AppWizard Doesn't Show Oracle Synonyms w/MS ODBC Driver"
permalink: kb/296/Q296091/
---

## Q296091: PRB: MFC AppWizard Doesn't Show Oracle Synonyms w/MS ODBC Driver

	Article: Q296091
	Product(s): Microsoft C Compiler
	Version(s): 1.5,2.0,2.1,2.5,2.6,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDriver kbMFC kbODBC kbOracle kbVS kbGrpDSMDAC kbDSupport tslic_tslic
	Last Modified: 03-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.2, 5.0, 6.0 
	- Microsoft Data Access Components versions 1.5, 2.0, 2.1, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Visual C++ Microsoft Foundation Classes (MFC) AppWizard EXE or
	DLL with database support, if you select an Oracle data source name (DSN) that
	is associated with the Microsoft ODBC Driver for Oracle, AppWizard doesn't list
	the local and public Oracle synonyms in the Select Database Tables window.
	
	RESOLUTION
	==========
	
	You can work around this problem in the following ways:
	
	- You can create and use Oracle views instead of Oracle synonyms.
	
	- If you are using Visual C++ 6.0, you can use the Microsoft OLE DB Provider
	  for Oracle, instead of the Microsoft ODBC Driver for Oracle, to obtain local
	  synonyms and tables associated with public synonyms.
	
	Examples of these workarounds are shown in the "More Information" section.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	Unlike Microsoft Access and the MFC AppWizard with the Microsoft OLEDB Provider
	for Oracle, the MFC AppWizard connecting to an Oracle database using the
	Microsoft ODBC Driver for Oracle doesn't list local (created in the current
	schema) and public synonyms.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table in schema "SCOTT":
	
	  CREATE TABLE scott_test(col1 INT)
	
	2. Create a public synonym on this table and give everyone "SELECT" permission:
	
	  CREATE PUBLIC SYNONYM scott_test_syn FOR scott_test
	  Grant SELECT on scott_test_syn TO PUBLIC
	
	3. Start Visual C++. On the File menu, click New.
	
	4. Click the Projects tab, select MFC AppWizard (exe), type the project name,
	  and then click OK.
	
	5. Accept the defaults and then click Next.
	
	6. Select Database view without file support or Database view with file support,
	  and then click the Data Source button.
	
	7. Select an Oracle ODBC DSN associated with the Microsoft ODBC Drvier for
	  Oracle and click OK.
	
	8. Enter the user name (schema other than SCOTT to perform this test) and
	  password. Click OK.
	
	9. In the Select Database Tables window, the public synonym "scott_test_syn" is
	  not listed.
	
	Using this example, you can work around the problem in the following ways:
	
	- If you select the Microsoft OLE DB Provider for Oracle (instead of the
	  Microsoft ODBC Driver for Oracle), the MFC App Wizard will list "scott_test",
	  which is the table associated with the public synonym "scott_test_syn".
	
	- You can also create a view on the table asssociated with the public synonym
	  in the schema you want to connect to using MFC AppWizard:
	
	  CREATE VIEW scott_test_view AS
	  SELECT * FROM SCOTT.scott_test;
	
	  You will then see "scott_test_view" in the list of tables.
	
	Additional query words: MFC AppWizard Oracle PUBLIC SYNONYM VIEW ODBC
	
	======================================================================
	Keywords          : kbDriver kbMFC kbODBC kbOracle kbVS kbGrpDSMDAC kbDSupport tslic_tslic 
	Technology        : kbVCsearch kbAudDeveloper kbMDACSearch kbMDAC150 kbMDAC200 kbMDAC210 kbMDAC250 kbMDAC260 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :1.5,2.0,2.1,2.5,2.6,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
