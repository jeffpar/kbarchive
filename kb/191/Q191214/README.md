---
layout: page
title: "Q191214: BUG: Error Message When Not Breaking Binary Compatibility"
permalink: /kb/191/Q191214/
---

## Q191214: BUG: Error Message When Not Breaking Binary Compatibility

	Article: Q191214
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a project, Visual Basic raises a warning dialog box about
	Binary Compatibility being broken if there has been a change in an interface.
	The dialog box gives the choice to accept the changes (and break compatibility
	with older versions) or to cancel the compile (and ensure that compatibility is
	kept).
	
	When canceling the compile to keep Binary Compatibility, the following error
	message may appear:
	
	  Object library invalid or contains references to object definitions that
	  could not be found.
	
	RESOLUTION
	==========
	
	This is an erroneous message and can be ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For more information on Binary Compatibility search for "Maintaining Binary
	Compatibility" in the Microsoft Developer Network (MSDN) Library.
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
