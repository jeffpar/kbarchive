---
layout: page
title: "Q131445: FIX: &quot;Timeout Locking File: UM&quot; Error Occurs at Startup"
permalink: /kb/131/Q131445/
---

## Q131445: FIX: &quot;Timeout Locking File: UM&quot; Error Occurs at Startup

{% raw %}

	Article: Q131445
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:3.04; winnt:3.04
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe310fix kbSSafe304bug
	Last Modified: 16-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, version 3.04 
	- Microsoft SourceSafe for Windows NT, version 3.04 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "Timeout locking file: UM" occurs when starting Microsoft SourceSafe.
	
	CAUSE
	=====
	
	The Microsoft SourceSafe version 3.04 for Windows or Windows NT installation did
	not create a DATA\LOCKS subdirectory.
	
	
	This error occurs only if the SRCSAFE.INI setting Lock_Mode is set to Lockfile.
	For additional information on the Lock_Mode setting, please see the following
	article in the Microsoft Knowledge Base:
	
	  124525 How SourceSafe Locks Files in the DATA Directory
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Create a directory titled "LOCKS" in the DATA subdirectory. For example: MD
	  F:\SS\DATA\LOCKS
	
	2. Restart SourceSafe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft SourceSafe
	version 3.1 for Windows and Windows NT.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbSSafe310fix kbSSafe304bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304NT
	Version           : WINDOWS:3.04; winnt:3.04
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
