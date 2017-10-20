---
layout: page
title: "Q260361: TCP/IP Protocol Is Missing from Network Tool in Control Panel"
permalink: /kb/260/Q260361/
---

## Q260361: TCP/IP Protocol Is Missing from Network Tool in Control Panel

{% raw %}

	Article: Q260361
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to add the TCP/IP protocol because the TCP/IP protocol is
	not listed in the Select Network Protocol dialog box in the Network tool in
	Control Panel.
	
	CAUSE
	=====
	
	This behavior can occur if the Oemnxptc.inf file is missing from the
	%SystemRoot%\System32 folder, or if the Oemnxptc.inf registry key and values are
	missing under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Ncpa\InfOptions
	
	This issue can occur if you accidentally delete the Oemnxptc.inf file. If you
	delete the file, the registry key is also deleted automatically when you start
	the Network tool in Control Panel.
	
	RESOLUTION
	==========
	
	Manually expand the Oemnxptc.in_ file from your original Windows NT CD-ROM to
	Oemnxptc.inf in the %SystemRoot%\System32 folder. If this does not resolve the
	problem, you may need to add both the Oemnxptc.inf file and the registry key
	manually. If that does not resolve the problem, you must reinstall Windows NT.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
