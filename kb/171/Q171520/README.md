---
layout: page
title: "Q171520: FIX: Unable to Set Binary Compatibility with Class Module"
permalink: /kb/171/Q171520/
---

## Q171520: FIX: Unable to Set Binary Compatibility with Class Module

	Article: Q171520
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
	
	After compiling a .dll for the first time and setting the project to binary
	compatibility, further attempts to compile may result in the following error
	message:
	
	  "<Function Name> in the <Class Name> class module has arguments
	  and/or a return type that is incompatible with a similar declaration
	  in the version-compatible component.
	
	  If you choose Accept, the <Class Name> class module will no longer
	  support client applications compiled against the version-compatible
	  component. To avoid this incompatibility, edit the declaration to be
	  compatible, or clear the version compatibility setting in Project Options."
	
	CAUSE
	=====
	
	This problem occurs in large, complex applications that contain circular
	references. For example, a function in one class module references another class
	module as follows:
	
	     Public Function DoSomething(param1, param2, param3) as MyOtherClass
	
	where MyOtherClass is another class in the same project, and MyOtherClass
	contains a UDT which references back to the first module.
	
	A simple repro case is not available as this behavior tends to occur only in
	large, complex projects.
	
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
	
	This problem occurs when a function in one class module references another class
	module, and the second class module's Instancing property is set to "2 -
	PublicNotCreatable." For example, the function in the first class module could
	be:
	
	     Public Function DoSomething(param1, param2, param3) as MyOtherClass
	
	If MyOtherClass is another class module with Instancing set to "2," the problem
	occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
