---
layout: page
title: "Q183638: HOWTO: Create a Custom Text File Import Routine"
permalink: kb/183/Q183638/
---

## Q183638: HOWTO: Create a Custom Text File Import Routine

	Article: Q183638
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0,97
	Operating System(s): 
	Keyword(s): kbAccess kbDAOsearch kbVBp kbVBp500 kbVBp600 kbDSupport kbVBA500
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic for Applications version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a framework for a custom text import routine using
	low-level file I/O to read files, string parsing, and DAO to store the data.
	
	MORE INFORMATION
	================
	
	When importing delimited text files, the Jet Text ISAM driver truncates leading
	spaces on fields not surrounded by quotes or other text qualifiers, and
	truncates trailing spaces on all fields regardless of whether quotes are used to
	qualify the data.
	
	If you need leading and/or trailing spaces to be preserved or need to read the
	data in a situation where Jet's Text ISAM driver cannot be used, you will need a
	custom import routine.
	
	The following code is a template you can use to build a custom import routine.
	
	WARNING: Your use or modification of the CODE provided in this article is at your
	own risk. Microsoft provides this CODE "as is" without warranty of any kind,
	either expressed or implied, including but not limited to the implied warranties
	of merchantability and/or fitness for a particular purpose. Microsoft does not
	support modifications of the CODE to suit specific customer requirements.
	
	Sample Code:
	------------
	
	1. Using Notepad, create a text file with the following data:
	
	  1, Description 1 ,1,100.00,3/1/1998
	  2, Description 2 ,2,200.00,3/2/1998
	
	2. Save the file as c:\test.txt.
	
	3. In Visual Basic, create a new project and add a reference for Microsoft DAO
	  3.5 Object Library. In Access, open the Northwind.MDB database.
	
	4. Create a new form with a CommandButton (Command1) and the following code:
	
	        Private Sub Command1_Click ()
	        Dim F As Long, sLine As String, A(0 To 4) As String
	        Dim db As Database, rs As Recordset
	          F = FreeFile
	          Open "c:\test.txt" For Input As F
	         ' uncomment following line if you want to skip field headings
	         ' Line Input #F, sLine
	          Set db = CurrentDb                               ' Access only
	          Set db = DBEngine(0).OpenDatabase("biblio.mdb")  ' Visual Basic
	          On Error Resume Next
	          db.Execute "DROP TABLE TestImport"
	          On Error Goto 0
	          db.Execute "CREATE TABLE TestImport (ID LONG, [Desc] TEXT (50), " _
	                    & "Qty LONG, Cost CURRENCY, OrdDate DATETIME)"
	          Set rs = db.OpenRecordset("TestImport", dbOpenTable)
	          Do While Not EOF(F)
	            Line Input #F, sLine
	            ParseToArray sLine, A()
	            rs.AddNew
	            rs(0) = Val(A(0))
	            rs(1) = A(1)
	            rs(2) = Val(A(2))
	            rs(3) = Val(A(3))
	            rs(4) = CDate(A(4))
	            rs.Update
	          Loop
	          rs.Close
	          db.Close
	          Close #F
	        End Sub
	
	        Sub ParseToArray(sLine As String, A() As String)
	        Dim P As Long, LastPos As Long, I As Long
	          P = InStr(sLine, ",")
	          Do While P
	            A(I) = Mid$(sLine, LastPos + 1, P - LastPos - 1)
	            LastPos = P
	            I = I + 1
	            P = InStr(LastPos + 1, sLine, ",", vbBinaryCompare)
	          Loop
	          A(I) = Mid$(sLine, LastPos + 1)
	        End Sub
	
	5. Run the project/form and click the CommandButton to import the data.
	
	6. Examine the contents of the TestImport table and note that the Desc column
	  has both leading and trailing spaces preserved and that other fields have
	  been correctly converted to the appropriate data type.
	
	  NOTE: In Visual Basic, you can use the VISDATA sample project to examine the
	  contents of the table.
	
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Malcolm Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess kbDAOsearch kbVBp kbVBp500 kbVBp600 kbDSupport kbVBA500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVBASearch kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0,97
	Issue type        : kbhowto
	
	=============================================================================
	
