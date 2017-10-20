---
layout: page
title: "Q155988: Connecting to Remote WINS Shows Dimmed Menu Options"
permalink: /kb/155/Q155988/
---

## Q155988: Connecting to Remote WINS Shows Dimmed Menu Options

{% raw %}

	Article: Q155988
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you connect to a remote WINS Server using WINS Administrator, menu options
	within Server will be unavailable but all other options are available.
	
	MORE INFORMATION
	================
	
	Permissions on the Server menu options, Configuration and Replication Partners
	keys, are controlled through the permissions on the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Wins\Parameters
	
	If you are doing Remote Administration and have Administrative control of the
	local machine, but only limited permissions to the registry key, the menu
	options will appear dimmed.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
