---
layout: page
title: "Q195375: FIX: ClassView Can Be Very Slow When Using SourceSafe"
permalink: /kb/195/Q195375/
---

## Q195375: FIX: ClassView Can Be Very Slow When Using SourceSafe

{% raw %}

	Article: Q195375
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbide kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Scrolling in ClassView is noticeably slow when the project is under source
	control.
	
	RESOLUTION
	==========
	
	The following are three possible resolutions:
	
	- Disable source control integration for the entire machine. To do this:
	
	  1. Close Developer Studio.
	
	  2. Using a registry editor such as RegEdit, rename the registry key:
	
	HKEY_LOCAL_MACHINE\Software\SourceCodeControlProvider
	
	- Disable source control integration for Developer Studio only. To do this:
	  1. Close Developer Studio.
	
	  2. Using a registry editor such as RegEdit, select the registry key:
	
	     HKEY_CURRENT_USER\Software\Microsoft\DevStudio\6.0\SourceControl
	
	  3. Modify the "Disabled" value to 1 (from 0).
	
	- Don't use ClassView.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	======================================================================
	Keywords          : kbservicepack kbide kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
