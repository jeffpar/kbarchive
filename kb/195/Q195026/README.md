---
layout: page
title: "Q195026: FIX: Links Are Not Updated After Renaming a Project"
permalink: kb/195/Q195026/
---

## Q195026: FIX: Links Are Not Updated After Renaming a Project

	Article: Q195026
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you rename a project in Visual SourceSafe, links of some of the shared
	files under that project and its subprojects might not be updated (they still
	point to the old name). Analyze build 2218 does not fix this problem.
	
	CAUSE
	=====
	
	A project rename operation that would not corrupt the database apparently failed
	or was stopped, but it might not update all of the links correctly.
	
	RESOLUTION
	==========
	
	To correct the problem, run analyze build 2220 or later with -f switch against
	the VSS database. Download and install the latest analyze utility from the
	following Web site if you do not have build 2220 or later:
	
	  http://support.microsoft.com/support/kb/articles/Q190/8/81.asp
	
	NOTE: If you are using Visual SourceSafe 6.0, you can directly run analyze from
	the <SourceSafe Installation directory>\Win32 directory.
	
	The latest version of analyze is also available in Visual SourceSafe 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Visual SourceSafe 5.0.
	This bug was corrected in Visual SourceSafe 6.0 (and analyze build 2220 or
	higher).
	
	MORE INFORMATION
	================
	
	In Visual SourceSafe, one file can be shared among multiple projects. Changes to
	the file from one project are automatically seen by other projects sharing the
	file. This encourages code reuse.
	
	Sharing a file means it exists equally in all the projects to which it is shared.
	To accomplish this, Visual SourceSafe maintains links to the projects where that
	file has been shared. Use the Links tab in the Properties command on the File
	menu to see a list of projects sharing a file.
	
	However, if you rename a project that has shared files, the changed project name
	might not be updated in all shared files under that project. As a result, some
	of the files might have old project name as its link. Run analyze build 8169
	with -f switch to fix this problem.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual SourceSafe Explorer.
	
	2. Create two Projects: $/Proj1 and $/Proj2.
	
	3. Create two sub projects: $/Proj1/SubProj1 and $/Proj2/SubProj2.
	
	4. Add a file to $/Proj1/SubProj1 (for example, File1.txt).
	
	5. Share the file from $/Proj1/SubProj1 to $/Proj2/SubProj2.
	
	6. Delete (not destroy) the Project $/Proj2/SubProj2.
	
	7. Rename $/Proj2 to $/RenamedProj2.
	
	8. Select $/Proj1/SubProj1/File1.txt.
	
	9. On the File menu, click Properties, and then click the Links Tab.
	
	10. You will find the following: $/Proj1/SubProj1 $/Proj2/SubProj2 (deleted in
	  this project)
	
	11. Close Visual SourceSafe Explorer.
	
	12. Run analyze build 2218 with -f swith against the database.
	
	13. Open Visual SourceSafe Explorer.
	
	14. Repeat steps 8 and 9.
	
	15. You will find the following again: $/Proj1/SubProj1 $/Proj2/SubProj2
	  (deleted in this project)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
