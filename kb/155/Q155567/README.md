---
layout: page
title: "Q155567: NetWare Login Script (NWSCRIPT) Parses &quot;cx..&quot; Incorrectly"
permalink: /kb/155/Q155567/
---

## Q155567: NetWare Login Script (NWSCRIPT) Parses &quot;cx..&quot; Incorrectly

{% raw %}

	Article: Q155567
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Nwscript.exe parses the NetWare login script. The CX command changes the context
	and can be used as follows: "cx ..". This should move the user's context one
	level up within the NDS hierarchy. Instead, you receive the following error
	message:
	
	  The context you want to change to does not exist.
	
	CAUSE
	=====
	
	Nwscript.exe does not parse the command correctly.
	
	RESOLUTION
	==========
	
	In login scripts, use absolute paths (for example, "cx .somecontainer").
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
