---
layout: page
title: "Q223062: FIX: DataGrid Will Not Add a New Record if Fields Set in Code"
permalink: /kb/223/Q223062/
---

## Q223062: FIX: DataGrid Will Not Add a New Record if Fields Set in Code

	Article: Q223062
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDatabase kbDataBinding kbVBp600bug kbVS600sp3fix kbGrpDSVBDB
	Last Modified: 24-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Rows will not be added to an ADO Data Control's Recordset if the field values
	are set programmatically in the OnAddNew event of the DataGrid.
	
	CAUSE
	=====
	
	This behavior was due to a bug in the DataGrid Control (msdatgrd.ocx).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This code uses the Biblio database that comes with Visual Basic.
	
	1. Start Visual Basic 6.0 and create a new EXE project. Form1 is added by
	  default.
	
	2. Add the following two controls to the default form:
	
	Microsoft ADO Data Control 6.0 (OLEDB)
	Microsoft DataGrid Control 6.0 (OLEDB)
	
	3. Set the properties of the ADO Data Control, ADODC1, as follows:
	
	ConnectionString  Provider=Microsoft.Jet.OLEDB.3.51;DataSource=
	                 C:\ProgramFiles\Microsoft Visual Studio\VB98\Biblio.mdb
	RecordSource
	                 "SELECT * FROM Authors"
	
	4. Set the properties of the DataGrid, DataGrid1, as follows:
	
	DataSource        ADODC1
	AllowAddNew       True
	TabAction         2-dbgGridNavigation
	
	5. Add following code to the default form:
	
	     Private Sub DataGrid1_OnAddNew()
	        DataGrid1.Columns("Author").Text = "Test"
	        DataGrid1.Columns("Year Born").Text = 1996
	     End Sub
	
	6. Run the project. Go to the last record in the DataGrid (the blank row) and
	  click on any cell. The second and third columns will have the default values
	  "Test" and "1999" entered. Continue tabbing through the cells so that the new
	  record gets updated.
	
	7. End the program , and then run again. Note that the new row has not actually
	  been added.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbDatabase kbDataBinding kbVBp600bug kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
