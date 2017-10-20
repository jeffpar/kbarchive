---
layout: page
title: "Q168387: FIX: Exported Makefile May Be Useless if Custom Build Uses &quot;CD&quot;"
permalink: /kb/168/Q168387/
---

## Q168387: FIX: Exported Makefile May Be Useless if Custom Build Uses &quot;CD&quot;

{% raw %}

	Article: Q168387
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbide kbVC kbVC500bug kbVC600fix kbGrpDSToolskbbuglist
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a custom build step uses the command "CD," the exported makefile does not
	work.
	
	CAUSE
	=====
	
	Makefiles are exported assuming that file paths are relative to the directory
	with the project file. If a custom build step changes the current directory, the
	relative file names will not be valid. Developer Studio does not automatically
	insert a "CD" command to change back to the directory containing the project
	file after a custom build rule.
	
	RESOLUTION
	==========
	
	If you need to change the current directory in a custom build step and use an
	exported makefile, make sure that you change the current directory back to the
	project directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	Additional query words: nmake
	
	======================================================================
	Keywords          : kbtool kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
