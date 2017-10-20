---
layout: page
title: "Q77810: Doskey will not Execute Layered Macros Separated by a Command"
permalink: /kb/077/Q77810/
---

## Q77810: Doskey will not Execute Layered Macros Separated by a Command

{% raw %}

	Article: Q77810
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Doskey, macros can be stacked on a command line by separating the
	individual macros with the CTRL+T key combination. This combination allows the
	macros to be executed sequentially. If a standard DOS command is placed between
	the macros, the second macro will not be executed.
	
	MORE INFORMATION
	================
	
	Using the following example:
	
	  DOSKEY X=DIR C:\
	  DOSKEY Y=DIR D:\
	
	At the the command prompt, enter the following:
	
	  " X ^T Y" (without the quotation marks)
	
	(Where ^T is CTRL+T; the paragraph control character will appear on the line.)
	
	The result of this will be a directory of the C: root followed by a directory of
	the D: root.
	
	At the command prompt, enter the following:
	
	  " X ^T DIR ^T Y" (without the quotation marks)
	
	The result of this will be a directory of the C: root, followed by a directory of
	the current drive, followed by the error message "Bad Command or Filename."
	
	Once the DOS command is executed, the DOSKEY macro is ignored. Thus, Y is assumed
	to be a DOS command.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
