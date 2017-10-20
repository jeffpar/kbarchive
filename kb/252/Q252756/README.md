---
layout: page
title: "Q252756: PRB: Changing DataGrid Layout Causes DataGrid to Display Empty"
permalink: /kb/252/Q252756/
---

## Q252756: PRB: Changing DataGrid Layout Causes DataGrid to Display Empty

{% raw %}

	Article: Q252756
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDataBinding kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing any of the layout properties of the ADO DataGrid Control at design time
	may cause the grid to not appear properly at run time. Instead of showing the
	correct data, the grid will appear with two columns and the correct number of
	rows and the cells that appear will be empty.
	
	This also occurs when changing the number of splits at design time.
	
	RESOLUTION
	==========
	
	To resolve this problem, after editing the DataGrid Control, right click it and
	select Clear Fields or Retrieve Fields. This will allow the DataGrid to show the
	data in the correct number of columns at run-time.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE in Visual Basic.
	
	2. Click References on the Project menu and select ActiveX Data Objects Library
	  2.1.
	
	3. Click Components on the Project menu and select Microsoft ADO Data Control
	  6.0 (OLEDB) and Microsoft DataGrid Control 6.0 (OLEDB).
	
	4. Place an ADO Data Control (Adodc1) on Form1 and set the following properties:
	
	  ConnectionString: Enter a valid Northwind connection
	  CursorLocation: adUseClient
	  RecordSource: SELECT * FROM Employees
	
	5. Place a DataGrid (DataGrid1) on the form and set the following properties:
	
	  DataSource: Adodc1
	
	6. Right-click DataGrid1 and select Edit from the pop-up menu that appears. Then
	  again right-click DataGrid1 and select Split from the pop-up menu.
	
	7. Run the code. Both splits on the DataGrid will display with two columns and
	  nine rows. The cells will be empty.
	
	8. Quit the application and right-click DataGrid at design time. Select Clear
	  fields from the pop-up menu. Now the data should display correctly at run
	  time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDataBinding kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :2.0,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
