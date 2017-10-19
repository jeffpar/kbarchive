---
layout: page
title: "Q154829: PRB: Rights by Project Are Not Always Inherited"
permalink: /kb/154/Q154829/
---

## Q154829: PRB: Rights by Project Are Not Always Inherited

	Article: Q154829
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a project's rights are changed under the Rights by Project option, and the
	project is moved so it becomes a subproject of a higher level (parent) project,
	it will not inherit the parent project's rights.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Visual SourceSafe Explorer, create three projects off the root
	  project: ProjectA, ProjectB & ProjectC.
	
	2. In the Visual SourceSafe Administrator, enable Rights by Project. For the
	  user Guest, set the rights as follows:
	
	     - ProjectA  - Read
	     - ProjectB  - All (leave default)
	     - ProjectC  - Read
	
	  Close the Project Rights Dialog.
	
	3. Reopen the Dialog and change the ProjectC rights to All.
	
	4. In the Explorer, as a user who has all rights, move ProjectB and ProjectC
	  into ProjectA. Add a file to each project.
	
	5. In the Explorer, as the user Guest, attempt to check out the file from
	  ProjectA, ProjectB and ProjectC. Note the following results:
	
	   - ProjectA: The "Insufficient Rights" dialog appears. The Guest's rights
	     were set to Read and never changed. The project was not moved.
	
	   - ProjectB: The "Insufficient Rights" dialog appears. The project's rights
	     were never changed, so it inherited the settings from the parent project.
	
	   - ProjectC: The file can be checked out. Like ProjectB, this file was moved
	     but did not inherit rights from the parent as might be expected. Changing
	     its rights prior to the move caused it to retain those settings.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
