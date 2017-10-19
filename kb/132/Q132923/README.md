---
layout: page
title: "Q132923: INFO: Sharing SourceSafe Projects"
permalink: /kb/132/Q132923/
---

## Q132923: INFO: Sharing SourceSafe Projects

	Article: Q132923
	Product(s): Microsoft SourceSafe
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbusage kbSSafe
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	- Microsoft SourceSafe for Windows NT, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the two methods of sharing projects in SourceSafe. In
	addition, the article shows how to identify shared projects and how they are
	shared.
	
	MORE INFORMATION
	================
	
	When you share Projects, SourceSafe shares all of the files in the project and
	its subprojects if you select recursive.
	
	While the multiple pages icon indicates that a file has been shared, you may
	forget where the file is located in other projects. The LINKS command can
	display the locations of the shared file in other projects.
	
	Example 1 - Sharing the most recent version of the project
	----------------------------------------------------------
	
	1. Highlight the Location where you want to move the project. For this example,
	  suppose we create a new project in the $/ (root) project.
	
	2. Select Share from the SourceSafe menu.
	
	3. Highlight the $/<orig. project> project in the Projects: list box.
	
	4. Select the Share push button.
	
	5. Type the <new project> in the New Name text box.
	
	6. Select the Recursive check box.
	
	7. Select OK.
	
	Example 2 - Sharing a specific version of a project
	---------------------------------------------------
	
	You can also select a specific version of a project from the history window. The
	only difference between sharing a specific version of a file and sharing a
	specific version of a project is the dialog that allows you to select where you
	want to share the project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe310NT
	Version           : 3.1
	Issue type        : kbinfo
	
	=============================================================================
	
