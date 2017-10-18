---
layout: page
title: "Q240883: Shadow Folders Are Not Updated When You Use Mapped Drives"
permalink: kb/240/Q240883/
---

## Q240883: Shadow Folders Are Not Updated When You Use Mapped Drives

	Article: Q240883
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbDSupport kbGrpDSSSafe
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a shadow folder in Visual SourceSafe (VSS), the following error
	message occurs when you check in a file:
	
	  Invalid dos path to the mapped directory.
	
	The shadow folder is not updated.
	
	CAUSE
	=====
	
	Visual SourceSafe attempts to update the shadow folder by referencing it from
	the SourceSafe client computer. Therefore, all clients must have mapped drives
	to the shadow folder that are identical.
	
	NOTE: Visual SourceSafe does not issue a warning that all clients must also
	create a mapped drive in order for this feature to work.
	
	RESOLUTION
	==========
	
	To resolve this problem, shadow directly by using the Universal Naming
	Convention (for example, \\machinename\share). Alternatively, a mapped drive
	must be created for all individual clients that point to the shadow directory
	path.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce This Behavior
	--------------------------------
	
	1. Map a drive to the location where you intend to create a shadow folder.
	
	2. Open the Visual SourceSafe Administrator, click Tools, click Options, click
	  the Shadow Folder tab, and then create a shadow folder to the mapped drive.
	
	3. Open SourceSafe Explorer on a client computer that does not have a mapped
	  drive.
	
	4. The error occurs when you attempt to check in a file to the project that
	  shadows to the mapped drive.
	
	Additional query words: shadowing UNC
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500 kbSSafe32bitSearch
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
