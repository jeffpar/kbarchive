---
layout: page
title: "Q130803: Windows NT 3.5 Hangs If Command Window Cursors are 80x80 Pixels"
permalink: /kb/130/Q130803/
---

## Q130803: Windows NT 3.5 Hangs If Command Window Cursors are 80x80 Pixels

{% raw %}

	Article: Q130803
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	From a Command Prompt (CMD.EXE), you started an application that uses the
	CreateCursor() API and creates a cursor that is 80 x 80 pixels or larger.
	Windows NT appears to stop responding (hang) and does not react to mouse
	movements or keyboard input, however, you can still access this computer's
	shares from other workstations.
	
	RESOLUTION
	==========
	
	Microsoft has modified the file, WINSRV.DLL to correct the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt crashes freezes
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	

{% endraw %}
