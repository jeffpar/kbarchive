---
layout: page
title: "Q238279: PRB: Refresh Method Causes Syntax and Method Refresh Errors"
permalink: /kb/238/Q238279/
---

## Q238279: PRB: Refresh Method Causes Syntax and Method Refresh Errors

	Article: Q238279
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1,2.1 (GA),2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC250 kbADO250 k
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.0, 2.1, 2.1 (GA), 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the RecordSource property of an ADO Data Control to a different SQL
	SELECT statement and then try to execute the Refresh method, the following error
	is returned:
	
	  Syntax error in FROM clause.
	
	which is followed by:
	
	  Run-time error '-2147217900(80040e14)':
	  Method 'Refresh' of object 'IAdodc' failed
	
	or:
	
	  Method 'Refresh' of object 'IAdodc' failed when attempting to refresh an
	  ADODC after setting the recordsource property to another value.
	
	The errors occur if the CommandType property of the ADO Data Control is set to
	adCmdTable.
	
	CAUSE
	=====
	
	When the CommandType of the ADO Data Control is set to adCmdTable, "SELECT *
	From" is automatically prepended to the RecordSource value.
	
	Setting the RecordSource to a table name results in a valid SQL statement, such
	as SELECT * FROM Tablename.
	
	Setting the RecordSource to a SQL SELECT statement, such as Select * From
	Tablename, results in a SQL statement of Select * From Select * From Tablename,
	which is an invalid SQL statement.
	
	RESOLUTION
	==========
	
	There are several possible workarounds:
	
	1. Use a table name instead of a SQL SELECT statement for the RecordSource
	  property, so that SELECT * FROM Tablename is generated
	
	2. At design time, use a CommandType value of adCmdUnknown. You could then use a
	  table name at design time, and a SQL SELECT statement at run time
	
	3. At run time, explicitly specify a CommandType of adCmdText or adCmdUnknown,
	  so that SELECT * FROM is not automatically prepended.
	
	4. Certain providers accept SELECT * FROM (SELECT * FROM Tablename) as a valid
	  SELECT statement, so you could try enclosing the SQL SELECT in parentheses.
	  For example, the Jet OLE DB Provider 4.0 accepts this syntax.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Microsoft Visual Basic 6.0, create a new Standard EXE project. Form1 is
	  created by default.
	
	2. From the Project menu, choose Components, and select Microsoft ADO Data
	  Control 6.0 (OLEDB).
	
	3. Place an ADO Data Control and a CommandButton onto Form1.
	
	4. Set the ConnectionString property of the ADO Data Control to use the
	  Nwind.MDB that comes with Visual Basic.
	
	5. Set the RecordSource property to the Customers table. Confirm that the
	  CommandType is type 2 - adCmdTable.
	
	6. Add the following code to the click event for the CommandButton:
	
	  ' Adodc1.CommandType = adCmdText
	  Adodc1.RecordSource = "Select * from Employees"
	  Adodc1.Refresh
	
	7. Press the F5 key to execute the code. Click on the CommandButton, and note
	  that the errors are returned on the ADODC1.Refresh line of code. Return to
	  design mode.
	
	8. Uncomment the line that explicitly sets the ADO Data Control'sCommandType to
	  adCmdUnknown. Press the F5 key to execute the code, and note that no error is
	  returned.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC250 kbADO250 kbADO260 kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC200 kbMDAC210 kbMDAC210SP1 kbMDAC210SP2 kbMDAC250 kbMDAC260 kbMDAC270
	Version           : :2.0,2.1,2.1 (GA),2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
