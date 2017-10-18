---
layout: page
title: "Q195837: PRB: Error Returned When Attempting to Modify JET Database"
permalink: kb/195/Q195837/
---

## Q195837: PRB: Error Returned When Attempting to Modify JET Database

	Article: Q195837
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDAOsearch kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to modify a JET database, the following error is returned:
	
	  "Run-time error '3211': The database engine couldn't lock table '<table
	  name>' because it's already in use by another person or process.".
	
	CAUSE
	=====
	
	Attempting to create a relation that involves a table that is currently open can
	cause this error.
	
	RESOLUTION
	==========
	
	The best workaround is to close the recordset that contains the table being used
	in the relation.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following example will open a database (use Nwind.MDB), open a table within
	that database, and then attempt to create a relation using the open table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Under Project/References, add "Microsoft DAO 3.51 Object Library."
	
	3. Add a CommandButton to Form1 and add the following code under the Click
	  event:
	
	        Dim Fld as Field
	        Dim Tbl as Recordset
	        Dim Rel as Relation
	        Dim db as Database
	
	        Set db = OpenDatabase("nwind.mdb", True)
	
	        Set Tbl = db.OpenRecordset("employees", dbOpenTable)
	        ' Note that employees table is used below in creating the relation.
	        ' Uncommenting the line below allows the code to work properly.
	        ' Tbl.Close
	
	        Set Rel = db.CreateRelation("myrel")
	        Rel.Table = "Employees"
	        Rel.ForeignTable = "Orders"
	        Set Fld = Rel.CreateField("EmployeeID")
	        Fld.ForeignName = "EmployeeId"
	        Rel.Fields.Append Fld
	
	        ' eError will occur on next line.
	        db.Relations.Append Rel
	
	4. Uncomment the line for closing the recordset and note the relation is created
	  and added to the database without error.
	
	======================================================================
	Keywords          : kberrmsg kbDAOsearch kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
