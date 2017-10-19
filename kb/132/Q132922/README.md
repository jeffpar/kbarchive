---
layout: page
title: "Q132922: INFO: Sharing SourceSafe Files"
permalink: /kb/132/Q132922/
---

## Q132922: INFO: Sharing SourceSafe Files

	Article: Q132922
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
	
	This article describes two methods of sharing files in SourceSafe. In addition,
	the article shows how to identify shared files and how they are shared.
	
	MORE INFORMATION
	================
	
	This article demonstrates two ways to share files. The conventional way of
	sharing files is the sharing the most recent version of the files. You can also
	share a specific version of a file. This feature allows you to stay at a
	particular version of a file in one project, while making changes to the file in
	another project.
	
	While the multiple pages icon indicates that a file has been shared, you may
	forget where the file is located in other projects. The LINKS command can
	display the locations of the shared file in other projects.
	
	Example 1 - Sharing the most recent version of the files
	--------------------------------------------------------
	
	This example demonstrates the conventional way of sharing files, sharing the most
	recent version of the files. The project <orig. project> is the project
	which contains the files to be shared. The project <new project> is the
	project that will receive a copy of the files to be shared.
	
	1. Create a new project ($/<new project>).
	
	2. Highlight the newly created project and select Share from the SourceSafe
	  menu. Select $/<orig. project>/<files to share> in the Files list
	  box.
	
	3. Select the Share push button
	
	A multiple-page icon indicates that the file has been shared. The files to share
	now exist in both the $/<orig. project> and $/<new project>
	projects. If a file is removed from the $/<orig. project> project, it
	still exists in the $/<new project> project, and therefore, there will be
	no regained disk space.
	
	Example 2 - Sharing a specific version of a file
	------------------------------------------------
	
	You can also share a specific version of a file. This feature allows you to stay
	at a particular version of a file in one project, while making changes to the
	file in another project. You can later share the recent version, or return to
	the default of always sharing the most recent version of the file.
	
	1. Highlight a file in the $\<orig. project> project.
	
	2. Select the History toolbar button (or History from the Info menu).
	
	3. Select Revision 1, when the file was created.
	
	4. Select the Share push button.
	
	5. Select the Close push button.
	
	View $\<new project>\<file> and $\<orig. project>\<file>
	and notice that they do not appear the same. $\<orig. project> is sharing
	the original file, while $\<new project>\<file> points to the latest
	revision. If you would like to update $\<orig. project> to the latest
	version:
	
	1. Select the History toolbar button (or History from the Info menu).
	
	2. Highlight the latest version and select the Share push button.
	
	3. You will be prompted "Do you always want to share the latest version?".
	  Select Yes.
	
	4. Select Close.
	
	If you look at the files now, you should see the most recent copy in both of the
	projects.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe310NT
	Version           : 3.10
	Issue type        : kbinfo
	
	=============================================================================
	
