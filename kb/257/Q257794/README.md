---
layout: page
title: "Q257794: HOWTO: Use Binary File Access with Visual Basic"
permalink: /kb/257/Q257794/
---

## Q257794: HOWTO: Use Binary File Access with Visual Basic

	Article: Q257794
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbtophit kbFileIO kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is intended as a supplement to the "Using Binary File Access" topic
	in the MSDN Help. It provides a programming example based on the structures
	discussed in that topic. The sample code demonstrates how to access both files
	composed of fixed-length records using the Random access method, and files
	composed of variable-length records using the Binary access method.
	
	MORE INFORMATION
	================
	
	Steps to Create This Example:
	-----------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select Add Module to add a standard module to the
	  project. Module1 is created by default.
	
	3. On the Project menu, select Project1 Properties to display the Project
	  Properties dialog box. Select the General tab and change the Startup Object
	  to Sub Main.
	
	4. Add the following code to the General Declarations section of Module1:
	
	  Option Explicit
	  ' define structure of a variable-length record
	  Type Person_VariableLength
	      ID               As Integer
	      MonthlySalary    As Currency
	      LastReviewDate   As Long
	      FirstName        As String
	      LastName         As String
	      Title            As String
	      ReviewComments   As String
	  End Type
	
	  ' define structure of a fixed-length record
	  Type Person_FixedLength
	      ID               As Integer
	      MonthlySalary    As Currency
	      LastReviewDate   As Long
	      FirstName        As String * 15
	      LastName         As String * 15
	      Title            As String * 15
	      ReviewComments   As String * 150
	  End Type
	
	  ' variables for sample data
	  Private binSampleOne As Person_VariableLength
	  Private binSampleTwo As Person_VariableLength
	  Private randomSampleOne As Person_FixedLength
	  Private randomSampleTwo As Person_FixedLength
	
	  ' record number for use with random (fixed-length) file
	  Private intRecNum As Integer
	
	  Public Sub main()
	      buildSampleRecords
	      demonstrateBinary
	      demonstrateRandom
	  End Sub
	
	  Private Function demonstrateBinary()
	      ' open the file and write the records
	      Open "c:\BINsample" For Binary As #1
	      Put #1, , binSampleOne
	      Put #1, , binSampleTwo
	      Close #1
	      
	      ' open the file and read the records
	      Open "c:\binSample" For Binary As #1
	      Dim udtPerson As Person_VariableLength
	      Do While Not EOF(1)
	          Get #1, , udtPerson
	          ' display selected values
	          With udtPerson
	              Debug.Print .FirstName
	              Debug.Print .LastName
	              Debug.Print .ReviewComments
	          End With
	      Loop
	      Close #1
	  End Function
	
	  Private Function demonstrateRandom()
	      ' open the file and write the records
	      Dim recSize As Person_FixedLength
	      Open "c:\Randomsample" For Random As #1 Len = Len(recSize)
	      Put #1, 1, randomSampleOne
	      Put #1, 2, randomSampleTwo
	      Close #1
	      
	      'open the file and read the records
	      Dim udtPerson As Person_FixedLength
	      Open "c:\randomsample" For Random As #1 Len = Len(udtPerson)
	      ' demonstrate random access capability by reading file backwards
	      For intRecNum = 2 To 1 Step -1
	          Get #1, intRecNum, udtPerson
	          ' display selected values
	          With udtPerson
	              Debug.Print .FirstName
	              Debug.Print .LastName
	              Debug.Print .ReviewComments
	          End With
	      Next intRecNum
	      Close #1
	  End Function
	
	  Private Sub buildSampleRecords()
	  ' routine to build sample records
	  ' note that populating the data of the User Defined Type is the
	  ' same regardless of fixed or variable length members
	     With binSampleOne
	          .ID = 1
	          .MonthlySalary = 50000
	          .LastReviewDate = #2/2/2000#
	          .FirstName = "Wilma"
	          .LastName = "Flintstone"
	          .Title = "Movie Star"
	          .ReviewComments = "Contract renewed for sequel"
	      End With
	      With binSampleTwo
	          .ID = 2
	          .MonthlySalary = 50000
	          .LastReviewDate = #2/2/2000#
	          .FirstName = "Fred"
	          .LastName = "Flintstone"
	          .Title = "Movie Star"
	          .ReviewComments = "Replace with Clint Eastwood for sequel"
	      End With
	      With randomSampleOne
	          .ID = 1
	          .MonthlySalary = 50000
	          .LastReviewDate = #2/2/2000#
	          .FirstName = "Wilma"
	          .LastName = "Flintstone"
	          .Title = "Movie Star"
	          .ReviewComments = "Contract renewed for sequel"
	      End With
	      With randomSampleTwo
	          .ID = 2
	          .MonthlySalary = 50000
	          .LastReviewDate = #2/2/2000#
	          .FirstName = "Fred"
	          .LastName = "Flintstone"
	          .Title = "Movie Star"
	          .ReviewComments = "Replace with Clint Eastwood for sequel"
	      End With
	  End Sub
	
	5. Make sure that the Immediate Window is displayed. If it is not, you need to
	  select it from the View menu.
	
	6. Run the project, and note that the results are displayed in the Immediate
	  Window.
	
	REFERENCES
	==========
	
	MSDN Help topic: "Using Binary File Access" is available at the following Web
	site:
	
	http://msdn.microsoft.com/library/devprods/vs6/vbasic/
	vbcon98/vbconusingbinaryfileaccess.htm
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtophit kbFileIO kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
