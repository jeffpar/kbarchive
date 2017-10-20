---
layout: page
title: "Q188905: FIX: Sharing a File from Command Line Causes Corruption"
permalink: /kb/188/Q188905/
---

## Q188905: FIX: Sharing a File from Command Line Causes Corruption

{% raw %}

	Article: Q188905
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600fix kbAnalyze kbSSafeAnalyze
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running Analyze.exe with the -f switch, you may find the following message
	in the Analyze.log file:
	
	  The project <Project Name> contains a child that does not recognize
	  this project as a parent. The child will be added to the project.
	
	CAUSE
	=====
	
	A file is shared to a project that contains a shared and deleted copy of the
	same file.
	
	RESOLUTION
	==========
	
	Avoid sharing a file from the command line when the file contains a deleted link
	to the target project. If you want to share the file, either recover the file or
	purge the shared file and share it again.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Visual
	SourceSafe 6.0.
	
	MORE INFORMATION
	================
	
	Assume that you have a file named $/Proj1/File1 and a project named $/Proj2.
	File1 is shared from Proj1 to Proj2, then deleted (not destroyed) from Proj2. If
	you try to share the file again from the SourceSafe explorer, the following
	error occurs:
	
	  A deleted link to File1.txt already exists ...
	
	Sharing the file from the command does not create an error, but Analyze displays
	the following error:
	
	  The project Proj2 contains a child that does not recognize this project as a
	  parent. The child will be added to the project.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create two projects and name them $/Proj1 and $/Proj2.
	
	2. Add a file named File1.txt to $/Proj1 .
	
	3. Right-click project Proj2 and then from the Context menu, choose Share.
	
	4. In the Share dialog box, select the file File1 under $/Proj1.
	
	5. Click Share, and then click OK.
	
	6. Delete the file, File1.txt from $/Proj2.
	
	7. Repeat steps 3-5.
	
	8. The following error message appears:
	
	  A deleted link to File1.txt already exists.
	
	9. From the command prompt, run the following commands:
	
	  ss cp $/proj2
	  ss share $/proj1/File1.txt
	
	  The files share and no error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600fix kbAnalyze kbSSafeAnalyze 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
