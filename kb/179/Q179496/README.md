---
layout: page
title: "Q179496: FIX: Class Builder Reports Property Procedures as Variants"
permalink: kb/179/Q179496/
---

## Q179496: FIX: Class Builder Reports Property Procedures as Variants

	Article: Q179496
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A class module containing property procedures that return data types other than
	variants are shown in the Class Builder Utility as returning Variant data types.
	
	CAUSE
	=====
	
	This behavior occurs in the following situations:
	
	- The class module contains a method that returns a Variant data type.
	
	-or-
	
	- A property procedure of a data type other than Variant is declared after a
	  method that returns a Variant data type.
	
	RESOLUTION
	==========
	
	Move all property procedures and functions that return a Variant data type to
	the end of the class module.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	Additional query words: kbVBp500bug kbVBp600fix kbVBp kbdss kbDSupport kbAddIn
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
