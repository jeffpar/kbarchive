---
layout: page
title: "Q172251: FIX: RDO May Incorrectly Handle Locking Conflicts in Transaction"
permalink: kb/172/Q172251/
---

## Q172251: FIX: RDO May Incorrectly Handle Locking Conflicts in Transaction

	Article: Q172251
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An RDO query that cannot complete due to an uncommitted lock from a competing
	transaction may cause the query to hang rather than time out after the
	connection or query's QueryTimeout value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
