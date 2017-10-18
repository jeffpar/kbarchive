---
layout: page
title: "Q158701: PRB: Error When Renaming a File That Is Checked Out"
permalink: kb/158/Q158701/
---

## Q158701: PRB: Error When Renaming a File That Is Checked Out

	Article: Q158701
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual SourceSafe 4.0
	---------------------
	
	If you rename a file that is checked out in Visual SourceSafe 4.0, and you try to
	check it back in, you get the following message:
	
	  File "<working directory>\<filename>" not found
	
	Where <working directory> is the working directory for the renamed file,
	and <filename> is the new name of the file.
	
	This behavior occurs because the copy of the checked-out file is not renamed by
	Visual SourceSafe.
	
	Visual SourceSafe 5.0 or later
	------------------------------
	
	If you try to rename a file that is checked out in Visual SourceSafe 5.0 or
	later, the following message appears:
	
	  Unable to rename the selected file
	
	If you try to rename a file that is checked out to another user, the same message
	appears.
	
	RESOLUTION
	==========
	
	Before renaming a file in the Visual SourceSafe database, make sure that the
	file is not checked out by any users.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Visual SourceSafe 4.0:
	
	1. Open or switch to Visual SourceSafe 4.0.
	
	2. Right-click a file and click Check Out.
	
	3. With the checked-out file selected, click Rename on the File menu.
	
	4. Rename the file.
	
	5. Right-click the file and click Check In. Note that the following message
	  appears:
	
	  File "<Working directory>\<filename>" not found
	
	Visual SourceSafe 5.0 or later:
	
	1. Open or switch to Visual SourceSafe.
	
	2. Right-click a file and click Check Out.
	
	3. Right-click the checked-out file and click Rename. Note that the following
	  message appears:
	
	  Unable to rename the selected file
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
