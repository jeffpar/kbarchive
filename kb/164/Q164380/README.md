---
layout: page
title: "Q164380: FIX: Custom Build Rules are Lost with Multiple Selections"
permalink: kb/164/Q164380/
---

## Q164380: FIX: Custom Build Rules are Lost with Multiple Selections

	Article: Q164380
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbusage kbide kbVC kbVC500fix kbGrpDSTools
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply custom build rules separately to multiple project configurations
	and you select more than one of those configurations in the Project Settings
	dialog box, the custom build rules disappear if the rules are not exactly same.
	If you click OK to close the Project Settings dialog box, you lose the custom
	build.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0, and
	Visual J++ version 1.1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Developer Studio Build Settings, create custom build rules for the project
	  separately for debug and release.
	
	2. In the project settings dialog box, select both projects (release and debug).
	
	3. Click OK to exit the Project Settings dialog box.
	
	Go back to the Project Settings dialog box and verify that the build rules were
	not saved (the custom build rules will not be exactly same for both debug and
	release).
	
	In summary, if custom build rules have already been applied separately to files
	or configurations within the project settings dialog box and the custom build
	settings are viewed with these items selected, the custom build settings appear
	blank if they are not exactly the same as the selected items. If you click OK at
	this time, or you choose a different settings page and click OK without changing
	the selection of items, the custom build rules for the selected items are lost.
	If you move to another settings page, change the selection of items, and click
	OK, the custom build rules for each item that was selected on both the custom
	build settings page and the current page are lost.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbide kbVC kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
