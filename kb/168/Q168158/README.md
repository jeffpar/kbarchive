---
layout: page
title: "Q168158: FIX: Can't Close Resultset if DBGrid Bound to RDC"
permalink: /kb/168/Q168158/
---

## Q168158: FIX: Can't Close Resultset if DBGrid Bound to RDC

	Article: Q168158
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0 97
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a DBGrid is bound to an RDC, trying to programmatically close the underlying
	resultset yields the error:
	
	  "Object is invalid or not set."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in version 5.00.3817 of
	the file msrdc20.ocx which is included in Visual Studio 97 Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0 97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
