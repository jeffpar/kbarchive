---
layout: page
title: "Q255630: BUG: Using Friend Function w/ Implements Does Not Work in P-Code"
permalink: /kb/255/Q255630/
---

## Q255630: BUG: Using Friend Function w/ Implements Does Not Work in P-Code

{% raw %}

	Article: Q255630
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling a friend procedure you get the following error:
	
	  Run-time error 97: Cannot call friend function on object which is not an
	  instance of defining class.
	
	CAUSE
	=====
	
	This problem happens if the IMPLEMENTS statement is used in the object where the
	friend procedure is defined, and only if you compile your project to P-Code.
	
	RESOLUTION
	==========
	
	To avoid this problem you need to compile your project to Native Code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX DLL project. This project stores the base class. Class1
	  is created by default.
	
	2. Change the project name to "MyBaseDll" (without the quotation marks).
	
	3. Change the name of Class1 to "BaseClass1" (without the quotation marks).
	
	4. Add the following code to BaseClass1:
	
	  Option Explicit
	
	  Public Function GetLong() as Long
	  End Function
	  Public Function GetLongB() as Long
	  End Function
	
	5. Save the project, and compile the DLL.
	
	6. Start a new ActiveX DLL project. Class1 is created by default.
	
	7. Change the project name to "MyImplDll" (without the quotation marks).
	
	8. From the Project menu, select References, select MyBaseDll, and then click
	  OK.
	
	9. Change the name of Class1 to "ImplClass1" (without the quotation marks).
	
	10. Add the following code to ImplClass1. This code implements BaseClass1.
	
	  Option Explicit
	
	  Implements MyBaseDll.BaseClass1
	
	  Friend Function BaseClass1_GetLong() As Long
	      BaseClass1_GetLong = 7
	  End Function
	
	  Private Function BaseClass1_GetLongB() As Long
	      BaseClass1_GetLongB = BaseClass1_GetLong()
	  End Function
	
	11. Add a new class to this project, and name it "ImplClass2" (without the
	  quotation marks).
	
	12. Add the following code to ImplClass2:
	
	  Option Explicit
	
	  Public Function GetLong() As Long
	      Dim MyObj As New ImplClass1
	      
	      GetLong = MyObj.BaseClass1_GetLong()
	  End Function
	
	13. Save this project, and compile the DLL.
	
	14. Create a new Standard EXE project. This is the client to test the DLL. Form1
	  is created by default.
	
	15. Place a CommandButton on Form1.
	
	16. From the Project menu, select References, select MyBaseDll and MyImplDll,
	  and then click OK.
	
	17. In Command1's click event, place the following code:
	
	      Dim MyObjImpl As New MyImplDll.ImplClass1
	      Dim MyObjImpl2 As New MyImplDll.ImplClass2
	      Dim MyObjBase As New MyBaseDll.BaseClass1
	      
	      Set MyObjBase = MyObjImpl
	      MsgBox MyObjBase.GetLong()
	      MsgBox MyObjBase.GetLongB()
	      MsgBox MyObjImpl2.GetLong()
	
	18. Save this project. Compile the project and close it.
	
	19. Run project1.exe and click on the Command button. Everything should work
	  fine and you should see three message boxes, all of them displaying the
	  value 7.
	
	20. Close project1.exe.
	
	21. Load the MyImplDll project.
	
	22. From the Project menu, select Project Properties. Select the Component tab
	  and set Binary Compatibility to the compiled DLL.
	
	23. Then select the Compile tab and check the Compile to P-Code option.
	
	24. Close the Project Properties window and compile the DLL.
	
	25. Run project1.exe and click the Command button. You should see the first
	  message box followed by an error message:
	
	  Run-time error 97: Can not call friend function on object which is not an
	  instance of defining class.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
