---
layout: page
title: "Q135028: PC DirSync: CTRL+C Displayed But Ignored in IMPORT and REQMAIN"
permalink: kb/135/Q135028/
---

## Q135028: PC DirSync: CTRL+C Displayed But Ignored in IMPORT and REQMAIN

	Article: Q135028
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run IMPORT.EXE or REQMAIN.EXE, and you press the CTRL+C keys while it
	is processing, the utility continues to process even though the CTRL+C key
	combination displays on the screen.
	
	NOTE: Data displayed by IMPORT and REQMAIN scrolls up one line for each CTRL+C
	you press.
	
	CAUSE
	=====
	
	MS-DOS traps the CTRL+C key combination while the IMPORT and REQMAIN utilities
	continue to call MS-DOS functions. IMPORT and REQMAIN will continue to run until
	they complete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0a, 3.2, 3.2a,
	and 3.5 of Microsoft Mail for PC Networks. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: 3.00 3.00a 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN300a kbMailPCN350
	Version           : WINDOWS:3.0,3.0a,3.2,3.2a,3.5
	
	=============================================================================
	
