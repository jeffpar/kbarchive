---
layout: page
title: "Q166260: PRB: No Workspace or Project Files Found in Selected SCC Project"
permalink: /kb/166/Q166260/
---

## Q166260: PRB: No Workspace or Project Files Found in Selected SCC Project

{% raw %}

	Article: Q166260
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500 kbSSafe600 kbVC500
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to open a project in Developer Studio from Source Control you
	may receive the following error:
	
	  No workspace or project files were found in the selected source control
	  project.
	
	CAUSE
	=====
	
	The project is a project from an earlier version of Visual C++. Developer Studio
	cannot simultaneously open a project from source control and convert it.
	
	RESOLUTION
	==========
	
	Use the Visual SourceSafe Explorer to get the project. Open the project in
	Developer Studio and convert it. Either add the project back to the same
	location in the Visual SourceSafe database with Developer Studio, or add the
	.dsp and .dsw files to the Visual SourceSafe project with the Visual SourceSafe
	Explorer.
	
	Now you can use the source control integration in Developer Studio as expected.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe500 kbSSafe600 kbVC500 
	Technology        : kbVCsearch kbSSafeSearch kbAudDeveloper kbVC500 kbVC32bitSearch kbSSafe600 kbSSafe500 kbVC500Search
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
