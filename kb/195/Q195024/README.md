---
layout: page
title: "Q195024: INFO: Visual SourceSafe Creates a VSSVer.scc File"
permalink: /kb/195/Q195024/
---

## Q195024: INFO: Visual SourceSafe Creates a VSSVer.scc File

	Article: Q195024
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbSSafe600 kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual SourceSafe operations that copy files from the Visual SourceSafe database
	to another location, such as a project's working folder, shadow folder, or
	deploy location create a file named VSSVer.scc.
	
	MORE INFORMATION
	================
	
	Visual SourceSafe 6.0 uses the VSSVer.scc to speed up the GET process (Fast GET)
	on any database, even one that is not in the new format supported by Visual
	SourceSafe 6.0. There is no way to prevent Visual SourceSafe from creating this
	file when performing an explicit or implicit GET operation. Setting the file's
	Hidden attribute, however, does not affect performance and can be used to
	prevent the file from appearing in Windows Explorer.
	
	REFERENCES
	==========
	
	For additional information about , please see the following article in the
	Microsoft Knowledge Base:
	
	  Q169257 INFO: Actions that Perform an Implicit GET
	
	Visual SourceSafe Help, "Fast GET" topic.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600 kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
