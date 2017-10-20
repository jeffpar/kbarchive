---
layout: page
title: "Q177409: BUG: &quot;Failed to Reload Project&quot; Error When Checking In VB File"
permalink: /kb/177/Q177409/
---

## Q177409: BUG: &quot;Failed to Reload Project&quot; Error When Checking In VB File

{% raw %}

	Article: Q177409
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe500bug kbVBp500bug
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Checking in or undoing a check out of an existing Visual Basic project file
	(.vbp) in Visual SourceSafe causes the following error message:
	
	  Failed to Reload the Project. Please close the project from the file menu and
	  re-open it to get the correct versions of all the files loaded into memory.
	
	Then, the source code status box opens and Visual Basic hangs.
	
	Similar problems might occur if you perform the same operations on other files
	within the project (for example, forms, modules, etc.).
	
	CAUSE
	=====
	
	"Remove Local copy after Add or Check In" is selected.
	
	RESOLUTION
	==========
	
	Deselect the "Remove Local copy after Add or Check In" option.
	
	This can only be done through the Visual SourceSafe Explorer because the option
	is unavailable (grayed out) from the Visual Basic IDE Options dialog box.
	Furthermore, because the Visual Basic IDE inherits this option from Visual
	SourceSafe, changing there changes it in Visual Basic.
	
	In Visual SourceSafe:
	
	1. On the Tools menu, click Options.
	
	2. Click the Local Files tab
	
	3. Deselect "Remove Local copy after Add or Check In" option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	After checking in the .vbp, Visual Basic tries to reload the project, but
	because "Remove Local copy after Add or Check In" removes the local copy, the
	reload fails. Having this option selected can also cause a General Protection
	Fault to occur in Visual Basic when you add a new project to Visual SourceSafe
	from Visual Basic.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual SourceSafe Explorer.
	
	2. On the Tools menu, click Options, click the Local Files tab, and select
	  "Remove Local copy after Add or Check In".
	
	3. Click OK.
	
	4. Exit Visual SourceSafe Explorer.
	
	5. Start Visual Basic 5.0.
	
	6. Open an existing project(.vbp).
	
	7. From Visual Basic, check out the .vbp.
	
	8. From Visual Basic, undo or Check in the .vbp.
	
	If Visual Basic hangs, you need to "End Task" in the Task Manager to shut it
	down.
	
	For more information related to this symptom, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q171803 FIX: Problems Retrieving VB 5.0 Projects from Visual SourceSafe
	
	  Q176351 BUG: Referenced Project Causes "Failed to Reload the Project"
	
	Additional query words: remove
	
	======================================================================
	Keywords          : kberrmsg kbSSafe500bug kbVBp500bug 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbZNotKeyword3 kbSSafe500
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
