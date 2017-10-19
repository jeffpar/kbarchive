---
layout: page
title: "Q153511: PRB: Shared Project, Branch Menu Option Is Not Available"
permalink: /kb/153/Q153511/
---

## Q153511: PRB: Shared Project, Branch Menu Option Is Not Available

	Article: Q153511
	Product(s): Microsoft SourceSafe
	Version(s): MS-DOS:3.1; WINDOWS:3.1,4.0,5.0,6.0; winnt:3.1
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	- Microsoft SourceSafe for Windows NT, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a project is shared and then later branched (as a separate step), the branch
	or separate option is not available from the toolbar.
	
	RESOLUTION
	==========
	
	To be able to branch the project, you must select the project and then select
	all the project's files.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual SourceSafe.
	
	2. Select a project, and then right-click the project. Note that the share
	  dialog box including the Branch or Separate Option is available.
	
	If the project is shared and then later branched (in Visual SourceSafe version
	4.0) or separated (in SourceSafe version 3.X), the shared project must be
	selected first, and then all of the project files must be selected. If files are
	not selected, the branch (or separate) option is not available.
	
	Additional query words: Share branch
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch kbSSafe310NT
	Version           : MS-DOS:3.1; WINDOWS:3.1,4.0,5.0,6.0; winnt:3.1
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
