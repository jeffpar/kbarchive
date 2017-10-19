---
layout: page
title: "Q223066: FIX: Placing MsgBox in SelChange Event of DataGrid Causes IPF"
permalink: /kb/223/Q223066/
---

## Q223066: FIX: Placing MsgBox in SelChange Event of DataGrid Causes IPF

	Article: Q223066
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVBp600 kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Msgbox function placed in the SelChange event for a DataGrid causes a run-time
	Application Error that terminates Visual Basic.
	
	Using Windows NT, you get the following error:
	
	  The instruction at "0x24ce5280" referenced memory at "0x000c0158". The memory
	  could not be "read".
	
	  Click OK to terminate the application.
	  Click on CANCEL to debug the application.
	
	Using either Windows 95 or Windows 98, you get this error:
	
	  VB6 caused an invalid page fault in module MSDATGRD.OCX at 0137:24ec5280.
	
	CAUSE
	=====
	
	This bug occurs if a record selector is clicked while the DataGrid's internal
	edit mode is set to True. You can explicitly set the internal edit mode to True,
	using DataGrid.EditActive = True. In addition, the internal edit mode can be set
	to True implicitly, by changing the focus. The MsgBox function causes a change
	of focus.
	
	RESOLUTION
	==========
	
	This behavior no longer occurs with the version of the DataGrid that ships with
	Visual Basic 6.0 Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	A record selector is the rectangle to the left of each row of a DataGrid. When
	clicked, a record selector selects an entire row of the DataGrid. Clicking a
	record selector raises the SelChange event of the DataGrid.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE.
	
	2. From the Projects menu, choose Components and select Microsoft ADO Data
	  Control 6.0 and Microsoft DataGrid Control v6.0.
	
	3. Place an ADODC and a DataGrid on the form.
	
	4. Set up the ConnectString for the ADODC by pressing the ellipsis, and
	  selecting the OLE DB Provider for SQL Server. Choose the other items that are
	  appropriate for your system. You should then have a ConnectString that looks
	  like the following:
	
	  ConnectionString: Provider=SQLOLEDB.1;Persist Security Info=False;User
	  ID=sa;Initial Catalog=pubs;Data Source=yourserver
	
	5. Set the RecordSource property to "Select * from Authors".
	
	6. Set the DataSource property of the DataGrid to ADODC1.
	
	7. In the code window for the form, select Datagrid1 in the first drop-down
	  combo box and Selchange in the second drop-down combo box. This places the
	  DataGrid1_SelChange event into the code window.
	
	8. Place the following code in this event:
	
	      MsgBox "SelChange event raised"
	
	9. Run the form. Click on the record selector for a record. The message box
	  displays. Click OK. In the DataGrid, a field is highlighted for editing.
	
	10. Click on the record selector for a different record, or anywhere else in the
	  DataGrid, and you will get the Application Error message box with the error
	  shown in the SYMPTOMS section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVBp600 kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
