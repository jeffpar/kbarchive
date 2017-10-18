---
layout: page
title: "Q315648: HOW TO: Use Custom Formatting with a Visual Basic 6.0 Data Grid"
permalink: kb/315/Q315648/
---

## Q315648: HOW TO: Use Custom Formatting with a Visual Basic 6.0 Data Grid

	Article: Q315648
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbHOWTOmaster
	Last Modified: 22-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Use the StdDataFormat Object
	- Verify it Works
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	Use this step-by-step guide to customize the formatting of data both before and
	after a cell in a Data Grid is edited. The example in this article uses a text
	field in which the characters are stored in uppercase, but which can be
	displayed and edited in mixed-case on screen.
	
	The Data Grid in Visual Basic 6.0 displays data from a database and allows user
	editing. Transfers between the data grid and the underlying database are handled
	automatically through ActiveX Data Objects (ADO). In some cases, the format of
	the data on screen differs from the format of the data in the database, and
	conversion is required.
	
	Requirements
	------------
	
	The following items describe the recommended hardware, software, network
	infrastructure, skills and knowledge and service packs you will need.
	
	- You need a basic knowledge of Visual Basic programming to perform the
	  procedure in this article.
	
	Use the StdDataFormat Object
	----------------------------
	
	The StdDataFormat object enables you to use predefined or custom formats,
	intervene in the formatting or unformatting process, and apply these formats to
	bound controls. Also, because this is an object, you can reuse it wherever you
	need to have this same format.
	
	The StdDataFormat object supports some built-in types and named custom types,
	such as Boolean, Currency, and Short Date (in fact, anything that the Format$
	function in Visual Basic supports). However, in the example that follows, the
	Format and UnFormat events of the StdDataFormat object are used to perform a
	custom format conversion rather than a standard conversion.
	
	1. In Microsoft Windows XP, Microsoft Windows 2000, and Microsoft Windows NT:
	
	  On the Windows Start menu, point to Programs, point to Administrative Tools,
	  and then click Data Sources (ODBC).
	
	  In Microsoft Windows 98 and Microsoft Windows 95:
	
	  On the Windows Start menu, point to Settings and then click Control Panel.
	  Double-click the "ODBC Data Sources (32-bit)" icon.
	
	  The ODBC Data Source Administrator dialog box appears.
	
	2. In the "ODBC Data Source Administrator" dialog box, perform the following
	  steps:
	
	  a. Create a System DSN for a Microsoft Access database.
	
	  b. In the Data Source Name box, type "FmtDemo" (without the quotation marks).
	
	  c. Click Select to select the Nwind.mdb file.
	
	     In the default configuration for Visual Studio, the Nwind.mdb file is
	     located in the C:\Program Files\Microsoft Visual Studio\VB98 folder. Click
	     OK.
	
	  d. Click OK again.
	
	3. Start Visual Basic 6.0 and create a new Windows application (Standard EXE).
	
	4. On the Project menu, click References.
	
	5. Select "Microsoft ActiveX Data Objects Library 2.1" to enable access to ADO.
	
	  If you have a later version of ActiveX Data Objects installed on your
	  computer, use that version.
	
	6. Select "Microsoft Data Formatting Object Library 6.0" to enable access to the
	  StdDataFormat object.
	
	  If you installed a service pack for Visual Basic, the library name includes a
	  reference to the service pack. Select this option to enable access to the
	  StdDataFormat object.
	
	7. Click OK.
	
	8. On the Project menu, click Components. Select "Microsoft Data Grid Control"
	  and "Microsoft ADO Data Control", and click OK.
	
	9. Add a data grid to the form. Press F4 to view the Properties window. Verify
	  that the new data grid is called DataGrid1.
	
	10. Add an ADODC control to the form. The control has the default name Adodc1.
	
	11. Select the Adodc1 control in the Properties window. Set the ConnectionString
	  property to DSN=FmtDemo.
	
	12. Set the RecordSource property for Adodc1 to the following:
	
	  Select OrderID, CustomerID, OrderDate FROM Orders
	
	13. In the Properties window, select the DataGrid1 control. In the DataSource
	  property, type "Adodc1" (without the quotation marks). This binds the grid
	  to the data control.
	
	14. On the View menu, click Code. Type the following statements above the code:
	
	  Option Explicit
	  Private WithEvents MyFmt As StdDataFormat
	
	  This code creates a StdDataFormat variable called MyFmt. This variable has
	  the WithEvents attribute, to enable event handling for the MyFmt object.
	
	15. Type the following code to handle the Load event on the form:
	
	  Private Sub Form_Load()
	      Set MyFmt = New StdDataFormat
	      MyFmt.Type = fmtCustom
	      Set DataGrid1.Columns(1).DataFormat = MyFmt
	  End Sub
	
	  This creates an instance of the StdDataFormat object to store in MyFmt,
	  defines it to be a custom formatter, and binds it to a specific column in
	  the data grid (this is the second column because the column array is
	  zero-based).
	
	16. Type the following code to handle the Format event on the StdDataFormat
	  object:
	
	  Private Sub MyFmt_Format(ByVal DataValue As StdFormat.StdDataValue)
	      With DataValue
	          .Value = UCase(Mid(.Value, 1, 1)) & LCase(Mid(.Value, 2))
	      End With
	  End Sub
	
	  The Format event occurs after the data is retrieved into the record, but
	  before the bound controls get the data to be displayed. DataValue is the
	  value that comes into the StdDataFormat object from the ADO recordset. If
	  you change this value, you change the text that is displayed on screen. In
	  this example, the data is converted from its incoming format of uppercase to
	  a mixed-case format in which only the first letter is uppercase.
	
	17. Type the following code to handle the UnFormat event on the StdDataFormat
	  control.
	
	  Private Sub MyFmt_UnFormat(ByVal DataValue As StdFormat.StdDataValue)
	      With DataValue
	          .Value = UCase(.Value)
	      End With
	  End Sub
	
	  This event occurs just before data is sent to the database. The code performs
	  reverse conversion; it converts all entered text to uppercase.
	
	Verify it Works
	---------------
	
	1. Run the application. Data for the CustomerID column is displayed on the
	  screen in mixed case. You can enter data for this column in either uppercase
	  or lowercase.
	
	2. On the Add-ins menu, click Visual Data Manager. This runs the VisData
	  application.
	
	3. On the File menu, point to Open Database, and then click Microsoft Access.
	
	4. Open the Nwind.mdb file.
	
	  By default, it is located in the following folder:
	
	  C:\Program Files\Microsoft Visual Studio\VB98\NWind.mdb
	
	  Click Open.
	
	5. In the Database window, double-click the Orders table. The data that was
	  edited in the CustomerID column is converted back to uppercase when stored in
	  the database.
	
	Troubleshooting
	---------------
	
	This example does not verify any data. Therefore, if the converted value after
	the UnFormat event occurs is not a valid value for the given column, an error
	message appears.
	
	REFERENCES
	==========
	
	For additional information about how to use a built-in format of the
	StdDataFormat object, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q191717 HOWTO: Display Boolean Values in Bound DataGrid
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper kbHOWTOmaster 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
