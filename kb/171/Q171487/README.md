---
layout: page
title: "Q171487: FIX: Crash When Assigning Uninitialized Object to Tag"
permalink: kb/171/Q171487/
---

## Q171487: FIX: Crash When Assigning Uninitialized Object to Tag

	Article: Q171487
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to set the Tag property of one of the Windows Common Controls
	(COMCTL32.OCX) at run-time may result in the following error and cause the
	application to terminate:
	
	  "VB5 caused an invalid page fault in module COMCTL32.OCX at 0137:202cb2a8."
	
	CAUSE
	=====
	
	This problem occurs when the object variable that you are trying to assign to
	the Tag property is uninitialized or is null.
	
	RESOLUTION
	==========
	
	In Visual Basic 5.0, you can work around the problem by checking the value of
	the variable before assigning it to the Tag property:
	
	     Dim x As Object
	     '...
	     If x Is Nothing Then
	        '
	     Else
	        StatusBar1.Panels(1).Tag = x
	     End If
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	With Visual Studio 97 Service Pack 2 installed, the above scenario correctly
	yields with the following trappable run-time error.
	
	  Run-time error '91':
	  Object variable or With block not set.
	
	
	Additional query words: listview toolbar treeview
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
