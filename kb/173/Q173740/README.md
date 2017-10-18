---
layout: page
title: "Q173740: DOC: Diagrams Blacked Out in OLE-DB Docs Shipped with VC++"
permalink: kb/173/Q173740/
---

## Q173740: DOC: Diagrams Blacked Out in OLE-DB Docs Shipped with VC++

	Article: Q173740
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbGenInfo kbVC kbVC500 kbArtTypeINF
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you open the OLE-DB documentation contained within Visual C++ 5.0, none of
	the diagrams are visible. Instead, you see a black square where the diagram
	should be located.
	
	For example, observe the diagram at the bottom of the help topic located in the
	following path in the docs:
	
	  + Platform SDK and DDK documentation
	  + OLE DB Programmer's Reference documentation
	     + OLE DB Programmer's Reference
	        + Part One - Introduction to OLE DB
	           +  Chapter 2 - Enumerators, Data Sources and Objects
	             +  Data Source Objects
	               +  Data Source Object states
	
	This error is caused by the OLE-DB 1.1 Specification source files conversion into
	the format used by Visual C++.
	
	MORE INFORMATION
	================
	
	The OLE-DB 1.1 Specification is available through several other mechanisms where
	the diagrams appear correctly. The first is the file OLEDB11SPEC.HLP that ships
	with the OLE-DB 1.1 SDK.
	
	The second is a hard copy of the same material available from Microsoft Press:
	
	  Microsoft OLE-DB 1.1 Programmer's Reference and Software Development Kit
	
	  ISBN 1-57231-6128-8
	
	The help file and the Microsoft Press volume contain the same content as the
	Visual C++ version, only without the black squares.
	
	
	Additional query words: Blacked out diagrams
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbGenInfo kbVC kbVC500 kbArtTypeINF 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	
	=============================================================================
	
