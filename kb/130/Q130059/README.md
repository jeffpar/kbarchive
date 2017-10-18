---
layout: page
title: "Q130059: Obsolete Macro functions in Japanese Windows Version 3.1"
permalink: kb/130/Q130059/
---

## Q130059: Obsolete Macro functions in Japanese Windows Version 3.1

	Article: Q130059
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1; WINDOWS:1.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows version 3.1 
	- Microsoft Win32 Software Development Kit (SDK), version 3.5 
	- Microsoft Win32s version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some of the Japanese Windows version 3.1 functions are no longer supported in
	the Japanese version of Windows NT. These Macro functions are obsolete in the
	current C++ compiler.
	
	MORE INFORMATION
	================
	
	The macro functions of Japanese Windows version 3.10 are no longer supported and
	are obsolete in current C++ compiler. They were remapped to other generic MBCS
	functions. Use the following as workaround functions. Include them in the
	current header file. T _ismbb* entries correspond to the replaced Windows
	version 3.1 macro.
	
	  #include <mbctype.h>
	  #define iskana       _ismbbkana
	  #define iskpun       _ismbbkpunct
	  #define iskmoji     _ismbbkalpha
	  #define isalkana    _ismbbalpha
	  #define ispnkana    _ismbbpunct
	  #define isalnmkana  _ismbbalnum
	  #define isprkana    _ismbbprint
	  #define isgrkana    _ismbbgraph
	  #define iskanji     _ismbblead
	  #define iskanji2    _ismbbtrail
	
	Additional query words: 3.10 1.20 3.50 kbinf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK350 kbWin32s120 kbWinSDKSearch kbWinSDK310
	Version           : :3.1; WINDOWS:1.2,3.5
	
	=============================================================================
	
