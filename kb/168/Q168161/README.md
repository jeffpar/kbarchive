---
layout: page
title: "Q168161: FIX: Distributed Transaction Fails on Subsequent Runs"
permalink: /kb/168/Q168161/
---

## Q168161: FIX: Distributed Transaction Fails on Subsequent Runs

	Article: Q168161
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0 97
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Studio 97 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using distributed transactions from RDO 2.0 may generating an error stating that
	the connection is invalid.
	
	CAUSE
	=====
	
	The problem may occur when RDO loads the Distributed Transaction Coordinator
	(DTC) components after having previously unloaded them. RDO no longer unloads
	the DTC components when it is unloaded from memory. The DTC components are then
	unloaded when the process ends.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in version 5.00.3817 of
	the file msrdo20.dll, which is included in Visual Studio 97 Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix 
	Technology        : kbVCsearch kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVC500 kbVC32bitSearch kbVS97 kbVS97Search kbVC500Search
	Version           : 5.0 97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
