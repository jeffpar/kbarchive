---
layout: page
title: "Q257788: FIX: DataGrid Row Selector Does Not Update"
permalink: kb/257/Q257788/
---

## Q257788: FIX: DataGrid Row Selector Does Not Update

	Article: Q257788
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbVBp600bug kbGrpDSVBDB kbDSupport kbVS600sp4fix kbMDACNoSweep kbVS600sp5fix
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Navigating through a DataGrid control by using the Row Selector fails to submit
	pending changes to the underlying data source.
	
	RESOLUTION
	==========
	
	This behavior no longer occurs with the version of the DataGrid that is included
	with the latest service pack for Visual Basic 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	A Row Selector is the rectangle to the left of each row of a DataGrid. When it
	is clicked, the Row Selector selects an entire row of the DataGrid. You may
	navigate through the DataGrid by clicking on different Row Selectors in
	sequence.
	
	Navigating through the DataGrid using Row Selectors fails to submit pending
	changes to the underlying data source, regardless of the backend database used
	to populate the grid. The example below demonstrates the behavior against a Jet
	Database.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, open a new Standard EXE project. Form1 is added to the
	  project by default.
	
	2. From the Project menu, click to select Components. From the list of available
	  components, select Microsoft ADO Data Control 6.0(OLEDB) and Microsoft
	  DataGrid Control 6.0(OLEDB).
	
	3. Place an ADO Data Control, a DataGrid, and a TextBox control onto Form1.
	
	4. Set the ConnectionString property of the ADO Data Control to connect to the
	  Nwind database that comes with Visual Basic. Connect using the Microsoft Jet
	  4.0 OLE DB Provider.
	
	5. The ConnectionString property of the ADO Data Control should look like the
	  following:
	
	Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\Program Files\Microsoft
	Visual Studio\VB98\NWIND.MDB;Persist Security Info=False
	
	6. Set the RecordSource property of the ADO Data Control to Select * From
	  Customers.
	
	  Set the DataSource property of the DataGrid to ADODC1 (the ADO Data Control).
	
	  Set the DataSource property of the TextBox to ADODC1.
	
	  Set the DataField property of the TextBox to CompanyName.
	
	7. Run the program.
	
	8. Select the fourth row of data by using the DataGrid's Row Selector.
	
	9. Edit the contents of the field in the TextBox. Without clicking other areas
	  of the grid, navigate to the sixth row of the DataGrid by clicking on the Row
	  Selector button for the sixth row.
	
	10. Edit the contents of the field in the TextBox. Click on the Next button of
	  the ADO Data Control to navigate to the next row.
	
	11. Stop the application.
	
	12. Run the application again to inspect the data, and note that when the ADO
	  Data Control was used to navigate through the DataGrid, the change was
	  submitted.
	
	  However, when the Row Selector was used to navigate through the DataGrid, the
	  change was not submitted.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbDatabase kbVBp600bug kbGrpDSVBDB kbDSupport kbVS600sp4fix kbMDACNoSweep kbVS600sp5fix kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
