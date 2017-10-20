---
layout: page
title: "Q171450: Possible RPC Errors on Cluster Startup"
permalink: /kb/171/Q171450/
---

## Q171450: Possible RPC Errors on Cluster Startup

{% raw %}

	Article: Q171450
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to start the cluster service for Microsoft Cluster Server, you
	may observe one or more of the following errors:
	
	  1715 The server is not listening.
	
	-or-
	
	  1753 There are no more endpoints available from the endpoint mapper.
	
	-or-
	
	  1740 The endpoint is a duplicate.
	
	CAUSE
	=====
	
	These error messages may occur as a result of network or network adapter related
	problems. If the cluster service fails, it will attempt to restart. However, if
	the network adapter or network fails and none is available to the cluster
	service, the cluster service may not restart.
	
	RESOLUTION
	==========
	
	Check network connections and network devices for proper functionality. You may
	need to reset or replace related hardware or restart the computer that
	experiences the errors.
	
	NOTE: If you are having problems opening Cluster Administrator and are receiving
	RPC errors, try connecting with ".", but do not use the quotation marks.
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
