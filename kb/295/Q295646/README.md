---
layout: page
title: "Q295646: HOWTO: Transfer Data from ADO Data Source to Excel with ADO"
permalink: kb/295/Q295646/
---

## Q295646: HOWTO: Transfer Data from ADO Data Source to Excel with ADO

	Article: Q295646
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1,2.5,2.6,2000,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbJET kbMDAC kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep kbATM
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components versions 2.0, 2.1, 2.5 
	- Microsoft Excel 97 for Windows 
	- Microsoft Excel 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because Microsoft Excel is such a powerful data analysis tool, Visual Basic and
	VBA application developers often want to bring data into an Excel worksheet for
	analysis purposes. This article describes the ActiveX Data Objects (ADO)
	approach to this programming task, using Microsoft Jet-specific syntax for
	certain SQL commands.
	
	This article describes programming solutions and does not describe Excel's
	menu-driven data import capabilities (through the Open option on the File menu)
	or the use of Microsoft Query (from the Get External Data option on the Data
	menu).
	
	For additional information about complementary programming solutions that make
	use of Excel Automation instead of SQL commands, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q246335 HOWTO: Transfer Data from ADO Recordset to Excel with Automation
	
	MORE INFORMATION
	================
	
	In the examples that follow, cnSrc represents an open ADO connection to the
	Northwind sample Jet database using the Jet 4.0 OLE DB Provider.
	
	How to Copy
	-----------
	
	You can use the SELECT INTO statement to copy data from any data source that Jet
	can read into any data destination, creating a new table (or, in the case of
	Excel, a new worksheet) on the fly. Do not use the dollar sign syntax, for
	example [Sheet1$], when you refer to a sheet name as your destination. The
	destination workbook can exist or not exist; however, the destination sheet must
	not yet exist.
	
	There are three ways to write the copy command that copies the entire Customers
	table from the Microsoft Access Northwind database into a new sheet in an Excel
	workbook. Each syntax requires a single SQL statement and creates column
	headings in the first row of the destination worksheet.
	
	- The following example uses the SELECT INTO syntax:
	
	  Dim strSQL As String
	  strSQL = "SELECT * INTO [Excel 8.0;Database=" & App.Path & _ 
	      "\book1.xls].[Sheet1] FROM Customers"
	  cnSrc.Execute strSQL
	
	- The following example uses the SELECT INTO ... IN syntax:
	
	  strSQL = "SELECT * INTO [Sheet1] IN '' [Excel 8.0;Database=" & App.Path & _
	      "\book1.xls] FROM Customers"
	
	  where the bracketed destination database information is preceded by an empty
	  pair of single quotes for the type argument (the "Excel 8.0" portion), which
	  is included within the brackets when you use this syntax.
	
	- The following example uses the alternate syntax for the IN clause:
	
	  strSQL = "SELECT * INTO [Sheet1] IN '" & App.Path & _
	      "\book1.xls' 'Excel 8.0;' FROM Customers"
	
	  where the type argument is now listed separately after the destination file
	  path.
	
	How to Append
	-------------
	
	You can use the INSERT INTO ... IN statement to append data from any data source
	that Jet can read into any data destination. Both the destination workbook and
	worksheet must exist. Now that you are referring to an existing worksheet, you
	must use the standard dollar sign syntax, for example, [Sheet1$], when you refer
	to a sheet name as your destination. In addition, the column headings must
	already be present; in other words, this statement can only be used to append to
	an existing table.
	
	There are two ways to write the append command that copies the entire Customers
	table from the Northwind database into an existing Excel worksheet, which
	already has the appropriate column headings.
	
	- The following example uses the SELECT INTO ... IN syntax:
	
	  strSQL = "INSERT INTO [Sheet1$] IN '' [Excel 8.0;Database=" & App.Path & _
	      "\book1.xls] SELECT * FROM Customers"
	
	  where the bracketed destination database information is again preceded by an
	  empty pair of quotes for the type argument, which is now included within the
	  brackets.
	
	- The following example uses the alternate syntax for the IN clause:
	
	  strSQL = "INSERT INTO [Sheet1$] IN '" & App.Path & _
	      "\book1.xls' 'Excel 8.0;' SELECT * FROM Customers"
	
	Starting with Microsoft Data Access Components (MDAC) version 2.6, MDAC no longer
	contains the following Jet components:
	
	- Microsoft Jet
	- Microsoft Jet OLE DB Provider
	- ODBC Desktop Database Drivers
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	The "MDAC 2.5 Stack and Windows File Protection" white paper contains a full list
	of the components that are shipped with MDAC 2.5, along with a discussion of
	Windows File Protection. Refer to this white paper for more information about
	the Jet dynamic-link libraries (DLLs) that are included in MDAC 2.5, which are
	no longer a part of MDAC 2.6.
	
	For more information about MDAC 2.5 and Windows File Protection, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/data/mdacwfp.htm
	
	REFERENCES
	==========
	
	For additional information about this Jet-specific syntax, consult the Jet SQL
	help file (JETSQL40.chm), especially the topics on the SELECT INTO statement,
	the INSERT INTO statement, and the IN clause.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbJET kbMDAC kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep kbATM 
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbZNotKeyword6 kbExcel2000 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbExcel2000Search kbExcel97Search kbMDACSearch kbZNotKeyword3 kbMDAC200 kbMDAC210 kbMDAC250
	Version           : :2.0,2.1,2.5,2.6,2000,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
