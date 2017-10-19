---
layout: page
title: "Q216720: FIX: Bitwise OR for Bool&amp; Types Causes Error When Optimized"
permalink: /kb/216/Q216720/
---

## Q216720: FIX: Bitwise OR for Bool&amp; Types Causes Error When Optimized

	Article: Q216720
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a bitwise OR operation on a bool reference and compiling with
	optimizations that include /Og (global optimizations), the resulting executable
	may generate an access violation.
	
	CAUSE
	=====
	
	The current implementation of a bool is an 8-bit value. The OR operation with
	/Og on a bool reference operates on a 32-bit value.
	
	RESOLUTION
	==========
	
	Do not use bitwise operators with bool references. Use bool values instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Compile with /Og
	
	  // Workaround: replace the bool& with bool
	  void func(bool& boolref, float a, float b)
	  {
	  	boolref |= (a == b);
	  }
	
	  void main()
	  {
	  	bool b1 = true;
	
	  	float f1 = 2.0;
	  	float f2 = 2.0;
	
	  	func(b1,f1,f2);
	
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
