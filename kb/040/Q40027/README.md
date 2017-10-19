---
layout: page
title: "Q40027: INFO: #pragma pack() Affects Declarations, Not Definitions"
permalink: /kb/040/Q40027/
---

## Q40027: INFO: #pragma pack() Affects Declarations, Not Definitions

	Article: Q40027
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The pack pragma affects declarations, not definitions. Place #pragma pack()
	prior to data declarations.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following program demonstrates usage of #pragma pack():
	
	  /* compile options needed */ 
	  /* Elements of variables of type struct x will be byte-aligned. */ 
	  #pragma pack(1)
	  struct x { int a; char b; int c; };
	
	  /* Elements of variables of type struct y will be word-aligned. */ 
	  #pragma pack(2)
	  struct y { int a; char b; int d; };
	
	  /* The pragma below does NOT affect the definitions that follow. */ 
	  #pragma pack(4)
	
	  struct x X;
	  struct y Y;
	
	  void main (void)
	  { /* dummy main */ }
	
	NOTE: The default packing value for the 16-bit products mentioned above is 2
	bytes. The default packing value for Visual C++ 32-bit, versions 1.0 and 2.xx,
	is 4 bytes. The default packing value for Visual C++ 32-bit, version 4.0, is 4
	bytes for bit fields and 8 bytes otherwise.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
