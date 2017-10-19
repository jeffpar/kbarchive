---
layout: page
title: "Q132931: FIX: Drag/Drop Executes Create and Add with Insufficient Rights"
permalink: /kb/132/Q132931/
---

## Q132931: FIX: Drag/Drop Executes Create and Add with Insufficient Rights

	Article: Q132931
	Product(s): Microsoft SourceSafe
	Version(s): 3.04 3.1
	Operating System(s): 
	Keyword(s): kbSSafe400fix kbSSafe300bugkbbuglist
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user without sufficient rights to add items in the SourceSafe database can do
	so with the Drag/drop from File Manager option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	This bug was corrected in Visual SourceSafe version 4.0.
	
	MORE INFORMATION
	================
	
	To duplicate this problem:
	
	1. Create a user in the SSADMIN utility with only RC rights on the $/ project.
	
	2. Start Visual SourceSafe as that user.
	
	3. Drag a subdirectory from the right-hand pane of File Manager and drop on the
	  $/ project on the left-hand pane.
	
	4. The project will be successfully added even though the user does not have
	  sufficient rights to add items into the Visual SourceSafe database.
	
	RESOLUTION
	==========
	
	There is no way to work around for this problem in Visual SourceSafe 3.1. Obtain
	Visual SourceSafe 4.0 to work around the problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400fix kbSSafe300bug kbbuglist
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe310 kbSSafe304NT kbSSafe310NT
	Version           : 3.04 3.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
