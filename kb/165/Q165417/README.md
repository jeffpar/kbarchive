---
layout: page
title: "Q165417: DOC: Toolbar_Size Not Implemented in VSS 5"
permalink: /kb/165/Q165417/
---

## Q165417: DOC: Toolbar_Size Not Implemented in VSS 5

{% raw %}

	Article: Q165417
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbdocerr kbSSafe500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under the topic Toolbar_Size, the online documentation for Visual SourceSafe 5.0
	for Windows incorrectly states that users can set the size of the toolbar
	command buttons in the Visual SourceSafe Explorer by manipulating the
	Toolbar_Size initialization variable in a user[ASCII 146]s Ss.ini.
	
	MORE INFORMATION
	================
	
	Each user has an Ss.ini. For example, if you edit the Ss.ini in the
	<VSS_SERV>/users/guest directory (where VSS_SERV is the directory path of
	the Visual SourceSafe server installation) you will see various settings used by
	Visual SourceSafe to customize that user[ASCII 146]s Visual SourceSafe Explorer.
	In version 4.0x, the adjustment of the Toolbar_Size initialization variable (for
	example, Toolbar_Size = 24) changes the size of the command buttons to large or
	small. This functionality was removed in version 5.0, but the documentation was
	not updated to reflect this. Changing the Toolbar_Size initialization variable
	in Visual SourceSafe 5.0 has no effect.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : WINDOWS:5.0
	
	=============================================================================
	

{% endraw %}
