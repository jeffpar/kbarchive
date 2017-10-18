---
layout: page
title: "Q154828: PRB: Visual Basic Module Shuffle Looks Like Entire File Change"
permalink: kb/154/Q154828/
---

## Q154828: PRB: Visual Basic Module Shuffle Looks Like Entire File Change

	Article: Q154828
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:3.0,3.1,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe400 kbVBp300 kbSSafe310
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	- Microsoft SourceSafe for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic version 3.0, the code modules contained in a form are
	occasionally reordered. This problem is very noticeable when the form is under
	SourceSafe control because it appears as if the entire Visual Basic form has
	changed.
	
	This causes problems for SourceSafe because when this reordering happens there is
	no easy way to see just the code changes that were made by the developer.
	
	RESOLUTION
	==========
	
	Visual Basic 4.0 does not reorder the modules in forms.
	
	STATUS
	======
	
	This behavior is by design.
	
	This problem was corrected in Visual Basic version 4.0 for Windows.
	
	MORE INFORMATION
	================
	
	This reordering of modules in Visual Basic is not a common or consistent
	occurrence. There is nothing that can be done to prevent this from happening in
	Visual Basic 3.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe400 kbVBp300 kbSSafe310 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbZNotKeyword3 kbSSafe310 kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:3.0,3.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	
