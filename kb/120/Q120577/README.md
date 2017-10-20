---
layout: page
title: "Q120577: FIX: GP Fault When Copying Between Two Resource Scripts"
permalink: /kb/120/Q120577/
---

## Q120577: FIX: GP Fault When Copying Between Two Resource Scripts

{% raw %}

	Article: Q120577
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0, on platform(s):
	   - the hardware: MIPS 
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Resource Browser feature to copy and paste multiply selected
	resources between two resource scripts, Visual C++ may terminate with a general
	protection (GP) fault. This problem occurs only if one of the selected resources
	being copied is a string table, and the resource script being copied to contains
	a string table.
	
	RESOLUTION
	==========
	
	Avoid selecting string tables when doing copy and paste with multiply selected
	resources.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was not reproducible in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or create a resource script that contains one or more string tables and
	  at least one other resource. A second resource script must contain at least a
	  string table.
	
	2. Expand all of the resources.
	
	3. Select some or all of the resources including the string table and at least
	  one other resource type. You can use the Shift+mouseclick selection.
	
	4. Copy the resources using either the keyboard commands or by choosing Copy
	  from the Edit menu.
	
	5. Paste the resources into the other script.
	
	6. Click OK to the message box that says "String tables cannot be merged. Open
	  string tables and copy individual strings."
	
	At this point, a GP fault occurs.
	
	Additional query words: VC++ DIALOG GPF buglist2.00 S_STUDIO nextrel
	
	======================================================================
	Keywords          : kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
