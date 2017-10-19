---
layout: page
title: "Q135644: PRB: Deleted Project Files Are Not Converted with DELTA_SS.EXE"
permalink: /kb/135/Q135644/
---

## Q135644: PRB: Deleted Project Files Are Not Converted with DELTA_SS.EXE

	Article: Q135644
	Product(s): Microsoft SourceSafe
	Version(s): MS-DOS:3.1; WINDOWS:3.1,4.0,5.0; winnt:3.1
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe310
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for Windows NT, version 3.1 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a file has been deleted in Delta, the Delta_SS conversion never adds the file
	or any of its history to the SourceSafe project.
	
	CAUSE
	=====
	
	This occurs because if a file has been deleted from Delta, another file using
	the same name can be added later. Consider the following Log.mvm excerpt:
	
	1. 1/1/91 addfile fileA
	
	2. 1/2/91 delfile fileA
	
	3. 1/3/91 addfile fileA (different file)
	
	Delta_SS reads the entire log file and skips entries that refer to files that
	have been deleted.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe310 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe400 kbSSafe500 kbSSafe310NT
	Version           : MS-DOS:3.1; WINDOWS:3.1,4.0,5.0; winnt:3.1
	Issue type        : kbprb
	
	=============================================================================
	
