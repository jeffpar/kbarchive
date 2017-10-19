---
layout: page
title: "Q135357: PRB: Sync Between Visual SourceSafe and VB Is Delayed"
permalink: /kb/135/Q135357/
---

## Q135357: PRB: Sync Between Visual SourceSafe and VB Is Delayed

	Article: Q135357
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SourceSafe commands can be run from either Visual Basic or from the Visual
	SourceSafe Explorer. When the SourceSafe commands are run in Visual Basic, the
	Visual SourceSafe Explorer is automatically updated to reflect the changes.
	However, when the SourceSafe commands are run in the Visual SourceSafe Explorer,
	Visual Basic is not updated. The Visual Basic errors which result may not
	reflect the fact that the Visual Basic project status is out of sync.
	
	CAUSE
	=====
	
	This synchronization issue is due to a known limitation of the Visual Basic
	Add-In integration model.
	
	RESOLUTION
	==========
	
	Any time SourceSafe commands are run in the Visual SourceSafe Explorer, which
	impact a project open in Visual Basic, the user should choose Refresh File
	Status from the Tools/SourceSafe menu. By refreshing the project file status,
	Visual Basic is able to get in sync with Visual SourceSafe.
	
	When SourceSafe commands are run in the Visual SourceSafe Explorer, the changes
	take effect immediately, even though the glyphs in Visual Basic are not updated
	until the file status is refreshed. For example, if a file is checked out using
	the Explorer, it can be checked in from Visual Basic without doing a refresh. If
	the user runs a checkout in the Explorer and then a Get from Visual Basic, the
	status glyphs are updated in the Visual Basic session. So, the changes are seen
	in Visual Basic, just not right away.
	
	STATUS
	======
	
	No fixes are planned at this time.
	
	Additional query words: 4.00 Windows 95 5.00
	
	======================================================================
	Keywords          : kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
