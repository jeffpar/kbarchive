---
layout: page
title: "Q190213: BUG: Type Mismatch Error Comparing String With Byte Array"
permalink: /kb/190/Q190213/
---

## Q190213: BUG: Type Mismatch Error Comparing String With Byte Array

	Article: Q190213
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic, if you have a function returning an array of bytes and you
	compare the return value with a string, you get the following error:
	
	  Compile Error: Type Mismatch
	
	RESOLUTION
	==========
	
	You can bypass this error if you convert the return value of the function using
	the function Cstr before comparing it with a string, as in the following code:
	
	     If CStr(myFunc) <> "yes" Then
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton to Form1 and paste the following code into the code
	  window of Form1:
	
	        Public Sub Command1_Click()
	           If myFunc <> "yes" Then
	              Stop
	           End If
	        End Sub
	
	        Function myFunc() As Byte()
	           myFunc = "yes"
	        End Function
	
	3. Press the F5 key to run the program.
	
	4. Click on Command1. The error message "Compile Error: Type Mismatch" results.
	
	Additional query words: kbDSupport kbVBp600bug kbdss kbVBp kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
