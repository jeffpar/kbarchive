---
layout: page
title: "Q159107: Access Violation in AddAtom Inside Kernel32.dll"
permalink: /kb/159/Q159107/
---

## Q159107: Access Violation in AddAtom Inside Kernel32.dll

{% raw %}

	Article: Q159107
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application may crash with an access violation similar to the following
	message:
	
	  The instruction at "0x77f042f7" referenced memory at "0x00000009". The memory
	  could not be read.
	
	NOTE: The instruction will be within the InternalAddAtom routine referenced in
	the Drwtsn32.log.
	
	
	CAUSE
	=====
	
	AddAtom() was broken, causing it to fail to initialize some pointers properly in
	some cases. Running the line of code
	
	     AddAtom(MAKEINTATOM(1));
	
	in a C program may reproduce this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
