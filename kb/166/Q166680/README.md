---
layout: page
title: "Q166680: PRB: Read-Only Visual SourceSafe User Can Modify Web Projects"
permalink: /kb/166/Q166680/
---

## Q166680: PRB: Read-Only Visual SourceSafe User Can Modify Web Projects

	Article: Q166680
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:1.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe kbVisID kbVisID100 kbVisID600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual InterDev, versions 1.0, 6.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users that are allowed read-only access to a Visual SourceSafe (VSS) project,
	but have been entered as Administrators to the FrontPage Web project can disable
	source control for the Web project, giving them full control over the project.
	
	CAUSE
	=====
	
	Visual InterDev allows all project administrators to enable or disable source
	control.
	
	RESOLUTION
	==========
	
	Only users allowed to enable or disable source control should be given
	administrator level access to the Web project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	User rights for the Web project can be modified by selecting Web Permissions
	from the Project menu, while VSS user rights must be changed within the Visual
	SourceSafe Administrator utility.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Web project.
	
	2. Enable source control for the project.
	
	3. Give user X Read-only VSS access to the project.
	
	4. Give user X Administrator rights to the FrontPage Web project.
	
	5. Have user X open the Web project in Visual InterDev.
	
	6. In Visual InterDev version 1.0, do a Project/Disable Source Control. In
	  version 6.0, go to Source Control under Project and select Disconnect Web
	  Project.
	
	REFERENCES
	==========
	
	For the latest Knowledge Base articles and other support information on Visual
	InterDev and Active Server Pages, please see the following page on the Microsoft
	Technical Support site:
	
	  http://support.microsoft.com/support/vinterdev/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe kbVisID kbVisID100 kbVisID600 
	Technology        : kbVisIDsearch kbSSafeSearch kbAudDeveloper kbVisID100 kbVisID600 kbSSafe600 kbSSafe500
	Version           : WINDOWS:1.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
