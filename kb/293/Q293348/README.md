---
layout: page
title: "Q293348: HOWTO: Set Focus on a Column in a DataGrid Control"
permalink: /kb/293/Q293348/
---

## Q293348: HOWTO: Set Focus on a Column in a DataGrid Control

{% raw %}

	Article: Q293348
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbMDAC kbVBp600 kbGrpDSVBDB kbDSupport kbATM
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are many times when you may want to set focus on a column in a Microsoft
	DataGrid Control 6.0. For example, if you have a read-only field, you may not
	want the TAB key to stop on the read-only fields in the DataGrid. This article
	describes how to set focus in a Microsoft DataGrid Control 6.0.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate how to control the focus in a Microsoft DataGrid
	Control 6.0.
	
	Set Up the Project:
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click References, and then click Microsoft ActiveX Data
	  Objects 2.x Library to add a project reference.
	
	3. On the Project menu, click Components, and then click Microsoft ADO Data
	  Control 6.0 and Microsoft DataGrid Control 6.0 to add these items to the
	  toolbox.
	
	4. Add the following code to the Form_Load event:
	
	  Me.DataGrid1.Col = 1
	
	Set Up the ActiveX Data Objects Data Control:
	
	1. Drag an ActiveX Data Objects (ADO) control and a DataGrid control, and drop
	  these controls onto Form1.
	
	2. Right-click the ADO DataControl, and then click ADODC Properties.
	
	3. Click Use Connection String, and then click Build.
	
	4. Click Microsoft OLEDB Provider for SQL Server, and then click Next.
	
	5. On the Connection tab, type the connection information for your server,
	  choosing the pubs database.
	
	6. Click Test Connection to verify that the connection is good, and then click
	  OK to close the Properties window.
	
	7. On the RecordSource tab, in the Command Type box, type "1-adCmdText" (without
	  the quotation marks) to change the command type.
	
	8. In the Command Text box, type the following code:
	
	  select au_id, au_lname from authors
	
	9. Click Apply, and then click OK to close the Property Pages dialog box.
	
	Set Up the DataGrid Control:
	
	1. Click the DataGrid, and then set the DataSource property to adodc1.
	
	2. Right-click Retrieve Fields.
	
	3. Click Yes to replace existing grid layout with field definitions.
	
	4. Resize the grid to show all of the fields.
	
	5. Right-click the grid, and then click Properties.
	
	6. On the Layout tab, click column 0(au_id) from the drop-down combo box. Select
	  the Locked check box so that the first column of the grid is read-only.
	
	7. On the Keyboard tab, in the TabAction drop-down combo box, click
	  2-drgGridNavigation, and then click OK to save the changes.
	
	8. Add the following code to the DataGrid1_RowColChange event:
	
	     Me.Adodc1.Recordset.MoveNext
	     Me.DataGrid1.Col = 1 
	
	9. Run the application, and press the TAB key to move through the au_lname
	  column.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q128205 HOWTO: Set Buffering Mode in Visual FoxPro
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbMDAC kbVBp600 kbGrpDSVBDB kbDSupport kbATM 
	Component         : DataAccessComp
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
