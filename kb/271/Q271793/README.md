---
layout: page
title: "Q271793: DFS Version 4.1 Causes &quot;Failed to Create Volume&quot; Error Message"
permalink: /kb/271/Q271793/
---

## Q271793: DFS Version 4.1 Causes &quot;Failed to Create Volume&quot; Error Message

{% raw %}

	Article: Q271793
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a new Distributed File System (DFS) volume on a
	Microsoft Windows NT 4.0 Server with the server utility, DFS version 4.1, you
	may receive the following error message:
	
	  Failed to create volume \\<servername>\<DFS root>\<new DFS
	  volume>\ with network path \\<servername>\<sharename>
	
	CAUSE
	=====
	
	This behavior can occur if you attempt to create the new DFS volume without
	removing the "\" character at the end of the path name, as described in the
	following explanation:
	
	When you create a new DFS volume using DFS Administrator you have the option of
	manually typing the path to the new DFS volume or using the Browse button to
	locate the path in the DFS root directory. If you use the Browse button and
	select a subfolder in the DFS root that already exists, DFS Administrator can
	insert an additional "\" character at the end of the path.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you must remove the additional "\" character that DFS
	Administrator inserted into the path name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
