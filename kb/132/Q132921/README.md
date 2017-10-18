---
layout: page
title: "Q132921: INFO: Branching or Separating SourceSafe Files and Projects"
permalink: kb/132/Q132921/
---

## Q132921: INFO: Branching or Separating SourceSafe Files and Projects

	Article: Q132921
	Product(s): Microsoft SourceSafe
	Version(s): 3.10
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	- Microsoft SourceSafe for Windows NT, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Creating a branch is useful when you want to continue along two different
	directions in a single application.
	
	MORE INFORMATION
	================
	
	After sharing the file, you can choose to separate immediately (branch) by
	selecting the 'Separate after share' checkbox. The steps for doing this are
	listed below. The other option, is to separate after you have previously shared
	the file. In the interface, selecting the Separate option on the SourceSafe menu
	item does this. You cannot, however, create a branch of a project in a
	subproject of that project. The error "A project cannot be shared under a
	descendant" will occur.
	
	Because branching is an extension of share, you can also branch files and
	projects at a specific version.
	
	More information on sharing can be found in the following articles:
	
	  Q132922 Sharing SourceSafe Files
	
	  Q132923 Sharing SourceSafe Projects
	
	Step-by-Step Example
	--------------------
	
	1. Highlight the project that you want to share.
	
	2. Select SourceSafe from the menu, then select Share.
	
	3. Choose the project.
	
	4. Select the Separate after share checkbox.
	
	5. Select the Share push button.
	
	6. Select the Recursive checkbox.
	
	7. Select the OK push button.
	
	Notice that the new project's files do not have the multiple pages icon. If you
	make changes to these files, they will not be reflected on the original project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe310NT
	Version           : 3.10
	Issue type        : kbinfo
	
	=============================================================================
	
