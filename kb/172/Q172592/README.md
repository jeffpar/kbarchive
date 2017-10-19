---
layout: page
title: "Q172592: HOWTO: Open a Visual FoxPro Table for Read/Write"
permalink: /kb/172/Q172592/
---

## Q172592: HOWTO: Open a Visual FoxPro Table for Read/Write

	Article: Q172592
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro 2.x tables can be opened as read/write under DAO. Following the same
	procedure for Visual FoxPro tables will open the tables as read only. ISAM
	drivers are being used under DAO. The following method will open free tables and
	tables that are part of a Visual FoxPro database as read/write with RDO. In
	addition to providing read/write access to these files, the ODBC driver also
	provides greater performance than the Installable ISAM driver.
	
	If data validity checks are not made, Visual FoxPro database integrity could be
	violated for tables that are part of a database.
	
	MORE INFORMATION
	================
	
	1. Create a form with two text boxes and 5 CommandButtons. Be sure to select the
	  Remote Data Object under References for the Project.
	
	2. Place the following captions on command1 through command5 buttons:
	
	  "edit"
	  "update"
	  "quit"
	  ">"
	  "<"
	
	3. Place the following code in the General Declarations section of the form's
	  code:
	
	        Option Explicit
	        Dim cn As New rdoConnection
	        Dim rs As rdoResultset
	        Dim SQL As String
	
	        Private Sub Command1_Click()
	           rs.edit
	        End Sub
	
	        Private Sub Command2_Click()
	          rs(1) = Text2.Text
	          rs.Update
	        End Sub
	
	        Private Sub Command3_Click()
	          rs.Close
	          Set rs = Nothing
	          cn.Close
	          Set cn = Nothing
	          Unload Me
	        End Sub
	
	        Private Sub Command4_Click()
	
	           rs.MoveNext
	           If Not (rs.EOF) Then
	             Text1.Text = rs(0)
	             Text2.Text = rs(1)
	           Else
	             rs.MoveLast
	         End If
	       End Sub
	
	        Private Sub Command5_Click()
	          rs.MovePrevious
	          If Not (rs.BOF) Then
	             Text1.Text = rs(0)
	             Text2.Text = rs(1)
	          Else
	             rs.MoveFirst
	          End If
	        End Sub
	
	        Private Sub Form_Load()
	          '
	          ' Using a DSN-less connection to open a free table
	          '
	          cn.Connect = "SourceType=DBF;" _
	              & "SourceDB=C:\Vfp\Samples\Data;" _
	              & "Driver={Microsoft Visual FoxPro Driver}"
	
	          cn.CursorDriver = rdUseOdbc
	          cn.EstablishConnection "rdDriverNoPrompt"
	
	          SQL = "select * from customer"   'this should be a free table
	          Set rs = cn.OpenResultset(SQL, rdOpenKeyset, rdConcurRowVer)
	
	          rs.MoveFirst
	          Text1.Text = rs(0)
	          Text2.Text = rs(1)
	        End Sub
	
	4. Press the F5 key to run the form. Make changes by editing text box 2,
	  pressing edit, and then updating. Verify that changes have been made to the
	  table by running the form several times.
	
	NOTE: The Source in the connect statement above will need to be altered for your
	system. Source points to a directory containing the table.
	
	REFERENCES
	==========
	
	For more information explaining why Visual FoxPro Databases are opened as
	read-only under DAO, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q161307 : HOWTO: Use Visual FoxPro Tables in Visual Basic 4.0
	
	For more information on using DSN-Less connections, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q147875 : HOWTO: Use "DSN-Less" ODBC Connections with RDO and DAO
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbVBp400 kbDAO kbVFP200
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
