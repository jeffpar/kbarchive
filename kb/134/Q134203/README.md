---
layout: page
title: "Q134203: PC MAPI: How to Resolve MAPI Name Mangling in Visual C++"
permalink: /kb/134/Q134203/
---

## Q134203: PC MAPI: How to Resolve MAPI Name Mangling in Visual C++

	Article: Q134203
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	*****************************************************************
	**                          - WARNING -                        **
	**    THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN    **
	**    CONFIRMED, EDITED OR TESTED BY MICROSOFT.  USE ONLY      **
	**    WITH DISCRETION.                                         **
	*****************************************************************
	
	SUMMARY
	=======
	
	With versions 3.0 and 3.2 of Microsoft Mail for PC Networks, programmers may
	create their own Windows interfaces to the postoffice using the Simple Messaging
	Applications Programmer's Interface (MAPI). With Microsoft Visual C++ version
	1.5, 2.0, or 2.1, programmers may run into the typical "name mangling" problem
	during the link process that affects C++ programs linking DLLs created by a C
	compiler.
	
	MORE INFORMATION
	================
	
	Programmers may solve this "name mangling" problem by changing the way the
	MAPI.H header file is included in the Visual C++ program. Instead of the
	standard include:
	
	     #include "mapi.h"
	
	Programmers should use the following:
	
	     extern "C" {
	     #include "mapi.h"
	     }
	
	Using the "extern" keyword in such a manner tells the Visual C++ compiler to link
	the MAPI.DLL library correctly and resolves problems with "name mangling".
	
	Additional query words: 3.00 3.20 smapi
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
