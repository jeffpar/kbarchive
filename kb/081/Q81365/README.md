---
layout: page
title: "Q81365: FIX: PWB Incorrectly Handles Select in Saved Macros"
permalink: /kb/081/Q81365/
---

## Q81365: FIX: PWB Incorrectly Handles Select in Saved Macros

{% raw %}

	Article: Q81365
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Programmer's WorkBench (PWB) versions 1.0 and 1.1, you can save
	macros in the TOOLS.INI file. However, when the following macro is saved in
	TOOLS.INI, PWB will not correctly evaluate the macro commands.
	
	     mytab:= begline select endline delete tab paste
	     mytab: Alt+K
	
	CAUSE
	=====
	
	When using the select function in macros, PWB sometimes gives unexpected
	results.
	
	RESOLUTION
	==========
	
	When recording the above macro through the Record On option under the PWB Edit
	menu, the macro will work as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB versions 1.0 and 1.1. This
	problem was corrected in PWB version 2.0.
	
	REFERENCES
	==========
	
	"Microsoft C Reference," versions 6.x, pages 55-76
	
	Additional query words: 1.00 1.10 buglist1.00 buglist1.10 fixlist2.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS
	Version           : :1.0,1.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
