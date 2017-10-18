---
layout: page
title: "Q153493: HOWTO: Perform a RollBack Without Losing History"
permalink: kb/153/Q153493/
---

## Q153493: HOWTO: Perform a RollBack Without Losing History

	Article: Q153493
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for Macintosh, version 3.1 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to return files to a particular version without
	losing the individual file history. If you use the Rollback feature of
	SourceSafe or Visual SourceSafe, you lose the history of the file.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedures
	-----------------------
	
	1. Perform a Get on the version you want to roll back to in the working
	  directory of the project.
	
	2. Highlight the latest version of the file in the Visual SourceSafe Explorer,
	  and hold the SHIFT key down while clicking CheckOut. Select the "Do not get
	  local copy" option. This checks out the files but does not Get them to the
	  working directory.
	
	3. Check in the files that are checked out, and SourceSafe will bring in the
	  older version. The history of the files will remain intact.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe310Mac kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
