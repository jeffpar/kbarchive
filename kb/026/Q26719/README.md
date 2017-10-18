---
layout: page
title: "Q26719: Using &quot;=&quot; in Environment Variables"
permalink: kb/026/Q26719/
---

## Q26719: Using &quot;=&quot; in Environment Variables

	Article: Q26719
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	You cannot use an environment variable with an equal sign embedded in it.
	For example, the following variable does not work:
	
	  set EXRC=tabs=4
	
	This is because MS-DOS interprets the equal sign as the
	delimiter between the environment variable name and its value (name=value).
	The environment area contains all of these strings, terminating each one
	with an ASCII null character 00H.
	
	Also, there can be no spaces between the variable, the equal sign, and the string value.
	
	Correct:
	
	  Set variable=string
	
	Incorrect:
	
	  Set variable = string
	
	Additional query words: 4.00 5.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
