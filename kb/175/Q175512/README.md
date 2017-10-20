---
layout: page
title: "Q175512: HOWTO: Get a Short Filename from a Long Filename"
permalink: /kb/175/Q175512/
---

## Q175512: HOWTO: Get a Short Filename from a Long Filename

{% raw %}

	Article: Q175512
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbnokeyword kbVBp400 kbVBp500 kbVBp600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain circumstances, it may be necessary to get the Short Filename
	equivalent of a file that has a Long Filename. The example below will allow you
	to select a file that has a Long Filename and return it's Short Filename using
	the GetShortPathName API Function call.
	
	MORE INFORMATION
	================
	
	The following code example includes a function that will convert long filenames
	into their short filename equivalents and also includes a simple demonstration
	of the function's use.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Place a CommandButton on Form1.
	
	3. Place a Common Dialog control on the form.
	
	4. From the Insert menu, select Module to add a single code module to the
	  project.
	
	5. Add the following code to Module1:
	
	     Declare Function GetShortPathName Lib "kernel32" _
	        Alias "GetShortPathNameA" (ByVal lpszLongPath As String, _
	        ByVal lpszShortPath As String, ByVal cchBuffer As Long) As Long
	
	     Public Function GetShortName(ByVal sLongFileName As String) As String
	         Dim lRetVal As Long, sShortPathName As String, iLen As Integer
	         'Set up buffer area for API function call return
	         sShortPathName = Space(255)
	         iLen = Len(sShortPathName)
	
	         'Call the function
	         lRetVal = GetShortPathName(sLongFileName, sShortPathName, iLen)
	         'Strip away unwanted characters.
	         GetShortName = Left(sShortPathName, lRetVal)
	     End Function
	
	6. Add the following code to Form1:
	
	     Private Sub Command1_Click()
	       Dim msg As String
	       CommonDialog1.FileName = "*.*"
	       CommonDialog1.ShowOpen
	       msg = "Long File Name: " & CommonDialog1.filename & vbCrLf
	       msg = msg & "Short File Name: " & GetShortName(CommonDialog1.filename)
	       MsgBox msg
	     End Sub
	
	7. Run the project by pressing the F5 key. Click on the Command button to show
	  the Open dialog box. Navigate the Open dialog box and find a file that has a
	  Long Filename. Select the file and click OK.
	
	8. The message box will display the Long File name along with its Short File
	  name.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q154822 HOWTO: Get a Long Filename from a Short Filename
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbnokeyword kbVBp400 kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
