---
layout: page
title: "Q122262: BUG: LNK1200 Error Issued Because of Low Disk Space"
permalink: /kb/122/Q122262/
---

## Q122262: BUG: LNK1200 Error Issued Because of Low Disk Space

	Article: Q122262
	Product(s): Microsoft Programming Utilities
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Linker (LINK.EXE), used with:
	   - Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a project with debug information under low disk space conditions
	(on either the project drive or the TEMP\ directory drive), the following error
	may be generated:
	
	  LINK : error LNK1200: error reading program database
	
	When linking incrementally, the following warning may precede the LNK1200 error:
	
	  LINK : warning LNK4081: low on disk space;
	
	  linking non-incrementally
	
	CAUSE
	=====
	
	When LINK fails because of low disk space conditions, corruption of the .PDB
	file associated with the target may occur. Because .PDB files are updated
	incrementally, subsequent builds that update the .PDB file for the target will
	fail and give the LNK1200 error.
	
	RESOLUTION
	==========
	
	Having LINK generate a new .PDB file for the target will alleviate the problem.
	The resolution has two steps:
	
	1. Delete the (corrupt) .PDB file for the target.
	
	2. Free up enough disk space, so that there is sufficient room for the new .PDB
	  file and the updated target.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The LNK4081 warning is warning you that there is not enough disk space for the
	Linker to update the .ILK file or write out a new one if one doesn't already
	exist.
	
	Additional query words: 2.00 2.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch
	Version           : :2.0
	
	=============================================================================
	
