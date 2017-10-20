---
layout: page
title: "Q89668: FoxBASE+ 2.1 Memory Requirements"
permalink: /kb/089/Q89668/
---

## Q89668: FoxBASE+ 2.1 Memory Requirements

{% raw %}

	Article: Q89668
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below presents the memory required to run version 2.1 of Microsoft
	FoxBASE+ for MS-DOS and its procedure file, program, and array capacities.
	
	MORE INFORMATION
	================
	
	FoxBASE+ Memory Requirements
	----------------------------
	
	- FoxBASE+ requires 384k of memory to run.
	
	- The runtime version requires approximately 5K less memory.
	
	- Each work area requires 4K additional memory. (Using all ten work areas
	  requires 40K.)
	
	- FoxBASE+ recognizes 64K of expanded memory.
	
	Memory Required by FoxBase+ Procedure Files and Programs
	--------------------------------------------------------
	
	One procedure file can contain up to 128 programs, each 64K in length.
	
	When FoxBASE+ executes a SET PROCEDURE TO command, it loads up to 64K of programs
	into memory. If a program is not in memory and the 64K space is filled, FoxBASE+
	releases all programs in memory and reloads each program until the 64K is
	filled. The cycle repeats as necessary.
	
	To work most efficiently in this environment, place the most frequently called
	programs at the beginning of the procedure file.
	
	Procedure files cannot be nested.
	
	Memory Used by an Array
	-----------------------
	
	The MVARSIZ variable in CONFIG.FX specifies the amount of memory available for
	character arrays. While numeric arrays do not consume any of this memory, they
	are stored in the shared memory space.
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	

{% endraw %}
