---
layout: page
title: "Q171952: PRB: MSFlexGrid Doesn't Return All Rows w/UseODBC Data Control"
permalink: kb/171/Q171952/
---

## Q171952: PRB: MSFlexGrid Doesn't Return All Rows w/UseODBC Data Control

	Article: Q171952
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MSFlexGrid control does not return all rows when bound to a Data control
	whose DefaultType is UseODBC.
	
	RESOLUTION
	==========
	
	All of the following are possible workarounds:
	
	- Change the DefaultType property of the Data control to UseJet.
	
	- Replace the Data control with the Remote Data Control.
	
	- Replace the MSFlexGrid control with the DBGrid control.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The DefaultType property of the Data control is new to Visual Basic 5.0. It
	determines what type of data source (Jet or ODBCDirect) to use when creating a
	Recordset.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and create a Standard EXE. Form1 is added by default.
	
	2. Bring up the Components dialog window by selecting the menu item
	  Project/Components. Select "Microsoft FlexGrid Control 5.0" and click OK.
	
	3. Add a MSFlexGrid control (MSFlexGrid1) and a Data control (Data1) to Form1.
	
	4. Set the DefaultType property of Data1 to UseODBC.
	
	5. Set the DataSource property of MSFlexGrid1 to Data1.
	
	6. Add the following lines of code to the Load event of Form1:
	
	        'Replace MY_SERVER with an appropriate SQL pubs database DSN.
	        Data1.Connect = "ODBC;DSN=MY_SERVER;UID=SA;PWD="
	        Data1.RecordSource = "SELECT * FROM TITLES"
	        Data1.Refresh
	
	        'Number of rows in the Recordset.
	        MsgBox Data1.Recordset.RecordCount
	
	        'Number of rows in MSFlexGrid1 excluding the title row.
	        MsgBox MSFlexGrid1.Rows - 1
	
	7. Press the F5 key to run the project and note the discrepancy in the numbers
	  displayed.
	
	Additional query words: kbVBp500 kbVBp kbWinOS98 kbDSupport kbdse kbNoKeyWord
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
