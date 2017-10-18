---
layout: page
title: "Q246910: INFO: How Label Promotions Work in Visual SourceSafe 6.0"
permalink: kb/246/Q246910/
---

## Q246910: INFO: How Label Promotions Work in Visual SourceSafe 6.0

	Article: Q246910
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbSSafe600 kbSSExplorer _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Label Promotion feature is a new feature of Visual SourceSafe 6.0. This
	feature allows users to promote a later version of a file into an existing
	project label.
	
	MORE INFORMATION
	================
	
	To promote a later version of a file into a pre-existing project label, apply a
	file label with the same name as the pre-existing project label.
	
	The following example assumes that a project named MyProject exists in Visual
	SourceSafe, and that the project contains a file named MyFile in Visual
	SourceSafe version 3.
	
	Step 1:  Label the Project:
	
	1. Select MyProject.
	
	2. Select the Label option from the File menu.
	
	3. Type a label name for the project (for example, Version1).
	
	Step 2:  Modify the File:
	
	1. Select MyFile.
	
	2. Check the file out, edit the file, and then check the file back in.
	
	The current version of MyFile is version 4. If the user goes into the history of
	MyProject, selects the label Version1, and retrieves the project, then they
	would get version 3 of MyFile. To associate version 4 of MyFile with the
	Version1 label, do the following:
	
	Step 3: Promote the Edited File into the Pre-existing Label that Uses Label Promotions:
	
	1. Select the modified file.
	
	2. Select the Label option from the File menu.
	
	3. In the Label box, type label Version1
	
	This uses the file label to promote version 4 of MyFile into the existing project
	label Version1. You can retrieve the project when you use the Version1 label,
	and then have Visual SourceSafe retrieve version 4 of MyFile instead of version
	3.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q246914 Manually promote a label in Visual SourceSafe
	
	  Q246814 HOWTO: Remove or Change a Label
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600 kbSSExplorer _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
