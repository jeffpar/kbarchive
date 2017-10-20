---
layout: page
title: "Q62668: FIX: Deleting Current Makefile in PWB 1.0 Causes R6000 Error"
permalink: /kb/062/Q62668/
---

## Q62668: FIX: Deleting Current Makefile in PWB 1.0 Causes R6000 Error

{% raw %}

	Article: Q62668
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0; OS/2:1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.0 
	- Microsoft Programmer's Workbench for OS/2, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are viewing your makefile in a window in the Programmer's WorkBench (PWB)
	version 1.0 and then delete the makefile from a shell, attempting to make the
	window containing the makefile active will cause a run-time error R6000, stack
	overflow.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB version 1.0. This problem
	was corrected in PWB version 1.1.
	
	MORE INFORMATION
	================
	
	To duplicate this problem, bring up a sample program and set the program list to
	that file's makefile. Next, open up another window and open the makefile in that
	window. Now, delete that makefile either by choosing Run <DOS-OS/2>
	Command from the Run menu, or by choosing the <DOS-OS/2> Shell from the
	File menu.
	
	After returning back to the PWB, make the window containing the makefile the
	active program list either by pressing the F6 key to toggle windows or by
	clicking the left mouse button in that window.
	
	You will be faced with a pop-up message saying "File has been deleted from disk.
	Delete from memory?" Answering "yes" brings up the pop-up message six to eight
	more times. Then, PWB will abort to the system prompt with an R6000 (stack
	overflow) error message and another message, "File has been deleted from disk."
	
	Additional query words: 1.00 buglist1.00 fixlist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB100OS2
	Version           : MS-DOS:1.0; OS/2:1.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
