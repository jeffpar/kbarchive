---
layout: page
title: "Q61919: CV 3.00 Gives R6000, Hangs When Accessing Help During Start-Up"
permalink: /kb/061/Q61919/
---

## Q61919: CV 3.00 Gives R6000, Hangs When Accessing Help During Start-Up

{% raw %}

	Article: Q61919
	Product(s): See article
	Version(s): 3.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist3.00 fixlist3.10 | mspl13_basic
	Last Modified: 5-FEB-1991
	
	Accessing help in the "Enter directory for filename.c (cr for none)?"
	window results in the following error in CodeView version 3.00:
	
	   run-time error R6000
	   -stack overflow
	
	Then, the machine hangs requiring a cold reboot.
	
	To reproduce the error, do the following:
	
	1. Compile and link a program with symbolic information for CodeView.
	
	2. Delete or rename the source file and then go into CodeView. A
	   window will appear asking you to "Enter directory for filename.c
	   (cr for none)?".
	
	3. Choose the Help option at the bottom of the window. The run-time
	   error message will be printed over the CodeView screen and the machine
	   will be hung.
	
	The problem does not occur under OS/2.
	
	Microsoft has confirmed this to be a problem in CodeView version 3.00.
	This problem was corrected in CodeView version 3.10.

{% endraw %}
