---
layout: page
title: "Q174874: FIX: Branched Files Restored to New Database Cause Corruption"
permalink: /kb/174/Q174874/
---

## Q174874: FIX: Branched Files Restored to New Database Cause Corruption

{% raw %}

	Article: Q174874
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbVS97sp2fix
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using SSARC/SSRESTOR Utilities to archive and restore files to a new database
	can cause corruption to occur. The problem happens only when restoring files
	that were previously branched into a different database. Analyze will report no
	errors immediately after restoring the files to the new database. However, any
	action adding a log record (such as labeling, sharing, branching, checking in,
	etc.) to a problem file will cause corruption. When attempting to perform an
	action on an affected file, you may see "file may be corrupt" errors followed by
	an "error reading file" message.
	
	Analyze can be used to fix the files after the corruption occurs, but the problem
	can't be detected or repaired before an action is performed.
	
	RESOLUTION
	==========
	
	You should use build 2221 of the Ssrestor.exe file, available in Visual Studio
	Service Pack 3. If possible, using build 2222 of the Ssarc.exe file is also
	recommended.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbVS97sp2fix 
	Technology        : kbVSsearch kbSSafeSearch kbAudDeveloper kbSSafe500 kbVS97 kbVS97Search
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
