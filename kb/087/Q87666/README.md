---
layout: page
title: "Q87666: PRB: Changing Default Drive in FoxBASE+ Fox Central"
permalink: kb/087/Q87666/
---

## Q87666: PRB: Changing Default Drive in FoxBASE+ Fox Central

	Article: Q87666
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.17
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.17 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When FoxBASE+ is running on a network, changing the default drive on a network
	using the Select command in FoxCentral causes an "Error 31 Subscript Out of
	Bounds" error message.
	
	CAUSE
	=====
	
	Older versions of FoxCentral store the directory listing in an array, which is
	limited to 128 elements in FoxBASE+. If the network drive has more than 128
	directories, FoxCentral exceeds the array limit.
	
	RESOLUTION
	==========
	
	This latest version of the FoxCentral application does not store the directory
	listing in an array. The latest version of the CENTRAL.FOX file is dated March
	20, 1992. To avoid this situation with an older copy of FoxCentral, use the SET
	DEFAULT TO command to change the default drive from the FoxBASE+ command line.
	For more information on the syntax to change the default directory, see the
	FoxBASE+ "Commands & Functions" and/or "User's Guide" manual.
	
	Additional query words: 2.00 2.10 Novell Fox Base plus
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE217DOS kbFoxBASESearch
	Version           : MS-DOS:2.17
	
	=============================================================================
	
