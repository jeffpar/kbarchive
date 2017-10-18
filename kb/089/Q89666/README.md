---
layout: page
title: "Q89666: PRB: &quot;Too Many PICTURE Characters Specified&quot; Error Cause"
permalink: kb/089/Q89666/
---

## Q89666: PRB: &quot;Too Many PICTURE Characters Specified&quot; Error Cause

	Article: Q89666
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
	
	FoxBASE+ displays the "Too many PICTURE characters specified" error message and
	stops processing.
	
	CAUSE
	=====
	
	The BUCKET statement in the CONFIG.FX configuration file does not reserve enough
	space to hold the picture clause. GET clauses, their associated PICTURE clauses,
	RANGE clauses and VALID clauses are stored in the area specified by the BUCKET
	clause.
	
	RESOLUTION
	==========
	
	Modify the CONFIG.FX file to specify a larger value in the BUCKET statement. The
	allowed range of values is from 1 to 32. The default value is 4.
	
	REFERENCES
	==========
	
	Pages 4-3 to 4-6, and 8-17 in the "Microsoft FoxBASE+ User's Guide" for version
	2.1
	
	Pages 5-4 to 5-6, and C-19 in the "Microsoft FoxBASE+ Macintosh Series User's
	Guide" for version 2.01
	
	Additional query words: Fox Base Plus
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASE210DOS kbFoxBASESearch
	Version           : MACINTOSH:2.01; MS-DOS:2.1
	
	=============================================================================
	
