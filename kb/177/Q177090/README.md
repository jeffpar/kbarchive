---
layout: page
title: "Q177090: FIX: Returning Empty Array from ActiveX EXE Fails with SP2"
permalink: /kb/177/Q177090/
---

## Q177090: FIX: Returning Empty Array from ActiveX EXE Fails with SP2

{% raw %}

	Article: Q177090
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive an error when you use the Array function to return an empty variant
	array from an out-of-process ActiveX Component (ActiveX EXE):
	
	  Run-time error '5':
	  Invalid Procedure Call or Argument
	
	This error occurs only after the installation of Visual Studio 97 Service Pack 2.
	
	RESOLUTION
	==========
	
	There are several workarounds to this problem:
	
	- Use an in-process ActiveX Component (ActiveX DLL).
	
	-or-
	
	- Implement error handling in the client application.
	
	-or-
	
	- Instead of returning an empty array, return Array(vbNull). Note that this
	  will actually return an array that has one element.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX EXE project in Visual Basic 5.0 (with Visual Studio 97
	  SP2 installed).
	
	2. Click Project1 Properties on the Project menu, and change the name of the
	  Project to "TestArrayPass."
	
	3. Add the following code to Class1:
	
	        Public Function testPass()
	           testPass = Array()
	        End Function
	
	4. Run the project.
	
	5. Start another instance of Visual Basic and select a new Standard EXE project.
	  Form1 is created by default.
	
	6. Click References on the Project menu, and check "TestArrayPass."
	
	7. Place the following code in Form1:
	
	        Private Sub Form_Load()
	           Dim myObj As testArrayPass.Class1
	           Dim result
	           Set myObj = New testArrayPass.Class1
	           result = myObj.testPass
	        End Sub
	
	8. Run the project and note that you receive the run-time error previously
	  described.
	
	Additional query words: kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport KBACTIVEX KBSERVER
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
