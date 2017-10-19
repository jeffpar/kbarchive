---
layout: page
title: "Q142463: FIX: Non-SourceSafe Visual Test Files Show Up as Checked Out"
permalink: /kb/142/Q142463/
---

## Q142463: FIX: Non-SourceSafe Visual Test Files Show Up as Checked Out

	Article: Q142463
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe400bug kbSSafe500fix
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	At the close of a project, the Check In dialog box shows that files that aren't
	under Source Code Control (SCC) but are in a Visual Test (VT) project workspace
	are checked out.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Visual SourceSafe
	Integration portion of Visual Test version 4.0 for Windows. This problem has
	been fixed in Visual SourceSafe 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set up a Project Workspace 1 containing two folders Dir1 and Dir2.
	
	2. In Dir1, place the files under SCC, and check them out.
	
	3. In Dir2, ensure that the files are not under SCC.
	
	4. On the Tools menu, click Options, click the Source Control tab, select the
	  "Check in files when closing the workspace" option, and click OK.
	
	5. On the File menu, click New, click Project Workspace, and click OK.
	
	6. Click Yes to "Some files in the workspace are not checked in. Do you want to
	  check them in now?"
	
	At this point, the expected behavior is that the files in Dir2 would not be
	listed in "Check in files" window. But in fact, the Dir2 files are listed (but
	they not checked or selected).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
