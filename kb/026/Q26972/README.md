---
layout: page
title: "Q26972: Change of Radix Does Not Change Array Index"
permalink: /kb/026/Q26972/
---

## Q26972: Change of Radix Does Not Change Array Index

{% raw %}

	Article: Q26972
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05 
	- Microsoft CodeView for OS/2, versions 2.2, 3.0, 3.11, 3.12, 3.5 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	The Microsoft CodeView debugger assumes all array indexes are in the
	current radix. Therefore, if a watch is placed on a particular array
	element and the radix is then changed, the value displayed in the
	Watch window may change.
	
	To illustrate, assume the current radix is 10 and the program being
	debugged contains an array called buffer. If a watch has been placed
	on buffer[10] and the radix is then changed to base 16, the Watch
	window will still show buffer[10], but the 10 now refers to 0x10 or
	decimal 16. Thus, the value displayed is buffer[16].
	
	This behavior occurs because CodeView reinterprets the items in the
	Watch window each time; when you set a watch on a variable, CodeView
	does not "compile" that address into some internal memory location.
	Instead, it recalculates the watch statement each time.
	
	This behavior was changed in CodeView version 4.1.
	
	Additional query words: kbinf 2.20 3.00 3.50 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView220OS2 kbCodeView300OS2 kbCodeView311OS2 kbCodeView312OS2 kbCodeView350OS2 kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	
	=============================================================================
	

{% endraw %}
