---
layout: page
title: "Q185697: HOWTO: Use the AddObject Method of the Script Control"
permalink: /kb/185/Q185697/
---

## Q185697: HOWTO: Use the AddObject Method of the Script Control

	Article: Q185697
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 05-JUN-2001
	
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
	
	This article describes the AddObject method of the Microsoft Script control and
	discusses object visibility.
	
	MORE INFORMATION
	================
	
	The Microsoft Scripting control provides the AddObject method to allow the host
	application to expose an object model to the script code. Objects added this way
	are implicitly assumed to be safe for scripting and are not affected by the
	UseSafeSubset property.
	
	The AddObject method has the following arguments:
	
	  Name:        The name the script code can use to access the object.
	
	  Object:      The object to be made available (late bound) to the script.
	
	  AddMembers:  This is an optional argument. Default value is False.
	
	               If True, the methods and properties are available as
	               global functions and variables.
	
	               If False, the methods and properties are only available via
	               fully qualified object.member syntax.
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures.
	
	Example
	-------
	
	1. In Visual Basic or Microsoft Access, create a new project and add the
	  following component:
	
	  Microsoft Script Control 1.0
	
	2. Add the Script control (ScriptControl1), a text box (Text1), and a command
	  button (Command1) to a form. In Visual Basic, set the MultiLine property of
	  the text box to TRUE. For ease of use change the size of Text1 so that it
	  accommodates five (5) 60 character lines.
	
	3. Add a Class module (clsLog) with the following code:
	
	        Public Sub Prt (S)
	          Debug.Print S
	        End Sub
	
	4. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	        Dim L as clsLog
	          Set L = New clsLog
	          With ScriptControl1
	            .Language = "VBScript"
	            .AllowUI = True
	            .AddObject "LoadLog", L, True
	            ' True = expose Prt as global Sub
	            ' "Loadlog" is executed immediately when Addcode loads the code.
	            Debug.Print "Adding the code"
	            .AddCode Text1.Text
	            Debug.Print "Finished adding the code"
	            .AddObject "RunLog", L
	            .Run "Test"
	          End With
	        End Sub
	
	5. Run the form and open the Debug window.
	
	6. Type the following script into the text box:
	
	        Sub Test
	          RunLog.Prt "RunLog is available after Load"
	          Prt "LoadLog exposes Prt as a global method"
	        End Sub
	        LoadLog.Prt "LoadLog is available during Load"
	
	7. Click the command button. You will get the following output:
	
	  Adding the code
	  LoadLog is available during Load
	  Finished adding the code
	  RunLog is available after Load
	  LoadLog exposes Prt as a global method
	
	REFERENCES
	==========
	
	Sct10en.exe is the executable file that contains the MSScript.ocx. When the
	executable is run MSScript.ocx is installed. The Scriptcontrol can be downloaded
	from the following Web site:
	
	  http://www.microsoft.com/scripting/
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbdse kbVBp400 kbVBp500 kbVBp600 kbVBA500 kbVBp kbActiveX 
	kbAccess97 kbAccess700
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
