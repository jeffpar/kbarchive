---
layout: page
title: "Q189504: PRB: Menu Builder Creates Duplicate Hot Keys"
permalink: /kb/189/Q189504/
---

## Q189504: PRB: Menu Builder Creates Duplicate Hot Keys

{% raw %}

	Article: Q189504
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating a menu with pads that begin with the same letter causes duplicate hot
	keys to be created. This behavior exists because the first letter of the menu
	prompt is used for the hot key by default.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	Create a hot key manually by prefacing the hot key letter with "\<" (without
	the quotes). This identifies the subsequent letter as the assigned hot key.
	
	As a example, to set "1" as the hot key in the menu prompt, "Test1", the menu
	prompt would be "Test\<1" (without the quotation marks).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a menu.
	
	2. Add the following two prompts:
	
	  " Test1, Test2" (without the quotation marks)
	
	3. Preview the menu.
	
	  The "T" in each prompt is identified as the hot key.
	
	Additional query words: hotkey kbVFp600 kbXbase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
