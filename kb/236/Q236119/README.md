---
layout: page
title: "Q236119: FIX: Optimization Causes Code Error In Conditional Statement"
permalink: /kb/236/Q236119/
---

## Q236119: FIX: Optimization Causes Code Error In Conditional Statement

{% raw %}

	Article: Q236119
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbVC500bug kbVC600bug kbDSupport kbGrpDSVCCompiler kbNoUpdate kbgrpdsvc
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The optimizer may generate incorrect code for an if statement that contains
	identical expressions in both conditional statements.
	
	CAUSE
	=====
	
	The optimizer makes a mistake when trying to move common sub-expressions to a
	single location.
	
	RESOLUTION
	==========
	
	There are three potential ways to work around this bug:
	
	1. Turn off global optimization for that function.
	
	2. Make the function inline.
	
	3. Move the common expression before the if block.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the problem and resolutions 1 and 3.
	
	  // compiler options: cl /Og
	
	  #include <iostream>
	
	  static long llll = 0;
	
	  double dTry1(double d) {
	   
	     if (d < 0.0) {
	          llll++;
	          return(0.0);
	     } else {
	          llll++;
	          return(100.0);
	     }
	  }
	
	  #pragma optimize("g",off)
	  double dTry2(double d) {
	
	     if (d < 0.0) {
	          llll++;
	          return(0.0);
	     } else {
	          llll++;
	          return(100.0);
	     }
	  }
	  #pragma optimize("",on)
	
	  double dTry3(double d) {
	
	     llll++;
	     if (d < 0.0)
	        return(0.0);
	     else
	        return(100.0);
	  }
	
	  void main(){
	     using namespace std;
	     cout << "Result with Optimizer: " << dTry1(100.0) <<endl;
	     cout << "Result without Optimizer: " << dTry2(100.0) <<endl;
	     cout << "Result with moved sub-expression: " << dTry3(100.0) <<endl;
	
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCodeGen kbVC500bug kbVC600bug kbDSupport kbGrpDSVCCompiler kbNoUpdate kbgrpdsvc 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
