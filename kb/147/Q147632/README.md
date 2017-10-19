---
layout: page
title: "Q147632: BUG: Browsing Template Function Definition Goes to Wrong Place"
permalink: /kb/147/Q147632/
---

## Q147632: BUG: Browsing Template Function Definition Goes to Wrong Place

	Article: Q147632
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGenInfo kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTool
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the shortcut key to jump to the definition of a template function places
	the cursor at the first use of the function (its instantiation).
	
	No function definition for a template function appears in the browse Definitions
	and References dialog box, only function references.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft has confirmed this to be a bug in the
	Microsoft products listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Press F12 (F11 using Visual C++ 2.0 key mapping) to jump to the definition of
	the function. Instead of going to the definition of the function, you will be
	taken back to the point where the function was instantiated (that is, the first
	place the function was used).
	
	Press ALT+F12 (CTRL+F11 using Visual C++ 2.0 key mapping) or select Browse from
	the Tools menu. Type the name of your template function in the Browse window,
	select Definitions and References from the list, and click OK. You will see
	there is no entry in the Definitions and References box under Definitions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGenInfo kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
