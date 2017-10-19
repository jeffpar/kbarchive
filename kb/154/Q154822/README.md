---
layout: page
title: "Q154822: HOWTO: Get a Long Filename from a Short Filename"
permalink: /kb/154/Q154822/
---

## Q154822: HOWTO: Get a Long Filename from a Short Filename

	Article: Q154822
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
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
	
	The following code example includes a function that will convert short filenames
	into their long filename equivalents and also includes a simple demonstration of
	the function's use.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic. Form1 is created by default.
	
	2. Place a Command button onto Form1.
	
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
	
	7. Click the Command button.
	
	If the path you have supplied is valid, the long equivalent will be printed on
	the form. If it is not valid, nothing will print, in which case you will need to
	supply a valid short filename in the Command1_Click event code.
	
	Additional query words: kbVBp400 vkbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
