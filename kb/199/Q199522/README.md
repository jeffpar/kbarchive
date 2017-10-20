---
layout: page
title: "Q199522: HOWTO: Porting Static PowerPC Libraries"
permalink: /kb/199/Q199522/
---

## Q199522: HOWTO: Porting Static PowerPC Libraries

{% raw %}

	Article: Q199522
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0,4.0b
	Operating System(s): 
	Keyword(s): kbtool kbDLL kbHWMAC kbMFC kbVC400 kbDSupport kbGrpDSMFCATL kbNoUpdate
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 4.0, 4.0b, on platform(s):
	   - the operating system: Mac OS (all) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use a static PowerPC library in a Visual C++ Macintosh application, the
	library must first be converted to a CFM (Code Fragment Manager) Shared Library
	using a native PowerPC Macintosh development environment. The shared library can
	then be ported, and linked dynamically. For additional information, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q145822 DOC: Creating Import Libraries for PowerPC Shared Libraries
	
	MORE INFORMATION
	================
	
	Many Macintosh libraries are delivered as static libraries. There are a number
	of proprietary formats for 68K static libraries. MPW (Macintosh Programmers
	Workshop) libraries, usually named with a ".o" extension, are the most common
	and most interchangeable format. These can be converted to Visual C++ static
	libraries using MPW2LIB.
	
	PowerPC static libraries cannot be converted using MPW2LIB. PowerPC static
	libraries must first be converted to shared libraries using a Macintosh
	development environment other than Visual C++.
	
	In general, a static library can be converted to a shared library by:
	
	1. Creating a new shared library that includes the static library.
	
	2. Exporting the static library's symbols.
	
	The specifics of this process depend on the Macintosh development environment
	used.
	
	Once a shared library has been created it can be used by Visual C++. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q145822 DOC: Creating Import Libraries for PowerPC Shared Libraries
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation.
	
	
	Additional query words: PowerPC Macintosh PowerMac XCOFF .o static library shared import export mpw2lib
	
	======================================================================
	Keywords          : kbtool kbDLL kbHWMAC kbMFC kbVC400 kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper
	Version           : MACINTOSH:4.0,4.0b
	Hardware          : MAC
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
