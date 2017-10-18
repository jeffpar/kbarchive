---
layout: page
title: "Q190459: BUG: Restricted Function or Interface Error with IDispatch"
permalink: kb/190/Q190459/
---

## Q190459: BUG: Restricted Function or Interface Error with IDispatch

	Article: Q190459
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an ActiveX DLL project is set to be binary compatible, and a class module has
	the name "IDispatch," then any changes made to the module will generate the
	following error:
	
	  Function or interface marked as restricted, or the function uses an
	  Automation type not supported in Visual Basic.
	
	The above error occurs after the expected Incompatibility error message. However,
	this error will not occur if neither the project's version compatibility is
	binary nor the class module name is "IDispatch."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. Add a new Class to the project and name it "IDispatch."
	
	3. Paste the following code in IDispatch's code window:
	
	        Public Sub AddRef()
	
	        End Sub
	
	4. Paste the following code in Class1's code window:
	
	        Implements IDispatch
	
	        Private Sub IDispatch_AddRef()
	        End Sub
	
	5. On the File menu, click Make Project1.dll.
	
	6. On the Project menu, click Project1 Properties, and then click the Component
	  tab.
	
	7. In the Version Compatibility Frame, click Binary Compatibility, and then
	  click OK.
	
	8. Comment out the code in "IDispatch" class module.
	
	9. Press the F5 key to run the project, and then click OK to close the
	  Incompatibility error message. Note that the following error occurs:
	
	  Function or Interface marked as restricted, or the function uses an
	  Automation type not supported in Visual Basic.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600bug kbCompiler
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
