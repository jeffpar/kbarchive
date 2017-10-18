---
layout: page
title: "Q149701: DOCERR: Insert Method Does Not Exist for Columns Collection"
permalink: kb/149/Q149701/
---

## Q149701: DOCERR: Insert Method Does Not Exist for Columns Collection

	Article: Q149701
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Insert method on the DBGrid Columns collection results in error 438 -
	Object doesn't support this property or method.
	
	CAUSE
	=====
	
	The Language Reference Guide for Visual Basic for Windows (page 473) refers
	incorrectly to the Insert method of the DBGrid Columns collection. The correct
	name of the method is Add, not Insert.
	
	WORKAROUND
	==========
	
	Use the correctly documented Add method in Visual Basic online Help.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this issue and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	
	=============================================================================
	
