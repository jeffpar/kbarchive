---
layout: page
title: "Q72412: Math Coprocessor Detection Hangs System in QBasic"
permalink: /kb/072/Q72412/
---

## Q72412: Math Coprocessor Detection Hangs System in QBasic

{% raw %}

	Article: Q72412
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting MS-DOS QBasic (included with MS-DOS versionS 5.x and 6.x) your
	system may stop responding (hang).
	
	CAUSE
	=====
	
	This problem occurs because of the way the QBasic environment checks for the
	presence of a math coprocessor chip in your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with MS-DOS versions 5.0, 5.00a,
	6.0, 6.2, 6.21, and 6.22. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	If this problem occurs, reboot your machine and add the following line to your
	AUTOEXEC.BAT file:
	
	  " SET NO87=NOMATH " (without the quotation marks)
	
	After you add this line to the AUTOEXEC.BAT file, reboot your machine so that
	this switch can take effect. You should now be able to enter the QBasic
	interpreter with no difficulty.
	
	NOTE: Setting NO87 does not affect other applications' use of a math coprocessor
	(with the exception of MS-DOS 6.00 DoubleSpace) because the application has to
	look for this environment variable.
	
	The environment variable NO87 is a switch to tell the QBasic interpreter that
	there is no 80x87 chip in your machine. You can set this variable to any value
	to make NO87 true. Setting NO87 to null (SET NO87=<Enter>) makes NO87
	false, which is the default state.
	
	Although the QBasic interpreter checks for a coprocessor, it doesn't actually use
	the coprocessor even if it successfully detects one. You do not lose any
	functionality or speed by setting the NO87 variable to true, even if you have a
	math coprocessor chip.
	
	The same problem occurs in QuickBasic version 4.5, but the QuickBasic environment
	can use the coprocessor if it is successfully detected.
	
	Additional query words: dblspace 5.00 5.00a 6.00 6.20 80387 80287 8087
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
