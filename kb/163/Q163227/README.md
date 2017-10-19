---
layout: page
title: "Q163227: HOWTO: Get a Long Filename from a Short Filename"
permalink: /kb/163/Q163227/
---

## Q163227: HOWTO: Get a Long Filename from a Short Filename

	Article: Q163227
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): KbVBA kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbVBA500
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Dir() function can be used to return a long filename but it does not include
	path information. By parsing a given short path/filename into its constituent
	directories, you can use the Dir() function to build a long path/filename. This
	article demonstrates how to accomplish this behavior.
	
	MORE INFORMATION
	================
	
	The following code example includes a function that converts short filenames
	into their long filename equivalents and also includes a simple demonstration of
	the function's use.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic. Form1 is created by default.
	
	2. Place a CommandButton on Form1.
	
	3. From the Insert menu, select Module to add a single code module to the
	  project.
	
	4. Add the following code to Module1:
	
	        Public Function GetLongFilename _
	          (ByVal sShortName As String) _
	          As String
	
	          Dim sLongName As String
	          Dim sTemp As String
	          Dim iSlashPos As Integer
	
	          'Add \ to short name to prevent Instr from failing
	          sShortName = sShortName & "\"
	
	          'Start from 4 to ignore the "[Drive Letter]:\" characters
	          iSlashPos = InStr(4, sShortName, "\")
	
	          'Pull out each string between \ character for conversion
	          While iSlashPos
	            sTemp = Dir(Left$(sShortName, iSlashPos - 1), _
	              vbNormal + vbHidden +    vbSystem + vbDirectory)
	            If sTemp = "" Then
	              'Error 52 - Bad File Name or Number
	              GetLongFilename = ""
	              Exit Function
	            End If
	            sLongName = sLongName & "\" & sTemp
	            iSlashPos = InStr(iSlashPos + 1, sShortName, "\")
	          Wend
	
	          'Prefix with the drive letter
	          GetLongFilename = Left$(sShortName, 2) & sLongName
	
	        End Function
	
	5. Add the following to the Command1_Click event:
	
	        Private Sub Command1_Click()
	
	          'Assumes C:\Program Files\Common Files is a valid path
	          Print GetLongFilename("C:\PROGRA~1\COMMON~1")
	
	        End Sub
	
	6. Choose Start from the Run menu, or press the F5 key to start.
	
	7. Click the CommandButton.
	
	If the path you have supplied is valid, the long equivalent will be printed on
	the form. If it is not valid, nothing will print, in which case you will need to
	supply a valid short filename in the Command1_Click event code.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic Online Help
	
	Additional query words:
	
	======================================================================
	Keywords          : KbVBA kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbVBA500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
