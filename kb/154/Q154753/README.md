---
layout: page
title: "Q154753: INFO: What Are the C/C++ Libraries My Program Would Link With?"
permalink: /kb/154/Q154753/
---

## Q154753: INFO: What Are the C/C++ Libraries My Program Would Link With?

{% raw %}

	Article: Q154753
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbGenInfo kbLangCPP kbVC420 kbVC500 kbVC600 kbArtTypeINF
	Last Modified: 28-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the default libraries LIBC[D].LIB, LIBCMT[D].LIB,
	LIBCI[D].LIB, LIBCIMT[D].LIB, LIBCP[D].LIB, LIBCPMT[D].LIB, MSVCRT[D].LIB,
	MSVCIRT[D].LIB, and MSVCPRT[D].LIB that a program will link with when built
	using Visual C++.
	
	MORE INFORMATION
	================
	
	When you build a release (or debug) version of your project in Visual C++, one
	of the basic C Runtime libraries (LIBC[D].LIB, LIBCMT[D].LIB, and MSVCRT[D].LIB)
	is linked by default, depending on the compiler option you choose
	(single-threaded <ML[d]>, multithreaded <MT[d]>, or multithreaded
	DLL<MD[d]>). A library from the Standard C++ Library or one from the old
	iostream library may also be linked depending on the headers you use in your
	code. For example, consider the following cases:
	
	Case 1: Sample program test1.cpp
	--------------------------------
	
	  // test1.cpp
	  void main()
	  {
	  }
	
	- If you build test.cpp using the /ML (or /MLd, for a debug build) compiler
	  option, your program will link with LIBC.LIB (or LIBCD.LIB, for debug build),
	  in addition to other libraries.
	
	- If you build test.cpp using the /MT (or /MTd, for a debug build) compiler
	  option, your program will link with LIBCMT.LIB (or LIBCMTD.LIB, for debug
	  build), in addition to other libraries.
	
	- If you build test.cpp using the /MD (or /MDd, for a debug build)compiler
	  option, your program will link with MSVCRT.LIB (or MSVCRTD.LIB, for debug
	  build), in addition to other libraries. In this case, your program will be
	  dependent on MSVCRT.DLL (or MSVCRTD.DLL for debug build).
	
	Case 2: Sample program test2.cpp
	--------------------------------
	
	     // test2.cpp
	     #include <iostream>
	     void main()
	     {
	     }
	
	- If you build test.cpp using the /ML (or /MLd, for a debug build) compiler
	  option, your program will link with LIBC.LIB (or LIBCD.LIB, for debug build)
	  and LIBCP.LIB (or LIBCPD.LIB, for debug build), in addition to other
	  libraries.
	
	- If you build test.cpp using the /MT (or /MTd, for a debug build) compiler
	  option, your program will link with LIBCMT.LIB (or LIBCMTD.LIB, for debug
	  build) and LIBCPMT.LIB (or LIBCPMTD.LIB, for debug build), in addition to
	  other libraries.
	
	- If you build test.cpp using the /MD (or /MDd, for a debug build) compiler
	  option, your program will link with MSVCRT.LIB (or MSVCRTD.LIB, for debug
	  build) and MSVCPRT.LIB (or MSVCPRTD.LIB, for debug build), in addition to
	  other libraries. For Visual C++ 6.0, your program will be dependent on
	  MSVCRT.DLL and MSVCP60.DLL (or MSVCRTD.DLL and MSVCP60D.DLL for debug build).
	  For Visual C++ 5.0, your program will be dependent on MSVCRT.DLL and
	  MSVCP50.DLL (or MSVCRTD.DLL and MSVCP50D.DLL for debug build). For Visual C++
	  4.2, your program will be dependent on MSVCRT.DLL (or MSVCRTD.DLL for debug
	  build) and MSVCPRT.LIB (or MSVCPRTD.LIB, for debug build).
	
	Case 3: Sample program test3.cpp
	--------------------------------
	
	  // test.cpp
	  #include <iostream.h>
	  void main()
	  {
	  }
	
	- If you build test.cpp using the /ML (or /MLd, for a debug build) compiler
	  option, your program will link with LIBC.LIB (or LIBCD.LIB, for debug build)
	  and LIBCI.LIB (or LIBCID.LIB, for debug build), in addition to other
	  libraries.
	
	- If you build test.cpp using the /MT (or /MTd, for a debug build) compiler
	  option, your program will link with LIBCMT.LIB (or LIBCMTD.LIB, for debug
	  build) and LIBCIMT.LIB (or LIBCIMTD.LIB, for debug build), in addition to
	  other libraries.
	
	- If you build test.cpp using the /MD (or /MDd, for a debug build) compiler
	  option, your program will link with MSVCRT.LIB (or MSVCRTD.LIB, for debug
	  build) and MSVCIRT.LIB (or MSVCIRTD.LIB, for debug build) in addition to
	  other libraries. In this case, your program will be dependent on MSVCRT.DLL
	  (or MSVCRTD.DLL for debug build) and MSVCIRT.DLL (or MSVCIRTD.DLL for debug
	  build).
	
	Headers determine whether the Standard C++ libraries, old iostream libraries, or
	neither will be linked. Compiler options (/ML[d], /MT[d], /MD[d]) determine
	which version of the libraries single-threaded, multithreaded, or multithreaded
	DLL is to be linked by default.
	
	NOTE: It may seem that headers without the ".h" extension are Standard C++
	headers and that headers with the ".h" extension are C Runtime headers or old
	iostream headers. This is not true. As explained below, the files
	<useoldio.h> and <use_ansi.h> determine the libraries your
	application will link with.
	
	Actually, there are two header files, <useoldio.h> and <use_ansi.h>,
	that contain #pragmas. The #pragmas force either the old iostream library or the
	Standard C++ library to be linked in by default.
	
	The header file <useoldio.h> contains #pragma statements, which force the
	old iostream library to be linked in. All old iostream headers include
	<useoldio.h>. So, if you include any old iostream header in your
	application, the old iostream library will be linked by default. The following
	table lists all the header files that include <useoldio.h>.
	
	  Old iostream Headers
	  --------------------
	
	  FSTREAM.H   IOMANIP.H
	  IOS.H       IOSTREAM.H
	  ISTREAM.H   OSTREAM.H
	  STDIOSTR.H  STREAMB.H
	  STRSTREA.H
	
	The header file <use_ansi.h> contains #pragma statements that force the
	Standard C++ Library to be linked in. All Standard C++ Headers include
	<use_ansi.h>. So if you include any Standard C++ header in your
	application, the Standard C++ library will be linked by default. The following
	table lists all the header files that include <use_ansi.h>.
	
	  Standard C++ Headers
	  ------------------------------------------------------
	
	  ALGORITHM    BITSET     COMPLEX    DEQUE
	  FSTREAM    FUNCTIONAL   IOMANIP    IOS
	  IOSFWD      IOSTREAM    ISTREAM    ITERATOR
	  LIMITS      LIST        LOCALE     MAP
	  MEMORY      NUMERIC     OSTREAM    QUEUE
	  SET         SSTREAM     STACK      STDEXCEPT
	  STREAMBUF   STRING      STRSTREAM  TYPEINFO
	  UTILITY     VALARRAY    VECTOR     XIOSBASE
	  XLOCALE     XLOCINFO    XLOCMON    XLOCNUM
	  XLOCTIME    XMEMORY     XSTRING    XTREE
	  XUTILITY    YMATH.H
	
	You cannot mix calls to the old iostream library and the new Standard C++ Library
	in Visual C++ 4.2.
	
	                     Summary Table
	
	------------------------------------------------------------------
	| Compile   Old        New IOStream   Libraries                  |
	| Option    IOStream   or STL         Linked With                |
	|================================================================|
	| /ML       No         No             LIBC.LIB                   |
	|----------------------------------------------------------------|
	| /MLd      No         No             LIBCD.LIB                  |
	|----------------------------------------------------------------|
	| /MT       No         No             LIBCMT.LIB                 |
	|----------------------------------------------------------------|
	| /MTd      No         No             LIBCMTD.LIB                |
	|----------------------------------------------------------------|
	| /MD       No         No             MSVCRT.LIB                 |
	|----------------------------------------------------------------|
	| /MDd      No         No             MSVCRTD.LIB                |
	|----------------------------------------------------------------|
	| /ML       No         Yes            LIBC.LIB,    LIBCP.LIB     |
	|----------------------------------------------------------------|
	| /MLd      No         Yes            LIBCD.LIB,   LIBCPD.LIB    |
	|----------------------------------------------------------------|
	| /MT       No         Yes            LIBCMT.LIB,  LIBCPMT.LIB   |
	|----------------------------------------------------------------|
	| /MTd      No         Yes            LIBCMTD.LIB, LIBCPMTD.LIB  |
	|----------------------------------------------------------------|
	| /MD       No         Yes            MSVCRT.LIB,  MSVCPRT.LIB   |
	|----------------------------------------------------------------|
	| /MDd      No         Yes            MSVCRTD.LIB, MSVCPRTD.LIB  |
	|----------------------------------------------------------------|
	| /ML       Yes        No             LIBC.LIB,    LIBCI.LIB     |
	|----------------------------------------------------------------|
	| /MLd      Yes        No             LIBCD.LIB,   LIBCID.LIB    |
	|----------------------------------------------------------------|
	| /MT       Yes        No             LIBCMT.LIB,  LIBCIMT.LIB   |
	|----------------------------------------------------------------|
	| /MTd      Yes        No             LIBCMTD.LIB, LIBCIMTD.LIB  |
	|----------------------------------------------------------------|
	| /MD       Yes        No             MSVCRT.LIB,  MSVCIRT.LIB   |
	|----------------------------------------------------------------|
	| /MDd      Yes        No             MSVCRTD.LIB, MSVCIRTD.LIB  |
	------------------------------------------------------------------
	
	         Summary Table for CRT DLLs Used
	---------------------------------------------------
	| Import Library   DLLs Used        DLLs Used     |
	| Linked With      (VC 5.0|6.0)         (VC 4.2)  |
	|=================================================|
	| MSVCRT.LIB       MSVCRT.DLL       MSVCRT.DLL    |
	|-------------------------------------------------|
	| MSVCRTD.LIB      MSVCRTD.DLL      MSVCRTD.DLL   |
	|-------------------------------------------------|
	| MSVCPRT.LIB      MSVCP5(5|6)0.DLL               |
	|-------------------------------------------------|
	| MSVCPRTD.LIB     MSVCP5(5|6)0D.DLL              |
	|-------------------------------------------------|
	| MSVCIRT.LIB      MSVCIRT.DLL      MSVCIRT.DLL   |
	|-------------------------------------------------|
	| MSVCIRTD.LIB     MSVCIRTD.DLL     MSVCIRTD.DLL  |
	---------------------------------------------------
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q154419 INFO: Standard C++ Library Frequently Asked Questions
	
	Additional query words: MSVCRT.DLL MSVCIRT.DLL MSVCPRT.LIB LIBCI.LIB LIBCIMT.LIB LIBCP.LIB LIBCPMT.LIB
	
	======================================================================
	Keywords          : kbCompiler kbGenInfo kbLangCPP kbVC420 kbVC500 kbVC600 kbArtTypeINF 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.2,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
