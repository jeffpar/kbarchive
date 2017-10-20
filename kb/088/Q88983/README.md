---
layout: page
title: "Q88983: Approximating the Size of a .DBF File in FoxBASE+"
permalink: /kb/088/Q88983/
---

## Q88983: Approximating the Size of a .DBF File in FoxBASE+

{% raw %}

	Article: Q88983
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:1.21,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, versions 1.21, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following formula approximates the space required to store a .DBF database
	file:
	
	     RECSIZE() * (RECCOUNT() + 1)
	
	The RECSIZE() function returns the number of bytes for each record, and the
	RECCOUNT() function returns the number of records in the .DBF file.
	
	This can be very useful when trying to write backup routines for an application.
	This could be used in conjunction with the DISKSPACE() function to determine if
	the backup copy of the database would fit on a disk.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASE121DOS kbFoxBASESearch
	Version           : MS-DOS:1.21,2.1
	
	=============================================================================
	

{% endraw %}
