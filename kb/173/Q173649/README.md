---
layout: page
title: "Q173649: PRB: Memory Corruption in VB4-16 When Passing Recordset to Sub"
permalink: /kb/173/Q173649/
---

## Q173649: PRB: Memory Corruption in VB4-16 When Passing Recordset to Sub

	Article: Q173649
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kb16bitonly kbVBp400 kbGrpDSVBDB
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When passing a recordset to another Sub or Function, you see memory corruption
	or may experience a general protection fault (GP fault) in Vba5.dll.
	
	CAUSE
	=====
	
	The called procedure may be declaring the recordset "As Object" instead of "As
	Recordset".
	
	RESOLUTION
	==========
	
	Change the declaration in the called procedure to "As Recordset".
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Microsoft provides code examples for illustration only, without warranty either
	expressed or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	This code is provided 'as is' and Microsoft does not guarantee that the following
	code can be used in all situations. Microsoft does not support modifications of
	the code to suit customer requirements for a particular purpose.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Microsoft Access 2.0 or another front-end, create a Jet 2.x database (or
	  use NWIND or BIBLIO) and add the following table:
	
	     Table: Table1
	       Field: K1    Long
	       Field: K2    Long
	       Field: K3    Text (3)
	       Field: Desc Text
	
	2. Make a composite primary key, consisting of K1, K2, and K3, and then save the
	  table design.
	
	3. Add the following data:
	
	     K1   K2   K3   Desc
	     1234   22222   abc   xxxxxxxxxxx
	     1234   22222   def   xxxxxxxxxxx
	     1234   22222   ghi   xxxxxxxxxxx
	     1234   22222   jkl   xxxxxxxxxxx
	
	4. Create a Visual Basic 4.0 16-bit application.
	
	5. Add a command button (Command1) to the form.
	
	6. Add the following code to the form:
	
	        option Explicit
	
	        Private Sub Command1_Click()
	        Dim db As Database, rs As Recordset
	          Set db = DBEngine(0).OpenDatabase _
	                ("c:\office\access20\sampapps\nwind.mdb") ' alter as needed
	          Set rs = db.OpenRecordset("Table1")
	          rs.Index = "PrimaryKey"
	          Test_Call rs
	          rs.Close
	          db.Close
	        End Sub
	
	        Sub Test_Call(rs As Object)
	        Dim K1 As Long, K2 As Long, K3(3) As String, I As Long
	          K1 = 1234
	          K2 = 22222
	          K3(0) = "abc"
	          K3(1) = "def"
	          K3(2) = "ghi"
	          K3(3) = "jkl"
	          Debug.Print "Pass 1"
	          For I = 0 To 3
	            rs.Seek "=", K1, K2, K3(I)
	            Debug.Print I; K1; K2; K3(0), K3(1), K3(2), K3(3)
	          Next I
	          Debug.Print "Pass 2"
	          For I = 0 To 3
	            rs.Seek "=", K1, K2, K3(I)
	            Debug.Print I; K1; K2; K3(0), K3(1), K3(2), K3(3)
	          Next I
	          Debug.Print "Pass 3"
	          For I = 0 To 3
	            rs.Seek "=", K1, K2, K3(I)
	            Debug.Print I; K1; K2; K3(0), K3(1), K3(2), K3(3)
	          Next I
	        End Sub
	
	7. Make sure you change the .OpenDatabase method to correctly point to the
	  database.
	
	8. Run the application and click the command button. You may need to do this
	  several times to see the error.
	
	Result
	------
	
	You should see either intermittent and worsening corruption of variables in the
	Debug Window, or you may get a GP fault in Vba5.dll.
	
	Workaround
	----------
	
	Change "Sub Test_Call (rs As Object)" to "Sub Test_Call(rs As Recordset)".
	
	NOTE: This problem does not appear in Visual Basic 4.0 32-bit.
	
	Additional query words: late-bound late bound vb4
	
	======================================================================
	Keywords          : kb16bitonly kbVBp400 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
