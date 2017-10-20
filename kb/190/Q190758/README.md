---
layout: page
title: "Q190758: BUG: Recalculate Links Does Not Update File Version Number"
permalink: /kb/190/Q190758/
---

## Q190758: BUG: Recalculate Links Does Not Update File Version Number

{% raw %}

	Article: Q190758
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbSSafe500 kbSSafe500bug kbSSafe600 kbSSafe600bug kbVisID600bug kbGrpDSASP kbDSup
	Last Modified: 06-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual InterDev, version 6.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Recalculate Links may fail to update the Master Web with the latest version of
	files that are checked out.
	
	RESOLUTION
	==========
	
	Undo check out for the files that are checked out and attempt the recalculate
	links command again.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Visual Interdev 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a project that has source code control enabled.
	
	2. Check out a file.
	
	3. Within the Visual SourceSafe Explorer, update the file, so that the version
	  number changes.
	
	4. Back in Visual InterDev, issue a Recalculate Links command for your Web
	  project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbSSafe500 kbSSafe500bug kbSSafe600 kbSSafe600bug kbVisID600bug kbGrpDSASP kbDSupport 
	Technology        : kbVisIDsearch kbSSafeSearch kbAudDeveloper kbVisID600 kbSSafe600 kbSSafe500
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
