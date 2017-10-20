---
layout: page
title: "Q35938: Equal-Sign Characters as Arguments in Batch Files"
permalink: /kb/035/Q35938/
---

## Q35938: Equal-Sign Characters as Arguments in Batch Files

{% raw %}

	Article: Q35938
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	Using batch files in MS-DOS, it is not possible to include an equal
	sign as an argument to a batch file. The batch file parser considers
	this to be a delimiter, such as a space or tab character. Thus, using
	the following one-line batch file (named TEST.BAT):
	
	  echo %1 %2
	
	If the following is entered:
	
	  TEST one=two
	
	it would produce the following output
	
	  one two
	
	which shows that the batch file parser considers "one" the first
	argument, and "two" the second argument, with the equal sign being a
	delimiter. This makes it impossible to enter equal signs in batch
	files as command-line options.
	
	Additional query words: 6.22 2.00 2.10 2.11 2.25 3.00 3.10 3.20 3.22 3.30 3.30A 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
