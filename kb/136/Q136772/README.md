---
layout: page
title: "Q136772: INFO: General Information on the Visual FoxPro Upsizing Wizard"
permalink: kb/136/Q136772/
---

## Q136772: INFO: General Information on the Visual FoxPro Upsizing Wizard

	Article: Q136772
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbwizard kbvfp300 kbvfp500 kbvfp600
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro Upsizing Wizard is used to upsize Visual FoxPro tables to
	Microsoft SQL Server, including their rules, defaults, and referential integrity
	(RI) when possible. This article gives some helpful tips for using the Upsizing
	Wizard.
	
	MORE INFORMATION
	================
	
	- The Upsizing Wizard works only with Microsoft SQL Server versions 4.21a, 6.0,
	  and 6.5.
	
	- To use the Upsizing Wizard with Microsoft SQL Server version 6.0, the SQL
	  Server ODBC driver that ships with Microsoft SQL Server version 6.0 must be
	  installed, or to use Microsoft SQL Server version 6.5, the SQL Server ODBC
	  driver that ships with Visual FoxPro 5.0 or Visual Studio 97 must be
	  installed.
	
	- Make sure the device, database, and log, on SQL Server are large enough for
	  the tables to be upsized. Visual FoxPro tables typically use more space on
	  SQL Server than their local equivalents.
	
	- When you create a new device or database and log, first upsize a small table
	  or a test table. Then re-run the Upsizing Wizard before commencing with the
	  upsizing of a .dbc file that contains large (or a large number) of tables.
	
	- When upsizing large tables, set the SQL Server option 'truncate log on chkpt'
	  to avoid 'log is full' problems. You can do this from within Visual FoxPro by
	  using these commands:
	
	        hDBC=SQLCONNECT([cDataSourceName, cUserID, cPassword])
	        ?SQLEXEC(hDBC, 'use master')
	        ?SQLEXEC(hDBC, 'sp_dboption <db name>, trunc, true')
	
	- To upsize rules and defaults properly, create them using Visual FoxPro
	  expressions that can be mapped to corresponding expressions in Transact SQL.
	  There is a list of the supported expressions in the Professional Features
	  Guide, Chapter 2, Expression Mapping, page 37. This means that user-defined
	  functions (UDFs) should not be used for rules and defaults that need to be
	  converted to stored procedures in SQL Server.
	
	- Consider the fact that when you select the 'Create Remote Views on Tables'
	  option, the view created is updateable by default, and the default WHERE
	  option in the Update tab of the view is 'Key and Modified' fields. In the
	  following cases, this can cause a problem:
	
	   - If a compound key has been used as part of a default join condition
	     (relation) for the local table, the Upsizing Wizard will not be able to
	     pass a key column name to SQL Server. The appropriate Key and Updateable
	     column information will have to be set by clicking MODIFY VIEW in the
	     Update tab of the View Designer.
	
	   - If the table being upsized contains Memo or General fields, the WHERE
	     option in the Update tab of the view must be changed to Key and Timestamp.
	
	- Decide which columns should accept NULL values, and modify the structure on
	  the local tables to designate this before upsizing.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	
