---
layout: page
title: "Q168208: FIX: StillExecuting Is True After Async Execution Completes"
permalink: /kb/168/Q168208/
---

## Q168208: FIX: StillExecuting Is True After Async Execution Completes

	Article: Q168208
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The StillExecuting property of a Connection or a QueryDef object will
	incorrectly remain True even after successfully completing an asynchronous
	operation. This does not occur with Recordset objects.
	
	RESOLUTION
	==========
	
	While the StillExecuting property of the Connection and QueryDef objects will
	incorrectly return a True the first time it is read after the asynchronous
	operation has completed, further tests of the StillExecuting property will
	return a False. Testing the StillExecuting property inside of a While loop will
	work. After the operation has completed, the While loop will run through one
	more cycle where StillExecuting will return a True, after which it will
	correctly return a False.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	Additional query words: kbVBp500bug kbVS97SP3fix kbVBp kbdse kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
