---
layout: page
title: "Q101635: Explorer Cannot Enumerate Path Longer than 260 Characters"
permalink: /kb/101/Q101635/
---

## Q101635: Explorer Cannot Enumerate Path Longer than 260 Characters

{% raw %}

	Article: Q101635
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Any attempts to enumerate paths longer than 260 characters fails with File
	Manager, Explorer, and traversing the directory tree in a MS-DOS window in
	Windows NT. Other operations, such as setting Windows NT or Macintosh
	permissions in Windows NT, fail as well. This behavior can cause problems
	when you run Windows NT Services for Macintosh (SFM) because Macintosh
	paths often exceed 260 characters.
	
	To work around this limitation, view the directory or set the required
	permissions on a Macintosh.
	
	NOTE: Because of this limitation, you cannot backup these directories
	using Microsoft Windows NT Backup.
	
	Additional query words: prodnt 3.10 mac
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
