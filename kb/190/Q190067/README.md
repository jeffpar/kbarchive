---
layout: page
title: "Q190067: BUG: Object References Might Not Be Released Properly"
permalink: /kb/190/Q190067/
---

## Q190067: BUG: Object References Might Not Be Released Properly

	Article: Q190067
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0;
	Operating System(s): 
	Keyword(s): kbnokeyword kbOSWinNT kbVBp600bug kbOSWin kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a function call to an object returns a Variant and the Variant is not
	assigned to a local variable, Visual Basic might not dereference the object
	correctly. As a result, a new thread is created in the object's process space
	each time the function is called.
	
	RESOLUTION
	==========
	
	Assign the function's return value to a local variable, regardless of whether or
	not it is needed.
	
	Example
	-------
	
	The class clsMyObject has a function called MyVariantFunction that returns a
	Variant:
	
	     Public Function MyVariantFunction() As Variant
	
	If the return result of the function is not needed, calling the function without
	assigning the return value might cause new threads to be created:
	
	     Public Sub TestFunction()
	        clsMyObject.MyVariantFunction
	     End Sub
	
	To avoid the unnecessary creation of threads, assign the function's return value
	to a local variable, regardless of whether or not it is needed:
	
	     Public Sub TestFunction()
	        Dim vReturnValue As Variant
	
	        ' Although this will not be used, it guarantees proper dereferencing.
	        vReturnValue = clsMyObject.MyVariantFunction
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This type of behavior usually occurs when returning variant arrays that contain
	user-defined types.
	
	======================================================================
	Keywords          : kbnokeyword kbOSWinNT kbVBp600bug kbOSWin kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0;
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
