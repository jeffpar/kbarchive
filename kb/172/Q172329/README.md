---
layout: page
title: "Q172329: PRB: Error 459 Trying to Use Alternate Object Interface"
permalink: kb/172/Q172329/
---

## Q172329: PRB: Error 459 Trying to Use Alternate Object Interface

	Article: Q172329
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 13-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You get run-time error 459 "Object or Class does not support the set of
	elements" when assigning an object of class "A" to an object variable of class
	"B" in order to use an alternate interface.
	
	CAUSE
	=====
	
	The base class you are implementing in your object defines an Event object and
	your object variables are declared using the WithEvents keyword. The Visual
	Basic versions listed above do not support events in inherited interfaces.
	
	RESOLUTION
	==========
	
	This is a limitation of the versions of Visual Basic listed above.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form with a command button and two class modules (Base_Class and
	  Derived_Class).
	
	2. Add the following code to the Base_Class class module:
	
	        Event Alert(ByVal Msg As String)
	
	        Public Sub PostAlert(ByVal Msg As String)
	        End Sub
	
	3. Add the following code to the Derived_Class class module:
	
	        Implements Base_Class
	
	        Event Alert(ByVal Msg As String)
	
	        Private Sub Base_Class_PostAlert(ByVal Msg As String)
	          RaiseEvent Alert(Msg)
	        End Sub
	
	4. In the form module, add the following code:
	
	        Dim WithEvents objDC As Derived_Class, WithEvents objBC As Base_Class
	
	        Sub Command1_Click()
	          Set objDC = New Derived_Class
	          Set objBC = objDC              ' error 459 occurs on this line
	          objBC.PostAlert "Some Message"
	          Set objBC = Nothing
	          Set objDC = Nothing
	        End Sub
	
	        Sub DC_Alert(ByVal Msg As String)
	          MsgBox Msg
	        End Sub
	
	Notes:
	
	- If you remove the WithEvents keyword from the objBC variable declaration, the
	  code will run.
	
	- If you remove the Event declaration in the Base_Class class module, the
	  compiler will also require you to remove the WithEvents keyword on the
	  variable declaration, and the code will run.
	
	- If you remove the Event declaration in the Derived_Class class module, you
	  will get a compile error.
	
	- You cannot implement the Derived_Class event handler as a Private event or
	  derived event as you can with methods. For example, either of the following
	  in the Derived_Class class module will result in a compile error:
	
	        Private Event Base_Class_Alert(ByVal Msg As String)
	        Event Base_Class_Alert(ByVal Msg As String)
	
	Additional query words: WithEvents Implements kbdse kbDSupport kbVBp kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
