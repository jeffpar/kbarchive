---
layout: page
title: "Q89665: PRB: Cause of &quot;String Memory Variable Area Overflow&quot; Error"
permalink: kb/089/Q89665/
---

## Q89665: PRB: Cause of &quot;String Memory Variable Area Overflow&quot; Error

	Article: Q89665
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01; MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FoxBASE+ displays a "String memory variable area overflow" message and stops
	processing.
	
	CAUSE
	=====
	
	The CONFIG.FX file contains an incorrect specification for the MVARSIZ variable.
	
	RESOLUTION
	==========
	
	Modify the CONFIG.FX file to specify a larger value for MVARSIZ. The range of
	values is 1 to 64. The default value is 6.
	
	Additional query words: Fox Base plus
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASE210DOS kbFoxBASESearch
	Version           : MACINTOSH:2.01; MS-DOS:2.1
	
	=============================================================================
	
