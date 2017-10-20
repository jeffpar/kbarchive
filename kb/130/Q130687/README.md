---
layout: page
title: "Q130687: Primary Group of Macintosh Folder Differs from User's"
permalink: /kb/130/Q130687/
---

## Q130687: Primary Group of Macintosh Folder Differs from User's

{% raw %}

	Article: Q130687
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The primary group of a new folder on a Macintosh volume is the same as the
	container's primary group instead of being the owner's primary group as stated
	in the documentation and the help file.
	
	CAUSE
	=====
	
	When you request that the MacFile service creates a new folder, the MacFile
	service sets the folder's primary group as the user's primary group. However,
	the Macintosh operating system immediately modifies the folder's primary group,
	making it identical to that of the upper-level folder (the container). If you
	don't notice the initial setting, you may believe Services for Macintosh is not
	operating as documented.
	
	RESOLUTION
	==========
	
	To have the new folder's primary group match the user's primary group, the user
	and the container should have the same primary group.
	
	Additional query words: mac Services for Macintosh (SFM) prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
