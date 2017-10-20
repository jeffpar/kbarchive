---
layout: page
title: "Q248094: BUG: Fatal error RC1022 or Error RC2104"
permalink: /kb/248/Q248094/
---

## Q248094: BUG: Fatal error RC1022 or Error RC2104

{% raw %}

	Article: Q248094
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0,97; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC500bug kbVC600bug kbVS97bug kbVS600bug _IK kbGrpDSTools
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a resource script that includes Chinese and Japanese resources in
	the compile-time directives, the following errors may occur:
	
	  <path>\RCXXXXXX(YYYY) : fatal error RC1022: expected '#endif'
	
	  -or-
	
	  <path>\<file name>.rc (YYYY): error RC2104 : undefined keyword or
	  key name
	
	Where RCXXXXXX is a temporary file created by the resource compiler and YYYY is
	the line number.
	
	CAUSE
	=====
	
	The resource compiler, RC.exe, incorrectly preprocesses the resource script.
	
	RESOLUTION
	==========
	
	To resolve this problem, wrap the inclusion of the Japanese and Chinese scripts
	with the appropriate language statement.
	
	If the resource script includes Chinese (Taiwan) resources:
	
	  #include <chinese taiwan script>.rc
	
	wrap the inclusion as follows:
	
	  #if !defined(AFX_RESOURCE_DLL) || defined(AFX_TARG_CHT)
	  #ifdef _WIN32
	  LANGUAGE 4, 1
	  #pragma code_page(950)
	  #endif //_WIN32
	  #include <chinese taiwan script>.rc
	  #endif
	
	If the resource script contains Chinese (PRC) resources:
	
	  #include <chinese prc script>.rc
	
	wrap the inclusion as follows:
	
	  #if !defined(AFX_RESOURCE_DLL) || defined(AFX_TARG_CHS)
	  #ifdef _WIN32
	  LANGUAGE 4, 2
	  #pragma code_page(936)
	  #endif //_WIN32
	  #include <chinese prc script>.rc
	  #endif
	
	If the resource script includes Japanese resources:
	
	  #include <japanese script>.rc
	
	wrap the inclusion as follows:
	
	  #if !defined(AFX_RESOURCE_DLL) || defined(AFX_TARG_JPN)
	  #ifdef _WIN32
	  LANGUAGE 17, 1
	  #pragma code_page(932)
	  #endif //_WIN32
	  #include <japanese script>.rc
	  #endif
	
	If the resource script includes Japanese and Chinese (PRC or Traditional):
	
	  #include <japanese script>
	  #include <chinese script>
	
	wrap both inclusions with the appropriate language statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps reproduce the RC1024 error:
	
	1. Using the MFC AppWizard (exe), create a new project.
	
	2. In the MFC AppWizard step 1, select Single document and select Japanese as
	  the language for the resources.
	
	3. Click Finish.
	
	4. Using the MFC AppWizard (exe), create a new project and add it to the
	  workspace that you've just created.
	
	5. In the MFC AppWizard, in step 1, select Single document and select Chinese
	  (Taiwan) as the language for the resources.
	
	6. Click Finish.
	
	7. Set the Japanese project as the active project by using the Set active
	  project on the Project menu.
	
	8. Select Resource Includes from the View menu.
	
	9. Scroll to the end of the Compile-time Directives list box and include the
	  Chinese resource script.
	
	  #include <chinese script>.rc
	
	10. Build the Japanese project.
	
	The following steps reproduce the RC1022 error:
	
	1. Select Resource Includes from the View menu.
	
	2. Remove the inclusion of the Chinese resource script.
	
	3. Set the Chinese project as the active project by using Set active project on
	  the Project menu.
	
	4. Select Resource Includes from the View menu.
	
	5. Scroll to the end of the Compile-time Directives list box and include the
	  Japanese resource script.
	
	  #include <japanese script>.rc
	
	6. Build the Chinese project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVC500bug kbVC600bug kbVS97bug kbVS600bug _IK kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:6.0,97; winnt:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
