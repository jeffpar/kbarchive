---
layout: page
title: "Q134572: FOR Command Behaves Differently From Previous MS-DOS Versions"
permalink: kb/134/Q134572/
---

## Q134572: FOR Command Behaves Differently From Previous MS-DOS Versions

	Article: Q134572
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 95, you notice that batch files that use the FOR
	command with the slash (/) switch behave differently:
	
	For example, the following line
	
	  for %i in (/abcd) do echo %i
	
	prints
	
	  /ABCD
	
	whereas in previous versions of MS-DOS it printed
	
	  A
	  BCD
	
	CAUSE
	=====
	
	The FOR command with the slash (/) switch in Command.com in Windows 95 behaves
	differently than it did in previous versions of Command.com.
	
	
	RESOLUTION
	==========
	
	Rewrite batch files that use the FOR command with the slash (/) switch.
	
	Additional query words: program
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
