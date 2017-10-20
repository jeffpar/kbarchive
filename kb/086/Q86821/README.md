---
layout: page
title: "Q86821: BUG: Cursor Disappears After Using File Find Command in PWB"
permalink: /kb/086/Q86821/
---

## Q86821: BUG: Cursor Disappears After Using File Find Command in PWB

{% raw %}

	Article: Q86821
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:2.0,2.1.49
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 2.0, 2.1.49 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Programmer's WorkBench version 2.0, if you choose the File Find
	command from the File menu, the cursor may disappear. Cursor movement is still
	possible, but the cursor will not be visible.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the File menu, choose Find.
	
	2. Enter an existing filename as the file to find and choose the Find button.
	
	3. Double-click on the found file to load it.
	
	RESOLUTION
	==========
	
	The cursor will reappear if another window is opened.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB versions 2.0 and 2.1.49. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 2.00 buglist2.00 buglist2.1.49
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB200DOS kbPWB2149DOS
	Version           : MS-DOS:2.0,2.1.49
	
	=============================================================================
	

{% endraw %}
