---
layout: page
title: "Q255782: HOWTO: Use ADO/ADOX to Modify Base Query of Access QueryDef"
permalink: /kb/255/Q255782/
---

## Q255782: HOWTO: Use ADO/ADOX to Modify Base Query of Access QueryDef

	Article: Q255782
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1,2.1 SP1,2.1 SP2,2.5,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAccess kbADO210 kbVBp500 kbVBp600 kbGrpDSVBDB kbADO250 _IK
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- ActiveX Data Objects (ADO), versions 2.1, 2.1 SP1, 2.1 SP2, 2.5 
	- Microsoft Access 2000 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use ActiveX Data Objects (ADO) and ADO
	Extensions for DDL and Security (ADOX) to modify the underlying SQL query of an
	Access 97 or Access 2000 QueryDef object from a Visual Basic application at run
	time.
	
	MORE INFORMATION
	================
	
	The following example uses the Northwind Access database that ships with Visual
	Basic. For illustration purposes, a new Query object named "All Customers" is
	created in this database at design time using Access. The underlying query for
	the QueryDef object is a simple SQL SELECT statement that retrieves all the
	records in the Customers table. Using ADO and ADOX, the Visual Basic code
	modifies the SQL query of the "All Customers" QueryDef object.
	
	Step-by-Step Example
	--------------------
	
	1. Use Microsoft Access to open the Northwind.mdb database, which is located in
	  the Visual Basic installation directory.
	
	2. Create a new Query object in the database that retrieves all the records in
	  the Customers table. Specify the SQL query for the new Query object as
	  "Select * from Customers". Save the query object as "All Customers". Save
	  your changes to the database, and exit Access.
	
	3. Create a new Standard EXE Project in Visual Basic.
	
	4. On the Project menu, click References, and select the Microsoft ActiveX Data
	  Objects 2.1 library and Microsoft ADO Ext. 2.1 for DDL and Security check
	  boxes.
	
	5. Add a command button to Form1.
	
	6. Add the following code to the form's General Declarations section:
	
	     Dim cn As Connection
	     Dim mcat As ADOX.Catalog
	     Dim mview As ADOX.View
	
	7. Add the following code to the command button's Click() event procedure:
	
	  Private Sub Command1_Click()
	      Dim cmd As ADODB.Command
	
	      Set cn = New ADODB.Connection
	      cn.Open "Provider=Microsoft.Jet.OLEDB.4.0;DataSource=nwind.mdb"
	      Set mcat = New ADOX.Catalog
	      Set mcat.ActiveConnection = cn
	
	      Set mview = mcat.Views("All Customers")
	      Set cmd = mview.Command
	      cmd.CommandText = "Select * from customers Order by CompanyName"
	      Set mview.Command = cmd
	
	      MsgBox "Querydef [All Customers] has been modified !"
	      
	      Set mview = Nothing
	      Set cmd = Nothing
	      Set mcat = Nothing
	      cn.Close
	  End Sub
	
	  The Query objects that are defined in an Access database are listed in the
	  Views collection of the ADOX Catalog object. Each ADOX.View object has a
	  Command property that contains a reference to an ADODB.Command object, which
	  defines the underlying query of the QueryDef object. The preceding code
	  modifies the CommandText property of this Command object to modify the query
	  definition of the Access Query object.
	
	8. Press the F5 key to run the project.
	
	9. Click the command button that appears on the form. The code in the Click
	  event runs and modifies the query definition of the "All Customers" QueryDef
	  object.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess kbADO210 kbVBp500 kbVBp600 kbGrpDSVBDB kbADO250 _IK 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbAccessSearch kbADO210 kbADO210sp1 kbADO210sp2 kbADO250 kbZNotKeyword6 kbAccess2000 kbAccess97 kbZNotKeyword2 kbVB500Search kbVB600Search kbAccess2000Search kbVB500 kbVB600 kbAccess97Search
	Version           : :2.1,2.1 SP1,2.1 SP2,2.5,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
