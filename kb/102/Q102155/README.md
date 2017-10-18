---
layout: page
title: "Q102155: DOC: BN_DISABLE and BN_DOUBLECLICKED Documented Incorrectly"
permalink: kb/102/Q102155/
---

## Q102155: DOC: BN_DISABLE and BN_DOUBLECLICKED Documented Incorrectly

	Article: Q102155
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1
	Operating System(s): 
	Keyword(s): kbdocerr kbGenInfo kbVC kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5 
	- Microsoft Visual C++, versions 2.0, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to the online help, an application should not process either the
	BN_DISABLE or BN_DOUBLECLICKED notification. The documentation recommends that
	new applications should use the BS_OWNERDRAW button style and information in the
	DRAWITEMSTRUCT structure.
	
	These statements are incorrect and should be ignored. Even though an application
	can create the same behavior using an owner-draw button, it is not necessary to
	do so.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbGenInfo kbVC kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC410 kbVC200
	Version           : :1.0,1.5,2.0,4.0,4.1
	
	=============================================================================
	
