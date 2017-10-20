---
layout: page
title: "Q76459: Disabling Volume Label Request in Format"
permalink: /kb/076/Q76459/
---

## Q76459: Disabling Volume Label Request in Format

{% raw %}

	Article: Q76459
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS 5.0 or later FORMAT utility prompts for a volume label after you
	format a floppy disk. This label prompt can be disabled.
	
	MORE INFORMATION
	================
	
	To eliminate the volume label message (and the necessity to press the ENTER
	key), add the following switch to the FORMAT command line:
	
	  format [drive]: /v:<ALT+Keypad 255>
	
	Note: Entering a space instead of <ALT+Keypad 255> will not work.
	
	Adding the above switch will disable the volume label prompt and allow the disk
	to be formatted. It will create a disk with a volume label of a non-printing
	ASCII blank character. Including this statement in a batch file or creating a
	Doskey macro will help automate disk formatting.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
