---
layout: page
title: "Q123476: PRB:SoureSafe &quot;Error locking file&quot; on Windows NT or Multi-User"
permalink: /kb/123/Q123476/
---

## Q123476: PRB:SoureSafe &quot;Error locking file&quot; on Windows NT or Multi-User

{% raw %}

	Article: Q123476
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe300 kbSSafe200
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error can occur when running SourceSafe on Windows NT or in a
	multi-user environment:
	
	  Error locking file
	
	RESOLUTION
	==========
	
	Correct this behavior by changing a setting in the SRCSAFE.INI. In version 3.0
	or later, edit the SRCSAFE.INI, which is located in the SS directory, to add:
	
	  lock_mode = lockfile
	
	In version 2.x, edit the SYSTEM.INI file in the SS directory to add:
	
	  lock_mode = pedantic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe300 kbSSafe200 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
