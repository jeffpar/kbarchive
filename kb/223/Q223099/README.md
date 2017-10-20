---
layout: page
title: "Q223099: FIX: DataMemberChanged Fails for UserControls"
permalink: /kb/223/Q223099/
---

## Q223099: FIX: DataMemberChanged Fails for UserControls

{% raw %}

	Article: Q223099
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveX kbActivexEvents kbCtrl kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DataMemberChanged method is used to notify data consumers that a data member
	of a data source has changed, allowing the data consumers to refresh the data.
	This method works correctly if called from a Class module. If this method is
	called from a UserControl, no notification is sent and the data consumers are
	unable to retrieve the new set of data.
	
	CAUSE
	=====
	
	The parameter passed into the DataMemberChanged method is incorrectly
	interpreted and the data consumers are not notified.
	
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
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click References to display the References dialog.
	  Select Microsoft ActiveX Data Objects 2.x Library and Microsoft Data Binding
	  Collection and click OK.
	
	3. On the Project menu, click Components to display the Components dialog.
	  Select Microsoft DataGrid control 6.0 (OLEDB) and click OK.
	
	4. On the Project menu, click Add User Control and then click Open to add a
	  UserControl to your project. Resize the UserControl to make it smaller.
	  Change the DataSourceBehavior property of the User Control to vbDataSource.
	
	5. Add a Label to UserControl1.
	
	6. Add the following code to the General Declarations section of UserControl1:
	
	  Private rs As ADODB.Recordset
	
	  Public Sub changerecordset()
	     
	     Set rs = Nothing
	     Set rs = New ADODB.Recordset
	     
	     rs.Fields.Append "field1", adBSTR, 25
	     rs.Fields.Append "field2", adBSTR, 25
	     rs.Fields.Append "field3", adBSTR, 25
	     rs.Fields.Append "field4", adBSTR, 25
	     rs.Open
	     
	     For i = 1 To 10
	        rs.AddNew
	        rs(0) = "a"
	        rs(1) = "AA"
	        rs(2) = "AAA"
	        rs(3) = "AAAA"
	        rs.Update
	     Next i
	     
	     Call DataMemberChanged("foo")
	     
	  End Sub
	     
	  Private Sub Label1_Click()
	
	  End Sub
	
	  Private Sub UserControl_GetDataMember(DataMember As String, Data As Object)
	
	     Set Data = rs
	     
	  End Sub
	
	  Private Sub UserControl_Initialize()
	     Label1.Caption = "My Data Control"
	     Set rs = New ADODB.Recordset
	     rs.Fields.Append "field1", adBSTR, 25
	     rs.Fields.Append "field2", adBSTR, 25
	     rs.Fields.Append "field3", adBSTR, 25
	     rs.Fields.Append "field4", adBSTR, 25
	     rs.Open
	     
	     For i = 1 To 10
	        rs.AddNew
	        rs(0) = CStr(i)
	        rs(1) = CStr(i + i)
	        rs(2) = CStr(i * i)
	        rs(3) = CStr(i / i)
	        rs.Update
	     Next i
	     
	     DataMembers.Add "foo"
	     
	  End Sub
	
	7. Close the UserControl design window. UserControl1 is now available in the
	  toolbox.
	
	8. Add a TextBox, a DataGrid control, two CommandButtons, and a UserControl1 to
	  Form1. Resize the DataGrid to provide room for 10 rows and 4 columns.
	
	9. Add the following code to the General Declarations section of Form1:
	
	  Private bc As BindingCollection
	  Private Sub Command1_Click()
	
	     Me.DataGrid1.DataMember = "foo"
	     Set Me.DataGrid1.DataSource = Me.UserControl11
	     
	     Set bc = New BindingCollection
	     bc.DataMember = "foo"
	     Set bc.DataSource = Me.UserControl11
	     bc.Add Text1, "text", "field1"
	     
	  End Sub
	
	  Private Sub Command2_Click()
	
	     Me.UserControl11.changerecordset
	
	  End Sub
	
	10. Run the project. Click Command1 to load values into the DataGrid control.
	  Click Command2 and the values in the DataGrid do not change. The expectation
	  is that updated values will be displayed. Click Command1 again to view the
	  modified values. This demonstrates that the data do change when Command2 is
	  clicked, but the DataGrid is not notified.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbActiveX kbActivexEvents kbCtrl kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
