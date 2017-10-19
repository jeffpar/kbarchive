---
layout: page
title: "Q282816: HOWTO: Remove a Visual Basic Project from Visual SourceSafe"
permalink: /kb/282/Q282816/
---

## Q282816: HOWTO: Remove a Visual Basic Project from Visual SourceSafe

	Article: Q282816
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbVBp _IK kbGrpDSSSafe
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 5.0 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove a Microsoft Visual Basic (VB) project from
	Visual SourceSafe, including how to create a working copy of a VB project that
	no longer includes the integration components that inform VB that the project is
	under Visual SourceSafe control.
	
	MORE INFORMATION
	================
	
	1. Make a copy of the working folder that contains the VB project.
	
	2. Delete Vssver.scc and Mssccprj.scc.
	
	3. Change the file permissions from Read only to Read and Archive.
	
	4. Open the project and, if you are prompted to add the project to Visual
	  SourceSafe, click No.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbVBp _IK kbGrpDSSSafe 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSSafe500 kbSSafe16bitSearch
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
