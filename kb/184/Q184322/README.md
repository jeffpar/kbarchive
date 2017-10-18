---
layout: page
title: "Q184322: BUG: Error &quot;438&quot; When Implementing Base Class in ActiveX Exe"
permalink: kb/184/Q184322/
---

## Q184322: BUG: Error &quot;438&quot; When Implementing Base Class in ActiveX Exe

	Article: Q184322
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you late-bind to an ActiveX EXE that contains a derived class that implements
	a base class, you receive the following error when trying to use a method or
	property of that base class:
	
	  Run Time Error "438"
	  Object Doesn't Support This Property Or Method
	
	RESOLUTION
	==========
	
	Use early binding or put the base and derived classes into an ActiveX DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce
	------------------
	
	Part 1
	------
	
	1. Start a new ActiveX EXE Project in Visual Basic. Form1 is created by default.
	
	2. On the Project menu, click Project1 Properties, and change the name of the
	  ActiveX EXE project to "OutProcServer."
	
	3. Add two additional class modules to the Project. Name the existing three
	  class modules as follows:
	
	  clsBase
	  clsDerived
	  clsStarter
	
	4. Paste the following code into the clsBase module:
	
	        Property Get MyFirstProperty() As String
	        End Property
	
	5. Paste the following code into the clsDerived module:
	
	        Implements clsBase
	
	        Private Property Get clsBase_MyFirstProperty() As String
	           clsBase_MyFirstProperty = "Hello from MyFirstProperty!"
	        End Property
	
	6. Paste the following code into the clsStarter module :
	
	        Public Function CreateDerivedClass() As clsBase
	            Set CreateDerivedClass = New clsDerived
	        End Function
	
	7. Save the ActiveX EXE project, and then compile it.
	
	Part 2
	------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click References, then select "OutProcServer," which is
	  the server that was just compiled step 7 of Part 1 above.
	
	3. Add two Command Buttons to Form1 (Command1 and Command2).
	
	4. Paste the following code into the code module of Form1:
	
	        ' Early bound object references.
	        Dim oEarlyStarterClass As OutProcServer.clsStarter
	        Dim oEarlyDerivedClass As OutProcServer.clsBase
	
	        ' Late bound object references.
	        Dim oLateStarterClass As Object
	        Dim oLateDerivedClass As Object
	
	        Private Sub Command1_Click()
	
	           ' Create an instance of the out-proc server starter class object.
	           Set oEarlyStarterClass = New clsStarter
	
	           ' Now that there is a reference to the starter class object; use
	           ' this object to return an instance of the derived class, which
	           ' implements the base class declared in the out-proc server.
	           Set oEarlyDerivedClass = oEarlyStarterClass.CreateDerivedClass
	
	           ' Show the object type of the newly created object returned
	           ' from the starter class object; it will be the derived class.
	           MsgBox "oEarlyDerivedClass Is Of Type : " & _
	                   TypeName(oEarlyDerivedClass)
	
	           ' To prove that an instance of the derived class was successfully
	           ' created, call the base class's interface, which the derived
	           ' class implemented.
	           MsgBox oEarlyDerivedClass.MyFirstProperty
	
	           ' Destroy our objects.
	           Set oEarlyDerivedClass = Nothing
	           Set oEarlyStarterClass = Nothing
	
	        End Sub
	
	        Private Sub Command2_Click()
	
	           ' Create an instance of the out-proc server starter class object
	           ' late-bound.
	           Set oLateStarterClass = CreateObject("OutProcServer.clsStarter")
	
	           ' Create a late-bound instance of the derived class.
	           Set oLateDerivedClass = oLateStarterClass.CreateDerivedClass
	
	           ' The first test is to show the type of the object that was just
	           ' created through the starter class object. The MsgBox will show
	           ' the correct value; which is the derived class, and not the base
	           ' class.
	           MsgBox "oLateDerivedClass Is Of Type : " & _
	              TypeName(oLateDerivedClass)
	
	           ' Finally, try to call the property that the derived class
	           ' has implemented. This will fail!
	           MsgBox oLateDerivedClass.MyFirstProperty
	
	        End Sub
	
	5. Press the F5 key to run the project.
	
	6. Click the Command1 button; this creates an instance of the "Starter Class."
	  The Starter Class is used to create an instance of the derived Class. The
	  Starter Class then checks to make sure that the proper class is being
	  returned, and then calls the base class's property. This test uses early
	  binding.
	
	7. Click the Command2 button; similar to the Command1 button, the Command2
	  button creates an instance of the "Starter Class." This class then returns an
	  instance of the derived class, then checks that that the proper object type
	  is returned. Calling the base class property results in the 438 error. This
	  second test uses late binding, and fails when it should succeed.
	
	Additional query words: kbVBp500bug kbVBp600bug kbdss kbDSupport kbVBp kbActiveX
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
