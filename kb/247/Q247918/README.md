---
layout: page
title: "Q247918: Cannot Resolve NetBIOS Name of Remote Domain Controller"
permalink: /kb/247/Q247918/
---

## Q247918: Cannot Resolve NetBIOS Name of Remote Domain Controller

{% raw %}

	Article: Q247918
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a specific server in a Microsoft Windows NT
	Server 4.0-based resource domain, the connection may not succeed and you may
	receive the following error message:
	
	  Login server cannot be found
	
	There are no static entries in your Lmhosts file. When you view the local network
	basic input/output system (NetBIOS) name cache on the computer, a 1C (domain
	controller) entry appears for the resource domain.
	
	CAUSE
	=====
	
	This issue can occur when the local NetBIOS name cache is corrupted.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the Nbtstat -R command to purge the local name
	cache. The computer uses Windows Internet Name Service (WINS) to obtain the 1C
	name of the domain controller.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
