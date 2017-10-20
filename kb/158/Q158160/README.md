---
layout: page
title: "Q158160: PRB: Cloaked Projects are Deployed"
permalink: /kb/158/Q158160/
---

## Q158160: PRB: Cloaked Projects are Deployed

{% raw %}

	Article: Q158160
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Cloaking is a new feature in Visual SourceSafe 5.0 that excludes specified
	subprojects from recursive actions on a higher level project. If the parent
	project is a WEB project, when the project is DEPLOYed, the cloaking has no
	effect.
	
	STATUS
	======
	
	This behavior is by design. While cloaking is set by the individual user to
	determine whether a given subproject will be included in a recursive GET or
	CHECKOUT for that user only, deploying a project is a "universal" action that
	affects an entire project, including all its subprojects.
	
	MORE INFORMATION
	================
	
	Deploying a project is, in effect, identical to performing a recursive Get
	Latest Version. Because the cloaking affects the behavior of the Get, you might
	expect it to affect the Deploy in the same way.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a WEB project (the parent project) that has at least one subproject.
	
	2. Mark one of the subprojects as Cloaked.
	
	3. Deploy the parent project. Note that the subproject is also Deployed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
