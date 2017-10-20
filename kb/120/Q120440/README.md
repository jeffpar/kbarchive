---
layout: page
title: "Q120440: Cannot Insert Paintbrush OLE Object into SQLWindows on RISC"
permalink: /kb/120/Q120440/
---

## Q120440: Cannot Insert Paintbrush OLE Object into SQLWindows on RISC

{% raw %}

	Article: Q120440
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot insert a Paintbrush OLE object into SQLWindows.
	
	CAUSE
	=====
	
	The KRNL286.EXE that is run on non-80x86 architectures (primarily RISC) cannot
	handle OLE objects that require more than 1 MB of memory.
	
	RESOLUTION
	==========
	
	Reduce the size of the Paintbrush object before inserting it, until the memory
	requirement for it is less than 1 MB. KRNL286.EXE can then handle it.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
