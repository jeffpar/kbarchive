---
layout: page
title: "Q114875: BUG: Bad Code for &#95;&#95;fastcall Function Calling an Intrinsic"
permalink: /kb/114/Q114875/
---

## Q114875: BUG: Bad Code for &#95;&#95;fastcall Function Calling an Intrinsic

{% raw %}

	Article: Q114875
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 22-JUL-2001
	
	1.00 1.50
	WINDOWS
	kbtool kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ for Windows* use 1699, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates incorrect code to call a function that uses the register
	calling convention when one of the parameters to the function is the return
	value of another function. The register calling convention can be specified by
	using the __fastcall keyword or by compiling with the /Gr compiler switch. The
	generated code may crash or behave unpredictably.
	
	CAUSE
	=====
	
	The problem is triggered by the embedded function call being optimized to use an
	intrinsic form of the function. The code generated to pass the parameter to the
	__fastcall function is incorrect. The intrinsic form of functions are used when
	the /Oi compiler switch is used or when the function is specified as intrinsic
	by a #pragma intrinsic() statement.
	
	RESOLUTION
	==========
	
	To avoid the problem, do one of the following:
	
	- Use the /f compiler switch instead of the /f- compiler switch.
	
	  -or-
	
	- Change the function from register calling convention to another calling
	  convention.
	
	  -or-
	
	- Force the compiler not to use an intrinsic form of the embedded function by
	  using a #pragma function () statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in C/C++ for MS-DOS versions 8.0, and
	8.0c. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	This is not a problem in Microsoft C/C++ 32-bit compiler, version 8.0, included
	in Visual C++ 32-bit Edition, version 1.0.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /f- /Oi /Gs
	  */ 
	
	  // The program incorrectly prints 0, 1 instead of 0, 0.
	
	  #include <stdio.h>
	  #include <string.h>
	
	  // #pragma function (strcmp)
	
	  int __fastcall func (int nIndex)
	  {
	      return nIndex;
	  }
	
	  int main (void)
	  {
	      printf ("%d\n", (strcmp("free", "alloc") == 0) );
	      printf ("%d\n", func(strcmp("free", "alloc") == 0) );
	      return 0;
	  }
	
	Additional query words: 1.00 1.50 8.00 8.00c
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5
	
	=============================================================================
	

{% endraw %}
