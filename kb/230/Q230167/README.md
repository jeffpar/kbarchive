---
layout: page
title: "Q230167: BUG:DataCombo/DataList Not Displaying Recordset with Sort/Filter"
permalink: /kb/230/Q230167/
---

## Q230167: BUG:DataCombo/DataList Not Displaying Recordset with Sort/Filter

{% raw %}

	Article: Q230167
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1,2.5,2.6,5.0,6.0
	Operating System(s): 
	Keyword(s): kbComboBox kbDatabase kbDataBinding kbListBox kbVBp500 kbVBp600 kbGrpDSVBDB kbGrpDSMDAC
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DataCombo/DataList controls bound to an ADO.Recordset are not correctly
	reflecting data when Recordset.Sort or Recordset.Filter is applied.
	
	CAUSE
	=====
	
	The DataCombo/DataList controls don't use chapter handles when fetching rows
	from OLEDB rowsets. They do call IRowPosition::GetRowPosition and pass in a
	non-NULL chapter handle parameter, but apparently they don't use it. As a
	result, these controls behave incorrectly when bound to child commands from the
	DE (or manually to child recordsets) or when the Sort and Filter properties on
	the recordset are modified after binding to these controls. In certain cases,
	this results in run-time errors and, in other cases, the controls are populated
	with the entire rowset rather than the restricted set of rows. The Hierarchical
	Flex grid control appears to work properly. The DataList and DataCombo controls
	are OLEDB bindable controls, but they do not utilize chapter handles.
	
	RESOLUTION
	==========
	
	Essentially, the workaround is to use a temporary Recordset object
	(Recordset.Clone will not work) and copy the contents of the original and rebind
	the Recordset copy to the control(s).
	
	Otherwise, if the Recordset is not a dynamic or manually built Recordset (as in
	this sample) then you could also work around the problem by using ORDER BY in
	the SQL statement. Similarly, you could work around the Filter option by placing
	a WHERE clause in the SQL statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Starting with Microsoft Data Access Components (MDAC) version 2.6, MDAC no
	longer contains the following Jet components:
	
	- Microsoft Jet
	- Microsoft Jet OLE DB Provider
	- ODBC Desktop Database Drivers
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	The "MDAC 2.5 Stack and Windows File Protection" white paper contains a full list
	of the components that are shipped with MDAC 2.5, along with a discussion of
	Windows File Protection. Refer to this white paper for more information about
	the Jet dynamic-link libraries (DLLs) that are included in MDAC 2.5, which are
	no longer a part of MDAC 2.6.
	
	For more information about MDAC 2.5 and Windows File Protection, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/data/mdacwfp.htm
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project and paste the following code in the General
	  Declarations section:
	
	  Option Explicit
	  Private rs As ADODB.Recordset
	  Private rsCopy As ADODB.Recordset
	
	  Private Sub Command1_Click()
	      rs.Filter = "Name LIKE '%A%'"
	      CopyRs
	      DisplayRS
	  End Sub
	
	  Private Sub Command2_Click()
	      Static sSort As String
	      If sSort = "" Then sSort = "ASC"
	      If sSort = "ASC" Then
	          sSort = "DESC"
	      Else
	          sSort = "ASC"
	      End If
	      rs.Sort = "Name " & sSort
	      CopyRs
	      DisplayRS
	  End Sub
	
	  Private Sub Command3_Click()
	      ReBindRs
	  End Sub
	
	  Private Sub Form_Load()
	      Set rs = New ADODB.Recordset
	      rs.Fields.Append "Name", adVarChar, 255
	      rs.Open
	      rs.AddNew Array("name"), Array("ABC")
	      rs.AddNew Array("name"), Array("ABD")
	      rs.AddNew Array("name"), Array("XYZ")
	      rs.AddNew Array("name"), Array("AXY")
	      rs.AddNew Array("name"), Array("123")
	      rs.AddNew Array("name"), Array("890")
	      rs.AddNew Array("name"), Array("190")
	      rs.AddNew Array("name"), Array("A19")
	      CopyRs
	      Set DataList1.RowSource = rsCopy 
	      DataList1.Listfield = "name"
	      Set DataCombo1.RowSource = rsCopy 
	      DataCombo1.ListField= "name"
	      DisplayRS
	  End Sub
	
	  Public Sub DisplayRS()
	      Text1.Text = ""
	      If rs.RecordCount > 0 Then rs.MoveFirst
	      Do While Not rs.EOF
	          Text1.Text = Text1.Text & rs("Name").Value & vbCrLf
	          rs.MoveNext
	      Loop
	  End Sub
	
	  Public Sub CopyRs()
	      Set rsCopy = Nothing
	      Set rsCopy = New ADODB.Recordset
	      
	      rsCopy.Fields.Append "Name", adVarChar, 255
	      rsCopy.Open
	      
	      If rs.RecordCount > 0 Then rs.MoveFirst
	      Do While Not rs.EOF
	          rsCopy.AddNew Array("name"), rs("name").Value
	          rs.MoveNext
	      Loop
	      'ReBindRs
	  End Sub
	
	  Public Sub ReBindRs()
	      Set DataList1.RowSource = Nothing
	      Set DataCombo1.RowSource = Nothing
	      Set DataList1.RowSource = rsCopy 
	      DataList1.ListField = "name"
	      Set DataCombo1.RowSource = rsCopy 
	      DataCombo1.ListField = "name"
	  End Sub
	
	2. From the menu bar, navigate to Project-Components and select Microsoft
	  DataList Controls 6.0 (OLEDB).
	
	3. From the menu bar, navigate to Projects-References and select Microsoft
	  ActiveX Data Objects Library.
	
	4. Add three CommandButtons to the Form. Label these Filter, Sort, and Rebind,
	  respectively.
	
	5. Add a Text box control to the Form, set the MultiLine property=True and set
	  the Scrollbars=Vertical.
	
	6. Add a DataList and a DataCombo control to the Form.
	
	  Now you should be able to run the sample application that demonstrates the
	  problem. Note that when you click on the Sort or the Filter command, the
	  DataList and DataCombo controls do not reflect the change in the Recordset.
	  Click on the Rebind command and the DataList/DataCombo controls are rebound
	  to the rsCopy Recordset so the sorted/filtered data displays correctly.
	
	REFERENCES
	==========
	
	Q189682 HOWTO: Bind a DataList or DataCombo to a Recordset at Run Time
	
	Additional query words:
	
	======================================================================
	Keywords          : kbComboBox kbDatabase kbDataBinding kbListBox kbVBp500 kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDACNoSweep kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO200 kbADO250 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :2.0,2.1,2.5,2.6,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
