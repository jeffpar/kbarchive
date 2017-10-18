---
layout: page
title: "Q63677: EMM386.SYS Page Frame Uses &quot;p3&quot; Parameter, Not &quot;p4&quot;"
permalink: kb/063/Q63677/
---

## Q63677: EMM386.SYS Page Frame Uses &quot;p3&quot; Parameter, Not &quot;p4&quot;

	Article: Q63677
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 598 of the "Microsoft Windows User's Guide" discusses two methods of
	indicating the beginning address of the expanded-memory page frame created by
	EMM386.SYS. The second method is incorrect.
	
	MORE INFORMATION
	================
	
	The first method uses the frame= parameter and creates a LIM 3.2-compatible page
	frame beginning at D000:0000. The second method is incorrect and is shown as
	follows:
	
	     device=emm386.sys 512 p0=D000 p1=D400 p2=D800 p4=DC00
	
	This command line in CONFIG.SYS generates the following error:
	
	  WARNING - EMM386 installed without a LIM 3.2 compatible Page Frame
	
	The "p4" parameter on the command line is the source of the error. The fourth
	page of the page frame is specified with the parameter "p3", not "p4". Hence, to
	generate a LIM 3.2-compatible page frame, the command line should read as
	follows:
	
	     device=emm386.sys 512 p0=D000 p1=D400 p2=D800 p3=DC00
	
	A LIM 3.2-compatible page frame is required in order to use expanded memory with
	most applications that use expanded memory. If, while using EMM386.SYS, your
	application reports no expanded memory, verify the proper addressing of the
	pages "p0", "p1", "p2", and "p3", and/or use the frame= parameter to explicitly
	set the starting address of the entire page frame.
	
	Additional query words: 3.00 3.00a documentation error docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
