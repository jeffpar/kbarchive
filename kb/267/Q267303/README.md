---
layout: page
title: "Q267303: BUG: Creating Project Under Template Folder Excludes Files"
permalink: /kb/267/Q267303/
---

## Q267303: BUG: Creating Project Under Template Folder Excludes Files

{% raw %}

	Article: Q267303
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbVC600 kbVC600bug kbDSupport kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create an AppWizard project in a folder that contains the name "template"
	as a subfolder, all files in the project folder are excluded from the build.
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Do not use "template" as a folder name.
	
	- Manually include all files back into the project.
	
	You can also include the excluded files in the build by clicking Settings on the
	Project menu. In the Project Settings dialog box, select all .cpp/.c/.odl/.idl
	files in the tree view on the left, and then clear the Exclude file from build
	check box in the General tab.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Visual C++ environment, click New on the File menu, and then click the
	  Projects tab.
	
	2. Select a project type; for example, MFC AppWizard (EXE).
	
	3. Type a project name. Make sure that location points to a folder that contains
	  "template" as a subfolder.
	
	4. Accept the defaults for the project.
	
	You can verify this by clicking Settings on the Project menu. In the Project
	Settings dialog box, select the .cpp, .c, .idl, or .odl file, and then view the
	Exclude file from build check box in the General tab. It should be checked.
	
	Additional query words: directory subdirectory
	
	======================================================================
	Keywords          : kbVC600 kbVC600bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
