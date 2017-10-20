---
layout: page
title: "Q184742: HOWTO: Use the Script Control Error Object"
permalink: /kb/184/Q184742/
---

## Q184742: HOWTO: Use the Script Control Error Object

{% raw %}

	Article: Q184742
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbScript kbVBp kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic for Applications version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Script control Error object properties and provides
	sample code that illustrates its use.
	
	MORE INFORMATION
	================
	
	The script control Error object provides rich information to the host
	application regarding script errors. The following properties are supported:
	
	  Property         Description
	  -----------------------------------------------------------------
	  Number           Error number.
	  Description      Error message.
	  Line             The line number the error occurred on (1 based).
	  Column           The column number the error occurred on (0 based).
	  Text*            The text of the line that caused the error.
	  Source**         What component caused the error.
	  HelpFile***      Help file name provided by the error source.
	  HelpContext***   Help context provided by the error source.
	
	* The Text property is blank for run-time errors, but contains data for
	compilation errors.
	
	** The Source property for VBScript is either Microsoft VBScript compilation
	error or Microsoft VBScript run-time error. If a different scripting language is
	used, the Source may be different.
	
	*** The HelpFile and HelpContext properties are blank except for user raised
	errors.
	
	IMPORTANT: Microsoft provides programming examples for illustration only, without
	warranty either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures.
	
	Step-by-Step Example
	--------------------
	
	1. In Visual Basic, create a new project (Form1 is created by default).
	
	2. Click Components on the Project menu, and then select the "Microsoft Script
	  Control 1.0" check box.
	
	3. Add the Script control (ScriptControl1), a text box (Text1), and a command
	  button (Command1) to Form1. Set the MultiLine property of the text box to
	  TRUE. For ease of use, change the size of Text1 so that it accommodates 5
	  lines with 60 character each.
	
	4. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	          On Error Resume Next
	          With ScriptControl1
	            .Language = "VBScript"
	            .AllowUI = True
	            .AddCode Text1.Text
	            .Run "Test"
	          End With
	          If Err Then
	            MsgBox Err & " " & Error
	            ListErrors ScriptControl1
	          End If
	        End Sub
	
	        Private Sub ListErrors(S As ScriptControl)
	          With S.Error
	            Debug.Print "Number:", .Number
	            Debug.Print "Source:", .Source
	            Debug.Print "Desc:", .Description
	            Debug.Print "Line: " & .Line, "Column: " & .Column
	            Debug.Print "Text:", .Text
	            Debug.Print "Help File:", .HelpFile
	            Debug.Print "Help Context:", .HelpContext
	            Debug.Print
	          End With
	        End Sub
	
	5. Run Form1 and open the Debug window.
	
	6. Type the following script in the text box:
	
	        Sub Test
	          MsgBox == "Hello World"
	          Err.Raise 555, "Test", "Custom Error", "test.hlp", 5
	        End Sub
	
	7. Click the command button. As a result, the following error appears in the
	  Debug window (the actual output may vary depending on the version of the
	  script control you are using):
	
	     Number:       1002
	     Source:       Microsoft VBScript compilation error
	     Desc:         Syntax error
	     Line: 2       Column: 16
	     Text:         MsgBox == "Hello World"
	     Help File:
	
	     Help Context:  0
	
	8. Remove the == from the MsgBox line and click the command button again.
	
	9. The MsgBox appears and then error "555 Custom Error". The Debug Window
	  displays the following:
	
	     Number:       555
	     Source:       Test
	     Desc:         Custom Error
	     Line: 3       Column: 8
	     Text:
	     Help File:    test.hlp
	     Help Context: 5
	
	  NOTE: The column number may vary depending on whether you cut-and-paste the
	  code or type it in manually without all the leading spaces.
	
	REFERENCES
	==========
	
	Script control Help topic: Error object
	
	For information about obtaining the Script control, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q184739 : INFO: Where to Obtain the Script Control
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation
	
	
	Additional query words: kbScript kbCtrl kbVBA500 kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd 
	kbDSupport
	
	======================================================================
	Keywords          : kbScript kbVBp kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
