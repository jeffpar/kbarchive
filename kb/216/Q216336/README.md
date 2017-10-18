---
layout: page
title: "Q216336: BUG: ARM Compiler Generates Bad Code for Structure Assignment"
permalink: kb/216/Q216336/
---

## Q216336: BUG: ARM Compiler Generates Bad Code for Structure Assignment

	Article: Q216336
	Product(s): Microsoft C Compiler
	Version(s): N\A:2.11; WINDOWS:
	Operating System(s): 
	Keyword(s): kbHWARM kbOSWinCE210 kbOSWinCE211 kbDSupport kbGrpDSETK
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE 2.10 Enhancement Pack for Windows CE Embedded Toolkit for Visual C++ 5.0, on platform(s):
	   - the hardware: StrongArm Processor 
	- Microsoft Windows CE Platform Builder, version 2.11, on platform(s):
	   - the hardware: StrongArm Processor 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ARM compiler for the products listed at the beginning of this article may
	generate incorrect code when you use a structure assignment construct. This
	problem may occur with or without optimizations enabled.
	
	This problem does not occur when you build ARM programs by using the Platform
	Builder version 2.11 Visual Development Environment.
	
	RESOLUTION
	==========
	
	To work around this problem, manually copy the structures by using a memory copy
	routine or algorithm.
	
	In Platform Builder, this problem only affects modules that are compiled in the
	platform build procedure. The included operating system source code has been
	validated with the supplied compiler; however, code that has been added or
	modified by a developer to adapt the operating system may encounter this
	problem. If the code that experiences the problem is in the ISV layer of the
	Microsoft Windows CE operating system model, use the Visual Development
	Environment to build the code instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code sample generates incorrect code when it is compiled by using
	the ARM compiler without optimizations:
	
	  typedef struct { 
	     int c [ 36 ]; 
	  } myStruct;
	
	  void main()
	  {
	  	myStruct A, B;
	  	A = B;
	  }
	
	Additional query words: kbWinCE210 kbWinCE211 kbARM
	
	======================================================================
	Keywords          : kbHWARM kbOSWinCE210 kbOSWinCE211 kbDSupport kbGrpDSETK 
	Technology        : kbAudDeveloper kbWinCESearch kbWinCEEnh210ETKVC500
	Version           : N\A:2.11; WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
