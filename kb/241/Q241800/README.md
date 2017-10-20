---
layout: page
title: "Q241800: &quot;STOP&quot; Error Message When Using Solstice 3.2"
permalink: /kb/241/Q241800/
---

## Q241800: &quot;STOP&quot; Error Message When Using Solstice 3.2

{% raw %}

	Article: Q241800
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a "STOP" error message on a blue screen when you connect to a
	UNIX server volume with the Sun Solstice client version 3.2. The specific STOP
	code and parameters may vary.
	
	CAUSE
	=====
	
	This behavior occurs because the Solstice 3.2 Sunwnfs.sys driver passes invalid
	parameters to the redirector. The Sunwcfs.sys driver is dated May 10, 13:37:21,
	1998.
	
	RESOLUTION
	==========
	
	Please contact Sun to inquire about a possible update to the Sun Solstice client
	installable file system driver.
	
	WORKAROUND
	==========
	
	Uninstalling the Solstice software resolves the issue.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 0x0000001e 0xC0000005 rdr
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
