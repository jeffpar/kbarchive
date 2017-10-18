---
layout: page
title: "Q149670: How to Run Multiple SQL Statements w/ the VFP ODBC Driver"
permalink: kb/149/Q149670/
---

## Q149670: How to Run Multiple SQL Statements w/ the VFP ODBC Driver

	Article: Q149670
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To run multiple SQL statements with one SQL Pass-Through command, you can place
	a semicolon between the two SQL commands. This article demonstrates how to
	execute multiple SELECT statements from Microsoft Access for Windows 95 version
	7.0 to a Visual FoxPro 3.0 table by using the Visual FoxPro ODBC driver.
	
	MORE INFORMATION
	================
	
	This example selects data from the Customer and the Orders tables located in the
	Tastrade directory. It returns two sets of data and creates two tables in a
	Microsoft Access database.
	
	Step-by-Step Example
	--------------------
	
	1. Using the Visual FoxPro ODBC Driver, create a data source to the Visual
	  FoxPro Tastrade database located in the Samples\Mainsamp\Data directory.
	
	  a. Start the ODBC Driver Manager.
	
	  b. Click the Add button to add a driver.
	
	  c. In the list of drivers, select the Microsoft Visual FoxPro Driver.
	
	  d. In the data source dialog box, click the Visual FoxPro Database (.DBC) as
	     the database type.
	
	  e. Select Tastrade.dbc, located in the Samples\Mainsamp\Data directory.
	
	2. Start Microsoft Access version 7.0 and create a new database.
	
	3. In the Database window, select the Query tab to create an SQL Pass Through
	  (SPT) query.
	
	  a. Click the New button.
	
	  b. In the New Query box, select Design View and click OK.
	
	  c. In the Show Table box, click Close to close the dialog box (without adding
	     a table or query). Note that you are now in Query Design view.
	
	4. On the Query menu, point to SQL Specific, and click Pass-Through.
	
	5. In the SQL Pass-Through window, type the following SQL statement, which will
	  create two result sets:
	
	  SELECT * FROM customer; SELECT * FROM orders
	
	6. Close the query and save it as Qrymultiple.
	
	7. You then need to create a MakeTable query based on the SPT query.
	
	  a. In the Database window (Queries tab), click New.
	
	  b. In the New Query box, select Design view and click OK.
	
	  c. In the Show Table dialog box, click the Queries tab, select Qrymultiple,
	     and then click Add.
	
	  d. In the Query grid, select "*" in the Field row of the first column to
	     include all the fields in the query.
	
	  e. On the Query menu, click Make Table. In the Make table dialog, type the
	     name Tbltest and ensure that the Current Database option is checked. Click
	     OK.
	
	  f. Close the query and save it as Test1.Save the query and close it.
	
	8. Open the Test1 query. A warning is displayed. Click OK.
	
	9. After the query is run, click the Tables tab. Note that two tables should
	  have been created.
	
	Additional query words: 1.00 vfoxwin 3.00 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
