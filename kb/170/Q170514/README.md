---
layout: page
title: "Q170514: FIX: Bad Codegen with /Og and FP Mult in Class with Virtual Dtor"
permalink: /kb/170/Q170514/
---

## Q170514: FIX: Bad Codegen with /Og and FP Mult in Class with Virtual Dtor

{% raw %}

	Article: Q170514
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbcode kbVC500bug kbVC600fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ 5.0 compiler may generate incorrect instructions when it
	encounters floating-point multiplication in a member of a class that has a
	virtual destructor.
	
	RESOLUTION
	==========
	
	Use one of the following four workarounds:
	
	- Use /Op.
	
	- Do not use /Og. Note that /O1, /O2, and /Ox are aggregate optimization
	  switches that include /Og.
	
	- Use the optimize pragma around the class member to disable the /Og
	  optimization or to turn on the /Op optimization.
	
	- Make the destructor non-virtual. This may not be an option if the given class
	  is derived from a class that has a virtual destructor in a library that you
	  cannot change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ 5.0sp3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	     // Compile options needed to reproduce the bug: /Og
	     // Compile options needed to work around the bug: /Og /Op
	
	     #include <stdio.h>
	     #include <math.h>
	
	     struct A {
	
	         double    m_X;
	         double    m_Y;
	
	     };
	
	     typedef double rg23[2][3];
	
	     struct  B
	     {
	
	         rg23 m;
	         B(double rotn = 0);
	         void func(double *px, double *py) const;
	         virtual ~B(){}
	
	     };
	
	     B::B(double rotn)
	     {
	
	         double cosa = cos(rotn);
	         double sina = sin(rotn);
	
	         m[0][0] =
	         m[1][1] = cosa;
	         m[0][1] = -sina;
	         m[1][0] = sina;
	         m[0][2] =
	         m[1][2] = 0;
	
	     }
	
	     void B::func(double *px, double *py) const
	     {
	         double x = *px;
	         double y = *py;
	         *px = x * m[0][0] + y * m[0][1] + m[0][2];
	         *py = x * m[1][0] + y * m[1][1] + m[1][2];
	     }
	
	     int main () {
	
	         A a;
	         a.m_X=1.0;
	         a.m_Y=2.0;
	
	         printf("Values in: x=%lf; y=%lf\n", a.m_X, a.m_Y);
	
	         B ct;
	         ct.func(&a.m_X, &a.m_Y);
	
	         printf("Values out: x=%lf; y=%lf\n", a.m_X, a.m_Y);
	
	         return 0;
	
	     }
	
	Expected Output
	---------------
	
	  Values in: x=1.000000; y=2.000000
	  Values out: x=1.000000; y=2.000000
	
	Actual Output
	-------------
	
	  Values in: x=1.000000; y=2.000000
	  Values out: x=1.000000; y=0.000000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
