---
layout: page
title: "Q189156: BUG: Crash When Closing Application That Uses ActiveX DLL"
permalink: /kb/189/Q189156/
---

## Q189156: BUG: Crash When Closing Application That Uses ActiveX DLL

	Article: Q189156
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Visual Basic, you create one or more ActiveX DLLs and a Standard EXE
	(client) application to use the DLLs. The client application runs as expected
	within the Visual Basic (IDE) environment. However, when you compile and run the
	client application as an EXE, the application produces one of the following
	errors upon closing:
	
	  <project name> caused an invalid page fault in module MSVBVM50.DLL at
	  0137:0f059b41.
	
	  -or-
	
	  Exception: access violation (0xc0000005), Address: 0x0f059b41
	
	CAUSE
	=====
	
	This problem can occur when the objects you create in the DLL are not closed
	properly by the client application due to a circular reference. A circular
	reference occurs, for instance, in the following scenario:
	
	  A client application instantiates an object in the ActiveX DLL: the Parent
	  object. The Parent object creates another object in the DLL: the Child
	  object. The Parent object sets a property in the Child object that allows the
	  Child object to have a reference to the Parent object.
	
	This creates a circular reference between the Parent and Child objects. When the
	client application that created the Parent object sets its object variable to
	Nothing, the Parent object does not terminate because the Child object maintains
	a reference to the Parent object. The MORE INFORMATION section below describes a
	specific case for this problem and provides a solution, which is to remove the
	Child's reference to the Parent object before closing the Parent object.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The steps below illustrate two sample ActiveX DLLs and a client application to
	use the DLLs. By following these steps, you will see how an error can occur when
	you close the client application. A workaround is also provided.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and create a new ActiveX DLL project. Class1 is created by
	  default.
	
	2. Change the name of the Class1 module to GlobalMethods.
	
	3. Choose Properties from the Project menu, and set the Project Name to
	  UBGlobal.
	
	4. Put the following code in the GlobalMethods module:
	
	      Option Explicit
	
	      Public Sub gMethod1()
	
	      End Sub
	
	      Public Function getValidList(a As Object, b() As Collection) As Integer
	      End Function
	
	5. Save the UBGlobal project and make UBGlobal.dll.
	
	6. Close the UBGlobal project and start a new ActiveX DLL project. Class1 is
	  created by default.
	
	7. Choose References from the Project menu, and set a reference to UBGlobal.
	
	8. Choose Properties from the Project menu, and set the Project Name to
	  UBServer.
	
	9. From the Project menu, add a new class module. Class2 is created.
	
	10. Put the following code in the Class2 module:
	
	        Option Explicit
	
	        Public objGlobal As UBGlobal.GlobalMethods
	        Public objParent As Class1
	
	        Private Sub Class_Initialize()
	           Set objGlobal = New UBGlobal.GlobalMethods
	           objGlobal.gMethod1
	        End Sub
	
	        Private Sub Class_Terminate()
	           Set objGlobal = Nothing
	        End Sub
	
	11. Put the following code in the Class1 module:
	
	        Option Explicit
	
	        Private objChild As Class2
	
	        Private Sub Class_Initialize()
	           Set objChild = New Class2
	           Set objChild.objParent = Me
	        End Sub
	
	        Private Sub Class_Terminate()
	           Set objChild.objParent = Nothing
	           Set objChild = Nothing
	        End Sub
	
	        Public Sub CleanUp()
	           Set objChild.objParent = Nothing
	        End Sub
	
	12. Save the UBServer project and make UBServer.dll.
	
	13. Close the UBServer project, and start a new Standard EXE project. Form1 is
	  created by default.
	
	14. Choose References from the Project menu, and set a reference to both
	  UBGlobal and UBServer.
	
	15. Choose Properties from the Project menu, and set the Project Name to Client.
	
	16. Put a CommandButton on Form1.
	
	17. Put the following code in the form's code window:
	
	        Option Explicit
	
	        Dim objGlobal As UBGlobal.GlobalMethods
	        Dim objParent As UBServer.Class1
	
	        Private Sub Form_Load()
	           Set objGlobal = New UBGlobal.GlobalMethods
	           objGlobal.gMethod1
	           Set objParent = New UBServer.Class1
	        End Sub
	
	        Private Sub Command1_Click()
	           ' uncomment the following line for solution:
	           'objParent.CleanUp
	           Set objParent = Nothing
	           Set objGlobal = Nothing
	           Unload Me
	        End Sub
	
	18. Run the project. The form with the CommandButton appears.
	
	19. Click the CommandButton. Note that the application ends without an error.
	
	20. Save the Client project and compile Client.exe.
	
	21. Close Visual Basic.
	
	22. Run Client.exe. The form with the CommandButton appears.
	
	23. Click the CommandButton.
	
	Result: The client application terminates with one of the errors described
	above.
	
	Solution: Uncomment the objParent.CleanUp line in the client project. Recompile
	and run Client exe. Click the CommandButton.
	
	Result: The application shuts down properly with no error.
	
	The purpose of the CleanUp method in Class1 is to remove the circular reference
	between Class1 (parent) and Class2 (child). Until the reference to Class1 is
	removed, Class1 does not terminate properly when using the ActiveX DLL from a
	Visual Basic client EXE.
	
	
	REFERENCES
	==========
	
	For more information about circular references, refer to "Dealing with Circular
	References" in chapter 6, "General Principles of Component Design" in the Visual
	Basic Component Tools Guide.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500bug kbActiveX kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
