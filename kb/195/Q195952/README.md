---
layout: page
title: "Q195952: PRB: VID and VSS Out of Sync, Resulting in Possible Data Loss"
permalink: /kb/195/Q195952/
---

## Q195952: PRB: VID and VSS Out of Sync, Resulting in Possible Data Loss

	Article: Q195952
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe600 kbVisID600 kbGrpDSASP
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual InterDev, version 6.0 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Visual SourceSafe and Visual InterDev, the Web projects in the
	Visual InterDev environment might become out of sync under certain conditions.
	The most typical problem is that a file appears to be checked out in Visual
	SourceSafe when it actually is not.
	
	CAUSE
	=====
	
	If you directly manipulate files from the Visual SourceSafe Explorer, problems
	with the FrontPage Server Extensions might occur because Visual InterDev caches
	the state of the files in the Web project's metadata.
	
	RESOLUTION
	==========
	
	Do one of the following to resynchronize the Web project:
	
	- In the Visual InterDev Project Explorer, right-click on the Web project and
	  click Recalculate Links.
	
	- On the Project menu, click Web Project, and then click Recalculate Links.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe600 kbVisID600 kbGrpDSASP 
	Technology        : kbVisIDsearch kbSSafeSearch kbAudDeveloper kbVisID600 kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
