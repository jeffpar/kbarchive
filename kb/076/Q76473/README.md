---
layout: page
title: "Q76473: PRB: No Output from VxD Debug_Out and Trace_Out Macros"
permalink: /kb/076/Q76473/
---

## Q76473: PRB: No Output from VxD Debug_Out and Trace_Out Macros

{% raw %}

	Article: Q76473
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
	
	In the Microsoft Windows graphical environment, when a virtual device (VxD) uses
	the Debug_Out and Trace_Out macros to obtain status information, no output is
	produced.
	
	CAUSE
	=====
	
	The debugging version of WIN386.EXE is not installed properly.
	
	RESOLUTION
	==========
	
	The Microsoft Knowledge Base contains instructions to properly install
	WIN386.EXE. This information can be found by querying on the following words:
	
	  " prod(winddk) and win386.exe " (without the quotation marks)
	
	Additional query words: 3.00 3.10 DDKVXD debug devices virtual wdeb386 win386
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
