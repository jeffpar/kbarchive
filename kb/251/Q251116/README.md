---
layout: page
title: "Q251116: BUG: Source Files Not Compiled When Header Files Are Modified"
permalink: /kb/251/Q251116/
---

## Q251116: BUG: Source Files Not Compiled When Header Files Are Modified

{% raw %}

	Article: Q251116
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbide kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When modifying a header file and then compiling the project, the source files
	that include the modified header are not recompiled.
	
	CAUSE
	=====
	
	This can happen if the Intermediate files edit box, which is on the General tab
	accessible from Settings on the Project menu, is left blank.
	
	RESOLUTION
	==========
	
	If you want the intermediate files to be placed in the project directory, place
	a
	
	  .
	
	-or-
	
	  .\ 
	
	in the Intermediate files edit box on the General tab of Settings under the
	Project menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Unless you use an absolute path for intermediate and output files, directories
	entered are relative to the project directory. The project directory is defined
	as the directory that contains the project's .dsp file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default MFC AppWizard project.
	
	2. Select Settings from the Project menu.
	
	3. Select the General tab.
	
	4. Clear the Intermediate files edit box and click OK.
	
	5. Build the project.
	
	6. Open a header file contained in the project and modify it.
	
	7. Build the project again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbide kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
