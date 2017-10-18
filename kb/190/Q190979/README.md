---
layout: page
title: "Q190979: DOC: CodeLocation Property Incorrectly Shows Optional Argument"
permalink: kb/190/Q190979/
---

## Q190979: DOC: CodeLocation Property Incorrectly Shows Optional Argument

	Article: Q190979
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Online Help topic for the CodeLocation property of the Microsoft Visual
	Basic Member object describes an optional parameter of Propkind, which is an
	enumerated value of vbext_PropertyKind.
	
	MORE INFORMATION
	================
	
	The CodeLocation property is a read-only property. Assigning a value to the
	property will generate the following error:
	
	  Can't assign to read-only property
	
	To work around this problem, use the ProcStartLine method of the CodeModule
	Object.
	
	Additional query words: kbdss kbDSupport kbVBp kbAddIn kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	
	=============================================================================
	
