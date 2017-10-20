---
layout: page
title: "Q74465: XMS Memory with MS-DOS Shell Task Swapper"
permalink: /kb/074/Q74465/
---

## Q74465: XMS Memory with MS-DOS Shell Task Swapper

{% raw %}

	Article: Q74465
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Applications running under MS-DOS Shell with Task Swapper enabled cannot
	allocate XMS memory unless you specify a value in the "XMS memory required"
	option. This is done to prevent Task Swapper from having to swap unused XMS
	memory to disk. Programs will be unaware of the existence of XMS memory, and the
	MEM command will report 0 (zero) bytes of available XMS memory.
	
	MORE INFORMATION
	================
	
	XMS memory can be specified for a task by specifying a value in the XMS Memory
	KB Required option of the Advanced dialog box, as follows:
	
	1. From the program list, select an application.
	
	2. From the File menu, choose Properties.
	
	3. From the Program Item Properties box, choose Advanced.
	
	4. In the XMS Memory KB Required box, insert the amount of XMS memory that you
	  want to be available to the program.
	
	5. Choose OK as many times as you need to return to Shell.
	
	Whenever Task Swapper is enabled, that application can access XMS memory up to
	either the limit specified in the XMS Memory Required box or the XMS Memory KB
	Limit box, whichever is greater.
	
	NOTE: Some XMS memory must be specified in the XMS Memory Required field.
	
	Additional query words: 5.00 5.00A 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
