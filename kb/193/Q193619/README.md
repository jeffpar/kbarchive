---
layout: page
title: "Q193619: FIX: Get from Project History Does Not Display Get Dialog Box"
permalink: /kb/193/Q193619/
---

## Q193619: FIX: Get from Project History Does Not Display Get Dialog Box

{% raw %}

	Article: Q193619
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600fix kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have set the project level Get dialog box to appear only when you press
	the SHIFT key and you open a project's history, hold the SHIFT key down, and
	click Get, the Get dialog box does not appear.
	
	RESOLUTION
	==========
	
	From the Tools menu, click Options, click the Common Dialogs tab, and select Get
	Latest Version check box in the list of commands used for projects to set the
	project level Get dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Visual SourceSafe 5.0.
	This bug was corrected in Visual SourceSafe 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Visual SourceSafe Explorer.
	
	2. From the Tools menu, click Options, click the Common Dialogs tab, and clear
	  the Get Latest Version check box in the list of commands used for projects to
	  set the project level Get dialog box.
	
	3. Click OK.
	
	4. Select a project and do a recursive history on it.
	
	5. Select a project.
	
	6. While pressing the SHIFT key, click Get.
	
	The Get dialog box does not appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600fix kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
