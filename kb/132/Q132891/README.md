---
layout: page
title: "Q132891: INFO: The Meaning of v.# for User Name in SourceSafe"
permalink: kb/132/Q132891/
---

## Q132891: INFO: The Meaning of v.# for User Name in SourceSafe

	Article: Q132891
	Product(s): Microsoft SourceSafe
	Version(s): MS-DOS:3.04,3.1; WINDOWS:3.04,3.1; winnt:3.04,3.1
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may see the characters v.# (where # is an integer) appear to the right of a
	filename in the SourceSafe interface (the 'v.#' is visible in the column where
	the user name of the person who has the file checked out normally appears). The
	presence of these characters indicates the file has been shared at the specific
	version indicated by the number.
	
	Sharing at an explicit version makes the indicated version the current version in
	the file. When a file is shared at an explicit version you cannot checkout the
	file. If you wish to make modifications to the older version of the file you
	could either:
	
	- Separate the file(s) to a new project at an older version and make the
	  modifications in the new project.
	
	-or-
	
	- Roll back the file to the older version. This is permanently destroys any
	  changes you have made to the file since this version and is therefore not
	  recommended.
	
	To get back to the latest version of the file:
	
	1. Select the file.
	
	2. Do a history of the file.
	
	3. Select the latest version of the file.
	
	4. Select the 'Share' button.
	
	You will get the prompt "Always use the latest version <filename>?". Select
	Yes. At this point, you can check out the file from the project again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe304NT kbSSafe310NT
	Version           : MS-DOS:3.04,3.1; WINDOWS:3.04,3.1; winnt:3.04,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
