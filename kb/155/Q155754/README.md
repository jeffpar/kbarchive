---
layout: page
title: "Q155754: PRB: File Could Not Be Mapped to the SourceSafe Project"
permalink: /kb/155/Q155754/
---

## Q155754: PRB: File Could Not Be Mapped to the SourceSafe Project

{% raw %}

	Article: Q155754
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe400 kbSSafe500 kbSSafe600 kbVC400 kbVC410 kbVC420
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual C++, when attempting to add a file that does not reside in the
	directory tree rooted at the directory containing the Visual C++ makefile to
	source code control, you may receive the following error:
	
	  File <filename> could not be mapped to the SourceSafe project
	  <SourceSafe project name>
	
	While this article refers to Visual C++, the same error occurs in the same
	circumstances in other integrated applications such as Visual Basic, FoxPro and
	Access.
	
	CAUSE
	=====
	
	SourceSafe could not find a corresponding file on your SourceSafe server. Often,
	SourceSafe uses the directory structure on your local hard drive to provide
	clues as to which SourceSafe project the file resides in. In this case, the
	mapping between your directory structure on your local hard drive and the
	project structure on your SourceSafe server could not be made.
	
	RESOLUTION
	==========
	
	If you have not done so, you will need to add the file (that you are attempting
	to add to source-code control in Visual C++) to a different SourceSafe project
	from the SourceSafe project containing the Visual C++ makefile. Depending on how
	you set up the SourceSafe project, you may or may not be able to use the Visual
	C++ integrated source-code control.
	
	For best results, mirror your local directory structure on your SourceSafe
	server. For example, if your file is in C:\common\resources, then add the file
	to a SourceSafe project $/common/resources. All of this must be done using
	either the SourceSafe Explorer or SS.EXE from the Command prompt.
	
	For information on sharing files between projects, please see article ID Q155678
	- How to Share Files Under Source-Code Control in Visual C++.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbSSafe400 kbSSafe500 kbSSafe600 kbVC400 kbVC410 kbVC420 
	Technology        : kbVCsearch kbVC400 kbSSafeSearch kbAudDeveloper kbVC410 kbVC420 kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
