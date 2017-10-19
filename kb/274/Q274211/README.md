---
layout: page
title: "Q274211: PRB: Error Msg. 3734 Occurs When You Repeatedly Open &amp; Close MDB"
permalink: /kb/274/Q274211/
---

## Q274211: PRB: Error Msg. 3734 Occurs When You Repeatedly Open &amp; Close MDB

	Article: Q274211
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbJET kbVBp600 kbGrpDSVBDB kbDSupport kbDAO360bug kbCodeSnippet
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Access 2000 
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you repeatedly open and close a Microsoft Access database (MDB) in a
	multiuser situation, the following 3734 run-time error message may occur:
	
	  The database has been placed in a state by user 'Admin' on machine
	  'machinename' that prevents it from being opened or locked.
	
	CAUSE
	=====
	
	Jet locks a block of 256 bits in the MDB header. Included in this block of bits
	are bits that indicate a "passive shutdown", which causes the error message
	described in the "Symptoms" section to occur. You may have users that open and
	close the MDB file rapidly and the bits are not getting unlocked quickly enough.
	When a user tries to open the MDB file, if the program is not able to read the
	bits, Jet assumes that the user is in a "passive shutdown" or "admin mode", and
	therefore will not let the user open the MDB file.
	
	RESOLUTION
	==========
	
	Repeatedly opening and closing a Microsoft Access database is not recommended.
	Open the database once at the beginning of the application, and then close the
	database at the end of the application.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The 3734 error code is new with Microsoft Access 2000. Jet 4.0 introduces a new
	feature called Connection Control. Error 3734, associated with this feature,
	normally occurs when you try to open a database if the database is opened
	exclusively by another user. Databases are opened exclusively when design
	changes are being made. However, no design changes are being made to the
	database in this situation when the error occurs.
	
	NOTE: For more information about Connection Control, please refer to the article
	listed in the "References" section.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a Standard EXE in Visual Basic.
	
	2. From the Project menu, click References and add a reference to the Microsoft
	  DAO 3.6 Object Library.
	
	3. Size the form so that you can run 12 instances of the form on your desktop.
	
	4. Place the following items on a form and name them according to the following
	  table:
	
	  +------------------------------------------------------------+
	  | Control            | Name         | Caption                | 
	  +------------------------------------------------------------+
	  | Multiline text box | txtReturn    |                        | 
	  +------------------------------------------------------------+
	  | Command button     | command1     | Start Test             | 
	  +------------------------------------------------------------+
	  | Check box          | chkIncludeSN | Use SerialNumber Table | 
	  +------------------------------------------------------------+
	  | Timer              | timer1       |                        | 
	  +------------------------------------------------------------+
	
	5. Set the interval for the timer to 1000.
	
	6. Paste the following code in the code window of the form:
	
	  Option Explicit
	  Dim sDatabasePath   As String
	  Dim bBypass         As Boolean
	  Dim lCounter        As Long
	  Private Sub Command1_Click()
	      lCounter = 0
	      
	      Timer1.Enabled = Not Timer1.Enabled
	      DoEvents
	      
	      If Command1.Caption = "Start Test" Then
	          Command1.Caption = "End Test"
	          txtReturn = ""
	          lCounter = 0
	      Else
	          Command1.Caption = "Start Test"
	      End If
	  End Sub
	
	  Private Sub Form_Load()
	      Dim db As DAO.Database
	      On Error GoTo ErrorOut
	      
	      
	      If Len(Trim$(sDatabasePath)) = 0 Then sDatabasePath = App.Path & "\NWIND40.MDB"
	      If Dir$(sDatabasePath) = "" Then
	            MsgBox "Cannot locate the NWIND.MDB database in the path." & vbCr & vbCr & "Cannot continue!", 0 + 16
	          End
	      End If
	
	      Set db = Workspaces(0).OpenDatabase(sDatabasePath, False, False, ";pwd=admin")
	      On Error Resume Next 'in case there is no table to delete
	      db.Execute "drop table serialnumber"
	      On Error GoTo 0 'turn off above ON ERROR command
	      db.Execute "create table serialnumber (sn number)"
	      db.Execute "insert into serialnumber (sn) values (1)"
	      
	      db.Close
	      Set db = Nothing
	      
	      Timer1.Enabled = False
	      
	      Exit Sub
	      
	  ErrorOut:
	      MsgBox Err & vbCr & Error
	      End
	      
	  End Sub
	  Private Sub Timer1_Timer()
	      Dim db              As Database
	      Dim RS              As Recordset
	      
	      Dim sSQL            As String
	      
	      On Error GoTo ErrorOut
	       
	      If Len(Trim$(sDatabasePath)) = 0 Then sDatabasePath = App.Path & "\NWIND40.MDB"
	      If Dir$(sDatabasePath) = "" Then
	          MsgBox "Cannot locate the NWIND.MDB database in the path." & vbCr & vbCr & "Cannot continue!", 0 + 16
	          End
	      End If
	
	      Set db = Workspaces(0).OpenDatabase(sDatabasePath, False, False, ";pwd=admin")
	      
	      lCounter = lCounter + 1
	      Me.Caption = "Database Volume Simulator (" & CStr(lCounter) & ")"
	      DoEvents
	          
	      If chkIncludeSN.Value = 1 Then
	          sSQL = "SELECT * FROM [SERIALNUMBER]"
	          
	          Set RS = db.OpenRecordset(sSQL, dbOpenDynaset)
	          
	          RS.LockEdits = True
	          DBEngine.Idle dbRefreshCache
	          
	          RS.Edit
	          RS![sn] = RS![sn] + 1
	          lCounter = RS![sn]
	          RS.Update
	          
	          RS.Close
	      End If
	      
	      sSQL = "SELECT * FROM [CUSTOMERS] "
	      
	      Set RS = db.OpenRecordset(sSQL, dbOpenDynaset)
	          
	      RS.LockEdits = True
	      DBEngine.Idle dbRefreshCache
	      
	    
	      If RS.RecordCount > 0 Then
	          RS.Edit
	      Else
	          RS.AddNew
	      End If
	      
	      
	      RS![CompanyName] = "1234567890"
	      RS![ContactName] = "asdf"
	      RS![contacttitle] = "fgfg"
	      RS![Address] = "123 dfgdfgdg"
	      RS![City] = "sddfsd"
	      RS![Region] = "12"
	      RS![PostalCode] = "SDFD"
	      RS![country] = "test"
	      RS![Phone] = "Ban-Name"
	      RS![Fax] = "Ban ddres"
	      
	     
	      RS.Update
	      
	      RS.Close
	      db.Close
	
	      Exit Sub
	      
	  ErrorOut:
	      Me.SetFocus
	      DoEvents
	      
	      txtReturn = txtReturn & CStr(Err) & " - " & Error & Chr$(13) & Chr$(10)
	      txtReturn.SelStart = Len(txtReturn)
	      DoEvents
	      
	  End Sub   
	
	7. Create an executable, and then run 12 instances of the form on the desktop.
	
	8. By default, the check box should be selected.
	
	9. Press the Start Test button on each form and you will begin to see that
	  errors are returned to the multiline list box.
	
	Most of the error messages will be 3260 errors; however, other locking errors
	also appear. After a few minutes you will begin to see the 3734 error messages.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q198756 ACC2000: Use Connection Control to Prevent User Log On at Run
	
	Additional query words: error message 3734
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbJET kbVBp600 kbGrpDSVBDB kbDSupport kbDAO360bug kbCodeSnippet 
	Technology        : kbWinXPHome kbWinXPPro kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess2000 kbZNotKeyword2 kbVB600Search kbAccess2000Search kbVB600 kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
