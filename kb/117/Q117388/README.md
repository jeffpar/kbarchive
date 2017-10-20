---
layout: page
title: "Q117388: PRB: Structure Packing Causes Some Win32 Programs to Fail"
permalink: /kb/117/Q117388/
---

## Q117388: PRB: Structure Packing Causes Some Win32 Programs to Fail

{% raw %}

	Article: Q117388
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,2.2,3.1,3.5,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1, 4.2, 5.0, 6.0 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.1, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The default packing (alignment) for structures in Windows NT is 8 bytes. This
	setting is the default for projects created using the Visual Workbench. Programs
	built with other packing build without error, but the resulting executable may
	produce run-time errors. These errors include incorrect data, error return codes
	from Win32 APIs, or program failure. On RISC platforms, such as MIPS and Alpha,
	doubles and long ints that are not 8-byte-aligned cause alignment faults.
	
	CAUSE
	=====
	
	The default packing on Windows NT is 8-byte packing. This packing is used both
	for efficiency reasons and for portability (some RISC processors allow only
	8-byte packing). Because the operating system is expecting data packed on 8-byte
	boundaries, it may incorrectly process structures passed from programs that were
	not packed on 8-byte boundaries. Not all programs exhibit this behavior. One
	example that does give problems with a different kind of packing is shown in the
	"MORE INFORMATION" section.
	
	RESOLUTION
	==========
	
	If a program builds without errors or warnings but does not run correctly, one
	thing to check is that all modules are compiled with /Zp8 (or no /Zp switch at
	all).
	
	MORE INFORMATION
	================
	
	Many MS-DOS and Windows programs are built with 1- or 2-byte packing. Old
	makefiles may have a /Zp1 or /Zp2 setting included. When porting programs with
	Win32, this setting should be changed. In addition, check for a /Zp setting in
	the CL environment variable in the AUTOEXEC.BAT file. This setting overrides the
	setting in the Visual Workbench or in a makefile.
	
	While 8-byte packing is the standard for Windows NT, in many cases 4-byte packing
	works. Macro Assembler, version 6.11 and earlier, does not allow 8-byte packing.
	Use the highest available packing in this case. In some cases, you may not be
	able to get the program working and it may have to be rewritten in C or C++.
	
	REFERENCES
	==========
	
	For more information on alignment, see the "Programming Techniques" book
	included with the Visual C++, 32-bit Edition, documentation set.
	
	For general porting guidelines, please see the article, "Port Your 16-bit
	Applications to Windows NT Without Ripping Your Hair Out," in the "Microsoft
	Systems Journal," August 1993.
	
	Additional query words: 8.00 9.00 struct api structure
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbWin32SDKSearch kbAudDeveloper kbvc100 kbSDKSearch kbVC220 kbVC410 kbWin32sSearch kbWin32SDK310 kbWin32SDK350 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,2.0,2.1,2.2,3.1,3.5,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
