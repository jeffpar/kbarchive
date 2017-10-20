---
layout: page
title: "Q100832: INFO: Calling Conventions the 32-Bit Compiler Supports"
permalink: /kb/100/Q100832/
---

## Q100832: INFO: Calling Conventions the 32-Bit Compiler Supports

{% raw %}

	Article: Q100832
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC600
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	Visual C++,32-bit Edition, supports three calling conventions: C (_cdecl),
	standard (_stdcall), and fastcall (_fastcall). The compiler does not support the
	Pascal calling convention (_pascal) provided by Microsoft compilers for MS-DOS
	and 16-bit Windows.
	
	The following table summarizes the calling conventions:
	
	                         _cdecl         _stdcall       _fastcall
	
	  -------------------------------------------------------------------
	  Arguments              Pushed R to L  Pushed R to L  Note 3
	  Stack cleaned up by    Caller         Called         Called
	  Naming convention      Prepend "_"    Note 1         Note 2
	
	  Note 1: The _stdcall calling convention decorates each function name by
	  prepending an underscore character (as the _cdecl convention does) and
	  appending an at sign "@" and the decimal representation of the number of
	  bytes of stack space required. Each argument is widened to a multiple of four
	  bytes.
	
	  Note 2: The _fastcall calling convention decorates each function name by
	  prepending an at sign "@" and appending an at sign and the decimal
	  representation of the number of bytes of stack space required. Each argument
	  is widened to a multiple of four bytes.
	
	  Note 3: The first two function arguments that require four or fewer bytes are
	  placed into registers. The caller pushes the remainder of the parameters onto
	  the stack from right to left. This behavior may change in future versions.
	
	The default calling convention is _cdecl. If an application declares a function
	that accepts a variable number of arguments with the _fastcall or _stdcall
	calling convention, the compiler uses the _cdecl calling convention for that
	function.
	
	MORE INFORMATION
	================
	
	The following code examples illustrate the code generated in the calling
	function and in the called function to support the C calling convention:
	
	     int _cdecl CFunc(int a, int b);
	
	        calling function    called function
	        -------------------------------------------
	
	        push   b            _CFunc PROC NEAR
	        push   a                    .
	        call   _CFunc               .
	        add    esp,8                .
	         .                         RET
	         .                  _CFunc ENDP
	         .
	
	     int _cdecl CVarFunc(int a, ...);
	
	        calling function    called function
	        -------------------------------------------
	
	        push   ...          _CVarFunc PROC NEAR
	        push   a                       .
	        call   _CVarFunc               .
	        add    esp,4+...               .
	         .                            RET
	         .                  _CVarFunc ENDP
	         .
	
	The following code example illustrates the code generated in the calling function
	and in the called function to support the standard calling convention:
	
	     int _stdcall StdFunc(int a, int b);
	
	        calling function    called function
	        -------------------------------------------
	
	        push   b            _StdFunc@8 PROC NEAR
	        push   a                        .
	        call   _StdFunc@8               .
	         .                              .
	         .                             RET  8
	         .                  _StdFunc@8 ENDP
	
	The following code example illustrates the code generated in the calling function
	and in the called function to support the fastcall calling convention:
	
	     int _fastcall FastFunc(int a, int b);
	
	        calling function    called function
	        -------------------------------------------
	
	        mov edx, b          @FastFunc@8 PROC NEAR
	        mov ecx, a                       .
	        call @FastFunc@8                 .
	         .                               .
	         .                              RET 8
	         .                  @FastFunc@8 ENDP
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :1.0,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
