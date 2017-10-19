---
layout: page
title: "Q171522: FIX: Enums in Public Procedures Cause Binary Compatibility Error"
permalink: /kb/171/Q171522/
---

## Q171522: FIX: Enums in Public Procedures Cause Binary Compatibility Error

	Article: Q171522
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
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
	
	Using Enums as parameters/arguments in class module methods may result in binary
	compatibility errors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where,and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	If you use Enum statements in class modules, they may cause adverse behavior to
	your application when compiling and running if compatibility is set to "Binary
	Compatibility." This seems to occur most frequently when enums are used as
	parameters within a class's Method declaration in an ActiveX control or DLL.
	Adverse behavior in your program may include "type mismatches" between arguments
	and parameters even though they are correct. Compiler problems include Visual
	Basic thinking the compatibility has been broken when it hasn't, and linker
	errors during compilation.
	
	To reproduce a compiling error (linker error):
	
	1. Create a new ActiveX Control.
	
	2. Add a new Class Module, and paste in the following code:
	
	        Property Let Name(Effect As Stooge)
	                 Msgbox "You Changed The Name"
	        End Property
	
	3. Add the following to the Control's General Declarations section:
	
	        Public Enum Stooge
	               Larry
	               Curly
	               Moe
	        End Enum
	
	4. Compile the Control.
	
	5. Under Project -> Project Properties -> Components, change the
	  compatibility to "Binary Compatibility."
	
	6. Recompile the Control. You will get the following error message from the
	  linker:
	
	  "Unexpected error in code generator or linker - View error messages?"
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
