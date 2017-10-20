---
layout: page
title: "Q35937: Equal-Sign Characters in Environment Variables"
permalink: /kb/035/Q35937/
---

## Q35937: Equal-Sign Characters in Environment Variables

{% raw %}

	Article: Q35937
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using environment variables in MS-DOS, you cannot include an equal sign as
	a character data/value section in an environment variable. The MS-DOS
	environment parser uses the equal sign as the delimiter between the name and the
	value of an environment variable. Thus, trying to set the environment variable
	"EXRC" to "TABS=4" as follows
	
	  set EXRC=TABS=4
	
	would result in a syntax error. In OS/2, it is possible to set this environment
	variable by using the caret character (^) to "escape" the equal sign. Thus,
	under OS/2, it is possible to set the environment variable "EXRC" as follows:
	
	  set EXRC=TABS^=4
	
	Additional query words: 6.22 2.00 2.10 2.11 2.25 3.00 3.10 3.20 3.22 3.30 3.30A 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
