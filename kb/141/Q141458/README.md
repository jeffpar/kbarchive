---
layout: page
title: "Q141458: FIX: Large Selections Fail in Disassembly Window"
permalink: kb/141/Q141458/
---

## Q141458: FIX: Large Selections Fail in Disassembly Window

	Article: Q141458
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC400bug kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot select a large amount of text in the disassembly window.
	
	For example, start debugging an application and break at some location in the
	program. View the source in the disassembly window. Start selecting text in the
	window. The selection gets reset when it includes approximately 120 lines. If
	the selection involves scrolling up, then the selection is reset after every
	line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	Additional query words: copy paste buffer overflow
	
	======================================================================
	Keywords          : kbVC400bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
