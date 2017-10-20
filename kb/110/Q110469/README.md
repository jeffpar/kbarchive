---
layout: page
title: "Q110469: Golf Won't Run After Running MS-DOS 6 MemMaker"
permalink: /kb/110/Q110469/
---

## Q110469: Golf Won't Run After Running MS-DOS 6 MemMaker

{% raw %}

	Article: Q110469
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JAN-2000
	
	kbusage kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the MS-DOS 6.0 MemMaker, Microsoft Windows may no longer run in
	386 enhanced mode on a 2 MB machine. In many cases, Golf will not run either.
	You may receive the following error message:
	
	  Microsoft Golf requires a minimum of 1.43 MB available memory.
	
	To correct this problem, you must undo the changes that MemMaker has made.
	
	RESOLUTION
	==========
	
	To undo the changes MemMaker made to the system, follow these steps:
	
	1. Exit Windows and return to the MS-DOS command prompt.
	
	2. Type:
	
	  memmaker /undo
	
	This should return your system to the previous memory settings.
	
	Additional query words: 1.00 memmaker.exe mem maker ms dos
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
