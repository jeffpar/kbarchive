---
layout: page
title: "Q76955: BUG: V86MMGR Virtual Device Boundary Condition Fails"
permalink: /kb/076/Q76955/
---

## Q76955: BUG: V86MMGR Virtual Device Boundary Condition Fails

	Article: Q76955
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The V86MMGR_Map_Pages service of the V86MMGR virtual device does not properly
	handle the boundary condition of mapping no pages. This request causes Windows
	to crash.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.00 buglist3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	
	=============================================================================
	
