---
layout: page
title: "Q184281: BUG: Constants Used in Function Call Breaks Binary Compatibility"
permalink: /kb/184/Q184281/
---

## Q184281: BUG: Constants Used in Function Call Breaks Binary Compatibility

	Article: Q184281
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to compile an ActiveX DLL or ActiveX EXE, the following error is
	received, even when you have not modified any interfaces:
	
	  <FUNCTION NAME> in the <CLASS NAME> class module has arguments
	  and/or a return type that is incompatible with a similar declaration in the
	  version compatible component.
	
	CAUSE
	=====
	
	This error is caused by using a CONSTANT (CONST) in a function declaration.
	
	RESOLUTION
	==========
	
	In the function declaration, use the actual value of the CONSTANT, rather than
	the CONSTANT itself.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The steps to resolve this problem are as follows:
	
	Steps To Reproduce
	------------------
	
	1. Create a new ActiveX DLL Project in Visual Basic.
	
	2. Add the following code to the default class module:
	
	        Public Sub CauseSomeTrouble(Optional Test As String = vbNullString)
	           Msgbox "This Will Not Work For Long!"
	        End Sub
	
	3. On the File menu, click Make Project1.dll. This action compiles the project
	  into a final DLL/EXE executable.
	
	4. On the Project menu, click Project1 Properties, and click the Component tab.
	  Under Version Compatibility, select Binary Compatibility. Click the ellipsis
	  on the right, and in the Compatible ActiveX Component dialog box,
	  double-click the Project1.dll file that you created in step 3. Click OK.
	
	5. Attempt to make the DLL again (repeat step 3).
	
	RESULTS: The following error dialog box appears:
	
	  CauseSomeTrouble in the Class1 class module has arguments and/or a return
	  type that is incompatible with a similar declaration in the version
	  compatible component.
	
	Steps To Resolve
	----------------
	
	Change the following line of code shown in step 2 above from:
	
	     Public Sub CauseSomeTrouble(Optional Test As String = vbNullString)
	
	-to-
	
	     Public Sub CauseSomeTrouble(Optional Test As String = "")
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
