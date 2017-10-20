---
layout: page
title: "Q181890: PRB: Known OLE DB Provider Problems with Visual C++ 6.0 Wizards"
permalink: /kb/181/Q181890/
---

## Q181890: PRB: Known OLE DB Provider Problems with Visual C++ 6.0 Wizards

{% raw %}

	Article: Q181890
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbJET kbOLEDB kbOracle kbProvider kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual C++, version 6.0 includes support for OLE DB. Part of this support
	includes enhancing the MFC AppWizard and adding the new ATL Consumer Template
	Wizard. However, some problems that involve Microsoft OLE DB providers can
	occur. This article contains a list of these problems and suggested workarounds.
	
	MORE INFORMATION
	================
	
	1. Microsoft OLE DB Provider for ODBC Drivers / SQL Server 6.5 ODBC
	
	  1. If the wizard is used with a stored procedure that does not have
	     parameters, the wizard generates incorrect syntax.
	
	     The following represents a sample stored procedure:
	
	            CREATE PROCEDURE spMyProc
	            AS
	            return 5
	       
	
	     The wizard includes the following command in the generated code:
	
	            { ? = call dbo.spMyProc;1() }
	       
	
	     When you open the rowset containing this command, you receive a
	     DB_E_ERRORSINCOMMAND return value.
	
	     To work around this issue, remove the parentheses and recompile the code.
	     This is By Design in the ODBC specification.
	
	
	  2. Generation of column map for stored procedure resultset not supported
	
	     If you use a stored procedure that has a resultset with the wizard, a
	     column map for the resultset is not generated. Note that a parameter is
	     generated.
	
	     You need to manually generate the column map. Or, create a temporary table
	     with the same column names as the stored procedure resultset and use the
	     table with the wizard in a temporary project to generate a correct column
	     map.
	
	
	2. Microsoft OLE DB Provider for ODBC Drivers / Oracle ODBC Driver
	
	  1. When you try to access Oracle functions and stored procedures, a fault
	     occurs. This is a provider-related problem. A signed char is returned for
	     any NUMBER data type without precision and scale specified.
	
	     To work around this problem, you should change the data type to a
	     DB_NUMERIC, change the column entry to a COLUMN_ENTRY_PS macro, and
	     specify the precision/scale variable.
	
	
	3. Microsoft OLE DB Provider for ODBC Drivers / Access ODBC Driver
	
	  1. The wizard doesn't handle long parameters for the Invoices Filter query
	     properly (Northwind database). It doesn't emit anything for the OrderID
	     parameter.
	
	     To work around the problem add a COLUMN_ENTRY(1, m_lOrderID) to the
	     parameter map (be sure to define a member variable of type Long for
	     m_lOrderID).
	
	
	  2. When you use the OLEDB for ODBC provider with the ATL Consumer Wizard or
	     MFC AppWizard and you use a table that has more than one storage column,
	     the emitted code tries to bind to each storage column. Due to the provider
	     limitation the code fails; the call to IRowset::GetData() to retrieve the
	     initial rowset returns E_NOINTERFACE. You either need to remove the extra
	     column entry in the column map and the SELECT statement, or move the
	     column into a separate accessor.
	
	     For more information refer to the "OLE DB for ODBC Provider" section in the
	     DASDK documentation in MSDN and MSDASQLreadme.txt.
	
	
	4. Microsoft OLE DB Provider for ODBC Drivers / Text ODBC Driver
	
	  1. Some text files do not appear to create any bindings for the accessor
	     (i.e. the COLUMN_ENTRY map is empty). This causes an error when you open
	     the rowset.
	
	     The user not defining the format for the file causes the problem. To fix
	     this problem, go to the ODBC Administrator, configure the ODBC DSN for the
	     text datasource you are using, select the Options tab and click Define
	     Format. Once you have defined the format, the wizard generates the
	     appropriate accessor and the rowset opens properly.
	
	
	5. Microsoft OLE DB Provider for SQL Server (SQL Server 6.5)
	
	  1. You must run the Instcat.sql file (included with SQL Server 6.5) for the
	     provider to run correctly.
	
	  2. Generation of column map for stored procedure result set not supported
	
	     If you use a stored procedure that has a result set with the wizard, a
	     column map for the result set is not generated. Note that a parameter map
	     is generated.
	
	     You need to manually create the column map. Or, create a temporary table
	     with the same column names as the stored procedure result set and use the
	     table with the wizard in a temporary project to generate a correct column
	     map.
	
	
	  3. If you use the wizard with a stored procedure that does not have
	     parameters, the wizard generates incorrect syntax.
	
	     The following represents a sample stored procedure:
	
	            CREATE PROCEDURE spMyProc
	            AS
	            return 5
	        
	
	     The wizard includes the following command in the generated code:
	
	            { ? = call dbo.spMyProc;1() }
	           
	
	     When you open the rowset that contains this command, you receive a
	     DB_E_ERRORSINCOMMAND return value.
	
	     The work around this issue, remove the parentheses and recompile the code.
	
	
	6. Microsoft OLE DB Provider for Oracle
	
	  1. ROWID data types are not mapped properly. You see an empty line in the
	     COLUMN_MAP and no data entry for a ROWID map. You must manually add
	     these.
	
	
	7. Microsoft OLE DB Provider for JET 3.51 and OLE DB Provider for Jet 4.0
	
	  1. The wizard doesn't properly handle long parameters for the Invoices Filter
	     query (Northwind DB). The wizard doesn't emit anything for that line.
	
	     In this case, the wizard does emit a return value but it is erroneous.
	
	     To work around the problem, add a COLUMN_ENTRY(1, m_lOrderID) to the
	     parameter map (be sure to define a member variable of type Long for
	     m_lOrderID). Both of these should be in the accessor class.
	
	     You also need to remove the return parameter type from the command text
	     (i.e. remove the '? =' in the call Invoices Filter statement).
	
	
	- Microsoft OLE DB Provider for Jet 3.51
	
	  1. The provider doesn't emit column information for queries (stored
	     procedures) and views. If you attempt to generate a class using a view or
	     query, you receive code that may not compile and won't run correctly.
	
	     One workaround is to run Access directly, determine the correct data types
	     and ordinals for the query/view, and then manually add them.
	
	     Another workaround is to use the Microsoft OLE DB Provider for ODBC Drivers
	     with the Access ODBC driver.
	
	     These issues are known to happen with the versions of Microsoft OLE DB
	     Providers that ship with Visual C++ 6.0.
	
	         OLE DB for ODBC msdasql.dll  - 02.00.3002.11
	         Jet             msjtor35.dll - 3.52.1527.4
	         Oracle          msdaora.dll  - 02.00.3002.15
	         SQL Server      sqloledb.dll - 07.00.0502
	       
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbJET kbOLEDB kbOracle kbProvider kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDACNoSweep 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
