---
layout: page
title: "Q166896: PRB: Header Files in External Dep Folder Aren't Added to SCC"
permalink: kb/166/Q166896/
---

## Q166896: PRB: Header Files in External Dep Folder Aren't Added to SCC

	Article: Q166896
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0; winnt:5.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Header files in the External Dependencies folder in Developer Studio are not
	added to source control. They also do not appear in any of the source control
	dialog boxes.
	
	CAUSE
	=====
	
	Files in the External Dependencies are considered external to the project; that
	is, not part of the project (though still required for a build). Since the files
	are not part of the project, it does not make sense to add them to source
	control.
	
	RESOLUTION
	==========
	
	If the files in the External Dependencies folder really are part of the project,
	simply drag and drop them into the project. Once the files are in the project,
	they may be added to source control.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbVCsearch kbSSafeSearch kbAudDeveloper kbVC500 kbVC32bitSearch kbSSafe600 kbSSafe500 kbVC500Search
	Version           : WINDOWS:5.0,6.0; winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
