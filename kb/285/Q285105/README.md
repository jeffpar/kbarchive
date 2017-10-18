---
layout: page
title: "Q285105: Invalid Access Code When Creating Large Archive File Reports"
permalink: kb/285/Q285105/
---

## Q285105: Invalid Access Code When Creating Large Archive File Reports

	Article: Q285105
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to archive a large project, an "Invalid Access Code" error may
	occur.
	
	CAUSE
	=====
	
	There is a maximum size for an archive file of 2 gigabytes (GB).
	
	RESOLUTION
	==========
	
	Archive the projects in pieces, so that the archive file is less than 2 GB.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	1. Archive a large database with the .ssa file greater than 2 GB.
	
	2. After ssarc saves the files, the "Invalid Access Code" error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500 kbSSafe32bitSearch
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
