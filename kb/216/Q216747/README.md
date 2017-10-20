---
layout: page
title: "Q216747: FIX: Incorrect Code Generated With /Og and /G6"
permalink: /kb/216/Q216747/
---

## Q216747: FIX: Incorrect Code Generated With /Og and /G6

{% raw %}

	Article: Q216747
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Incorrect code may be generated with the /Og and /G6 compiler optimizations.
	
	CAUSE
	=====
	
	The compiler incorrectly moves an .inc file, .add file, .sub file, or .lea file
	across an instruction that references memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The following code illustrates one way the compiler can handle moving an
	instruction:
	
	     inc eax
	     mov [eax + 2*ebx + 3]
	
	The compiler needs to update the displacement to swap the instructions. For
	example:
	
	     mov [eax + 2*ebx + (3 + 1)]
	     inc eax
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
