---
layout: page
title: "Q193094: PRB: DataGrid or DbGrid May Not Display Data"
permalink: /kb/193/Q193094/
---

## Q193094: PRB: DataGrid or DbGrid May Not Display Data

{% raw %}

	Article: Q193094
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDataBinding kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic 6.0, after binding a DataGrid control to an ActiveX Data Objects
	(ADO) data control, you may not see any data display in the grid. This behavior
	occurs if you set or change any property of the Layout Property page of the
	DataGrid without executing the Retrieve Fields option of the DataGrid first.
	
	You may see the same behavior occur in Visual Basic 5.0 if you use a DBGrid
	control.
	
	CAUSE
	=====
	
	The data fields are not retrieved yet.
	
	RESOLUTION
	==========
	
	The Layout Property page for either the DataGrid or the DBGrid controls contains
	properties available at design-time only and needs to be set after all fields
	are available or retrieved.
	
	To work around this problem, you need to run the Retrieve Fields method before
	setting any property on the Layout property page.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following sample project uses a DataGrid control and a SQL Server database
	and also applies to the DBGrid.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add two components to the project, a Microsoft ADO Data Control 6.0 (OLEDB)
	  and Microsoft DataGrid Control 6.0 (OLEDB).
	
	3. Place both components on the default form and use their default names (ADODC1
	  and DataGrid1).
	
	4. Right-click on the ADO data control and click on ADODC properties. On the
	  General property page, use either ODBC Data Source Name or Connection String
	  to connect to Pubs database. Set the RecordSource property page to use
	  adCmdTable and Authors table. You may need to fill the Authentication
	  property page with the proper UserName and Password.
	
	5. Click on the DataGrid control and set the DataSource property to ADODC1.
	
	6. Run the project and make sure that you see data in the grid.
	
	7. Stop the project, right-click on the datagrid, click on Properties (or Custom
	  property), and click on Layout tab. Set any property on the page (Locked, for
	  example) and click OK.
	
	8. Run the project again and observe that no data appears in the grid while the
	  vertical scroll bar of the grid shows that it has some data.
	
	9. Stop the project, right-click the datagrid control, click on the Retrieve
	  Fields menu option, and then click on the "Yes" button in the message box.
	
	10. The datagrid will be set back to the default Layout properties, so you need
	  to reset any Layout Property changed in step 7.
	
	11. Run the project and note that the grid filled again with data.
	
	(c) Microsoft Corporation 1998. All Rights Reserved.
	Contributions by Hussain Abuthuraya, Microsoft Corporation
	
	
	======================================================================
	Keywords          : kbCtrl kbDataBinding kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
