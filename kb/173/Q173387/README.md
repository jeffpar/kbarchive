---
layout: page
title: "Q173387: PRB: Restoring an Archive of an Entire Database"
permalink: /kb/173/Q173387/
---

## Q173387: PRB: Restoring an Archive of an Entire Database

{% raw %}

	Article: Q173387
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): _IK kbSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you have archived an entire database with the SSARC utility and you try to
	restore it with SSRESTOR, you receive the following error:
	
	  The path $/ is already in use. Cannot restore path from archive file.
	
	CAUSE
	=====
	
	The syntax you used was:
	
	  SSRESTOR [-s path to srcsafe.ini] <archive file> $/ 
	
	SSRESTOR attempts to create a new project in the target database, with the name
	of the project given in the SSRESTOR command. Because the root project ($/) will
	always exist in the target database, the restored root project cannot be
	created.
	
	RESOLUTION
	==========
	
	To resolve this error, either:
	
	1. Repeat the SSRESTOR command multiple times, once for each top-level project.
	
	-or-
	
	2. In the original project, share the entire project tree to a new project, and
	  then archive and restore this project.
	
	STATUS
	======
	
	This behavior is by design. According to the User's Guide (Appendix B page 219
	for Visual SourceSafe 5.0), "if restoring attempts to create a duplicate file or
	project name, the restore fails."
	
	MORE INFORMATION
	================
	
	If, for example you have three top-level projects:
	
	  $/first
	  $/second
	  $/third
	
	Resolution 1:
	
	Run SSRESTOR three times, each time specifying the name of one of the projects as
	the last argument (for example, SSRESTOR archive.ssa $/first). There are two
	disadvantages to this method.
	
	If there is a large number of top-level projects, this process will be tedious,
	and there is no easy way to automate it. Any links (shared or branched files)
	between top-level projects and will be lost. For example, if:
	
	  $/first/sub_one/myfile.txt
	
	is shared to:
	
	  $/third/sub_one/myfile.txt
	
	then the files will not be shared in the restored projects.
	
	Links that are within the same project tree are maintained, such as:
	
	  $/first/sub_one/myfile.txt
	  $/first/sub_five/myfile.txt
	
	Resolution 2:
	
	There are three steps in this resolution:
	
	1. In the original database, create a new top-level project, (for example,
	  $/root), then recursively share all top-level projects into $/root.
	
	2. Archive $/root.
	
	3. Restore $/root into the target database.
	
	In this case all links at all levels are restored, the disadvantages of this
	method are:
	
	- With a large number of top-level projects, sharing them into $/root may be
	  time consuming.
	
	- After restoring, you may want to move all the top-level projects back to
	  being subprojects of $/, rather than subprojects of $/root. Again, this may
	  be time consuming with a large number of projects.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
