---
layout: page
title: "Q162926: STOP: 0x0x0000000A After Call to GlobalAddAtom()"
permalink: /kb/162/Q162926/
---

## Q162926: STOP: 0x0x0000000A After Call to GlobalAddAtom()

{% raw %}

	Article: Q162926
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you write applications for Windows NT version 4.0 that make Win32 calls to
	GlobalAddAtom(), Windows NT may trap with a STOP: 0x0000000A error message after
	a call to GlobalAddAtom(), when adding a string longer than 256 bytes. The error
	may not occur until a call to ExitProcess() is made.
	
	CAUSE
	=====
	
	An uninitialized variable may cause this Stop message.
	
	
	RESOLUTION
	==========
	
	Apply the hotfix to the Windows NT 4.0 Workstation or Server that the Stop
	message occurs on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 0xa ntoskrnl
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
