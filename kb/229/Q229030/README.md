---
layout: page
title: "Q229030: FIX: A Workspace with Many Dependencies May Appear to Hang"
permalink: /kb/229/Q229030/
---

## Q229030: FIX: A Workspace with Many Dependencies May Appear to Hang

{% raw %}

	Article: Q229030
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC500bug kbVC600bug kbDevStudio kbGrpDSTools kbNoUpdate
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When working with a workspace that contains many projects and dependencies,
	Developer Studio may appear to hang when the user does any of the following:
	
	- Builds the project in the IDE (F7).
	
	- Debugs the project in the IDE (F5).
	
	- Executes the project in the IDE (CTRL+F5).
	
	- From the IDE menu, clicks Project then Dependencies.
	
	RESOLUTION
	==========
	
	A workaround to this problem depends on the complexity of the workspace
	involved. Following are three suggestions:
	
	- Unload projects that are not needed.
	
	- Reduce the number of dependencies. Try to keep the dependencies one level
	  deep.
	
	- Break the projects into smaller workspaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	If you perform one of the activities listed in the SYMPTOMS section above,
	Developer Studio appears to stop responding. Actually, Developer Studio is busy
	checking the project dependencies. When Developer Studio is finished checking
	dependencies, the desired operations will be carried out. Delays of up to 10
	minutes have been reported but are not common.
	
	Additional query words: work space
	
	======================================================================
	Keywords          : kbide kbVC500bug kbVC600bug kbDevStudio kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
