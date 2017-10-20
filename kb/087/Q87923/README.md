---
layout: page
title: "Q87923: FIX: CVW 4.0 Does Not Always Stop on Breakpoints in DLL"
permalink: /kb/087/Q87923/
---

## Q87923: FIX: CVW 4.0 Does Not Always Stop on Breakpoints in DLL

{% raw %}

	Article: Q87923
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft CodeView for Windows versions 4.0 and 4.01 may not stop on a
	breakpoint in a DLL. When setting the breakpoint, the breakpoint list (BL) shows
	that this breakpoint is virtual. Even after the DLL is loaded, this breakpoint
	is still listed as virtual.
	
	CAUSE
	=====
	
	This problem occurs when you have more than one copy of the same DLL on your
	disk. CodeView differentiates between these DLLs even if they are exactly the
	same.
	
	CodeView is allowing the user to load the symbolic information for one copy, but
	Windows itself is loading the other copy. Because the symbolic information is
	used to set breakpoints, breakpoints that are set on symbolic information of a
	DLL that is not ever loaded by Windows will always be virtual.
	
	RESOLUTION
	==========
	
	The best resolution for this problem is to remove all but one copy of the DLL
	from the disk.
	
	This problem was corrected in CodeView 4.1. When loading multiple copies of
	symbolic information for the same DLL or .EXE, CodeView 4.1 generates the
	following warning:
	
	  CV2213 Warning: preloaded symbols may not match 'MyDLL.DLL'
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft CodeView versions 4.0
	and 4.01. This problem was corrected in Microsoft CodeView version 4.1.
	
	MORE INFORMATION
	================
	
	CodeView will only stop on a breakpoint that is associated with an address.
	Virtual breakpoints are breakpoints that are set on a section of code that has
	not been loaded into memory yet. When the code is loaded into memory, the
	breakpoint becomes a physical breakpoint, and is associated with a memory
	address.
	
	Virtual breakpoints are displayed with a "V" before the "D" or "E" for disabled
	or enabled, respectively.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400 kbCodeView401
	Version           : :4.0,4.01
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
