---
layout: page
title: "Q102331: BUG: Problems Viewing Protected-Mode Application Memory"
permalink: /kb/102/Q102331/
---

## Q102331: BUG: Problems Viewing Protected-Mode Application Memory

{% raw %}

	Article: Q102331
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In CodeView for Windows, an attempt to use the Memory window to view the Ring 0
	or Ring 1 code segments of an application developed for protected-mode Microsoft
	Windows fails.
	
	CAUSE
	=====
	
	CodeView is a source level debugger. It displays only Ring 3 code.
	
	The Memory window title bar displays the address the user entered even though
	CodeView displays the contents of another, corresponding, selector. For example,
	the title bar displays 0x1111 even though CodeView displays selector 0x1117.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0, 4.01, and
	4.1 for Windows. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In protected-mode Windows, a segment address is a selector. When it attempts to
	change a selector value (segment address) to a value in the Ring 0 or Ring 1
	range, CodeView creates the corresponding Ring 3 address above the specified
	value.
	
	For example, an attempt to change the selector value in the memory window to
	0x1111 fails and CodeView displays selector value 0x1117. Likewise, an attempt
	to display selector value 0x111A fails and CodeView displays selector value
	0x111F.
	
	In CodeView versions 4.0 and 4.01 for Windows, it may appear possible to view
	Ring 0 or Ring 1 addresses. CodeView displays the memory window through selector
	value 0x1114:0. However, if you compare the contents of this Memory Window 1
	with Memory Window 2 that displays 0x1117:0, the displayed values are identical.
	An attempt to view memory locations 0x1110 through 0x1113 or 0x1118 through
	0x111B fails and CodeView displays question marks (?).
	
	The three low-order bits of a selector determine its privilege level: the lowest
	two bits indicate the ring number and the third bit contains a write permission
	flag used to separate code segments from data segments. The privilege level does
	not affect the displayed base address; it only determines if the requestor has
	permission to view the memory.
	
	CodeView sets the write permission flag for each selector to allow modifying the
	source code through the memory window. CodeView can do this because it runs in a
	higher ring level and forces all selectors to be data selectors.
	
	Therefore, selectors 0x1110 through 0x1117 are identical except for the
	differences in their protection level: selector 0x1110 is a Ring 0 code selector
	while 0x1117 is a Ring 3 data selector.
	
	When the user enters an address such as 0x1111:0, the CodeView execution model
	changes the selector to 0x1117.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	

{% endraw %}
