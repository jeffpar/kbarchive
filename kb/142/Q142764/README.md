---
layout: page
title: "Q142764: FIX: Edit Fields Blank When Large Fonts Selected"
permalink: /kb/142/Q142764/
---

## Q142764: FIX: Edit Fields Blank When Large Fonts Selected

{% raw %}

	Article: Q142764
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC410fix kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Learning Edition, versions 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some edit fields in Visual C++ may become blank when they are selected for
	editing. The fields that have this problem are grid edit controls. This can be
	demonstrated in Visual C++ version 2.0 when using the Version Information
	editor. Additionally, Visual C++ 4.0 uses grid edit controls in the Variables
	and Watch editors in the debugger.
	
	CAUSE
	=====
	
	The problem only occurs on Computers running Windows NT 3.5 or later and appears
	when the display settings have the font size set to large fonts.
	
	RESOLUTION
	==========
	
	Change the display font size to small font to allow proper editing of version
	information resources. The font size setting can be changed from the Display
	applet in the Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug 4.00 4.10 2.00
	
	======================================================================
	Keywords          : kbide kbVC kbVC410fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC200 kbVC32bitSearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
