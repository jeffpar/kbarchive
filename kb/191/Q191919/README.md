---
layout: page
title: "Q191919: BUG: DataGrid Doesn't Handle Special Filter Constants Correctly"
permalink: /kb/191/Q191919/
---

## Q191919: BUG: DataGrid Doesn't Handle Special Filter Constants Correctly

	Article: Q191919
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.5,2.0,2.1 SP2,2.5,2.6,2.7,5.0,6.0,6.0 SP4,6.0 SP5
	Operating System(s): 
	Keyword(s): kbADO200bug kbCtrl kbDatabase kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, 6.0 SP4, 6.0 SP5 
	- ActiveX Data Objects (ADO), versions 1.5, 2.0, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the filter of an ADO Recordset object is set to one of the special
	constants, such as adFilterPendingRecords, the bound DataGrid control still
	displays all of the rows in the Recordset. If the filter is set to specify a
	particular field, such as "State = 'CA'," the DataGrid displays only the rows
	that are specific to that filter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The code that follows filters based on a field and displays the appropriate data
	in the grid.
	
	Modifying records in the data grid and setting the Filter property of the
	Recordset to display only records with pending changes (Filter =
	adFilterPendingRecords) causes the recordset to correctly filter on those
	changed records. However, the DataGrid does not correctly display the filtered
	Recordset object.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. On the Project menu, click References.
	
	3. In the list of available references, click Microsoft ActiveX Data Objects
	  Library.
	
	4. On the Project menu, click Components.
	
	5. In the list of available components, click Microsoft DataGrid Control 6.0
	  (OLEDB).
	
	6. Add a DataGrid control and two CommandButton controls to Form1.
	
	7. Set the name and the caption properties of the CommandButton controls as
	  follows:
	
	   - Command1:
	     Name = cmdFilterField
	     Caption = FilterField
	
	   - Command2:
	     Name = cmdFilterPending
	     Caption = FilterPending
	
	8. Add the following code to the General Declarations of Form1:
	
	        Dim rsAuthors As New ADODB.Recordset
	        Private Sub cmdFilterField_Click()
	          rsAuthors.Filter = adFilterNone
	          rsAuthors.Filter = "State = 'UT'"
	        End Sub
	
	        Private Sub cmdFilterPending_Click()
	          rsAuthors.Filter = adFilterNone
	          rsAuthors.Filter = adFilterPendingRecords
	        End Sub
	
	        Private Sub Form_Load()
	          Dim cnPubs As New ADODB.Connection
	          Dim strConn As String
	
	          ' You may have to change the following line
	          ' to a valid SQL Server
	          strConn = "Provider=SQLOLEDB;Data Source=(local);" & _
	                   "Initial Catalog=pubs;"
	
	          cnPubs.CursorLocation = adUseClient
	          cnPubs.Open strConn, "sa", ""
	
	          rsAuthors.Open "SELECT * FROM Authors", cnPubs, adOpenStatic, _
	                    adLockBatchOptimistic
	
	          Set rsAuthors.ActiveConnection = Nothing
	
	          cnPubs.Close
	
	          Set DataGrid1.DataSource = rsAuthors
	
	        End Sub
	
	9. Press the F5 key to run the application, and note the behavior of the
	  different filter methods.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO200bug kbCtrl kbDatabase kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2bug kbMDAC210SP2bug kbMDAC250bug kbADO250bug kbMDAC260 kbADO260 kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO150 kbADO200 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB600SP4 kbVB600SP5 kbADO270
	Version           : :1.5,2.0,2.1 SP2,2.5,2.6,2.7,5.0,6.0,6.0 SP4,6.0 SP5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
