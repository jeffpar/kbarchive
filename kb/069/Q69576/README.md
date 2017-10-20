---
layout: page
title: "Q69576: Testing for a Specific Error Level in Batch Files"
permalink: /kb/069/Q69576/
---

## Q69576: Testing for a Specific Error Level in Batch Files

{% raw %}

	Article: Q69576
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS "IF ERRORLEVEL <number>" statement checks for error
	levels of the given number or greater. If you want to check for a specific error
	level, you should use the following command construct
	
	  IF ERRORLEVEL <N> IF NOT ERRORLEVEL <N+1> <COMMAND>
	
	where <N> is the desired number. The <N+1> portion of the command
	must be calculated as the command is entered, because the MS-DOS command
	interpreter cannot perform mathematical calculations.
	
	MORE INFORMATION
	================
	
	The nested IF statements allow specific selection of an error level because the
	NOT operator effectively reverses the inequality. The command
	
	  IF ERRORLEVEL 5 ...
	
	is equivalent to the algebraic construct
	
	  IF E = 5 OR E > 5 THEN ...
	
	while the command
	
	  IF NOT ERRORLEVEL 6
	
	is equivalent to the algebraic construct:
	
	  IF E < 6 THEN ...
	
	The combination of the two IF commands works as described because the second IF
	is executed only if the first is true, and the <command> is executed only
	if the second is true; therefore, the combination of the two commands is
	executed only if BOTH are true. Because the desired error level is bracketed
	with the two tests, the entire conditional is TRUE only when ERRORLEVEL is
	exactly that value.
	
	This same syntax can be expanded to cover a sequential range of ERRORLEVEL return
	codes by increasing the difference between the values checked for.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
