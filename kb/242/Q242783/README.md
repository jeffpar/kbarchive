---
layout: page
title: "Q242783: DOC: MAXDWORD Has Incorrect Value in Visual Basic API Text Viewe"
permalink: /kb/242/Q242783/
---

## Q242783: DOC: MAXDWORD Has Incorrect Value in Visual Basic API Text Viewe

	Article: Q242783
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The API Text Viewer gives an incorrect value for the MAXDWORD constant.
	
	MORE INFORMATION
	================
	
	When copying the MAXDWORD constant from the API Text Viewer, you get:
	
	Const MAXDWORD = &HFFFF
	
	Instead, you should use this:
	
	Const MAXDWORD = &HFFFFFFFF
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Solution Type     : kbpending
	
	=============================================================================
	
