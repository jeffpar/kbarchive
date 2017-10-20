---
layout: page
title: "Q73333: PRB: WDEB386 Does Not Find Driver Symbol Files"
permalink: /kb/073/Q73333/
---

## Q73333: PRB: WDEB386 Does Not Find Driver Symbol Files

{% raw %}

	Article: Q73333
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Windows 80386 debugger, WDEB386, is used to debug a
	modification of one of the standard drivers provided with the Microsoft Windows
	Device Development Kit (DDK), the debugger does not load symbolic information.
	
	CAUSE
	=====
	
	The module name listed in the module definition (DEF) file and the filename of
	the driver do not match.
	
	RESOLUTION
	==========
	
	For Windows to load, the module name for the standard drivers cannot change.
	Keep the module name and the filename the same during the debugging process for
	the modification. Once the file is debugged, give the file its final name.
	
	Additional query words: 3.00 3.10 DDKMISC
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
