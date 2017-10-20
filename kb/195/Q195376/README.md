---
layout: page
title: "Q195376: FIX: Incorrect Code Generated with /Og and /Oa or /Ow"
permalink: /kb/195/Q195376/
---

## Q195376: FIX: Incorrect Code Generated with /Og and /Oa or /Ow

{% raw %}

	Article: Q195376
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCompiler kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler might generate incorrect code when building with /Og (Global
	Optimizations) and /Oa (Assume No Aliasing) or /Og and /Ow (Assume
	Cross-function Aliasing).
	
	RESOLUTION
	==========
	
	Turn off /Oa and /Ow to work around the bug.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Please refer to Help for more information about the compiler options /Og, /Oa,
	and /Ow.
	
	The following sample demonstrates the bug. In this case, the problem appears to
	be related to the final attempt to access an array in a function when that
	access involves doubling the variable used to index it.
	
	Sample Code
	-----------
	
	     //compiler options : cl /Og /Oa (or /Ow)
	     #include <stdio.h>
	     typedef struct C
	     {
	       float x,y,z;
	       long  index;
	       }C;
	
	     float gdIn[3]={1.0,2.0,3.0};
	
	     void init(C *gc)
	     {
	       float fd[3]={1.0,2.0,3.0};
	       long   i = gc->index;
	       float *pfd = gdIn;
	       gc->x = *(pfd+0);
	       gc->y = *(pfd+i);
	       gc->z = *(pfd+i*2);
	     }
	
	     int main()
	     {
	       C c;
	       c.index = 1;
	       init(&c);
	       printf("Should be 3.0, is %f \n", c.z);
	       return 0;
	     }
	
	The program output should be: 3.0.
	
	The program output is: 2.000000.
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
