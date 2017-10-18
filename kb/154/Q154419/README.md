---
layout: page
title: "Q154419: INFO: Standard C++ Library Frequently Asked Questions"
permalink: kb/154/Q154419/
---

## Q154419: INFO: Standard C++ Library Frequently Asked Questions

	Article: Q154419
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC500 kbVC600 kbDSupportkbfaq
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article presents a list of frequently asked questions (FAQs) regarding the
	Standard C++ libraries and the answers to those questions. For additional
	information regarding the Standard C++ Libraries, refer to the ANSII Standard
	Specification and the MSDN Library.
	
	MORE INFORMATION
	================
	
	Standard C++ Libraries Frequently Asked Questions
	-------------------------------------------------
	
	Q1: What does the Standard C++ library contain?
	
	A1: The Standard C++ library provides an extensible framework and contains
	components for language support, diagnostics, general utilities, strings,
	locales, standard template library (containers, iterators, algorithms, and
	numerics), and input/output.
	
	The Standard C++ library can be divided into the following categories:
	
	1. Standard Template Library (STL) components provide a C++ program with access
	  to a subset of the most widely-used algorithms and data structures. STL
	  headers can be grouped into three major organizing concepts:
	
	   - Containers: template classes that support common ways to organize data,
	     such as <vector>, <list>, <deque>, <stack>,
	     <queue>, <set>, and <map>.
	
	   - Algorithms: template functions for performing common operations on
	     sequences of objects, such as <functional>, <algorithm>, and
	     <numeric>.
	
	   - Iterators: the glue that pastes algorithms and containers together, such
	     as <utility>, <iterator>, and <memory>.
	
	2. Input/Output includes components for forward declarations of iostreams
	  (<iosfwd>), predefined iostreams objects (<iostream>), base
	  iostreams classes (<ios>), stream buffering (<streambuf>), stream
	  formatting and manipulators (<iosmanip>, <istream>,
	  <ostream>), string streams (<sstream>), and file streams
	  (<fstream>).
	
	3. Other Standard C++ headers include:
	
	   - Language Support: components for common type definitions used throughout
	     the library (<cstddef>), characteristics of the predefined types
	     (<limits>, <cfloat>, <climits>), functions supporting
	     start and termination of a C++ program (<cstdlib>), support for
	     dynamic memory management (<new>), support for dynamic type
	     identification (<typeinfo>), support for exception processing
	     (<exception>), and other runtime support (<cstdarg>,
	     <ctime>, <csetlmp>, <csignal>).
	
	   - Diagnostics: components for reporting several kinds of exceptional
	     conditions (<stdexcept>),documenting program assertions
	     (<cassert>), and a global variable for error number codes
	     (<cerrno>).
	
	   - Strings: components for string classes (<string>) and
	     null-terminated sequence utilities (<cctype>, <cwctype>,
	     <cwchar>).
	
	   - Localization: components that C++ programs may use to encapsulate cultural
	     differences. The locale facility includes internationalization support for
	     character classification and string collation, numeric, monetary, and
	     date/time formatting and parsing, and message retrieval (<locale>,
	     <clocale>).
	
	Q2: What is the difference between C-Runtime library and Standard C++ library?
	What libraries will the Runtime library compiler options such as /ML, /MT, /MD,
	/MLd, /MTd, and /MDd include?
	
	A2: Visual C++ 5.0 and later include the following Libraries in addition to the
	Microsoft Foundation Classes (MFC) libraries:
	
	- Basic C-Runtime library.
	
	- Standard C++ library.
	
	- Old iostream library.
	
	     |--------------------------------|---------------------------|
	     | Library types and              |    Basic C Runtime        |
	     | related compiler switches      |        library            |
	     |--------------------------------|---------------------------|
	     | Single-threaded (ML)           |    LIBC.lib               |
	     | Multithreaded (MT)             |    LIBCMT.lib             |
	     | Multithreaded DLL version (MD) |    MSVCRT.lib (import     |
	     |                                |    library for            |
	     |                                |    MSVCRT.dll)            |
	     | Debug single-threaded (MLd)    |    LIBCD.lib              |
	     | Debug multithreaded (MTd)      |    LIBCMTD.lib            |
	     | Debug multithreaded DLL (MDd)  |    MSVCRTD.lib (import    |
	     |                                |    library for            |
	     |                                |    MSVCRTD.dll)           |
	     |------------------------------------------------------------|
	
	     |--------------------------------|---------------------------|
	     | Library types and              |      Standard C++         |
	     | related compiler switches      |        library            |
	     |--------------------------------|---------------------------|
	     | Single-threaded (ML)           |    LIBCP.lib              |
	     | Multithreaded (MT)             |    LIBCPMT.lib            |
	     | Multithreaded DLL version (MD) |    MSVCPRT.lib*(Also uses |
	     |                                |             MSVCRT.dll)   |
	     | Debug single-threaded (MLd)    |    LIBCPD.lib             |
	     | Debug multithreaded (MTd)      |    LIBCPMTD.lib           |
	     | Debug multithreaded DLL (MDd)  |    MSVCPRTD.lib* (Also    |
	     |                                |        uses MSVCRTD.dll)  |
	     |------------------------------------------------------------|
	
	* NOTE: MSVCPRT.lib and MSVCPRTD.lib are static libraries and do not have any
	dynamic link libraries (DLLs) directly related to them. These libraries are also
	dependent on MSVCRT.dll and MSVCRTD.dll, respectively. If you have any
	applications that use MSVCPRT.lib or MSVCPRTD.lib and you use the "Ignore
	Default Library" (/NOD or NODEFAULTLIB) option, be sure to link MSVCPRT.lib (or
	MSVCPRTD.lib) and MSVCRT.lib (or MSVCRTD.lib) with your application. Otherwise,
	you will get linker errors (LNK2001: unresolved externals in MSVCPRT.lib or
	MSVCPRTD.lib) when linking your application.)
	
	     |--------------------------------|---------------------------|
	     | Library types and              |      Old iostream         |
	     | related compiler switches      |        library            |
	     |--------------------------------|---------------------------|
	     | Single-threaded (ML)           |    LIBCI.lib              |
	     | Multithreaded (MT)             |    LIBCIMT.lib            |
	     | Multithreaded DLL version (MD) |    MSVCIRT.lib (import    |
	     |                                |    library for            |
	     |                                |    MSVCIRT.dll)           |
	     | Debug single-threaded (MLd)    |    LIBCID.lib             |
	     | Debug multithreaded (MTd)      |    LIBCIMTD.lib           |
	     | Debug multithreaded DLL (MDd)  |    MSVCIRTD.lib (import   |
	     |                                |    library for            |
	     |                                |    MSVCIRTD.dll)          |
	     |------------------------------------------------------------|
	
	In Visual C++ 5.0 and later, there are certain default libraries that your
	program will link with. When you build a release version of your project, one of
	the basic C-Runtime Libraries (LIBC.lib, LIBCMT.lib, or MSVCRT.lib) is linked by
	default, depending on the compiler option you choose (single-threaded
	<ML[d]>, multithreaded <MT[d]>, or DLL<ML[d]>). Depending on
	the headers you use in your code, a library from the Standard C++ library or one
	from the old iostream library may also be linked.
	
	For example, if you specify the /ML (single-thread version) compiler option and
	include <iostream>, a Standard C++ library header, the libraries LIBC.lib
	and LIBCP.lib are linked with your application by default. If you specify the
	/ML (single-thread version) compiler option and include <iostream.h>, an
	old iostream header, the libraries LIBC.lib and LIBCI.lib are linked with your
	application by default.
	
	Headers determine whether the Standard C++ Libraries and old iostream Libraries
	will be linked. Compiler options (/ML[d], /MT[d], /MD[d]) determine which
	version of the libraries (single-threaded, multithreaded, or DLL) is to be
	linked by default.
	
	NOTE: It may seem that headers without the ".h" extension are Standard C++
	headers and ones with the ".h" extension are C-Runtime headers or old iostream
	headers. This is not true. As explained below, the files <useoldio.h> and
	<use_ansi.h> determine the libraries with which your application will
	link.
	
	Actually, there are two header files, <useoldio.h> and <use_ansi.h>,
	that contain #pragmas. The #pragmas force either the old iostream library or the
	Standard C++ library to be linked in by default.
	
	The header file <useoldio.h> contains #pragma statements that force the old
	iostream library to be linked in. All old iostream headers include
	<useoldio.h>: If you include any old iostream header in your application,
	the old iostream library will be linked by default.
	
	     |-------------------------|
	     |  Old iostream headers   |
	     |-------------------------|
	     |                         |
	     | FSTREAM.H  | IOMANIP.H  |
	     | IOS.H      | IOSTREAM.H |
	     | ISTREAM.H  | OSTREAM.H  |
	     | STDIOSTR.H | STREAMB.H  |
	     | STRSTREA.H |            |
	     |-------------------------|
	
	The header file <use_ansi.h> contains #pragma statements that force the
	Standard C++ library to be linked in. All Standard C++ headers include
	<use_ansi.h>: if you include any Standard C++ header in your application,
	the Standard C++ library will be linked by default.
	
	     |-------------------------------------------------|
	     |             Standard C++ Headers                |
	     |-------------------------------------------------|
	     | ALGORITHM | BITSET    | COMPLEX    | DEQUE      |
	     | EXCEPTION | FSTREAM   | FUNCTIONAL | IOMANIP    |
	     | IOS       | IOSFWD    | IOSTREAM   | ISTREAM    |
	     | ITERATOR  | LIMITS    | LIST       | LOCALE     |
	     | MAP       | MEMORY    | NUMERIC    | OSTREAM    |
	     | QUEUE     | SET       | SSTREAM    | STACK      |
	     | STDEXCEPT | STREAMBUF | STRING     | STRSTREAM  |
	     | TYPEINFO  | UTILITY   | VALARRAY   | VECTOR     |
	     |-------------------------------------------------|
	
	You cannot mix calls to the old iostream library and the new Standard C++
	library.
	
	Q3: How do I retain the old iostream functionality if I port my project from an
	earlier version of Visual C++?
	
	A3: If you want to retain the old iostream library, include one or more of the
	old iostream header files in your code. Do not use the new Standard C++ headers.
	You cannot mix calls to the old iostream library and the new Standard C++
	library.
	
	Q4: How do I make the Standard C++ Libraries the default libraries for my
	application?
	
	A4: If you want to make the Standard C++ Libraries the default, include one or
	more of the new Standard C++ headers. Remember, you cannot mix calls to the old
	iostream and the new Standard C++ library. Existing libraries (static or dynamic
	link) that use old iostream functions will have to be modified to use Standard
	C++ library iostream functions.
	
	Q5: I want to use Standard C++ Libraries in a Microsoft Foundation Classes (MFC)
	application. Will this cause any conflicts with the C-Runtime Libraries?
	
	A5: No. MFC does not use any C-Runtime functions that will conflict with the
	Standard C++ Libraries.
	
	Q6: Why do I get error "error C2065: 'cout' : undeclared identifier" even though
	I have included <iostream>?
	
	A6: Standard C++ library is implemented in its own namespace "std". Make sure to
	add the statement
	
	  using namespace std;
	
	in the beginning of your program or to qualify each Standard C++ library
	identifier with namespace std, for example, std::cout.
	
	Q7: Why am I getting "compiler error C2371: 'identifier' redefinition; different
	basic types"?
	
	A7: Mixing Standard C++ headers and old iostream headers will cause this error,
	even if they are included in different source files. The following are the
	different headers:
	
	     |-------------------------|
	     |  Old iostream Headers   |
	     |-------------------------|
	     | FSTREAM.H  | IOMANIP.H  |
	     | IOS.H      | IOSTREAM.H |
	     | ISTREAM.H  | OSTREAM.H  |
	     | STDIOSTR.H | STREAMB.H  |
	     | STRSTREA.H |            |
	     |-------------------------|
	
		  
	     |-------------------------------------------------|
	     |             Standard C++ Headers                |
	     |-------------------------------------------------|
	     | ALGORITHM | BITSET    | COMPLEX    | DEQUE      |
	     | EXCEPTION | FSTREAM   | FUNCTIONAL | IOMANIP    |
	     | IOS       | IOSFWD    | IOSTREAM   | ISTREAM    |
	     | ITERATOR  | LIMITS    | LIST       | LOCALE     |
	     | MAP       | MEMORY    | NUMERIC    | OSTREAM    |
	     | QUEUE     | SET       | SSTREAM    | STACK      |
	     | STDEXCEPT | STREAMBUF | STRING     | STRSTREAM  |
	     | TYPEINFO  | UTILITY   | VALARRAY   | VECTOR     |
	     |-------------------------------------------------|
	
	Q8: I have a project that was built with the "Ignore Default Libraries" option
	(/NOD or /NODEFAULTLIB). With Visual C++ 5.0 or later, I am getting linker error
	"LNK2001: unresolved external symbol 'symbol' ;" on all iostream function calls.
	What has changed?
	
	A8: The iostream functions have been removed from the C-Runtime library.
	
	If you are using the old iostream functions, you must add an additional library
	as follows: LIBCI.lib (single-threaded <ML>), LIBCIMT.lib (multithreaded
	<MT>), or MSVCIRT.lib (multithreaded dll <MD>).
	
	If you are using the new iostream functions included with the Standard C++
	library, you must add an additional library as follows: LIBCP.lib
	(single-threaded <ML>), LIBCPMT.lib (multithreaded <MT>), or
	MSVCPRT.lib (multithreaded dll <MD>).
	
	Do not mix different versions of the libraries. For example, if you are using the
	single-threaded version of the C-Runtime library, you must also use the
	single-threaded version of the old iostream library or Standard C++ library.
	
	You cannot mix calls to the old iostream library functions and the new Standard
	C++ library iostream functions.
	
	Q9: I am getting compiler warnings C4786 and/or C4788. None of the symbols in my
	program is anywhere near 255 characters in length. What is causing this?
	
	A9: C4786/C4788 is issued when a symbol's name exceeds 255 characters in length.
	This often happens with template class, and STL uses template class
	extensively.
	
	Ignoring this warning is usually safe. Use a #pragma warning (disable: 4786,4788)
	to suppress the messages.
	
	Q10: I am getting compiler warning "C4530: C++ exception handler used, but unwind
	semantics are not enabled. Specify -GX." What does this mean?
	
	A10: Programs that use the Standard C++ library must be compiled with C++
	exception handling enabled. C++ exception handling can be enabled by:
	
	- Selecting the Enable exception handling option in the C++ Language Category
	  of the C/C++ tab in the Project Settings dialog box.
	
	-or-
	
	- Using the /GX compiler switch.
	
	Q11: I am getting compiler error C2146, followed by C2065, and finally C2143, all
	pointing to the same line in my source. What does this mean?
	
	A11: This sequence of errors can be caused by the following type of construct:
	
	  vector<int, allocator<int>>iV;
	
	The problem is caused by the consecutive ">>" at the end of the
	declaration. The solution is to put a space between two characters, so the
	construct becomes:
	
	  vector<int, allocator<int> > iV;
	
	This is consistent with the proposed ANSII specification.
	
	Additional query words: STL STL.H allocator vector deque list map multimap set multiset queue stack priority_queue
	
	======================================================================
	Keywords          : kbVC500 kbVC600 kbDSupport kbfaq
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
