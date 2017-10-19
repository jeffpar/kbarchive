---
layout: page
title: "Q143261: FIX: Error When Referring to Member Object/Collection in OLE DLL"
permalink: /kb/143/Q143261/
---

## Q143261: FIX: Error When Referring to Member Object/Collection in OLE DLL

	Article: Q143261
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp400bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 22-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assigning an object dimensioned in a client application to a Public member
	object inside an OLE DLL, or referencing a property of the member object may
	give a General Protection Fault or OLE Automation Error depending upon how the
	member object was declared and whether or not it has been instantiated.
	
	The problem discussed in this article only occurs when the server is compiled as
	an OLE DLL (In-Proc server) and the client has been compiled as an EXE.
	
	RESOLUTION
	==========
	
	By implementing the member object property so that it is instantiated upon
	startup of the parent class to the member, this problem can be avoided.
	
	1. To fix this problem, the MemberObj object can be dimensioned in the General
	  Declarations section of a Class1 module as below:
	
	     Public MemberObj as Class2
	
	  Then, the Set statement is used to instantiate the member object in the
	  Initialize event of the parent class. Also, the member object should be
	  released in the Terminate event:
	
	     Private Class1_Initialize()
	     Set MemberObj = New Class2
	
	     End Sub
	
	     Private Class1_Terminate()
	     Set MemberObj = Nothing
	     End Sub
	
	  Public Collection objects should also be implemented in the same fashion in an
	  OLE DLL. For example, if there is to be a Collection object as a member
	  object to a class, using the above workaround, the declaration below should
	  NOT be used:
	
	     Public x as New Collection
	
	  Rather, the OLE DLL Server should ensure that the Collection object is
	  instantiated before the client begins using it. It would be accomplished in
	  the same way as the example above. In the General Declarations section of the
	  Class1 module
	
	     Public x as Collection
	
	  and then, in the Initialize event of Class1, the Collection member object is
	  instantiated:
	
	     Private Class1_Initialize()
	     Set x = New Collection
	     End Sub
	
	     Private Class1_Terminate()
	     Set x = Nothing
	     End Sub
	
	  The latter method ensures that the member object will be correctly
	  instantiated and avoids a potential problem of accessing it from a client.
	
	2. A second workaround involves keeping the original declaration for a member
	  object, but referring to a property or method of the member object within the
	  Initialize event of the parent class. When the property or method of the
	  member object is invoked, the object will be correctly instantiated.
	
	  For example, to implement a Collection class, it could be declared within the
	  parent class as
	
	     Public x as New Collection
	
	  and then referred to in the initialize event of the parent class, so that the
	  member object becomes instantiated:
	
	     Sub Class1_Initialize()
	     Dim I As Integer
	     I = x.Count
	     End Sub
	
	Steps to Reproduce Problem
	--------------------------
	
	Create the OLE Server Application:
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Insert two class modules into the project by choosing Insert.Class Module
	  from the menu. Also, insert a standard code module by choosing Insert.Module.
	
	3. For both Class Modules, change the Instancing property to 2-Createable
	  MultiUse and the Public property set to True.
	
	4. In Class1, place the following line of code in the General Declarations
	  section:
	
	     Public MemberObj as New Class2
	
	5. Inside the standard code module place the following two lines of code:
	
	     Sub Main()
	     End Sub
	
	6. From the menu choose Tools.Options, and in the Project tab select the OLE
	  Server radio button, and change the name of the Project to DLLGPF. Also, for
	  the Startup Form, select Sub Main() from the choices. Press the OK button.
	
	7. Compile the project as an OLE DLL.
	
	Create the Client Application
	-----------------------------
	
	1. Start a new Project in Visual Basic. Form1 is created by default.
	
	2. In the Form_Click event, place the following code:
	
	     Dim x as Object
	     Dim y as New DLLGPF.Class1
	
	     Set x = y.MemberObj
	
	3. Choose Tools.References, and select the checkbox corresponding to DLLGPF.
	
	4. From the menu, choose File.Make EXE and call the executable Client.exe.
	
	Upon running Client.exe and clicking on Form1, a General Protection Fault
	occurs.
	
	On Windows 95 or Windows 98, a General Protection Fault generally occurs (in one
	test this occurred in Vb40032.dll at 0137:0f7269d9). On Windows NT 3.51, a
	General Protection Fault can occur, and also a Run-time error '-2146500594
	(800f000e)' can occasionally occur.
	
	Notably, the General Protection Fault or OLE Automation Error does not occur if
	the client application is run from the Design Environment, or if the OLE Server
	is implemented as an Out-of-Proc (EXE) OLE server.
	
	Another example of reproducing a General Protection Fault can occur if a
	Collection object is a member object of the OLE DLL, and if the Client
	application refers to the Count property of the Collection object before the
	member collection object has been instantiated (the count of the Collection
	object will be zero when this is the case).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The General Protection Fault can occur if the member object was constructed by
	declaring it as a property using the New keyword in the declarations section of
	a class module, and if the DLL code has not instantiated the object by referring
	to a property or method of that object before the client application is
	accessing the member object.
	
	In a class module, it is possible to create a member object by placing a
	declaration like so:
	
	     Public x as New Class2
	
	Here x is a member object (of type Class2). However, it will not be instantiated
	until a property or method of x is invoked.
	
	The problem discussed in this article is that x may not be correctly instantiated
	if a property or method of x is first used in the client application, and x is a
	member object contained in an OLE DLL. Under these circumstances, a General
	Protection Fault or OLE Automation Error may occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp400bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
