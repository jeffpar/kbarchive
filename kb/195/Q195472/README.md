---
layout: page
title: "Q195472: HOWTO: Highlight a Specific Row in the DataGrid Control 6.0"
permalink: /kb/195/Q195472/
---

## Q195472: HOWTO: Highlight a Specific Row in the DataGrid Control 6.0

{% raw %}

	Article: Q195472
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB ol20setcfght
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to highlight a specific row in the DataGrid control
	(6.0) in an unbound mode.
	
	The same procedure could be applied in Visual Basic 5.0 using the DBGrid Control
	5.0.
	
	MORE INFORMATION
	================
	
	In order to highlight a specific row in the DataGrid you need to specify the
	bookmark of the target record within the recordset of your data source. You need
	to add this bookmark to the collection of bookmarks.
	
	Each bookmark previously appended to the collection shows in the range of
	selected rows on your DataGrid control. You need to explicitly remove these rows
	from the collection before appending the bookmark for the record you wish to
	highlight.
	
	The following Visual Basic 6.0 sample code demonstrates the process of searching
	for a record and then highlighting the hit within your grid:
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Components on the Project menu. Select "Microsoft DataGrid Control 6.0
	  (OLE DB)." Select Project References and add "Microsoft ActiveX Data Objects
	  2.x Library."
	
	3. Add a CommandButton to your form; the default is Command1. Add a DataGrid
	  control to your form; the default is DataGrid1.
	
	4. Place the following code in the General Declaration section of Form1:
	
	        Option Explicit
	
	        Dim cn As New ADODB.Connection
	        Dim rs As New ADODB.Recordset
	        Dim cmd As New ADODB.Command
	        Dim i As Integer
	        Dim FindLastName As String
	
	        Private Sub Command1_Click()
	
	           ' Remove previously saved bookmark from collection
	           If (DataGrid1.SelBookmarks.Count <> 0) Then
	              DataGrid1.SelBookmarks.Remove 0
	           End If
	
	           ' Prompt user for desired author's last name
	           FindLastName = InputBox("Please enter the author's last name you
	                                    want to search for", "Find")
	
	           rs.Find "au_lname = '" & FindLastName & "'", , , 1
	
	           ' Append your bookmark to the collection of selected rows
	           DataGrid1.SelBookmarks.Add rs.Bookmark
	
	        End Sub
	
	        Private Sub Form_Load()
	
	           ' Open your ADO connection where "Pubs" is an ODBC DSN that
	           ' points to pubs database in SQL Server
	           cn.Open "Pubs"
	
	           ' Create your command to query for all records in Authors table
	           With cmd
	              .ActiveConnection = cn
	              .CommandText = "select * from authors"
	           End With
	
	           ' Open your recordset
	           With rs
	              ' Set rs properties
	              .CursorType = adOpenKeyset
	              .LockType = adLockOptimistic
	
	              ' Call open using active command
	              .Open cmd
	           End With
	
	           ' Populate the DataGrid providing rs as the data source
	           Set DataGrid1.DataSource = rs
	
	        End Sub
	
	5. Press the F5 key to run the application. Click the CommandButton and enter an
	  Author's last name. Note it moves the cursor to the Author selected and
	  highlights the entire row.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbConfig kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB ol20setcfght 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
