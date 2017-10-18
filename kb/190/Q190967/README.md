---
layout: page
title: "Q190967: BUG: Changing Implemented Class Does Not Give Compatibility Erro"
permalink: kb/190/Q190967/
---

## Q190967: BUG: Changing Implemented Class Does Not Give Compatibility Erro

	Article: Q190967
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Visual Basic Class implements an interface of a referenced dll, then the
	implemented dll is removed and replaced with a different dll which contains the
	same interface names as the first reference, an incompatibility error is not
	generated when recompiling the dll with Binary Compatibility set.
	
	For example, if Project1.dll implements Class1 in MyFirst.dll, then the reference
	to MyFirst.dll is removed and replaced with a reference to MySecond.dll (which
	also contains a Class1), recompiling Project1 does not generate a compatibility
	error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Create a new ActiveX DLL Project in Microsoft Visual Basic. Class1 will be
	  created by default.
	
	2. Select Project Properties from the Project menu.
	
	3. Change the Project Name to "Ref1."
	
	4. Paste the following code into Class1's code window.
	
	        Public Sub Test()
	        End Sub
	
	5. Compile Ref1.Dll by selecting Make Ref1.Dll from the File menu.
	
	6. Return to the Project Properties and change the Project name to "Ref2."
	
	7. In the Project Properties dialog, click on the Component Tab and select No
	  Compatibility.
	
	8. Make Ref2.dll by selecting Make Ref1 from the File menu.
	
	  NOTE: You will need to manually change the dll name from Ref1.dll to Ref2.dll.
	
	9. Create a new ActiveX dll project in Visual Basic.
	
	10. Rename Class1 to "ClassX."
	
	11. Select References from the Project menu, and add a reference to Ref1.
	
	12. Paste the following into ClassX's code window:
	
	        Implements Class1
	
	        Private Sub Class1_Test()
	        End Sub
	
	13. Compile Project1.dll by selecting Make Project1 from the File menu.
	
	14. Select Project Properties from the Project Menu, and then select the
	  component tab. Set Binary Compatibility with Project1.dll.
	
	15. Select References from the Project menu, remove the reference to Ref1, and
	  add a reference to Ref2.
	
	16. Compile as Project2.dll. Note that the project compiles fine, whereas there
	  should be an incompatibility error.
	
	Additional query words: kbDSupport kbVBp600bug kbVBp500bug kbCompiler kbdss kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
