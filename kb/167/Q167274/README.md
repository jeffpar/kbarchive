---
layout: page
title: "Q167274: FIX: Analyze May Hang When Running on Large Databases"
permalink: kb/167/Q167274/
---

## Q167274: FIX: Analyze May Hang When Running on Large Databases

	Article: Q167274
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbVS97sp1fix kbVS97sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Analyze may appear to hang on the third pass. In most cases, it continues to run
	but it may take hours or even days to finish. The problem is most prevalent (but
	not limited to) when you are working with complex, gigabyte-size databases.
	
	CAUSE
	=====
	
	In the first and second passes, Analyze reads through all the files in the
	database. During the third pass, it tries again to navigate from the root
	project to every single leaf of every branch. If it finds a problem with missing
	projects or subprojects, Analyze tries to rebuild the missing information by
	looking at each file in the entire database again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbVS97sp1fix kbVS97sp2fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
