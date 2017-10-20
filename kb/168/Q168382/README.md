---
layout: page
title: "Q168382: PRB: Using the Stop Build Command May Corrupt Output Files"
permalink: /kb/168/Q168382/
---

## Q168382: PRB: Using the Stop Build Command May Corrupt Output Files

{% raw %}

	Article: Q168382
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.52; winnt:2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbide kbVC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.52, 2.0, 2.1, 2.2, 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 4.2b 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 4.2b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NOTE: This information has not been confirmed by Microsoft. The information in
	this article is provided as-is and is subject to change without notice.
	
	In some cases, when you use the Stop Build command while you are building a
	project, files that are created by the build process are corrupted. Some of the
	problems reported to Microsoft, but unconfirmed, include zero-sized output files
	(PDB, BSC, OBJ, etc.) and possible loss of data in project source files.
	
	RESOLUTION
	==========
	
	This problem is difficult to reproduce, and occurs very rarely. However, it is
	always a good idea to maintain a backup of your project to be safe.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCodeGen kbide kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC400a kbVC420b kbVC500Search
	Version           : WINDOWS:1.52; winnt:2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
