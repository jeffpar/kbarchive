---
layout: page
title: "Q141438: PRB: The Profiler Isn't Enabled"
permalink: /kb/141/Q141438/
---

## Q141438: PRB: The Profiler Isn't Enabled

{% raw %}

	Article: Q141438
	Product(s): Microsoft C Compiler
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbsetup kbGenInfo kbVC kbprb kbGrpDSTools kbArtTypeINF
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SYMPTOMS
	========
	
	The Profile option on the Tools menu in the Developer Studio is disabled.
	
	CAUSE
	=====
	
	The profiler is not installed. By default, the setup for Visual C++ 4.0 does not
	install the profiler.
	
	RESOLUTION
	==========
	
	Perform a custom installation, and be sure to select Profiler under the Tools
	category.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Profile option on the Tools menu may also be disabled if profiling has not
	been enabled for the project. Profiling can be enabled under build settings.
	This option is found only in the General category on the Link tab. The
	command-line equivalent is:
	
	PROFILE
	
	REFERENCES
	==========
	
	Additional information can be found in the Help file by performing an index
	search using "Enable Profiling Option."
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbsetup kbGenInfo kbVC kbprb kbGrpDSTools kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
