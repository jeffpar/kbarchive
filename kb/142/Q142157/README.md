---
layout: page
title: "Q142157: DOC: Merge Branches Option Doesn't Work at Project Level"
permalink: kb/142/Q142157/
---

## Q142157: DOC: Merge Branches Option Doesn't Work at Project Level

	Article: Q142157
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Merge Branches option is Dimmed (unavailable) when a project is selected. It
	is not possible to Merge an entire project from the Visual SourceSafe Explorer.
	This occurs even though you follow the directions outlined in the Visual
	SourceSafe Help file in the "Merge Branches" topic and "Merging Files &
	projects" subtopic, which state that to merge branches:
	
	1. Click the file or project you want in Visual SourceSafe Explorer. Then on the
	  SourceSafe Menu, click Merge Branches. Visual SourceSafe displays the Merge
	  dialog box.
	
	2. In the Project box, click the project that has the version of the file from
	  which you want to merge changes.
	
	3. Click Merge.
	
	MORE INFORMATION
	================
	
	You can merge all of the files in a project using the Visual SourceSafe Command
	line. Follow these steps:
	
	1. Switch to the project that you want to merge the files into:
	
	  SS CP $/<project Name>
	
	2. Use the merge command on the project you want to merge files from. Use *.* as
	  the last parameter after the project name as in this example:
	
	  SS MERGE $/<Project to merge from>/*.*
	
	  The merge command will merge each file in the project specified with the files
	  in the Current Project.
	
	NOTE: SS MERGE will not work recursively. That is, it will not merge files in
	subprojects of the project specified. You must merge each subproject using the
	two-step procedure. If a conflict occurs during the merge, Sourcesafe will
	notify you with the message:
	
	  "An automatic merge has occurred and there are conflicts. Edit <file
	  path>\<filename> to resolve them"
	
	You will then need to open the specified file in a text editor for manual
	resolution. There is no Visual Merge option when merging from the command line.
	
	REFERENCES
	==========
	
	For additional information about resolving automatic merge conflicts, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q132971 INFO: Merging SourceSafe Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	
	=============================================================================
	
