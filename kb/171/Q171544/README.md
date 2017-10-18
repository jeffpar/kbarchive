---
layout: page
title: "Q171544: FIX: Engine: Collection Object Doesn't Access Correctly by Name"
permalink: kb/171/Q171544/
---

## Q171544: FIX: Engine: Collection Object Doesn't Access Correctly by Name

	Article: Q171544
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0; WINNT:97
	Operating System(s): 
	Keyword(s): kbVS97sp2fix kbvbp500sp3fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a Naming relationship on an object and you add an instance such
	as:
	
	     x.add Obj,"12"
	
	you cannot access this object by name, such as:
	
	     set y = x("12")
	
	CAUSE
	=====
	
	If you use a string that can be evaluated as a number (such as "12") for the
	name of an object in a naming relationship, you cannot access that object by
	that name. The reason is that the repository evaluates any string that could be
	a number as an index rather than a name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 3, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q175450 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 3
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS97sp2fix kbvbp500sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0; WINNT:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
