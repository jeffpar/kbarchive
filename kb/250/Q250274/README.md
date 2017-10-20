---
layout: page
title: "Q250274: MS Cluster Server File Share Stops with Access Denied Error"
permalink: /kb/250/Q250274/
---

## Q250274: MS Cluster Server File Share Stops with Access Denied Error

{% raw %}

	Article: Q250274
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Cluster Server 1.0, a cluster file shared resource
	may not come online and you may receive an error message stating that access is
	denied and citing Error 1068, category 2055. The cluster file shared resource
	may stop responding and another error message may appear, citing Error 5, Access
	Denied.
	
	CAUSE
	=====
	
	This behavior can occur when the cluster service account does not have the
	correct permissions to the folder to bring the file share online.
	
	RESOLUTION
	==========
	
	To resolve this behavior, assign the cluster service account the correct folder
	permissions to bring the file share online.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
