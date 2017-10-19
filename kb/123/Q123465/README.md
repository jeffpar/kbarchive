---
layout: page
title: "Q123465: PRB: Cannot View Unicode Strings in the Watch Window"
permalink: /kb/123/Q123465/
---

## Q123465: PRB: Cannot View Unicode Strings in the Watch Window

	Article: Q123465
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbdisplay kbDebug kbide
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, used with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When trying to watch a Unicode string in the Watch window, you see only the
	first byte, or it is displayed incorrectly.
	
	CAUSE
	=====
	
	Making the debugger "Unicode aware" at the display level involves the
	complicated task of setting and using locales and fonts properly. This is
	especially difficult if they are not the ones currently in use. This
	functionality has not yet been implemented.
	
	RESOLUTION
	==========
	
	You can use the 'm' format symbol to see the first eight characters of a string,
	or you could use the 'ma' format symbol to see the first 32 characters. For
	example, if you have a declaration in your code like this:
	
	     wchar_t *pStr = L"Some string";
	
	Adding the expression "pStr,m" (without the quotation marks) to the Watch window
	results in a memory dump of the first 16 bytes, immediately followed by the
	ASCII equivalent, similar to this:
	
	  S.o.m.e. .s.t.r.
	
	The periods are place holders for null bytes, which show up behind their
	corresponding characters because wchar_t's are defined as two-byte unsigned
	shorts, whose bytes are thus reversed in memory. (This is why only the first
	character 'S' would be displayed by default in the example above. The debugger
	sees the null byte following the 'S' and assumes it is the string terminator.)
	
	This method will obviously work only with short strings. As an alternative, you
	can open up the memory window and point it to the starting address of your
	string. Note that dragging or dropping the string's address from the Watch
	window to the Memory window makes this much easier.
	
	MORE INFORMATION
	================
	
	For future versions, Microsoft is considering ways to allow watching Unicode
	strings directly using the current locale.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdisplay kbDebug kbide 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
