---
layout: page
title: "Q90294: Using Large Memory Model, Microsoft C/C++, &amp; Windows 3.1"
permalink: /kb/090/Q90294/
---

## Q90294: Using Large Memory Model, Microsoft C/C++, &amp; Windows 3.1

{% raw %}

	Article: Q90294
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	In Windows version 3.0, using the large memory model with Microsoft C version 6.0
	is not recommended. For more information on the problems that occur when using
	the large memory model under Windows 3.0, query this knowledge base on the
	following words:
	
	  large and model and protected
	
	Windows version 3.1 and the Microsoft C/C++ version 7.0 compiler have resolved
	most of these problems and make the large memory model much more suitable for
	developing applications under Windows 3.1.
	
	MORE INFORMATION
	================
	
	There are three main problems when using the large memory model under Windows:
	
	1. Large model applications can have multiple data segments (this is always the
	  case when compiling with Microsoft C 6.0). In Windows 3.0, these extra
	  segments are loaded as FIXED and page-locked. Having a large amount of FIXED
	  page-locked memory results in a serious degradation of the memory manager's
	  performance. FIXED memory is allocated from the bottom of the global heap,
	  which means it normally lies in conventional memory (below 1 MB), which is
	  needed by the Windows loader when it loads a new module into memory. For more
	  information on this topic, query this knowledge base on the following words:
	
	  using and memory and below and megabyte
	
	  This problem has been corrected in Windows 3.1. In Windows 3.1, an
	  application's code and data segments are always loaded as MOVEABLE,
	  regardless of the segment attributes specified in the application's
	  definition (.DEF) file. A DLL's code and data segments are loaded exactly as
	  they are specified in the DLL's .DEF file.
	
	2. Under both Windows 3.0 and Windows 3.1, only one instance of an application
	  with multiple data segments can be run at one time. This is because the
	  Windows loader can't fix-up multiple instances of a far pointer because code
	  is shared among all instances of an application.
	
	  In most cases, this problem may be resolved by using the /Gx and /Gt compile
	  options with the Microsoft C/C++ 7.0 compiler. The /Gx option causes the
	  compiler to force static data into the default data segment, which results in
	  the application having only one data segment. Note, however, that this works
	  only if the application's static data, string literals, stack, and heap all
	  fit into a 64K segment.
	
	  The /Gt switch specifies the size a static object must be to be allocated its
	  own data segment. When trying to create a single data segment, this threshold
	  value should be large enough to ensure that no data objects are allocated
	  outside of the default data segment. If the /Gt option is not specified, the
	  data threshold will be 32767.
	
	3. The final problem with using large model under both Windows 3.0 and Windows
	  3.1 is the performance degradation that occurs when an application uses far
	  pointers to access its data.
	
	  When running under the protected mode of the Intel 286, 386, and 486
	  processors, a far address is a combination of a selector and an offset. A
	  selector is essentially an index into an array called a descriptor table. A
	  descriptor is an 8-byte value that contains information about the segment,
	  such as its base address, size, read/write privileges, and so forth.
	
	  Whenever a far variable is referenced in protected mode, the processor must
	  load the descriptor into one of the segment registers' descriptor cache and
	  mark the descriptor as being accessed. This means that a reference to a far
	  variable requires at least two reads from and one write to memory just to
	  obtain the variable's linear address.
	
	  Adding this delay to the time needed for performing far pointer arithmetic
	  amounts to a significant loss of performance when compared to the medium
	  model, which uses near pointers for data. One method to increase the
	  performance of a large model application is to explicitly declare commonly
	  used global or static variables as being NEAR, which causes the compiler to
	  allocate the variable in the default data segment, and to use a near pointer
	  when referencing the variable.
	
	Conclusion
	----------
	
	Because Windows 3.1 and Microsoft C/C++ 7.0 have resolved most of the problems
	related to use of the large memory model, developing application for Windows 3.1
	with the large memory model is much more acceptable than it was under Windows
	3.0 and Microsoft C 6.0.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
