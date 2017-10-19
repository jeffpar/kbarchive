---
layout: page
title: "Q235606: FIX: Errors from Project Differences Window"
permalink: /kb/235/Q235606/
---

## Q235606: FIX: Errors from Project Differences Window

	Article: Q235606
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbSSafe600fix kbSSExplorer kbVS600sp3fix _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Subfolders appear in the wrong place in the Project Differences window.
	SubFolders are interspersed with files in alphabetical order, rather than
	appearing underneath the file list.
	
	This can cause errors on operations done in the Project Differences window such
	as Get, Checkout, Checkin, Show Differences and Add. The following error
	messages may appear:
	
	  "$/<Project> is not an existing filename or project"
	
	  "File <filename> is invalid. File may not begin with $.
	
	  "$/<filename> not found"
	
	CAUSE
	=====
	
	In Visual SourceSafe 6 functionality was extended to allow file system and
	SourceSafe information to appear in either pane. This allows project to project
	comparisons and directory to directory comparisons. SourceSafe operations (for
	example, get, add, checkout, and so forth) are only allowed when the diff
	included both projects and working directories, but the file system information
	can be on the left and the SourceSafe information on the right. This scenario
	was not allowed in Visual SourceSafe 5. Most of the code defects found involved
	assumptions carried over from Visual SourceSafe 5 about which pane was
	associated with file system or SourceSafe information.
	
	RESOLUTION
	==========
	
	Apply Service Pack 3 for Visual Studio 6.0, which contains fixes for Visual
	SourceSafe.
	This can be downloaded from:
	
	  http://msdn.microsoft.com/vstudio/sp/vssfixes.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create the following directory structure on the Hard Drive:
	<A0><A0><A0>c:\myfiles
	<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>\sub1
	<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>\bsub
	
	2. In the sub1 directory create the files:
	<A0><A0><A0><A0>Bfile.txt
	<A0><A0><A0><A0>Cfile.txt
	<A0><A0><A0><A0>Dfile.txt
	<A0><A0><A0><A0>Efile.txt
	
	3. In VSS create the following project structure:
	<A0><A0><A0><A0>$/myfiles
	<A0><A0><A0><A0><A0><A0><A0><A0>/sub1
	
	4. Set the working folder of $/myfiles to C:/myfiles, then add all the files
	  from C:\myfiles\sub1 to $/myfiles/sub1, except Efile.txt.
	
	5. In the project pane of the VSS Explorer, right-click on $/myfiles, and choose
	  Show differences from the shortcut menu. Select the Recursive checkbox, and
	  click OK.
	
	Note that in the right-pane of the Differences window C:\myfiles\sub1\bsub
	appears between the files Bfiles.txt and Cfiles.txt.
	As a result:
	
	- Attempting a Get or Checkout operation from the right-pane will return:
	<A0><A0><A0>"$/myfiles/<file> is not an existing filename or project."
	
	- Showing differences of any file underneath C:\myfiles\sub1\bsub will return:
	<A0><A0><A0>"File 'C:\myfiles\sub1\bsub\<filename>' not found."
	
	- Attempting to add Efile.txt from the right pane will return the same error as
	  ii), and attempting to add it from the left pane will return:
	<A0><A0><A0>"File $/myfiles/sub1/Efile.txt is invalid. Files may not begin with $."
	
	Additionally,the Differences report will display Efile.txt as belonging in the
	myfiles\sub1\bsub directory. Other problems, such as the Differences window not
	refreshing correctly are associated with this bug. To reproduce this:
	
	1. Create a new file (AAFile.txt) in the C:\myfiles\sub1 folder.
	
	2. Display the Project differences for $/myfiles/sub1, choosing the Recursive
	  option.
	
	3. From the right-pane of the Differences window, add AAFile.txt.
	
	Note that the left-pane does not automatically refresh to show that AAFile.txt is
	now in the project.
	
	Additional query words: diff
	
	======================================================================
	Keywords          : kbSSafe600fix kbSSExplorer kbVS600sp3fix _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
