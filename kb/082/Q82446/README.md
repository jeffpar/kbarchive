---
layout: page
title: "Q82446: SMARTDRV.EXE 4.0 Conflicts with PLUSDRV.SYS"
permalink: /kb/082/Q82446/
---

## Q82446: SMARTDRV.EXE 4.0 Conflicts with PLUSDRV.SYS

{% raw %}

	Article: Q82446
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PLUSDRV.SYS driver from the Plus Development Passport Hard Drive causes
	Microsoft Windows version 3.1 to stop responding (hang) when SMARTDRV.EXE
	version 4.0 with double buffering is activated in the CONFIG.SYS file. For
	example:
	
	     Device=C:\Windows\SMARTDRV.EXE /double_buffer
	
	RESOLUTION
	==========
	
	Do the following to resolve the conflict:
	
	1. Delete the
	
	  SMARTDRV.EXE /double_buffer
	
	  line from the CONFIG.SYS file (edit the CONFIG.SYS file using Notepad or
	  Write).
	
	2. Put the SMARTDRV.EXE line back in the CONFIG.SYS file but switch the order
	  of
	
	  SMARTDRV.EXE /double_buffer
	
	  with the
	
	  PLUSDRV.SYS
	
	  device line.
	
	3. Obtain the most recent revision of PLUSDRV.SYS (revision F) and retry the
	  above steps.
	
	Additional query words: 3.10 double buffering 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
