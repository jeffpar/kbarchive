---
layout: page
title: "Q93570: PC DirSync: CTRL+C Displayed But Not Used in SRVMAIN.EXE"
permalink: /kb/093/Q93570/
---

## Q93570: PC DirSync: CTRL+C Displayed But Not Used in SRVMAIN.EXE

	Article: Q93570
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Mail for PC Networks, version 3.0, 3.0a or 3.2, when you run
	SRVMAIN.EXE and press CTRL+C while it is processing, SRVMAIN continues to
	process even though the CTRL+C keystrokes display on the screen. Data displayed
	by SRVMAIN scrolls up one line for each CTRL+C.
	
	CAUSE
	=====
	
	MS-DOS traps the CTRL+C keystroke sequence while SRVMAIN continues to call
	MS-DOS functions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0a, 3.2, and 3.5
	of Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00a 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN350
	Version           : WINDOWS:3.0,3.0a,3.2,3.5
	
	=============================================================================
	
