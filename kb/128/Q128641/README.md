---
layout: page
title: "Q128641: INFO: /Mx Compiler Options and the LIBC, LIBCMT, MSVCRT Libs"
permalink: /kb/128/Q128641/
---

## Q128641: INFO: /Mx Compiler Options and the LIBC, LIBCMT, MSVCRT Libs

	Article: Q128641
	Product(s): Microsoft C Compiler
	Version(s): WINNT:2.0,2.1,4.0,5.0;
	Operating System(s): 
	Keyword(s): kbCompiler kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the /ML, /MT and /MD compile options and the default
	libraries that these options specify. Different compile options imply linking
	with different default libraries. In the Visual C++ version 2.0 development
	environment, these options are found in the C/C++ tab after choosing Project
	from the Settings menu. In the Visual C++ version 4.0 development environment,
	these options are found in the C/C++ tab after choosing Settings... from the
	Build menu. For both, select Code Generation. The "Use Run-Time Library"
	category corresponds to the switches described below.
	
	NOTE: The /NODEFAULTLIB linker option can be used to override default libraries
	specified by the compiler. If you are having problems linking to the default
	libraries, check the usage of this linker option.
	
	MORE INFORMATION
	================
	
	/ML - Compile for Single-Threaded Statically Linked Runtime Support
	-------------------------------------------------------------------
	
	This is the default option, so if you don't specify /MT or /MD, /ML is implicit.
	This option generates a default library search record for LIBC.LIB for each and
	every object compiled with this flag.
	
	/MT - Compile for Multi-Threaded Statically Linked Run-Time Support
	-------------------------------------------------------------------
	
	Multi-threaded support does not imply that the run-time itself is multi-threaded
	or that you must use threads in your application. It just allows you to use
	threads in you application if you so desire.
	
	This option generates a default library search record for LIBCMT.LIB for each and
	every object compiled with this flag. This option also defines (#define) the
	symbol _MT during compilation so that multi-threading support is enabled when
	you include (#include) C Run-time Library header files.
	
	/MD - Compile for Multi-Threaded Dynamically Linked Run-Time Support
	--------------------------------------------------------------------
	
	This option generates a default library search record for MSVCRT.LIB for each and
	every object compiled with this flag.
	
	As with /MT, the symbol _MT is defined during compilation so that multi-threading
	support is enabled when you include C Run-time Library header files.
	
	Also, /MD defines the symbol _DLL during compilation so that C Run-Time Library
	variables and functions will be imported from MSVCRTxx.DLL rather than be
	statically linked.
	
	/MD and /D"_DLL" are REQUIRED for C Run-time variable references when linking
	with MSVCRT.LIB.
	
	
	All modules and static libraries within an application should use the same
	compile options (/ML, /MT, or /MD) and link to the library cooresponding to the
	selected option. Compiling or linking with two or more of the LIBC, LIBCMT,
	MSVCRT libraries will cause LNK2005 "symbol" already defined in "object" errors.
	If you are getting these errors, make sure all .OBJ files (including static
	libraries) are built with the same /Mx option.
	
	Some possible consequences of not following the above recommendation are:
	
	- Linking code compiled with an explicit or implicit /ML to the LIBCMT.LIB or
	  MSVCRT.LIB can cause unresolved externals on static C Run-Time data objects
	  such as _errno.
	
	- Linking code compiled with /MT or /MD with the library LIBC causes unresolved
	  externals on _beginthread(), _beginthreadex(), _endthread(), and/or
	  _endthreadex(). LIBC is not multi-threaded, so it does not contain these
	  run-time functions. This later case is very common in Visual C++ versions 2.x
	  and 4.0, because MFC is now multi-threaded. For more information, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q126646 PRB: Error Msg: LNK2001 on __beginthreadex and __endthreadex
	
	- When compiling with /MD, a reference to "var1" in your source becomes a
	  reference "__imp__var1" in the .OBJ file because all C Run-Time is now held
	  in a DLL. If you try to link with the static libraries LIBC or LIBCMT, you
	  will get an unresolved external on __imp__var1. If you try to link with
	  MSVCRT.LIB when compiling without /MD, you may not always get an unresolved
	  external, but you are likely to have other problems.
	
	Additional query words: link.exe link cl.exe cl
	
	======================================================================
	Keywords          : kbCompiler kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : WINNT:2.0,2.1,4.0,5.0;
	Issue type        : kbinfo
	
	=============================================================================
	
