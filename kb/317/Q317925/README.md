---
layout: page
title: "Q317925: BUG: Location Files Are Checked Out from the Original Project Af"
permalink: /kb/317/Q317925/
---

## Q317925: BUG: Location Files Are Checked Out from the Original Project Af

	Article: Q317925
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c 
	- Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you branch a project and change the binding to the new project, location
	files are checked out from the original project location.
	
	CAUSE
	=====
	
	The solution file is not saved automatically when the change connection occurs.
	
	RESOLUTION
	==========
	
	To resolve this behavior, after the change connection is completed (you must
	check out the solution during the operation), select the solution node in
	Solution Explorer, and then click Save.
	
	NOTE: Do not use Save All; you must save the solution file explicitly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an empty solution and then add the solution to source control.
	
	2. Add an empty Visual Basic project on a different drive or above the root
	  folder of the solution.
	
	3. Select and add the project to source control in a different SourceSafe
	  Project folder than where the solution is located. Make sure that you check
	  in all the files.
	
	4. In the Visual SourceSafe Explorer, share and branch the project folder in
	  SourceSafe.
	
	5. In the IDE of the open solution, on the File menu, click Source Control, and
	  then click Change Source Control.
	
	6. Change the project's source control location to the new branch:
	
	  Click OK on the dialog box, and then click OK to check out the solution.
	
	7. Check in the solution.
	
	8. Close and reopen the solution.
	
	9. On the File menu, click Source Control, and then click Change Source Control.
	  The target of the project is the original location of the project.
	
	This behavior recurs if you do change connection for any number of projects (in a
	solution) that have connections that are separate from solution source control
	and that are added to a separate SourceSafe folder, and you make no other
	changes to the solution.
	
	For example, in the following situations:
	
	- When the solution itself is not controlled.
	- For file share Web projects.
	- When projects are not located on the same drive as the solution.
	- When projects are added to source control separately from the solution to a
	  different SourceSafe location.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbVSsearch kbSSafeSearch kbAudDeveloper kbVSNETPro kbSSafe600C kbVSNETSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
