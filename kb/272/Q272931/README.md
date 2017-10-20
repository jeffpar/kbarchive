---
layout: page
title: "Q272931: PRB: Get on a project label returns the wrong version of a file"
permalink: /kb/272/Q272931/
---

## Q272931: PRB: Get on a project label returns the wrong version of a file

{% raw %}

	Article: Q272931
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSafe600 kbSSExplorer _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Doing a "get" on a project label returns the wrong version of a file.
	
	CAUSE
	=====
	
	This behavior occurs when a file level label interferes with the project level
	label.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Manually get files at correct versions from history dialog.
	
	- Find the incorrect version that is being returned and remove its file level
	  label from the history window.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a Visual SourceSafe database.
	
	2. Create a Project called LabelTest.
	
	3. Add a Text File called LabelTestFile.txt.
	
	4. Check out the file, make any change to it, and then check it back in.
	
	5. Label the root project "$/" INTEGRATION.
	
	6. Check out the file, make any change to it, and then check it back in.
	
	7. Label the file INTEGRATION.
	
	8. Check out the file, make any change to it, and then check it back in.
	
	9. Label the the project "$/Labeltest" INTEGRATION.
	
	From this point, no matter where you do a get on the INTEGRATION label, you
	always get the version that was labeled at the file level.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600 kbSSExplorer _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
