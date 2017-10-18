---
layout: page
title: "Q190197: BUG: User Defined Type Not Defined Using Binary Compatibility"
permalink: kb/190/Q190197/
---

## Q190197: BUG: User Defined Type Not Defined Using Binary Compatibility

	Article: Q190197
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling an ActiveX DLL or ActiveX EXE with Binary Compatibility, the
	following error occurs:
	
	  Compile Error : User defined type not defined
	
	RESOLUTION
	==========
	
	Turn off Binary Compatibility and compile the project. Visual Basic will
	highlight the line of code that contains the User Defined Type that is not
	defined. After resolving the problem, Binary Compatibility can be turned back
	on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Create a new ActiveX DLL project in Microsoft Visual Basic. Class1 is created
	  by default.
	
	2. Paste the following code into Class1:
	
	        Option Explicit
	
	        Public Enum Colors
	           Red
	           Green
	           Blue
	        End Enum
	
	        Public Sub ChangeColor(NewColor As Colors)
	        End Sub
	
	3. On the File menu, click Make Project1.dll.
	
	4. On the Project menu, click Project1 Properties, and then click the Component
	  tab.
	
	5. In the Version Compatibility area, click Binary Compatibility, and then click
	  OK.
	
	6. Comment out the Enum declaration in Class1.
	
	7. On the File menu, click Make Project1.dll. Click OK when asked to replace the
	  current file.
	
	8. Visual Basic will display a dialog warning about breaking compatibility. For
	  this demonstration, choose the option that will break compatibility.
	
	  NOTE: When Visual Basic warns about breaking compatibility, the Enum
	  definition that was undefined was shown. The User Defined Type that raises
	  this error will not always be identified by Visual Basic.
	
	9. Visual Basic will display the following error:
	
	  User Defined Type Not Defined
	
	10. On the Project menu, click Project1 Properties, then click the Component
	  tab.
	
	11. In the Version Compatibility area, click to No Compatibility.
	
	12. On the File menu, click Make Project1.dll. Click OK when asked to replace
	  the current file. Note that Visual Basic will highlight the User Defined
	  Type that is causing the error.
	
	Additional query words: kbDSupport kbdss kbVBp500bug kbVBp600bug kbCompiler kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	
