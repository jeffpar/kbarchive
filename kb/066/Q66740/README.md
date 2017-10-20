---
layout: page
title: "Q66740: BUG: CTRL+NUM/ May Be Read as CTRL+/ in MS-DOS with NUM LOCK On"
permalink: /kb/066/Q66740/
---

## Q66740: BUG: CTRL+NUM/ May Be Read as CTRL+/ in MS-DOS with NUM LOCK On

{% raw %}

	Article: Q66740
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Programmer's WorkBench (PWB) versions 1.0 and 1.1, the CTRL+NUM/ (CTRL+/
	on the numeric keypad) and ALT+NUM/ (ALT+/ on the numeric keypad) combinations
	may be interpreted as CTRL+/ and ALT+/ (on the main keyboard). This problem
	happens only in DOS or in the DOS 3.x box of OS/2, and only on certain
	computers. This behavior will cause any macro or function assigned to CTRL+NUM/
	or ALT+NUM/ to not execute when NUM LOCK is on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB version 1.0 and 1.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, assign a function or macro to CTRL+NUM/. Then run the
	TELL function (CTRL+T by default) and press CTRL+NUM/. The TELL function prompts
	for a keystroke, then displays the name of the keystroke and the function
	assigned to it. With NUM LOCK on, TELL will return the following:
	
	  unassigned:Ctrl+/
	
	With NUM LOCK off, TELL will return the following:
	
	  <function name>:Ctrl+num/
	
	This behavior is identical for the ALT+NUM/ key name, but works properly for all
	other key names on the numeric keypad.
	
	If NUM LOCK is off, or if the protected-mode version of PWB is run, this behavior
	does not occur.
	
	This behavior has been observed on the following machines:
	
	  Northgate 386-33
	  PS/2 Model 70
	  PS/2 Model 80-311
	
	Additional query words: 1.00 1.10 buglist1.00 buglist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
