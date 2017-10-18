---
layout: page
title: "Q190522: PRB: Error Setting Field Format Property of Access Tables"
permalink: kb/190/Q190522/
---

## Q190522: PRB: Error Setting Field Format Property of Access Tables

	Article: Q190522
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	From Visual Basic, when trying to specify a field Format property of an Access
	table (for example, field type DateTime) from blank to "Long Date" format, the
	following error occurs:
	
	  Run-time error '3421':
	
	  Data type conversion error.
	
	CAUSE
	=====
	
	The property data type constant should always be "dbText." If other data type
	constants, such as dbDate or dbNumeric are specified, you will encounter the
	error described above.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following Visual Basic 5.0 example creates a new field object MyNewDate with
	data type dbDate, and appends it to the Fields collection. It then specifies the
	Format property with the value "Long Date." Note that the Format property is
	specified as "dbDate," which is incorrect. To correct the problem, you should
	change:
	
	     Set prp = fld.CreateProperty("Format", dbDate)
	
	to:
	
	      Set prp = fld.CreateProperty("Format", dbText)
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a "Standard EXE" project in Visual Basic. Form1 is created by default.
	
	2. From the Project menu, select References, and then place a check next to
	  Microsoft DAO 3.5 Object Library.
	
	  In Visual Basic 4.0, you can reference Microsoft DAO Object Library from Tools
	  menu, then select References.
	
	3. Add a CommandButton control, Command1, to Form1.
	
	4. Paste the following code in the Command1_Click() code snippet:
	
	        Dim db As Database
	        Dim tdf As TableDef
	        Dim fld As Field
	        Dim prp As Property
	        
	        Set db = OpenDatabase("Nwind.mdb")
	        Set tdf = db.TableDefs("Employees")
	        tdf.Fields.Append tdf.CreateField("MyNewDate", dbDate) 'Error line
	        Set fld = tdf.Fields("MyNewDate")
	        Set prp = fld.CreateProperty("Format", dbDate)
	        prp.Value = "Long Date"
	        fld.Properties.Append prp
	
	REFERENCES
	==========
	
	For more information please reference the following articles:
	
	  Q170549 HOWTO: Read or Modify User-Defined DAO Properties
	
	  Q178745 ACC: Using DAO to Set and Retrieve Custom Data Properties
	
	Additional query words: kbdse kbDSupport kbVBp kbVBp400 kbVBp500 kbVBp600 kbDAO350 kbDatabase
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
