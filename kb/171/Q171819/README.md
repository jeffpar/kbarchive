---
layout: page
title: "Q171819: FIX: Invalid Enum Value Causes Incompatible Binary Compatible"
permalink: /kb/171/Q171819/
---

## Q171819: FIX: Invalid Enum Value Causes Incompatible Binary Compatible

	Article: Q171819
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Incompatibility Warnings may appear when you are trying to make a project with
	binary compatibility even though no subroutine or function declaration has
	changed.
	
	CAUSE
	=====
	
	If a function declaration contains an optional parameter with a default value in
	the declaration that does not use a valid enum, Visual Basic will define it as a
	short, which conflicts with the compiled version which is a long.
	
	RESOLUTION
	==========
	
	Install Visual Studio 97 Service Pack 2 or use a valid enumeration in the
	Function or Subroutine declaration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	This will only affect optional default parameters that do not use valid
	enumerations when setting the parameter to a default value.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a New ActiveX EXE in Visual Basic 5.0.
	
	2. In the General Declarations section of Class1, place the following code:
	
	        Public sub food( Optional x as DrawModeConstants = 1)
	        End Sub
	
	3. Select Project1 properties from the Project menu.
	
	4. Select the Component Tab and then make sure that the Project Compatibility
	  button is selected. Click OK.
	
	5. Select Make Project1.exe from the File Menu. Click OK.
	
	6. Select Project1 Properties from the Project menu.
	
	7. Select the Component Tab and then make sure that Binary Compatibility is
	  selected with the <path>/project1.exe file you recently created showing
	  in the text box. Click OK.
	
	8. Select Make Project1.exe from the File Menu. Click OK.
	
	You will now get a dialog box that warns of incompatibilities in the declaration
	of the version-compatible component. This should not be occurring because you
	have not modified the subroutine declaration. If you continue and select
	"Accept," you will get another message that recommends canceling the operation.
	
	As a workaround, if the declaration above used a valid enumeration such as the
	following, the error would not occur:
	
	     Public Sub food( Optional x as DrawModeConstanst = vbBlackness)
	     End Sub
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
