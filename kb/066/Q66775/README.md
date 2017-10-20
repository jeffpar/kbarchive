---
layout: page
title: "Q66775: PRB: L2029/L2001 Unsized Array Declaration at File Scope &#91;utilit"
permalink: /kb/066/Q66775/
---

## Q66775: PRB: L2029/L2001 Unsized Array Declaration at File Scope &#91;utilit

{% raw %}

	Article: Q66775
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,5.1,5.1a,6.0,6.0a,6.0ax,7.0
	Operating System(s): 
	Keyword(s): kbVC100 kbVC150 kbVC200 kbVC500 kbVC600
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Linker (LINK.EXE), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	   - Microsoft C for MS-DOS, versions 5.1, 5.1a, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following messages.
	
	  With Microsoft C/C++ 16-bit compilers:
	
	  L2029: unresolved external
	
	  With Microsoft C/C++ 32-bit compilers:
	
	  LNK2001: unresolved external symbol
	
	CAUSE
	=====
	
	The application declares an unsized array at file scope, and does not contain
	another declaration at file scope that specifies the size for the array.
	
	RESOLUTION
	==========
	
	Modify the source code of one of the modules to declare the array with its
	correct size at file scope.
	
	MORE INFORMATION
	================
	
	Because an unsized array declaration at file scope is considered external, the C
	compiler cannot determine whether or not the size is omitted intentionally, and
	the compiler does not generate an error message.
	
	The following sample code demonstrates this situation:
	
	Sample Code
	-----------
	
	  int Array[];
	
	  void main(void)
	  {
	     printf("%d.\n", Array);
	  }
	
	To address this situation, create another source file that declares Array to have
	a size (for example, "int Array[2]"), and compile and link the two modules.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC100 kbVC150 kbVC200 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch kbLINK100 kbVCNET
	Version           : :1.0,1.5,2.0,4.0,5.0,5.1,5.1a,6.0,6.0a,6.0ax,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
