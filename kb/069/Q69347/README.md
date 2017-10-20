---
layout: page
title: "Q69347: BUG: PWB 1.1 Dialog Boxes Blink After Dialog Help Is Obtained"
permalink: /kb/069/Q69347/
---

## Q69347: BUG: PWB 1.1 Dialog Boxes Blink After Dialog Help Is Obtained

{% raw %}

	Article: Q69347
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.1; OS/2:1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.1 
	- Microsoft Programmer's Workbench for OS/2, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When working with the Programmer's WorkBench (PWB) version 1.10 under MS-DOS,
	there are several instances where a dialog box may start flashing incorrectly.
	This situation occurs when you obtain help on a PWB informational pop-up dialog
	box and then return from the Help dialog screen. At this point you may find that
	the original dialog box is rapidly blinking.
	
	This problem may occur when trying to get help on a topic for which there is no
	help, trying to use an unassigned key, or when PWB informs you that you changed
	a file but didn't save it before you tried to exit. In each of these cases, PWB
	gives you a pop-up dialog box informing you of the situation. If you get help on
	this informational dialog box and then press ESC or click Cancel, the original
	dialog box will start blinking.
	
	This is not normal behavior, however, PWB is still fully functional and you may
	proceed by selecting an appropriate choice from the flashing dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Programmer's WorkBench
	version 1.1. We are researching this problem and will post new information here
	as it becomes available.
	
	Additional query words: 1.10 buglist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB110DOS kbPWB110OS2
	Version           : MS-DOS:1.1; OS/2:1.1
	
	=============================================================================
	

{% endraw %}
