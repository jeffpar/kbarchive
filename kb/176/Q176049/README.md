---
layout: page
title: "Q176049: FIX: Run-time Error &quot;This Array is Fixed or Temporarily Locked&quot;"
permalink: kb/176/Q176049/
---

## Q176049: FIX: Run-time Error &quot;This Array is Fixed or Temporarily Locked&quot;

	Article: Q176049
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0sp2, 5.0sp3 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0sp2, 5.0sp3 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0sp2, 5.0sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With an .exe file made from a Visual Basic project, you receive the following
	error:
	
	  Run-time error 10:
	  "This Array is fixed or temporarily locked"
	
	The error does not occur when the Visual Basic project is run in the design
	environment.
	
	CAUSE
	=====
	
	This error occurs when your project uses the Microsoft Data-bound Grid control
	and you pass an element of a variant array to a procedure in a class module.
	This problem only occurs in Visual Basic 5.0 if the Visual Basic 5.0 Service
	Pack 2 or Service Pack 3 is installed.
	
	
	RESOLUTION
	==========
	
	There are several possible workarounds for this problem:
	
	- Dimension the array as a type other than Variant. For example, dimension the
	  array as type String.
	
	  -or-
	
	- Pass the element of the array by value.
	
	  -or -
	
	- Use a temporary variable to store and retrieve the value of the array
	  element. For example, this code uses a variable "temp" to store and retrieve
	  the value of the first element of "myarray":
	
	       temp = myarray(1)
	       MyObject.MyMethod temp
	       myarray(1) = temp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project.
	
	2. Click Components on the Project menu, and then check "Microsoft Databound
	  Grid Control."
	
	3. Draw a dbGrid control and CommandButton on Form1.
	
	4. Add the following code to Form1:
	
	        Dim o As Object
	
	        Private Sub Command1_Click()
	           test
	        End Sub
	
	        Private Sub test()
	           Set o = New Class1
	           ReDim myarray(1) As Variant
	           o.MyMethod myarray(1)
	        End Sub
	
	5. Click Add Class Module on the Project menu.
	
	6. Add the following code to Class1:
	
	        Public Sub MyMethod(x As Variant)
	
	        End Sub
	
	7. Make the EXE and then run the EXE. Click Command1 and note that you receive
	  the run-time error #10 and the application will quit.
	
	Additional query words: kbVBp500bug kbSPack kbDSupport kbdsd kbVBp kbVBp600fix kbSSafep2
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
