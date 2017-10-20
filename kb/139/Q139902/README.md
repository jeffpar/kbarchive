---
layout: page
title: "Q139902: Doc Err: Invalid IP Address in NETWORKS File"
permalink: /kb/139/Q139902/
---

## Q139902: Doc Err: Invalid IP Address in NETWORKS File

{% raw %}

	Article: Q139902
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	Page 83 of Update Information for Version 3.51 states the following:
	
	  The following additional entry is required in the NETWORKS file:
	
	  campus 284.122.107.0
	
	  The following entry, as shown in the examples in the NETWORKS file, is
	  incorrect:
	
	  campus 284.122.107
	
	This is incorrect. The first octet of the IP address (284) is an invalid
	value. The first octet value can be 184.
	
	NOTE: The NETWORKS file is in the %SystemRoot%\SYSTEM32\DRIVERS\ETC
	directory.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
