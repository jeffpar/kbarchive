---
layout: page
title: "Q168162: FIX: RDO Move 0 Fails to Refresh Record"
permalink: /kb/168/Q168162/
---

## Q168162: FIX: RDO Move 0 Fails to Refresh Record

	Article: Q168162
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0 97
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVBDB kbvbp500sp1fix kbvbp500sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Documentation for the Move method states that, after issuing a Move 0, "any
	pending edits are discarded and the current row is refreshed from the data
	source."
	
	This behavior does not occur with the version of the RDO 2.0 engine that shipped
	with the products listed above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in version 5.00.3817 of
	the file msrdo20.dll, which is included in Visual Studio 97 Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	This problem does not occur with RDO 1.0.
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVBDB kbvbp500sp1fix kbvbp500sp2fix 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0 97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
