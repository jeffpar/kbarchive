---
layout: page
title: "Q171848: FIX: Source Control Info Not Preserved During Project Conversion"
permalink: /kb/171/Q171848/
---

## Q171848: FIX: Source Control Info Not Preserved During Project Conversion

{% raw %}

	Article: Q171848
	Product(s): Microsoft C Compiler
	Version(s): 5.0 5.0sp1
	Operating System(s): 
	Keyword(s): kbVC500bug kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 5.0sp1 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 5.0sp1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After converting a Visual C++ 4.x project that was under source control, the
	source control information is absent in Visual C++ 5.0.
	
	CAUSE
	=====
	
	During project conversion, Visual C++ 5.0 uses the mssccprj.scc file to gather
	information about source control instead of using the Visual C++ 4.x project
	.MDP file. The mssccprj.scc file is created by Microsoft Visual SourceSafe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	  Q172610 INFO: Visual Studio 97 Service Pack 2 Readme
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC500bug kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500SP1 kbVC500Search
	Version           : 5.0 5.0sp1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
