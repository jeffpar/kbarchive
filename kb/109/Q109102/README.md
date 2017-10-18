---
layout: page
title: "Q109102: LM NETWKSTA.EXE Doesn't Load in UMA for MS-DOS 6.2 Client"
permalink: kb/109/Q109102/
---

## Q109102: LM NETWKSTA.EXE Doesn't Load in UMA for MS-DOS 6.2 Client

	Article: Q109102
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	
	The Microsoft LAN Manager client workstation redirector (NETWKSTA.EXE) can be
	loaded in the upper memory area under MS-DOS 5.0 and 6.0, but not if you upgrade
	to MS-DOS 6.2.
	
	This problem is verified on LAN Manager versions 2.20, 2.20a and 2.20b.
	
	CAUSE
	=====
	
	The problem was traced to the LAN Manager redirector source code, which was not
	allowing the redirector to be loaded high for MS-DOS 6.2.
	
	During an optimization test under MS-DOS 6.2 that showed 129K of upper memory
	available and one contiguous upper memory block as large as 94K, a NETWKSTA.EXE
	that loaded properly under MS-DOS 5.0 and 6.0 still did not load completely in
	upper memory.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem and hotfix CSD00.073 is provided to
	fix it. Contact Microsoft Product Support Services to obtain the hotfix.
	
	
	Additional query words: 2.0 2.00 2.20a 2.2a 2.20b 2.2b MS-DOS msdos 6.2 dos-client dosclient EMM386
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
