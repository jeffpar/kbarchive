---
layout: page
title: "Q147837: FIX: &quot;File not Found&quot; Error Message During Check In"
permalink: /kb/147/Q147837/
---

## Q147837: FIX: &quot;File not Found&quot; Error Message During Check In

	Article: Q147837
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to check out an entire project and its subprojects, recursively.
	The project structure can be preserved by using the "Build tree (override
	working dirs)" option in the Check Out dialog. If, however, one of the
	subprojects has a working directory set, SourceSafe will look in this working
	directory when checking in the projects. If the working directory is not the
	same as the directory structure which was created during the recursive checkout,
	a "File not Found" error will occur for each file in the subproject.
	
	CAUSE
	=====
	
	SourceSafe looks in the project's working directory for the files to check in
	rather than the check out directory.
	
	NOTE: From the command line, files can only be checked in from the working
	directory. In the interface, files may be checked in from the check out
	directory if the "Override working dirs" option is used.
	
	RESOLUTION
	==========
	
	If you don't know if working directories have been set for subordinate projects,
	use the "Override working dirs" option on the Check In dialog.
	
	Another option to avoid the error is to use the "Undo Check Out..." option.
	
	STATUS
	======
	
	This behavior is by design. This problem was corrected in Visual SourceSafe
	version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Main project with several subprojects and associated files.
	
	2. Set a working directory for one of the subprojects to something other than
	  what will be used for the Main project.
	
	3. Check out the Main project recursively, and choose the "Build tree (override
	  working dirs)" option.
	
	4. Check the Main project in recursively. The error will occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
