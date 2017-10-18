---
layout: page
title: "Q131753: Private Data Sessions Require Additional File Handles"
permalink: kb/131/Q131753/
---

## Q131753: Private Data Sessions Require Additional File Handles

	Article: Q131753
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using private data sessions in Visual FoxPro consumes more file handles than
	does using the default data session.
	
	MORE INFORMATION
	================
	
	If an indexed table with memo fields that is part of a .DBC is used in the
	default data session, up to five file handles are consumed. If the same table is
	used in two private data sessions, up to ten file handles are consumed.
	
	One handle is consumed for each .DBF, .FPT, .CDX, .DBC, and .DCT file opened in
	each data session. When the same table is opened in a different private data
	session, additional file handles are required to maintain locking information.
	If multiple tables are opened from the same database container in a single data
	session, only two file handles are required for each .DBC and .DCT file in each
	session.
	
	Additional query words: VFoxWin multiuser multi-user
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
