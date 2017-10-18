---
layout: page
title: "Q296173: HOWTO: Use ADOX to Create OLE Object Field in an Access Database"
permalink: kb/296/Q296173/
---

## Q296173: HOWTO: Use ADOX to Create OLE Object Field in an Access Database

	Article: Q296173
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbAccess kbDatabase kbMDAC kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbATM kbmdac270
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use ActiveX Data Objects Extensibility (ADOX) to
	create an OLE Object field in a Microsoft Access Database (.mdb file). You must
	use the adLongVarBinary constant to create the field. You do not have to specify
	a field size in the field definition.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click References. From the list of available
	  components, click "Microsoft ADO Ext. 2.1 for DDL and Security".
	
	3. Add a CommandButton control to Form1.
	
	4. Paste the following code onto the Declarations section of Form1:
	
	  Private Sub Command2_Click()
	      Set cat = New ADOX.Catalog
	      Set tbl = New ADOX.Table
	     cat.ActiveConnection = _
	        "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=d:\nwind2.mdb;"
	     tbl.Name = "OleObjTable"
	     tbl.Columns.Append "Column1", adInteger
	     tbl.Columns.Append "Column2", adInteger
	     tbl.Columns.Append "Column3", adVarWChar, 50
	     ' Please note adLongVarBinary = 205
	     tbl.Columns.Append "MyOleObject", adLongVarBinary
	     cat.Tables.Append tbl
	  End Sub
	
	5. Modify the cat.ActiveConnection assignment to point to a valid Microsoft
	  Access Database file.
	
	6. Run the project, and click Command1. Notice that a table named OleObjTable is
	  created in the database. When you view the table in Design Mode, the Column3
	  field definition is displayed as OLE Object.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q266302 PRB: ADOX Error -2147217859 "Type Is Invalid" When You Append a Table
	  to a Catalog
	
	For more information, see the "Defining and Retrieving a Database's Schema"
	section in the following MSDN article:
	
	  Migrating from DAO to ADO
	  http://msdn.microsoft.com/library/techart/daotoadoupdate.htm
	
	Additional query words: oleobject blob binary MDB bitmap dbLongBinary
	
	======================================================================
	Keywords          : kbAccess kbDatabase kbMDAC kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : :2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
