---
layout: page
title: "Q257686: FIX: Double-Clicking ListBox Control Causes Invalid Page Fault"
permalink: /kb/257/Q257686/
---

## Q257686: FIX: Double-Clicking ListBox Control Causes Invalid Page Fault

{% raw %}

	Article: Q257686
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbListBox kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbVS600sp4f
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a case where you have a form with a ListBox control and you are populating
	the list from a database, if you unload the form in the double-click event of
	the ListBox control, an Invalid Page Fault occurs.
	
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
	
	The following steps use the Biblio database. They assume that the database is
	located in the default Visual Basic installation path:
	
	C:\Program Files\Microsoft Visual Studio\Vb98\Biblio.mdb
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, select References. On the References dialog box, check
	  Microsoft ADO 3.51 Object Library, and then click OK.
	
	3. On the Project menu, add a new module, and then insert the following code:
	
	  Option Explicit
	
	  Public MainDatadb As Database
	
	4. Add a Command Button to Form1.
	
	5. Add the following code to the code window of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	      Form2.ShowMeGeneral MainDatadb, "Authors", "Author", "AU_id", , _
	        "Find an author", "au_id"
	  End Sub
	
	  Private Sub Form_Load()
	      Dim DBName As String
	
	      ' Change the following path if necessary for your system
	      DBName = "C:\Program Files\Microsoft Visual Studio\VB98\BIBLIO.MDB"
	      Set MainDatadb = OpenDatabase(DBName, False, False)
	  End Sub
	
	6. On the Project menu, add a second form, Form2, to the project.
	
	7. Add a ListBox control to Form2.
	
	8. Add the following code to the code window of Form2:
	
	  Option Explicit
	
	  Public SelectedValue As String
	  Public KeyValue As String
	  Public Canceled As Boolean
	
	  Public Sub ShowMeGeneral(DBName As Database, DBTable As String, _
	   FldDisplay As String, FldReturn As String, Optional InSql As Variant, _
	   Optional Title As Variant, Optional KeyField As Variant)
	
	      Dim Sql As String, TempRS As Recordset
	      Dim Indx As Integer, TmpString As String
	      Dim DisplayString As String
	      If IsMissing(InSql) Then
	          Sql = "SELECT [" & FldDisplay & "],[" & FldReturn & "] " & _
	          "FROM " & DBTable & " ORDER BY [" & FldDisplay & "];"
	      Else
	          Sql = InSql
	      End If
	      Set TempRS = DBName.OpenRecordset(Sql, , dbReadOnly)
	      Do Until Indx > 5000
	          DisplayString = TempRS(FldDisplay) & ""
	          DisplayString = "abcdefghijklmm" & Indx
	          List1.AddItem DisplayString
	          Indx = Indx + 1
	          TempRS.MoveNext
	      Loop
	      TempRS.Close
	      Set TempRS = Nothing
	      List1.ListIndex = 0
	      Canceled = True
	      Me.Show vbModal
	  End Sub
	
	  Private Sub List1_DblClick()
	      Unload Me
	  End Sub
	
	9. Run the project and click on Command1 to open Form2.
	
	10. Double-click on an item in the ListBox control on Form2.
	
	The result should be an Invalid Page Fault.
	
	Additional query words: sp4 IPF GPF
	
	======================================================================
	Keywords          : kbCtrl kbListBox kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
