---
layout: page
title: "Q243852: &quot;STOP 0x00000024&quot; Error Message with Double-Take Software"
permalink: /kb/243/Q243852/
---

## Q243852: &quot;STOP 0x00000024&quot; Error Message with Double-Take Software

{% raw %}

	Article: Q243852
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Double-Take mirroring software by NSI Software, your
	server may experience a bugcheck with the following STOP code:
	
	  STOP 0x00000024 (0x00190201,0xfc5136a4,0xfc5134e0,0x8021ea12)
	  STOP 0x00000050 (0xf8ec0f4d, 0x00000000, 0x00000000, 0x00000000)
	
	Note that the parameters in the STOP code may vary .
	
	CAUSE
	=====
	
	The Double-Take Dblhook.sys file is not symmetric multiprocessor (SMP) aware.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, contact NSI Software to inquire about obtaining an
	updated version of the Double-Take software that corrects this problem.
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable the Double-Take software and all associated
	drivers until you obtain the upgraded software.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: doubletake
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
