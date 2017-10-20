---
layout: page
title: "Q173409: PRB: RDOErrors Collection Always Empty When Using EXE Server"
permalink: /kb/173/Q173409/
---

## Q173409: PRB: RDOErrors Collection Always Empty When Using EXE Server

{% raw %}

	Article: Q173409
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling an Automation server that passes your client application RDO
	objects, the RDOErrors collection never contains error information if the server
	is compiled as an ActiveX Automation EXE. RDOErrors collection will contain
	error information if the server is compiled as an ActiveX Automation DLL.
	
	CAUSE
	=====
	
	You are obtaining the RDOErrors collection from your application's RDOEngine
	object rather than from the server method,
	
	RESOLUTION
	==========
	
	Provide a method or property on the server object from which to retrieve the
	RDOErrors collection.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you compile a server component as a DLL, it has access to the same global
	objects that the client does. Because of this, you can inadvertently engage in
	practices that break object design principles. When you compile the server to an
	ActiveX Automation EXE, it now has its own global objects that are separate from
	the client application and object encapsulation cannot be violated.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create the server:
	
	1. Create a new project with a MultiUse class module (named MyConnect) with the
	  following code:
	
	        Public Function Connect () As rdoConnection
	          Set Connect = rdoEngine(0).OpenConnection("MyDSN",
	                        rdDriverComplete, "uid=sa;pwd=;database=pubs")
	        End Function
	
	        Public Function Errors () As Variant
	          Set Errors = rdoErrors
	        End Function
	
	2. Add a module with the following code:
	
	        Sub Main ()
	        End Sub
	
	3. Remove the default form.
	
	4. Add a reference to Microsoft Remote Data Object.
	
	5. Set Sub Main to be the Project Startup Form.
	
	6. In the Project Options dialog, in the Compatibility tab, set Version
	  Compatibility to No Compatibility. This will enable steps 7 and 8 to generate
	  distinct server GUIDs for the EXE and DLL servers.
	
	7. Change the project type to ActiveX DLL, name to DLLConnect, compile to a DLL,
	  and save.
	
	8. Change the project type to ActiveX EXE, name to EXEConnect, compile to an
	  EXE, and save.
	
	Create the client:
	
	1. Create a new project with a form and three CommandButtons.
	
	2. Add a reference to Microsoft Remote Data Object, DLLConnect, and EXEConnect.
	  You will have to add the last two by using the Browse feature of the
	  References dialog.
	
	3. Add the following code:
	
	        Private Sub Command1_Click()
	        Dim Connector As DLLConnect.MyConnect
	        Dim Conn As rdoConnection, rs As rdoResultset, E As rdoError
	          rdoEngine.rdoErrors.Clear
	          Set Connector = New DLLConnect.MyConnect
	          Set Conn = Connector.Connect
	          On Error Resume Next
	          Set rs = Conn.OpenResultset("THIS IS BAD SQL")
	          For Each E In rdoErrors
	            MsgBox E.Description
	          Next E
	          Conn.Close
	        End Sub
	
	        Private Sub Command2_Click()
	        Dim Connector As EXEConnect.MyConnect
	        Dim Conn As rdoConnection
	        Dim rs As rdoResultset
	        Dim E As rdoError
	          rdoEngine.rdoErrors.Clear ' required to prevent previous error
	                                 ' from showing
	          Set Connector = New EXEConnect.MyConnect
	          Set Conn = Connector.Connect
	          On Error Resume Next
	          Set rs = Conn.OpenResultset("THIS IS BAD SQL")
	          For Each E In rdoErrors
	            MsgBox E.Description
	          Next E
	          Conn.Close
	        End Sub
	
	        Private Sub Command3_Click()
	        Dim Connector As EXEConnect.MyConnect
	        Dim Conn As rdoConnection
	        Dim rs As rdoResultset
	        Dim E As rdoError
	        Dim Errors As Variant
	          Set Connector = New EXEConnect.MyConnect
	          Set Conn = Connector.Connect
	          Set Errors = Connector.Errors
	          Errors.Clear
	          On Error Resume Next
	          Set rs = Conn.OpenResultset("THIS IS BAD SQL")
	          For Each E In Errors
	            MsgBox E.Description
	          Next E
	          Conn.Close
	        End Sub
	
	4. Run the program and press each of the CommandButtons in turn.
	
	  Command1 and Command2 both break object programming standards because they
	  refer to the global rdoErrors collection. The code for Command1_Click works
	  (displays errors) because it runs the server as an in-process component,
	  whereas Command2 doesn't work because the server is an out-of-process
	  component and uses a different instance of RDOEngine.
	
	  Command3 works with an out-of-process component because it follows object
	  design principles and gets the errors collection from the Connector object
	  and not from the RDOEngine global object.
	
	NOTE:
	
	- This problem can also affect ActiveX components that share DAO objects or
	  other classes that have global objects.
	
	- This problem can also affect Visual Basic 4 and other 32-bit VBA products.
	
	Additional query words: kbRDO Remote OLE kbCOM kbdse kbDSupport kbVBp kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
