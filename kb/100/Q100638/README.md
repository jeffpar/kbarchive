---
layout: page
title: "Q100638: Cross-Platform Application Development in Windows NT"
permalink: kb/100/Q100638/
---

## Q100638: Cross-Platform Application Development in Windows NT

	Article: Q100638
	Product(s): Microsoft C Compiler
	Version(s): 1.00 2.00 2.10 4.00
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	At present, these hardware platforms support developing Win32-based
	applications: Intel 386 or later, MIPS R4000, DEC Alpha, and the Power PC. The
	text below deals with the issues involved with developing applications for all
	of these platforms simultaneously.
	
	MORE INFORMATION
	================
	
	Due to the disparate nature of these platforms, binary compatibility is not a
	viable option. Therefore, Win32 provides source code compatibility. You can
	create a version of your application for each CPU by recompiling the source
	code.
	
	However, Visual C++ 32-bit Edition does not support cross-compiling between these
	platforms at this time. Therefore, to develop applications for each hardware
	platform, you must compile the code with the tools available for each platform,
	such as Visual C++ for Intel, Visual C++ for MIPS, and Visual C++ for Alpha.
	
	NOTE: Visual C++ versions 2.x and 4.0 does have a Macintosh add-on that can be
	used to port Win32-based applications to a native Macintosh 68K platform. It is
	a cross- development platform, meaning that the tools are hosted on a Windows NT
	machine on the Intel platform and target the Macintosh.
	
	Be careful not to confuse source compatibility across hardware platforms (Intel,
	MIPS, Alpha, Power PC) with binary compatibility across application execution
	environments (Win16, Win32). We supports binary compatibility between
	application execution environments on the same hardware platform, through
	emulation. For example, a 16-bit Windows-based application developed for Intel
	hardware can run without modification on an Intel machine running Windows NT
	and, with the appropriate Win32s dynamic-link libraries (DLLs) and virtual
	devices (VxDs), a Win32-based application developed for Intel hardware can run
	without modification on an Intel machine running 16-bit Windows 3.1.
	
	REFERENCES
	==========
	
	For more information about cross platform development with the Win32 API, please
	see the Microsoft Win32 Software Development Kit or Visual C++ documentation.
	
	Additional query words: kbinf 1.00 2.00 2.10 4.00
	
	======================================================================
	Keywords          : kbGenInfo kbVC kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC200 kbVC210
	Version           : 1.00 2.00 2.10 4.00
	
	=============================================================================
	
