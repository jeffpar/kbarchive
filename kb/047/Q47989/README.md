---
layout: page
title: "Q47989: PRB: Resident Software May Cause &quot;Internal Debugger Error&quot;"
permalink: /kb/047/Q47989/
---

## Q47989: PRB: Resident Software May Cause &quot;Internal Debugger Error&quot;

{% raw %}

	Article: Q47989
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.11,3.14,4.0,4.01,4.05,4.1,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1, 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sometimes when I run CodeView, I get an
	
	  Internal Debugger Error
	
	message.
	
	CAUSE
	=====
	
	Internal Debugger Error messages are usually caused by problems in your MS-DOS
	environment; the most likely cause is the presence of memory-resident software,
	commonly referred to as TSRs (terminate- and-stay-resident software).
	
	For example, running CodeView with Borland's Sidekick loaded has been known to
	cause "Internal Debugger Error 80" and "R6002: Floating Point not loaded" error
	messages. "Internal Debugger Error 80" has also been reported when CodeView was
	run with Software Solutions' "Software Carousel" loaded into memory.
	
	RESOLUTION
	==========
	
	CodeView Versions 2.0 and later have become increasingly more sensitive to TSRs.
	If you receive an Internal Debugger Error message, or you are experiencing
	strange problems within CodeView, make sure you are running CodeView with no
	memory-resident software loaded (including, but not limited to, device drivers,
	screen savers, keyboard enhancers, command-line editors, etc.). Disabling your
	resident software, but not rebooting, may not completely remove its
	interference, so be sure to "boot clean" when trying to resolve a problem of
	this type.
	
	If you continue to receive the error message without memory-resident programs,
	try running CodeView on some other program to see if the error is related to
	particular code. If the error is related to the specific code, and you are
	unable to determine the cause, you may want to call Microsoft Product Support.
	
	If the error is not dependent on your code, the problem might be the particular
	sequence of CodeView commands you execute. Make a note of what operations you
	performed, i.e., the sequence of Trace, Go, Watch, Breakpoint, etc., commands
	that were issued, and contact Microsoft Product Support.
	
	Additional query words: 2.20 3.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS
	Version           : :2.2,3.0,3.11,3.14,4.0,4.01,4.05,4.1,5.6
	
	=============================================================================
	

{% endraw %}
