---
layout: page
title: "Q93093: BUG: Memory Use Greater With DPMI Memory Than VCPI or XMS"
permalink: /kb/093/Q93093/
---

## Q93093: BUG: Memory Use Greater With DPMI Memory Than VCPI or XMS

{% raw %}

	Article: Q93093
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVCkbbuglist
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.05, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the memory manager provides DPMI memory, the CodeView debugger is unable to
	load a very large MS-DOS application. However, CodeView can load the application
	when the memory manager provides VCPI or XMS memory to CodeView.
	
	CAUSE
	=====
	
	CodeView requires more than 64K conventional MS-DOS memory (addressed below
	640K) when it runs with a DPMI memory manager and only 17K when it runs with a
	VCPI or XMS memory manager.
	
	RESOLUTION
	==========
	
	If insufficient conventional memory is available when the system is configured
	for DPMI memory, change the system configuration to provide VCPI or XMS memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft CodeView versions 4.0,
	4.01, 4.05, and 4.1. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC kbbuglist
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS
	Version           : :4.0,4.01,4.05,4.1
	
	=============================================================================
	

{% endraw %}
